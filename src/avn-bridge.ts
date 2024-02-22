import * as Connect from "./connect"
import { isLocalClient } from "./utils/phoenix-utils"
import { CharacterControllerSystem } from "./systems/character-controller-system"

import configs from "./utils/configs"
// Including this file pulls in unnessary additional support files, which can cause errors
//import { changeHub } from "./change-hub"

// Markdown utility class
import markdownit from "markdown-it"
import markdownitattrs from "markdown-it-attrs"
import markdownitcontainer from "markdown-it-container"
// @ts-ignore no type def
import markdownitsub from "markdown-it-sub"
// @ts-ignore no type def
import markdownitsup from "markdown-it-sup"
// @ts-ignore no type def
import markdownitbracketedspans from "markdown-it-bracketed-spans"
  
const PreferredDomain = (configs as any).RETICULUM_SERVER
console.log(`AVN: PreferredDomain: ${PreferredDomain}`)
const ConnectToAlphaBackend = PreferredDomain === "me.eduverse.com"
const ChannelPostfix = ConnectToAlphaBackend ? `-alpha` : ""
const ShortDomainPrefix = ConnectToAlphaBackend ? `alpha.` : ""

const LocalDevMode = isLocalClient()

// Record the original fetch function for possible interception
const { fetch: originalFetch } = window

class AVNBridge {

    private _assetDomain = LocalDevMode ? "https://localhost:8181" : `https://rest${ChannelPostfix}.avncloud.com`
    private _accessToken: string | undefined
    private _roomInfo: Connect.RoomInfo | undefined
    // Activity is only set when the room represents one
    private _roomActivity: Connect.Activity | undefined
    private _teachLessonContext: Connect.LessonContext | undefined
    private _learnLessonContext: Connect.LessonContext | undefined
    private _dimensionInfo: Connect.DimensionInfo | undefined
    private _dimensionConnection: Connect.ConnectionInstance | undefined
    private _dimensionId: string = ""
    private _dimensionAuth: Connect.Authorization | undefined = undefined
    private _cachedClientId: string | undefined

    private _avnfsAltServers: string[] | undefined

    private ConnectServices = new Connect.ConnectServices(LocalDevMode
        ? "http://127.0.0.1:8282"
        : `https://gweb${ChannelPostfix}.avncloud.com`)

    // Markdown utility renderer
    public MD : markdownit

    constructor() {
        this.MD = markdownit()
            .use(markdownitattrs, { allowedAttributes: ['id', 'class' ] })
            .use(markdownitbracketedspans)
            .use(markdownitcontainer, "block")
            .use(markdownitsub)
            .use(markdownitsup)
        // Rule to open links with target="_blank" (https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer)
        const defaultRender = this.MD.renderer.rules.link_open || function(tokens, idx, options, env, self) {
            return self.renderToken(tokens, idx, options)
        }
        this.MD.renderer.rules.link_open = function (tokens, idx, options, env, self) {
            const aIndex = tokens[idx].attrIndex('target')
            if (aIndex < 0) {
                tokens[idx].attrPush(['target', '_blank'])
            } else {
                const attrs = tokens[idx].attrs
                if(attrs) {
                    attrs[aIndex][1] = '_blank'
                }
            }
            return defaultRender(tokens, idx, options, env, self)
        }
        window.fetch = this.fetchOverride.bind(this)
    }

    async fetchOverride(input : RequestInfo | URL, init: RequestInit | undefined) {
        const url = input instanceof Request ? input.url : input.toString()
        if(url.startsWith(Connect.AvnfsUtils.UrlPrefix)) {
            // Download list of alt servers first time through
            if(this._avnfsAltServers === undefined) {
                console.log(`Checking for AVNFS alt servers...`)
                const result = await this.ConnectServices.Avnfs.getAltServers()
                this._avnfsAltServers = result.servers.map((server : Connect.AltServer) => server.host)
                console.log(`AVNFS alt servers`, this._avnfsAltServers)
            }
            if(this._avnfsAltServers) {
                for(let altServer of this._avnfsAltServers) {
                    const altUrl = url.replace(Connect.AvnfsUtils.Hostname, altServer)
                    try {
                        const fetchResult = await originalFetch(altUrl)
                        if(fetchResult.ok) {
                            return fetchResult
                        } else {
                            console.warn(`Error using AVNFS alt server '${altServer}'`, fetchResult.status, fetchResult.statusText)
                        }
                    } catch(e: unknown) {
                        console.warn(`Exception using AVNFS alt server '${altServer}'`, e)
                    }
                    // Blacklist this server to avoid wasting time in future
                    this._avnfsAltServers = this._avnfsAltServers.filter(server => server != altServer)
                    // Don't keep iterating over a collection that has changed
                    break
                }
            }
        }
        return await originalFetch(input, init)
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
    private _lastDimensionStatus: Connect.DimensionStatus | undefined
    get dimensionStatus() : Connect.DimensionStatus | undefined {
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

    get assetName() {
        return this._roomInfo?.name
    }

    get passId(): string | undefined {
        return this._dimensionInfo?.passId
    }

    get shortDomain(): string {
        return `https://${ShortDomainPrefix}edvr.se`
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
            return healthCheckResult.status === Connect.HealthCheckResponse_ServingStatus.SERVING
        } catch (error: unknown) {
            console.error(`AVN: health check exception`, error)
        }
        return false
    }

    public async getBrowsableChannels(): Promise<Connect.Channel[]> {
        const result = await this.ConnectServices.Channels.getBrowsableChannels({ auth: this._dimensionAuth })
        return result.results
    }

    public async getProfilesForChannel(channelId: number): Promise<Connect.Profile[]> {
        const result = await this.ConnectServices.Channels.getProfiles({ auth: this._dimensionAuth, channelId })
        return result.results
    }

    public async getCategoriesForProfile(profileId: number): Promise<Connect.Category[]> {
        const result = await this.ConnectServices.Profiles.getCategories({ auth: this._dimensionAuth, profileId })
        return result.results
    }

    public async getActivitiesForProfile(profileId: number): Promise<Connect.Activity[]> {
        const result = await this.ConnectServices.Profiles.getActivities({ auth: this._dimensionAuth, profileId })
        return result.results
    }

    public async getActivitiesForCategory(categoryId: number): Promise<Connect.Activity[]> {
        const result = await this.ConnectServices.Categories.getActivities({ auth: this._dimensionAuth, categoryId })
        return result.results
    }

    public async searchActivitiesForChannel(channelId: number, searchText: string): Promise<Connect.Activity[]> {
        const result = await this.ConnectServices.Activities.searchActivities({ auth: this._dimensionAuth, channelId, searchText })
        return result.results
    }

    public async getPass(passId: string): Promise<Connect.Pass | undefined> {
        try {
            const getPassResult = await this.ConnectServices.Passes.getPass({ passId })
            return getPassResult.result
        } catch (e: unknown) {
            console.error(`AVN: failed to get pass '${passId}'`, e)
        }
        return undefined
    }

    public async createNewDimension(passId: string | undefined): Promise<boolean> {
        const auth = this._accessToken ? new Connect.Authorization({ method: { case: "userJwt", value: this._accessToken } }) : undefined
        const createDimensionResult = await this.ConnectServices.Dimensions.createDimension({
            client: new Connect.ClientCredentials({ clientId: await this.getClientId() }),
            auth,
            preferredDomain: PreferredDomain,
            passId,
        })
        this._dimensionId = createDimensionResult.dimensionId
        this._dimensionAuth = new Connect.Authorization({ method: { case: "dimensionId", value: this._dimensionId } })
        return true
    }

    public async setDimensionFromRoomId(roomId: string): Promise<boolean> {
        try {
            const getRoomDimensionResult = await this.ConnectServices.Rooms.getRoomDimension({ roomId: roomId })
            this._dimensionId = getRoomDimensionResult.dimensionId
            this._dimensionAuth = new Connect.Authorization({ method: { case: "dimensionId", value: this._dimensionId } })
            console.log(`AVN: matched dimension ID '${this._dimensionId}' for room`)
            return true
        } catch {
            console.error(`AVN: failed to match dimension`)
        }
        return false
    }

    async getUserOrganizationMembership(): Promise<Connect.OrganizationMembership[]> {
        const credentials = this._dimensionConnection?.credentials
        const userId = this._dimensionConnection?.user?.userId
        if(credentials && userId) {
            const auth = new Connect.Authorization({ method: { case: "credentials", value: credentials } })
            const result = await this.ConnectServices.Users.getOrganizationMembership({ auth, userId })
            return result.memberships
        } else {
            console.warn("Failed to call getUserOrganizationMembership", credentials, userId)
        }
        return []
    }

    async getOrganization(organizationId: number): Promise<Connect.Organization> {
        const credentials = this._dimensionConnection?.credentials
        const userId = this._dimensionConnection?.user?.userId
        if(credentials && userId) {
            const auth = new Connect.Authorization({ method: { case: "credentials", value: credentials } })
            return await this.ConnectServices.Organizations.getOrganization({ auth, organizationId })
        } else {
            throw new Error(`Not authenticated to get organization`)
        }
    }

    public async getUserOrganizations(): Promise<{organization: Connect.Organization, role: Connect.Role}[]> {
        const result = new Array<{organization: Connect.Organization, role: Connect.Role}>()
        const userOrgRoles = await this.getUserOrganizationMembership()
        for(let userOrgRole of userOrgRoles) {
            const role = await this.getRole(userOrgRole.roleId)
            const organization = await this.getOrganization(userOrgRole.organizationId)
            result.push({organization, role})
        }
        return result
    }

    // Roles are expect to remain fixed
    private _roleMap: Map<number, Connect.Role> | undefined
    async getRole(roleId: number): Promise<Connect.Role> {
        if(!this._roleMap) {
            const result = await this.ConnectServices.Roles.getRoles({})            
            this._roleMap = new Map<number, Connect.Role>()
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
            const auth = new Connect.Authorization({ method: { case: "credentials", value: credentials } })
            await this.ConnectServices.Organizations.joinOrganization({ auth, joinCode })
        } else {
            throw new Error(`Not authenticated to join organization`)
        }
    }

    private filterOutInternalPlanCodes(planCode:string) {
        return true//![""].includes(planCode)
    }

    public async getUserLicenses(): Promise<{licenseId: string, organization: Connect.Organization | undefined, expires: Date, planCodes: string[]}[]> {
        const result = new Array<{licenseId: string, expires: Date, organization: Connect.Organization | undefined, planCodes: string[]}>()
        const credentials = this._dimensionConnection?.credentials
        const userId = this._dimensionConnection?.user?.userId
        if(credentials && userId) {
            const auth = new Connect.Authorization({ method: { case: "credentials", value: credentials } })
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
        dimensionStreamIterator: AsyncIterator<Connect.DimensionEvent, Connect.DimensionEvent>
    ): Promise<void> {
        try {
            console.debug("AVN: message streaming handler begin")
            while (!abortController.signal.aborted) {
                const { done, value } = await dimensionStreamIterator.next()
                if (done) {
                    console.info(`AVN: dimension message stream ended`)
                    break
                }
                switch (value.message.case) {
                    case "status":
                        if(this._lastDimensionStatus !== value.message.value) {
                            this._lastDimensionStatus = value.message.value
                            global.dispatchEvent(new Event("avn-dimension-status-changed"))
                        }
                        // CLOSE or OPEN is the only expected status after the initial OPEN
                        if (value.message.value.state === Connect.OperationState.CLOSED) {
                            console.log(`Dimension was closed with reason '${value.message.value.detail}'`)
                            // The fake close might be cancelled if the session reopens
                            clearInterval(this._closeSceneTimeout)
                            this._closeSceneTimeout = setTimeout(() => {
                                // Fake the hubs closing until the API supports room closure
                                // @ts-ignore
                                document.querySelector("a-scene")?.emit("hub_closed")
                            }, 15000)
                        } else if(value.message.value.state !== Connect.OperationState.OPEN) {
                            console.warn(`Unexpected dimension state change '${value.message.value.state}'`)
                        }
                        break
                    case "connection":
                        this._dimensionConnection = value.message.value
                        console.info(`AVN: update dimension connection`, value.message.value)
                        global.dispatchEvent(new Event("avn-dimension-connection-changed"))
                        global.dispatchEvent(new Event("avn-allow-back-changed"))
                        global.dispatchEvent(new Event("avn-allow-explore-changed"))
                        global.dispatchEvent(new Event("avn-allow-navigation-changed"))
                        break
                    case "info":
                        this._dimensionInfo = value.message.value
                        console.info(`AVN: update dimension info`, value.message.value)
                        global.dispatchEvent(new Event("avn-dimension-info-changed"))
                        break
                    case "broadcast":
                        //console.debug("TODO: broadcast MESSAGE", value.message)
                        break
                    case "presence":
                        //console.debug("TODO: presence MESSAGE", value.message)
                        break
                    case "lesson":
                        this._learnLessonContext = value.message.value
                        global.dispatchEvent(new Event("avn-allow-back-changed"))
                        global.dispatchEvent(new Event("avn-allow-explore-changed"))
                        global.dispatchEvent(new Event("avn-allow-navigation-changed"))
                        if (value.message.value) {
                            console.debug(`AVN: student lesson context set`, value.message.value)
                        } else {
                            console.debug(`AVN: student lesson context reset`)
                        }
                        break
                    default:
                        console.error(`AVN: Unexpected message type '${value.message.case}'`)
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
        if (result === Connect.OperationState.OPEN) {
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

    public async joinDimension(): Promise<Connect.OperationState> {
        try {
            if (!this.dimensionId) {
                console.error("No dimension ID has been set")
                return Connect.OperationState.UNSPECIFIED
            }
            await this.abortStreamIfActive()
            const abortController = new AbortController()
            const auth = this._accessToken ? new Connect.Authorization({ method: { case: "userJwt", value: this._accessToken } }) : undefined
            console.info(`Joining dimension '${this.dimensionId}'...`)
            const dimensionStream = this.ConnectServices.Dimensions.joinDimension({
                    client: new Connect.ClientCredentials({ clientId: await this.getClientId() }),
                    auth,
                    dimensionId: this.dimensionId,
                },
                { signal: abortController.signal }
            )
            console.info(`Connected to dimension '${this.dimensionId}'`)
            console.info(`Constructing stream iterator`)
            const dimensionStreamIterator: AsyncIterator<Connect.DimensionEvent, Connect.DimensionEvent> = dimensionStream[Symbol.asyncIterator]()
            console.info(`Waiting for first message...`)
            const { done, value } = await dimensionStreamIterator.next()
            if (done) {
                console.error(`AVN: dimension stream unexpectedly terminated`)
                abortController.abort("STREAM_OPEN_FAILED")
                return Connect.OperationState.UNSPECIFIED
            }
            // First message must say that the dimension is OPEN
            if (value.message.case !== "status" || value.message.value.state !== Connect.OperationState.OPEN) {
                console.error(`AVN: failed to join dimension '${this.dimensionId}'`, value.message)
                abortController.abort("STREAM_STATE_UNEXPECTED")
                return value.message.case === "status" ? value.message.value.state : Connect.OperationState.UNSPECIFIED
            }
            this._lastDimensionStatus = value.message.value
            global.dispatchEvent(new Event("avn-dimension-status-changed"))
            // Clear any pending instructions queued due to the session closing
            clearInterval(this._closeSceneTimeout)
            console.log(`AVN: Joined dimension '${this.dimensionId}'`)
            // Record abort controller
            this._streamAbortController = abortController
            // Start message loop
            this._streamMessageHandlerPromise = this.streamMessageHandler(abortController, dimensionStreamIterator)

            return Connect.OperationState.OPEN
        } catch (error: unknown) {
            console.warn(`AVN: exception joining dimension: ${error instanceof Error ? error.message : "Unknown error"}`)
        }
        return Connect.OperationState.UNSPECIFIED
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
            this._roomActivity = await this.ConnectServices.Activities.getActivity({ auth: this._dimensionAuth, activityId })
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
        const newContext = new Connect.LessonContext({
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
        if (result.state == Connect.OperationState.SUCCESS) {
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
        if (result.state == Connect.OperationState.SUCCESS) {
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

    async fetchRoomInfoForUrl(url: string) : Promise<Connect.RoomInfo | undefined> {
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
        return url.startsWith(this.dynamicAssetPrefix) || url.startsWith(Connect.AvnfsUtils.UrlPrefix)
    }

    async fetchMediaData(mediaUrl: string) {
        try {
            if(mediaUrl.startsWith(Connect.AvnfsUtils.UrlPrefix)) {
                const { mediaType } = Connect.AvnfsUtils.decodeUrl(new URL(mediaUrl))
                return {
                    "origin": mediaUrl,
                    "meta": {
                        "expected_content_type": mediaType,
                    }
                }
            } else {
throw new Error("!!!")
                console.info(`Resolving '${mediaUrl}' through server`)
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
    private _lastProcessedFocus : Connect.LessonFocus | undefined

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
            const client = new Connect.ClientCredentials({ clientId: await this.getClientId() })
            await this.ConnectServices.Clients.recordAction({ client, actionId, sourceId })
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