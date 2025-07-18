import * as Connect from "./connect"
import { CharacterControllerSystem } from "./systems/character-controller-system"
import configs from "./utils/configs"

const LocalHostname = "hubs.localhost"
const AlphaHostname = "gb.eduverse.com"

const SearchParams = new URLSearchParams(window.location.search)

// Hosting overrides can be applied through URL parameters with values `local` or `alpha` or by virtue of the hosting domain

const IsLocalHost = window.location.host === `${LocalHostname}:8080`
const IsLocalContainerHost = window.location.host === LocalHostname
const IsAlphaHost = window.location.host === AlphaHostname

console.log(`AVN IsLocalHost:${IsLocalHost} IsLocalContainerHost:${IsLocalContainerHost} IsAlphaHost:${IsAlphaHost}`)

const hubsHostDirective = SearchParams.get("hubsHost") ?? ((IsLocalHost || IsLocalContainerHost) ? "local" : IsAlphaHost ? "alpha" : undefined)
const gwebHostDirective = SearchParams.get("gwebHost") ?? ((IsLocalHost || IsLocalContainerHost) ? "local" : IsAlphaHost ? "alpha" : undefined)
const restHostDirective = SearchParams.get("restHost") ?? ((IsLocalHost || IsLocalContainerHost) ? "local" : IsAlphaHost ? "alpha" : undefined)

// Where is Hubs being hosted? (client and reticulum)
const HubsHost = hubsHostDirective === "local"
    ? LocalHostname
    : hubsHostDirective === "alpha" 
        ? AlphaHostname
        : window.location.hostname
console.log(`AVN HubsHost: ${HubsHost}`)
// Override config setting
configs["RETICULUM_SERVER"] = HubsHost

// Where is gRPC-web hosted? (ConnectServices)
const GwebHost = gwebHostDirective === "local" 
    ? "http://127.0.0.1:8282"
    : gwebHostDirective === "alpha" 
        ? `https://gweb-alpha.avncloud.com`
        : `https://gweb.avncloud.com`
console.log(`AVN GwebHost: ${GwebHost}`)

// Where are the REST services hosted? (legacy assets)
const RestHost = restHostDirective === "local" 
    ? "http://localhost:8181"
    : restHostDirective === "alpha" 
        ? `https://rest-alpha.avncloud.com`
        : `https://rest.avncloud.com`
console.log(`AVN RestHost: ${RestHost}`)

// Where is the short URL service hosted? (invites and hall passes)
const ShortHost = restHostDirective === "local" 
    ? "http://localhost:8181"
    : restHostDirective === "alpha" 
        ? `https://alpha.edvr.se`
        : `https://edvr.se`
console.log(`AVN ShortHost: ${ShortHost}`)

// Feature overrides
const showNavbar = (SearchParams.get("showNavbar") || "true") === "true"
const showSidebar = (SearchParams.get("showSidebar") || "true") === "true"
const showRoomEntryFlow = (SearchParams.get("showRoomEntryFlow") || "true") === "true"

class AVNBridge {

    private _assetDomain = RestHost
    private _accessToken: string | undefined
    private _roomInfo: Connect.PB.RoomInfo | undefined
    // Activity is only set when the room represents one
    private _roomActivity: Connect.PB.Activity | undefined
    private _teachLessonContext: Connect.PB.LessonContext | undefined
    private _learnLessonContext: Connect.PB.LessonContext | undefined
    private _dimensionInfo: Connect.PB.DimensionInfo | undefined
    private _dimensionConnection: Connect.PB.ConnectionInstance | undefined
    private _dimensionId: string = ""
    private _dimensionAuth: Connect.PB.Authorization | undefined = undefined
    private _cachedClientId: string | undefined

    private _avnfsAltServers: string[] | undefined

    private ConnectServices = new Connect.ConnectServices(GwebHost)

    constructor() {
        // Async init
        this.initServiceWorker()

        window.addEventListener('message', event => {
            const assetId = event?.data?.assetId
            if(assetId) {
                console.log(`Post message request for assetId: ${assetId}`)
                this.tryChangeScene(`https://scene.link/${assetId}`)
            } else {
                console.warn(`Unexpected post message`, event)
            }
        })
    }

    async initServiceWorker() {
        if ("serviceWorker" in navigator) {
            try {
                navigator.serviceWorker.addEventListener("message", (event) => {
                    console.log("AVNSW info", event.data)
                })
                console.info("Registering AVNSW...")
                const registration = await navigator.serviceWorker.register("/hub.service.js", { scope: "/" })
                if (registration.installing) {
                    console.log("AVNSW installing")
                } else if (registration.waiting) {
                    console.log("AVNSW waiting")
                } else if (registration.active) {
                    console.log("AVNSW active")
                }
            } catch (error) {
                console.error("AVNSW register failed", error)
            }
        } else {
            console.error("Service workers not available")
        }
    
    }

    async getClientId(): Promise<string> {
        if(this._cachedClientId) {
            return this._cachedClientId
        }
        this._cachedClientId = localStorage.getItem("AVN::ClientId") || undefined
        try {
            if (this._cachedClientId) { 
                console.info(`AVN: Using client ID '${this._cachedClientId}'`)
            } else {
                // Request new credentials from Connect
                const result = await this.ConnectServices.Clients.createClientCredentials({})
                this._cachedClientId = result.clientCredentials?.clientId
                if(this._cachedClientId) {
                    console.info(`AVN: Got new client ID '${this._cachedClientId}'`)
                    localStorage.setItem("AVN::ClientId", this._cachedClientId)
                }
            }
        } catch (error: unknown) {
            console.warn(`AVN: error getting client ID: ${error instanceof Error ? error.message : "Unknown error"}`)
        }
        if(this._cachedClientId) {
            return this._cachedClientId
        } else {
            throw new Error("Failed to get new client ID from Connect")
        }
    }

    get dimensionId(): string {
        return this._dimensionId
    }
    
    // Mutations trigger event `avn-dimension-info-changed`
    get dimensionInfo() {
        return this._dimensionInfo        
    }

    // Mutations trigger event `avn-room-info-changed`
    get roomInfo() {
        return this._roomInfo        
    }
        
    // Mutations trigger event `avn-room-activity-changed`
    get roomActivity() {
        return this._roomActivity
    }
        
    // Mutations trigger event `avn-dimension-connection-changed`
    get dimensionConnection() {
        return this._dimensionConnection        
    }

    // Mutations trigger event `avn-dimension-status-changed`
    private _lastDimensionStatus: Connect.PB.DimensionStatus | undefined
    get dimensionStatus() : Connect.PB.DimensionStatus | undefined {
        return this._lastDimensionStatus
    }

    // Mutations trigger event `avn-allow-back-changed`
    get allowBack() {
        // Global permission
        return this._dimensionConnection?.permissions?.allowBack 
            // Focus sessesion permissions (teacher can always go back)
            && (!!this._teachLessonContext || !this._learnLessonContext?.focus?.backLock)
    }

    // Mutations trigger event `avn-allow-explore-changed`
    get allowExplore() {
        // Global permission
        return this._dimensionConnection?.permissions?.allowExplore 
            // Focus sessesion permissions (teacher can always explore)
            && (!!this._teachLessonContext || !this._learnLessonContext?.focus?.exploreLock)
    }

    // Mutations trigger event `avn-allow-navigation-changed`
    get allowNavigation() {
        // Global permission
        return this._dimensionConnection?.permissions?.allowNavigation 
            // Focus sessesion permissions (teacher can always navigate)
            && (!!this._teachLessonContext || !this._learnLessonContext?.focus?.navigationLock)
    }

    // Helper accessors

    get assetId(): string {
        return this._roomInfo?.assetId || "homeroom"
    }

    get assetParameters(): { [key: string]: string } | undefined {
        return this._roomInfo?.assetParameters
    }

    get assetName() {
        return this._roomInfo?.name
    }

    get passId(): string | undefined {
        return this._dimensionInfo?.passId
    }

    get shortDomain(): string {
        return ShortHost
    }

    // Authentication

    public async authenticate(accessToken: string): Promise<boolean> {
        this._accessToken = accessToken
        await this.abortStreamIfActive()
        // If this is a solo dimension it was created anonymously and the user must be the owner (mostly true)
        // so a replacement dimension should be created with the full auth permissions
        if (this._dimensionInfo?.accessLimits?.dimensionCapacity == 1) {
            console.log("AVN: dimension is solo, so it will be replaced")
            // Don't let this dimension be joined again, which can lead to hanging gRPC-web connections
            this._dimensionId = ""
            this._dimensionAuth = undefined
            // Give the connections time to unwind gracefully
            setTimeout(this.startNewSession, 1_000, this.passId, this.assetId)
        }
        return true
    }

    public startNewSession(passId : string | undefined = this.passId, assetId : string | undefined = this.assetId) {
        if (passId) {
            document.location.replace(`/?assetid=${assetId}&passid=${passId}`);
        } else {
            document.location.replace(`/?assetid=${assetId}`);
        }
    }

    public async deauthenticate(): Promise<void> {
        this._accessToken = undefined
        await this.abortStreamIfActive()
    }

    public get isAuthenticated(): boolean {
        return !!this._accessToken
    }

    public async isHealthy(): Promise<boolean> {
        try {
            const healthCheckResult = await this.ConnectServices.Health.check({})
            console.debug(`AVN: health check result: ${healthCheckResult.status}`)
            return healthCheckResult.status === Connect.PB.HealthCheckResponse_ServingStatus.SERVING
        } catch (error: unknown) {
            console.error(`AVN: health check exception`, error)
        }
        return false
    }

    public async getBrowsableChannels(): Promise<Connect.PB.Channel[]> {
        const result = await this.ConnectServices.Channels.getBrowsableChannels({ 
            auth: this._dimensionAuth,
            translate: { languageId: navigator.language },
        })
        return result.results
    }

    public async getProfilesForChannel(channelId: number): Promise<Connect.PB.Profile[]> {
        const result = await this.ConnectServices.Channels.getProfiles({ 
            auth: this._dimensionAuth, 
            entityIds: [channelId],
            tagFilters: [ 
                { condition: Connect.PB.TagFilterCondition.HAS_NONE_OF, tags: [ Connect.PB.TagId.NOT_BROWSABLE, Connect.PB.TagId.LESSON_PLAN, Connect.PB.TagId.SCENE_GUIDE ] },
            ],
            orderBy: [ { property: Connect.PB.EntityProperty.NAME, sortOrder: Connect.PB.SortOrder.ASC } ],
            pageSize: 512, // Use MAX_PAGE_SIZE until proper paging is implemented
            translate: { languageId: navigator.language },
        })
        return result.results
    }

    public async searchActivitiesForChannel(channelId: number, searchText: string): Promise<Connect.PB.Activity[]> {
        const result = await this.ConnectServices.Channels.getActivities({ 
            auth: this._dimensionAuth, 
            entityIds: [channelId], 
            textSearch: searchText ? { text: searchText } : undefined,
            tagFilters: [ 
                { condition: Connect.PB.TagFilterCondition.HAS_ANY_OF, tags: [ Connect.PB.TagId.SCENE ] },
                { condition: Connect.PB.TagFilterCondition.HAS_NONE_OF, tags: [ Connect.PB.TagId.NOT_BROWSABLE ] },
            ],
            orderBy: [ { property: Connect.PB.EntityProperty.NAME, sortOrder: Connect.PB.SortOrder.ASC } ],
            pageSize: 512, // Use MAX_PAGE_SIZE until proper paging is implemented
            iconSpec: new Connect.PB.TranscodeImageSpec({ maxSizePixels: 256 }),
            previewSpec: new Connect.PB.TranscodeImageSpec({ maxSizePixels: 512 }),
            translate: { languageId: navigator.language },
        })
        return result.results
    }

    public async getCategoriesForProfile(profileId: number): Promise<Connect.PB.Category[]> {
        const result = await this.ConnectServices.Profiles.getCategories({ 
            auth: this._dimensionAuth, 
            entityIds: [profileId], 
            tagFilters: [ 
                { condition: Connect.PB.TagFilterCondition.HAS_NONE_OF, tags: [ Connect.PB.TagId.NOT_BROWSABLE ] },
            ],
            orderBy: [ { property: Connect.PB.EntityProperty.NAME, sortOrder: Connect.PB.SortOrder.ASC } ],
            pageSize: 512, // Use MAX_PAGE_SIZE until proper paging is implemented
            translate: { languageId: navigator.language },
        })
        return result.results
    }

    public async getActivitiesForProfile(profileId: number): Promise<Connect.PB.Activity[]> {
        const result = await this.ConnectServices.Profiles.getActivities({ 
            auth: this._dimensionAuth, 
            entityIds: [profileId],
            tagFilters: [ 
                { condition: Connect.PB.TagFilterCondition.HAS_ANY_OF, tags: [ Connect.PB.TagId.SCENE ] },
                { condition: Connect.PB.TagFilterCondition.HAS_NONE_OF, tags: [ Connect.PB.TagId.NOT_BROWSABLE ] },
            ],
            orderBy: [ { property: Connect.PB.EntityProperty.NAME, sortOrder: Connect.PB.SortOrder.ASC } ],
            pageSize: 512, // Use MAX_PAGE_SIZE until proper paging is implemented
            iconSpec: new Connect.PB.TranscodeImageSpec({ maxSizePixels: 256 }),
            previewSpec: new Connect.PB.TranscodeImageSpec({ maxSizePixels: 512 }),
            translate: { languageId: navigator.language },
        })
        return result.results
    }

    public async getActivitiesForCategory(categoryId: number): Promise<Connect.PB.Activity[]> {
        const result = await this.ConnectServices.Categories.getActivities({ 
            auth: this._dimensionAuth, 
            entityIds: [categoryId],
            tagFilters: [ 
                { condition: Connect.PB.TagFilterCondition.HAS_ANY_OF, tags: [ Connect.PB.TagId.SCENE ] },
                { condition: Connect.PB.TagFilterCondition.HAS_NONE_OF, tags: [ Connect.PB.TagId.NOT_BROWSABLE ] },
            ],
            orderBy: [
                { property: Connect.PB.EntityProperty.NAME, sortOrder: Connect.PB.SortOrder.ASC },
            ],
            pageSize: 512, // Use MAX_PAGE_SIZE until proper paging is implemented
            iconSpec: new Connect.PB.TranscodeImageSpec({ maxSizePixels: 256 }),
            previewSpec: new Connect.PB.TranscodeImageSpec({ maxSizePixels: 512 }),
            translate: { languageId: navigator.language },
        })
        return result.results
    }

    public async getPass(passId: string): Promise<Connect.PB.Pass | undefined> {
        try {
            const getPassResult = await this.ConnectServices.Passes.getPass({ passId })
            return getPassResult.result
        } catch (e: unknown) {
            console.error(`AVN: failed to get pass '${passId}'`, e)
        }
        return undefined
    }

    public async createNewDimension(passId: string | undefined): Promise<boolean> {
        const auth = this._accessToken ? new Connect.PB.Authorization({ userJwt: this._accessToken }) : undefined
        const createDimensionResult = await this.ConnectServices.Dimensions.createDimension({
            client: new Connect.PB.ClientCredentials({ clientId: await this.getClientId() }),
            auth,
            preferredDomain: HubsHost,
            referrer: window.location.hostname,
            passId,
        })
        this._dimensionId = createDimensionResult.dimensionId
        this._dimensionAuth = new Connect.PB.Authorization({ dimensionId: this._dimensionId })
        return true
    }

    public async setDimensionFromRoomId(roomId: string): Promise<boolean> {
        try {
            const getRoomResult = await this.ConnectServices.Rooms.getRoom({ roomId })
            this._dimensionId = getRoomResult.roomInfo.dimensionId
            this._dimensionAuth = new Connect.PB.Authorization({ dimensionId: this._dimensionId })
            console.log(`AVN: matched dimension ID '${this._dimensionId}' for room`)
            return true
        } catch {
            console.error(`AVN: failed to match dimension`)
        }
        return false
    }

    async getUserOrganizationMembership(): Promise<Connect.PB.OrganizationMembership[]> {
        const credentials = this._dimensionConnection?.credentials
        const userId = this._dimensionConnection?.user?.userId
        if(credentials && userId) {
            const auth = new Connect.PB.Authorization({ credentials })
            const result = await this.ConnectServices.Users.getOrganizationMembership({ auth, userId })
            return result.memberships
        } else {
            console.warn("Failed to call getUserOrganizationMembership", credentials, userId)
        }
        return []
    }

    async getOrganization(organizationId: number): Promise<Connect.PB.Organization> {
        const credentials = this._dimensionConnection?.credentials
        const userId = this._dimensionConnection?.user?.userId
        if(credentials && userId) {
            const auth = new Connect.PB.Authorization({ credentials })
            return await this.ConnectServices.Organizations.getOrganization({ auth, entityId: organizationId })
        } else {
            throw new Error(`Not authenticated to get organization`)
        }
    }

    public async getUserOrganizations(): Promise<{organization: Connect.PB.Organization, role: Connect.PB.Role}[]> {
        const result = new Array<{organization: Connect.PB.Organization, role: Connect.PB.Role}>()
        const userOrgRoles = await this.getUserOrganizationMembership()
        for(let userOrgRole of userOrgRoles) {
            const role = await this.getRole(userOrgRole.roleId)
            const organization = await this.getOrganization(userOrgRole.organizationId)
            result.push({organization, role})
        }
        return result
    }

    // Roles are expect to remain fixed
    private _roleMap: Map<number, Connect.PB.Role> | undefined
    async getRole(roleId: number): Promise<Connect.PB.Role> {
        if(!this._roleMap) {
            const result = await this.ConnectServices.Roles.getRoles({})            
            this._roleMap = new Map<number, Connect.PB.Role>()
            for(let role of result.roles) {
                this._roleMap.set(role.roleId, role)
            }
        }
        return this._roleMap.get(roleId)!
    }

    async joinOrganization(joinCode: string): Promise<void> {
        const credentials = this._dimensionConnection?.credentials
        const userId = this._dimensionConnection?.user?.userId
        if(credentials && userId) {
            const auth = new Connect.PB.Authorization({ credentials })
            await this.ConnectServices.Organizations.joinOrganization({ auth, joinCode })
        } else {
            throw new Error(`Not authenticated to join organization`)
        }
    }

    private filterOutInternalPlanCodes(planCode:string) {
        return true//![""].includes(planCode)
    }

    public async getUserLicenses(): Promise<{licenseId: string, organization: Connect.PB.Organization | undefined, expires: Date, planCodes: string[]}[]> {
        const result = new Array<{licenseId: string, expires: Date, organization: Connect.PB.Organization | undefined, planCodes: string[]}>()
        const credentials = this._dimensionConnection?.credentials
        const userId = this._dimensionConnection?.user?.userId
        if(credentials && userId) {
            const auth = new Connect.PB.Authorization({ credentials })
            const userLicenses = await this.ConnectServices.Licenses.getUserLicenses({auth})
            for(let userLicense of userLicenses.licenses) {
                if(userLicense.licenseId && userLicense.expires) {
                    const planCodes = userLicense.planCodes.filter(this.filterOutInternalPlanCodes).sort()
                    if(userLicense.source.case === "organizationId") {
                        const organization = await this.getOrganization(userLicense.source.value)
                        result.push({licenseId: userLicense.licenseId, organization, expires: userLicense.expires.toDate(), planCodes })
                    } else if(userLicense.source.case === "userId") {
                        result.push({licenseId: userLicense.licenseId, expires: userLicense.expires.toDate(), organization: undefined, planCodes })
                    }
                }
            }
        } else {
            console.warn("Failed to call getUserOrganizationMembership", credentials, userId)
        }
        return result
    }


    // Controls the dimension stream and indicates that a stream is active
    private _streamAbortController: AbortController | null
    // It might not be necessary to hold a reference to the loop promise, but it makes the code clearer
    private _streamMessageHandlerPromise: Promise<void> | null

    private _dimensionRejoinTimeout = 1000
    private _lastRejoinTimeout: NodeJS.Timeout

    private _closeSceneTimeout: NodeJS.Timeout | undefined

    public async streamMessageHandler(
        abortController: AbortController,
        dimensionStreamIterator: AsyncIterator<Connect.PB.DimensionEvent, Connect.PB.DimensionEvent>,
        pendingMessage: IteratorResult<Connect.PB.DimensionEvent, Connect.PB.DimensionEvent> | undefined,
    ): Promise<void> {
        try {
            console.debug("AVN: message streaming handler begin")
            while (!abortController.signal.aborted) {
                const { done, value } = pendingMessage ?? await dimensionStreamIterator.next()
                pendingMessage = undefined
                if (done) {
                    console.info(`AVN: dimension message stream ended`)
                    break
                }
                if(value.status) {
                    if(this._lastDimensionStatus !== value.status) {
                        this._lastDimensionStatus = value.status
                        global.dispatchEvent(new Event("avn-dimension-status-changed"))
                    }
                    // CLOSE or OPEN is the only expected status after the initial OPEN
                    if (value.status.state === Connect.PB.OperationState.CLOSED) {
                        console.log(`Dimension was closed with reason '${value.status.detail}'`)
                        // The fake close might be cancelled if the session reopens
                        clearInterval(this._closeSceneTimeout)
                        this._closeSceneTimeout = setTimeout(() => {
                            // Fake the hubs closing until the API supports room closure
                            // @ts-ignore
                            document.querySelector("a-scene")?.emit("hub_closed")
                        }, 15000)
                    } else if(value.status.state !== Connect.PB.OperationState.OPEN) {
                        console.warn(`Unexpected dimension state change '${value.status.state}'`)
                    }
                }
                if(value.connection) {
                    this._dimensionConnection = value.connection
                    if(this._dimensionConnection.features) {
                        this._dimensionConnection.features.showNavbar &&= showNavbar
                        this._dimensionConnection.features.showSidebar &&= showSidebar
                        this._dimensionConnection.features.showRoomEntryFlow &&= showRoomEntryFlow
                    }
                    
                    console.info(`AVN: update dimension connection`, value.connection)
                    global.dispatchEvent(new Event("avn-dimension-connection-changed"))
                    global.dispatchEvent(new Event("avn-allow-back-changed"))
                    global.dispatchEvent(new Event("avn-allow-explore-changed"))
                    global.dispatchEvent(new Event("avn-allow-navigation-changed"))
                }
                if(value.info) {
                    this._dimensionInfo = value.info
                    console.info(`AVN: update dimension info`, value.info)
                    global.dispatchEvent(new Event("avn-dimension-info-changed"))
                }
                if(value.lesson) {
                    this._learnLessonContext = value.lesson
                    global.dispatchEvent(new Event("avn-allow-back-changed"))
                    global.dispatchEvent(new Event("avn-allow-explore-changed"))
                    global.dispatchEvent(new Event("avn-allow-navigation-changed"))
                    if (value.lesson) {
                        console.debug(`AVN: student lesson context set`, value.lesson)
                    } else {
                        console.debug(`AVN: student lesson context reset`)
                    }
                }
            }
            if (abortController.signal.aborted) {
                console.info(`AVN: dimension message stream aborted: ${abortController.signal.reason}`)
            }
        } catch (error: unknown) {
            console.warn(`AVN: exception in stream handler: ${error instanceof Error ? error.message : "Unknown error"}`)
        } finally {
            console.debug("AVN: message streaming handler end")
            clearTimeout(this._lastRejoinTimeout)
            this._learnLessonContext = undefined
            this._dimensionConnection = undefined
            this._dimensionInfo = undefined
            this._lastDimensionStatus = undefined
            global.dispatchEvent(new Event("avn-dimension-info-changed"))
            global.dispatchEvent(new Event("avn-dimension-connection-changed"))            
            global.dispatchEvent(new Event("avn-allow-back-changed"))
            global.dispatchEvent(new Event("avn-allow-explore-changed"))
            global.dispatchEvent(new Event("avn-allow-navigation-changed"))
            global.dispatchEvent(new Event("avn-dimension-status-changed"))
            this._lastRejoinTimeout = setTimeout(() => this.rejoinDimension(), this._dimensionRejoinTimeout)
        }
    }

    public async requestRejoin(): Promise<void> {
        clearTimeout(this._lastRejoinTimeout)
        await this.rejoinDimension()
    }

    async rejoinDimension(): Promise<void> {
        console.log("AVN: rejoining dimension...")
        const result = await this.joinDimension()
        if (result === Connect.PB.OperationState.OPEN) {
            this._dimensionRejoinTimeout = 1000
        } else {
            // Try again with an exponential backoff
            this._dimensionRejoinTimeout *= 2
            clearTimeout(this._lastRejoinTimeout)
            this._lastRejoinTimeout = setTimeout(() => this.rejoinDimension(), this._dimensionRejoinTimeout)
        }
    }

    async abortStreamIfActive() {
        // Is there an open stream?
        if (this._streamAbortController) {
            console.log(`Aborting active stream...`)
            this._streamAbortController.abort("STREAM_REPLACEMENT")
            this._streamAbortController = null
            console.log(`Stream aborted`)
        }
    }

    public async joinDimension(): Promise<Connect.PB.OperationState> {
        try {
            if (!this.dimensionId) {
                console.error("No dimension ID has been set")
                return Connect.PB.OperationState.UNSPECIFIED
            }
            await this.abortStreamIfActive()
            const abortController = new AbortController()
            const auth = this._accessToken ? new Connect.PB.Authorization({ userJwt: this._accessToken }) : undefined
            console.info(`Joining dimension '${this.dimensionId}'...`)
            const dimensionStream = this.ConnectServices.Dimensions.joinDimension({
                    client: new Connect.PB.ClientCredentials({ clientId: await this.getClientId() }),
                    auth,
                    dimensionId: this.dimensionId,
                },
                { signal: abortController.signal }
            )
            console.info(`Connected to dimension '${this.dimensionId}'`)
            console.info(`Constructing stream iterator`)
            const dimensionStreamIterator: AsyncIterator<Connect.PB.DimensionEvent, Connect.PB.DimensionEvent> = dimensionStream[Symbol.asyncIterator]()
            console.info(`Waiting for first message...`)
            const firstMessage = await dimensionStreamIterator.next()
            if (firstMessage.done) {
                console.error(`AVN: dimension stream unexpectedly terminated`)
                abortController.abort("STREAM_OPEN_FAILED")
                return Connect.PB.OperationState.UNSPECIFIED
            }
            // First message must say that the dimension is OPEN
            if (firstMessage.value.status === undefined || firstMessage.value.status.state !== Connect.PB.OperationState.OPEN) {
                console.error(`AVN: failed to join dimension '${this.dimensionId}'`, firstMessage.value)
                abortController.abort("STREAM_STATE_UNEXPECTED")
                return firstMessage.value.status?.state ?? Connect.PB.OperationState.UNSPECIFIED
            }
            this._lastDimensionStatus = firstMessage.value.status
            global.dispatchEvent(new Event("avn-dimension-status-changed"))
            // Clear any pending instructions queued due to the session closing
            clearInterval(this._closeSceneTimeout)
            console.log(`AVN: Joined dimension '${this.dimensionId}'`)
            // Record abort controller
            this._streamAbortController = abortController
            // Start message loop
            this._streamMessageHandlerPromise = this.streamMessageHandler(abortController, dimensionStreamIterator, firstMessage)

            return Connect.PB.OperationState.OPEN
        } catch (error: unknown) {
            console.warn(`AVN: exception joining dimension: ${error instanceof Error ? error.message : "Unknown error"}`)
        }
        return Connect.PB.OperationState.UNSPECIFIED
    }

    public async enterRoom(roomId: string, sessionId: string): Promise<void> {
        const enterRoomResult = await this.ConnectServices.Rooms.enterRoom({
            credentials: this._dimensionConnection?.credentials,
            roomId,
            sessionId
        })
        this._roomInfo = enterRoomResult.roomInfo
        const activityId = enterRoomResult.roomInfo.activityId
        if(activityId) {
            this._roomActivity = await this.ConnectServices.Activities.getActivity({ 
                auth: this._dimensionAuth, 
                entityId: activityId,
                translate: { languageId: navigator.language, format: Connect.PB.TranslationFormat.HTML },
            })
        } else {
            this._roomActivity = undefined
        }
        global.dispatchEvent(new Event("avn-room-info-changed"))
        global.dispatchEvent(new Event("avn-room-activity-changed"))
    }

    public goHome() {
        this.tryChangeScene("https://scene.link/homeroom")
    }

    // Guiding

    public async setLessonFocus(position: THREE.Vector3 | undefined): Promise<boolean> {
        const newContext = new Connect.PB.LessonContext({
            focus: {
                roomId: this._roomInfo?.roomId,
                assetId: this._roomInfo?.assetId,
                position,
                backLock: false,
                exploreLock: true,
                roomLock: false,
            }
        })
        console.log("AVN: setting lesson context", newContext)
        const result = await this.ConnectServices.Dimensions.setLessonContext({
            credentials: this._dimensionConnection?.credentials,
            dimensionId: this._dimensionId,
            context: newContext,
        })
        if (result.state == Connect.PB.OperationState.SUCCESS) {
            this._teachLessonContext = newContext
            global.dispatchEvent(new Event("avn-allow-back-changed"))
            global.dispatchEvent(new Event("avn-allow-explore-changed"))
            global.dispatchEvent(new Event("avn-allow-navigation-changed"))
            return true
        }
        console.error("AVN: unexpected setLessonContext result", result)
        return false
    }

    public async resetLessonFocus(): Promise<boolean> {
        console.log("AVN: resetting lesson context")
        const result = await this.ConnectServices.Dimensions.setLessonContext({
            credentials: this._dimensionConnection?.credentials,
            dimensionId: this._dimensionId
        })
        if (result.state == Connect.PB.OperationState.SUCCESS) {
            this._teachLessonContext = undefined
            global.dispatchEvent(new Event("avn-allow-back-changed"))
            global.dispatchEvent(new Event("avn-allow-explore-changed"))
            global.dispatchEvent(new Event("avn-allow-navigation-changed"))
            return true
        }
        console.error("AVN: unexpected resetLessonFocus result", result)
        return false
    }

    get isGuiding() {
        return !!this._teachLessonContext
    }

    get learnLessonContext() {
        return this._learnLessonContext
    }

    // The prefix that indicates dimension-specific dynamic content
    get dynamicAssetPrefix() {
        return "https://scene.link";
    }

    // AVN data servers don't need CORS proxying
    get dataServerDomains() {
        return ["https://data.avncloud.com", "https://avnfs.com"];
    }

    get newSubscriptionLink() {
        const url = new URL("https://subscriptions.eduverse.com")
        if(this._accessToken) {
            url.searchParams.set("eduverse_token", this._accessToken)
        } else {
            console.warn("Unexpected blank access token when creating subscription link")
        }
        return url.toString()
    }
    
    get supportLink() {
        return "https://support.avantiseducation.com"
    }
    
    // Rooms

    // Used to add dimension to URLs for the legacy media browser to be resolved by the REST server
    transformRoomUrl(url: string) {
        return url.replace(this.dynamicAssetPrefix, `${this._assetDomain}/${this._dimensionId}`) + "#" + this._roomInfo?.assetId
    }

    async fetchRoomInfoForUrl(url: string) : Promise<Connect.PB.RoomInfo | undefined> {
        try {
            const openRoomResult = await this.ConnectServices.Rooms.openRoom({ dimensionId: this._dimensionId, url })
            return openRoomResult.roomInfo
        } catch (error: unknown) {
            console.error(`Error open room for URL '${url}' ${error instanceof Error ? error.message : "Unknown error"}`)
        }
        return undefined
    }

    // Media

    isAvnUrl(url: string) {        
        return url.startsWith(this.dynamicAssetPrefix) || url.startsWith(Connect.Avnfs.UrlPrefix)
    }

    async fetchMediaData(mediaUrl: string) {
        try {
            if(mediaUrl.startsWith(Connect.Avnfs.UrlPrefix)) {
                const { mediaType } = Connect.Avnfs.decodeUrl(new URL(mediaUrl))
                return {
                    "origin": mediaUrl,
                    "meta": {
                        "expected_content_type": mediaType,
                    }
                }
            } else {
                // LEGACY_MEDIA_LINKS
                console.info(`Resolving legacy '${mediaUrl}' through server`)
                const assetId = mediaUrl.split("/").pop()
                const resolveMediaResult = await this.ConnectServices.Rooms.resolveMedia({ dimensionId: this.dimensionId, assetId })
                return {
                    "origin": resolveMediaResult.assetUrl,
                    "meta": {
                        "tags": resolveMediaResult.tagIds,
                        "thumbnail": resolveMediaResult.thumbnailUrl,
                        "expected_content_type": resolveMediaResult.mimeType,
                    }
                }
            }
        } catch (error: unknown) {
            throw new Error(`Unexpected error resolving media '${mediaUrl}' ${error instanceof Error ? error.message : "Unknown Error"}`)
        }
    }

    // Best-effort scene change
    private _pendingSceneChange: Promise<void> | undefined = undefined
    public tryChangeScene(url: string) {
        if (!this._pendingSceneChange) {
            this._pendingSceneChange = this.asyncChangeScene(url)
        }
    }
    private async asyncChangeScene(url: string): Promise<void> {
        try {
            const openRoomResult = await this.ConnectServices.Rooms.openRoom({ dimensionId: this._dimensionId, url })
            const roomInfo = openRoomResult.roomInfo
            if (roomInfo) {
                console.log(`AVN: responding to request by changing scene to '${url}'`)
                const nextState = { hubId: roomInfo.roomId, newAssetId: roomInfo.assetId, oldAssetId: this.assetId, name: roomInfo.name, icon: roomInfo.iconUrl }
                // @ts-ignore
                await changeHub(nextState, true)
            } else {
                console.error("AVN: Failed to change hub scene");
            }

        } catch (error: unknown) {
            throw new Error(`AVN: Error changing scene: ${error instanceof Error ? error.message : "Unknown Error"}`)
        } finally {
            this._pendingSceneChange = undefined
        }
    }

    private async asyncChangeRoom(roomId: string): Promise<void> {
        try {
            const getRoomResult = await this.ConnectServices.Rooms.getRoom({ roomId })
            const roomInfo = getRoomResult.roomInfo
            if (roomInfo) {
                console.log(`AVN: responding to request by changing room to '${roomId}'`)
                const nextState = { hubId: roomInfo.roomId, newAssetId: roomInfo.assetId, oldAssetId: this.assetId, name: roomInfo.name, icon: roomInfo.iconUrl };
                // @ts-ignore
                await changeHub(nextState, true);
            } else {
                console.error("AVN: Failed to change hub room");
            }

        } catch (error: unknown) {
            throw new Error(`AVN: Error changing room: ${error instanceof Error ? error.message : "Unknown Error"}`)
        }
    }

    private _pendingFocusUpdate: Promise<void> | undefined = undefined
    private async asyncFocusUpdate(): Promise<void> {
        try {
            await this.setLessonFocus(undefined)
        } catch (error: unknown) {
            throw new Error(`Unexpected error updating focus: ${error instanceof Error ? error.message : "Unknown Error"}`)
        } finally {
            this._pendingFocusUpdate = undefined
        }
    }

    // Record the last focus instruction that was processed to avoid repeat counting or reverting to previous rooms
    private _lastProcessedFocus : Connect.PB.LessonFocus | undefined

    // Process AVN events that should happen in system space    
    public tick(characterController: CharacterControllerSystem) {
        if (this._teachLessonContext) {
            // Have we changed room since setting the focus?
            if (this._teachLessonContext.focus?.roomId !== this._roomInfo?.roomId) {
                // Change room focus if not already started
                if (!this._pendingFocusUpdate) {
                    this._pendingFocusUpdate = this.asyncFocusUpdate()
                }
            }
        } else {
            // Default to no tethering
            characterController.tether(null)
            // Has the first room loaded at least? (avoids conflicting instructions)
            if(this._roomInfo) {
                // Are there pending focus instructions?
                const focus = this._learnLessonContext?.focus
                if (focus != this._lastProcessedFocus) {
                    this._lastProcessedFocus = focus
                    // Has a focus been mandated?
                    if(focus) {
                        console.log(`Processing new focus to room '${focus.roomId}' with asset ID '${focus.assetId}'`)
                        // Are we in the right room already?
                        if (focus.roomId === this._roomInfo?.roomId) {
                            console.log(`New focus does not require a room change`)
                            // Tether to the focus position
                            //characterController.tether(this._learnLessonContext?.focus?.position)
                        } else {
                            console.log(`Changing room because focus room '${focus.roomId}' is not equal to current room '${this._roomInfo?.roomId}'`)
                            this.asyncChangeRoom(focus.roomId)
                        }
                    } else {
                        console.log(`Processing new focus reset`)
                    }
                }
            } else {
                //console.log(`Waiting to enter room before checking focus...`)
            }
        }
    }

    //TODO: Add "data" parameter
    async recordAction(actionId: string, sourceId: string) : Promise<void> {
        try {
            const client = new Connect.PB.ClientCredentials({ clientId: await this.getClientId() })
            await this.ConnectServices.Clients.recordAction({ client, actionId, sourceId, hostId: window.location.hostname })
        } catch (error: unknown) {
            throw new Error(`Error recording action '${actionId}' from '${sourceId}'`)
        }        
    }

    getFallbackAvatarUrl() : string {
        return "https://avnfs.com/rotiTbjX1xP7UbcxWaIoxGhiENxkf6gmhkuhFgCvirw?size=829504&type=model%2Fgltf-binary%3Bdisp%3Davatar&name=FallbackAvatar.glb"
    }

    applySessionPermissionOverrides(permissions: { voice_chat: boolean, text_chat: boolean, spawn_and_move_media: boolean }) {
        permissions["voice_chat"] = permissions["voice_chat"] && this._dimensionConnection?.permissions?.allowVoip || false
        permissions["text_chat"] = permissions["text_chat"] && this._dimensionConnection?.permissions?.allowText || false
        permissions["spawn_and_move_media"] = permissions["spawn_and_move_media"] && this._dimensionConnection?.permissions?.allowMoveMedia || false
    }

}

export const AVN = new AVNBridge()

// Useful for accessing AVN singleton in legacy Javascript contexts 
// where we don't want to include this file because it breaks the build for the admin pages
declare global { var AVNGlobal: AVNBridge }
global.AVNGlobal = AVN