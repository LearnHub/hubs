import { AVNConnect } from "connect-sdk"
import { OperationState } from "connect-sdk/dist/gen/avn/connect/v1/operations_pb"
import { DimensionEvent, DimensionInfo } from "connect-sdk/dist/gen/avn/connect/v1/dimensions_pb"
import { Channel } from "connect-sdk/dist/gen/avn/connect/v1/channels_pb"
import { HealthCheckResponse_ServingStatus } from "connect-sdk/dist/gen/grpc/health/v1/healthcheck_pb"
import { isLocalClient } from "./utils/phoenix-utils"
import { LessonContext } from "connect-sdk/dist/gen/avn/connect/v1/lesson_context_pb"
import { changeHub, changeHubAvn } from "./change-hub"
import { CharacterControllerSystem } from "./systems/character-controller-system"
import { Authorization } from "connect-sdk/dist/gen/avn/connect/v1/authorization_pb"
import { Profile } from "connect-sdk/dist/gen/avn/connect/v1/profiles_pb"
import { Category } from "connect-sdk/dist/gen/avn/connect/v1/categories_pb"
import { Activity } from "connect-sdk/dist/gen/avn/connect/v1/activities_pb"
import configs from "./utils/configs"
import { Pass } from "connect-sdk/dist/gen/avn/connect/v1/passes_pb"
import { ConnectionInstance } from "connect-sdk/dist/gen/avn/connect/v1/connections_pb"
import { RoomInfo } from "connect-sdk/dist/gen/avn/connect/v1/rooms_pb"
import { Role } from "connect-sdk/dist/gen/avn/connect/v1/roles_pb"
import { DimensionStatus } from "connect-sdk/dist/gen/avn/connect/v1/dimensions_pb"
import { OrganizationMembership } from "connect-sdk/dist/gen/avn/connect/v1/organization_membership_pb"

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
import { Organization } from "connect-sdk/dist/gen/avn/connect/v1/organization_pb"
import { ClientCredentials } from "connect-sdk/dist/gen/avn/connect/v1/clients_pb"
  
const PreferredDomain = (configs as any).RETICULUM_SERVER
console.log(`AVN: PreferredDomain: ${PreferredDomain}`)
const ConnectToAlphaBackend = PreferredDomain === "ap.eduverse.com"
const ChannelPostfix = ConnectToAlphaBackend ? `-alpha` : ""
const ShortDomainPrefix = ConnectToAlphaBackend ? `alpha.` : ""

const LocalDevMode = isLocalClient()

class AVNBridge {

    private _assetDomain = LocalDevMode ? "https://localhost:8181" : `https://rest${ChannelPostfix}.avncloud.com`
    private _accessToken: string | undefined
    private _roomInfo: RoomInfo | undefined
    private _teachLessonContext: LessonContext | undefined
    private _learnLessonContext: LessonContext | undefined
    private _dimensionInfo: DimensionInfo | undefined
    private _dimensionConnection: ConnectionInstance | undefined
    private _dimensionId: string = ""

    private Connect = new AVNConnect(LocalDevMode
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
    }

    async getClientId(): Promise<string> {
        let clientId = localStorage.getItem("AVN::ClientId")
        try {
            if (clientId) { 
                console.info(`AVN: Using client ID '${clientId}'`)
            } else {
                // Request new credentials from Connect
                const result = await this.Connect.Clients.createClientCredentials({})
                clientId = result.clientCredentials?.clientId || null
                if(clientId) {
                    console.info(`AVN: Got new client ID '${clientId}'`)
                    localStorage.setItem("AVN::ClientId", clientId)
                }
            }
        } catch (error: unknown) {
            console.warn(`AVN: error getting client ID: ${error instanceof Error ? error.message : "Unknown error"}`)
        }
        if(clientId) {
            return clientId
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
        
    // Mutations trigger event `avn-dimension-connection-changed`
    get dimensionConnection() {
        return this._dimensionConnection        
    }

    // Mutations trigger event `avn-dimension-status-changed`
    private _lastDimensionStatus: DimensionStatus | undefined
    get dimensionStatus() : DimensionStatus | undefined {
        return this._lastDimensionStatus
    }

    // Mutations trigger event `avn-allow-navigation-changed`
    get allowNavigation() {
        // Global navigation permission
        return this._dimensionConnection?.permissions?.allowNavigation 
            // Focus sessesion permissions (teacher can always navigate)
            && (!!this._teachLessonContext || !this._learnLessonContext?.focus)
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
            const healthCheckResult = await this.Connect.Health.check({})
            console.debug(`AVN: health check result: ${healthCheckResult.status}`)
            return healthCheckResult.status === HealthCheckResponse_ServingStatus.SERVING
        } catch (error: unknown) {
            console.error(`AVN: health check exception`, error)
        }
        return false
    }

    public async getBrowsableChannels(): Promise<Channel[]> {
        const result = await this.Connect.Channels.getBrowsableChannels({ auth: new Authorization({ method: { case: "dimensionId", value: this._dimensionId } }) })
        return result.results
    }

    public async getProfilesForChannel(channelId: number): Promise<Profile[]> {
        const result = await this.Connect.Channels.getProfiles({ auth: new Authorization({ method: { case: "dimensionId", value: this._dimensionId } }), channelId })
        return result.results
    }

    public async getCategoriesForProfile(profileId: number): Promise<Category[]> {
        const result = await this.Connect.Profiles.getCategories({ auth: new Authorization({ method: { case: "dimensionId", value: this._dimensionId } }), profileId })
        return result.results
    }

    public async getActivitiesForProfile(profileId: number): Promise<Activity[]> {
        const result = await this.Connect.Profiles.getActivities({ auth: new Authorization({ method: { case: "dimensionId", value: this._dimensionId } }), profileId })
        return result.results
    }

    public async getActivitiesForCategory(categoryId: number): Promise<Activity[]> {
        const result = await this.Connect.Categories.getActivities({ auth: new Authorization({ method: { case: "dimensionId", value: this._dimensionId } }), categoryId })
        return result.results
    }

    public async searchActivitiesForChannel(channelId: number, searchText: string): Promise<Activity[]> {
        const result = await this.Connect.Activities.searchActivities({ auth: new Authorization({ method: { case: "dimensionId", value: this._dimensionId } }), channelId, searchText })
        return result.results
    }

    public async getPass(passId: string): Promise<Pass | undefined> {
        try {
            const getPassResult = await this.Connect.Passes.getPass({ passId })
            return getPassResult.result
        } catch (e: unknown) {
            console.error(`AVN: failed to get pass '${passId}'`, e)
        }
        return undefined
    }

    public async createNewDimension(passId: string | undefined): Promise<boolean> {
        const auth = this._accessToken ? new Authorization({ method: { case: "userJwt", value: this._accessToken } }) : undefined
        const createDimensionResult = await this.Connect.Dimensions.createDimension({
            client: new ClientCredentials({ clientId: await this.getClientId() }),
            auth,
            preferredDomain: PreferredDomain,
            passId,
            referrer: document.location.hostname,
        })
        this._dimensionId = createDimensionResult.dimensionId
        return true
    }

    public async setDimensionFromRoomId(roomId: string): Promise<boolean> {
        try {
            const getRoomDimensionResult = await this.Connect.Rooms.getRoomDimension({ roomId: roomId })
            this._dimensionId = getRoomDimensionResult.dimensionId
            console.log(`AVN: matched dimension ID '${this._dimensionId}' for room`)
            return true
        } catch {
            console.error(`AVN: failed to match dimension`)
        }
        return false
    }

    async getUserOrganizationMembership(): Promise<OrganizationMembership[]> {
        const credentials = this._dimensionConnection?.credentials
        const userId = this._dimensionConnection?.user?.userId
        if(credentials && userId) {
            const auth = new Authorization({ method: { case: "credentials", value: credentials } })
            const result = await this.Connect.Users.getOrganizationMembership({ auth, userId })
            return result.memberships
        } else {
            console.warn("Failed to call getUserOrganizationMembership", credentials, userId)
        }
        return []
    }

    async getOrganization(organizationId: number): Promise<Organization> {
        const credentials = this._dimensionConnection?.credentials
        const userId = this._dimensionConnection?.user?.userId
        if(credentials && userId) {
            const auth = new Authorization({ method: { case: "credentials", value: credentials } })
            return await this.Connect.Organizations.getOrganization({ auth, organizationId })
        } else {
            throw new Error(`Not authenticated to get organization`)
        }
    }

    public async getUserOrganizations(): Promise<{organization: Organization, role: Role}[]> {
        const result = new Array<{organization: Organization, role: Role}>()
        const userOrgRoles = await this.getUserOrganizationMembership()
        for(let userOrgRole of userOrgRoles) {
            const role = await this.getRole(userOrgRole.roleId)
            const organization = await this.getOrganization(userOrgRole.organizationId)
            result.push({organization, role})
        }
        return result
    }

    // Roles are expect to remain fixed
    private _roleMap: Map<number, Role> | undefined
    async getRole(roleId: number): Promise<Role> {
        if(!this._roleMap) {
            const result = await this.Connect.Roles.getRoles({})            
            this._roleMap = new Map<number, Role>()
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
            const auth = new Authorization({ method: { case: "credentials", value: credentials } })
            await this.Connect.Organizations.joinOrganization({ auth, joinCode })
        } else {
            throw new Error(`Not authenticated to join organization`)
        }
    }

    public async getUserLicenses(): Promise<{licenseId: string, organization: Organization | undefined, expires: Date}[]> {
        const result = new Array<{licenseId: string, expires: Date, organization: Organization | undefined}>()
        const credentials = this._dimensionConnection?.credentials
        const userId = this._dimensionConnection?.user?.userId
        if(credentials && userId) {
            const auth = new Authorization({ method: { case: "credentials", value: credentials } })
            const userLicenses = await this.Connect.Licenses.getUserLicenses({auth})
            for(let userLicense of userLicenses.licenses) {
                if(userLicense.licenseId && userLicense.expires) {
                    if(userLicense.source.case === "organizationId") {
                        const organization = await this.getOrganization(userLicense.source.value)
                        result.push({licenseId: userLicense.licenseId, organization, expires: userLicense.expires.toDate() })
                    } else if(userLicense.source.case === "userId") {
                        result.push({licenseId: userLicense.licenseId, expires: userLicense.expires.toDate(), organization: undefined })
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
        dimensionStreamIterator: AsyncIterator<DimensionEvent, DimensionEvent>
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
                        // CLOSE is the only expected status change after the initial OPEN
                        if (value.message.value.state == OperationState.CLOSED) {
                            console.log(`Dimension was closed with reason '${value.message.value.detail}'`)
                        } else {
                            console.warn(`Unexpected dimension state change '${value.message.value.state}'`)
                        }
                        this._lastDimensionStatus = value.message.value
                        global.dispatchEvent(new Event("avn-dimension-status-changed"))
                        // The fake close might be cancelled if the session reopens
                        clearInterval(this._closeSceneTimeout)
                        this._closeSceneTimeout = setTimeout(() => {
                            // Fake the hubs closing until the API supports room closure
                            // @ts-ignore
                            document.querySelector("a-scene")?.emit("hub_closed")
                        }, 15000)
                        break
                    case "connection":
                        this._dimensionConnection = value.message.value
                        console.info(`AVN: update dimension connection`, value.message.value)
                        global.dispatchEvent(new Event("avn-dimension-connection-changed"))
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
                        global.dispatchEvent(new Event("avn-allow-navigation-changed"))
                        if (value.message.value) {
                            console.debug(`AVN: lesson context set`, value.message.value)
                        } else {
                            console.debug(`AVN: lesson context reset`)
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
        if (result === OperationState.OPEN) {
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
            this._streamAbortController.abort("STREAM_REPLACEMENT")
            this._streamAbortController = null
        }
    }

    public async joinDimension(): Promise<OperationState> {
        try {
            if (!this.dimensionId) {
                console.error("No dimension ID has been set")
                return OperationState.UNSPECIFIED
            }
            await this.abortStreamIfActive()
            const abortController = new AbortController()
            const auth = this._accessToken ? new Authorization({ method: { case: "userJwt", value: this._accessToken } }) : undefined
            const dimensionStream = this.Connect.Dimensions.joinDimension({
                    client: new ClientCredentials({ clientId: await this.getClientId() }),
                    auth,
                    dimensionId: this.dimensionId,
                },
                { signal: abortController.signal }
            )
            const dimensionStreamIterator: AsyncIterator<DimensionEvent, DimensionEvent> = dimensionStream[Symbol.asyncIterator]()
            const { done, value } = await dimensionStreamIterator.next()
            if (done) {
                console.error(`AVN: dimension stream unexpectedly terminated`)
                abortController.abort("STREAM_OPEN_FAILED")
                return OperationState.UNSPECIFIED
            }
            // First message must say that the dimension is OPEN
            if (value.message.case !== "status" || value.message.value.state !== OperationState.OPEN) {
                console.error(`AVN: failed to join dimension '${this.dimensionId}'`, value.message)
                abortController.abort("STREAM_STATE_UNEXPECTED")
                return value.message.case === "status" ? value.message.value.state : OperationState.UNSPECIFIED
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

            return OperationState.OPEN
        } catch (error: unknown) {
            console.warn(`AVN: exception joining dimension: ${error instanceof Error ? error.message : "Unknown error"}`)
        }
        return OperationState.UNSPECIFIED
    }

    public async enterRoom(roomId: string, sessionId: string): Promise<void> {
        const enterRoomResult = await this.Connect.Rooms.enterRoom({
            credentials: this._dimensionConnection?.credentials,
            roomId,
            sessionId
        })
        this._roomInfo = enterRoomResult.roomInfo
        global.dispatchEvent(new Event("avn-room-info-changed"))
    }

    public goHome() {
        this.tryChangeScene("homeroom")
    }

    // Guiding

    public async setLessonFocus(position: THREE.Vector3 | undefined): Promise<boolean> {
        const newContext = new LessonContext({
            focus: {
                roomId: this._roomInfo?.roomId,
                assetId: this._roomInfo?.assetId,
                position
            }
        })
        console.log("AVN: setting lesson context", newContext)
        const result = await this.Connect.Dimensions.setLessonContext({
            credentials: this._dimensionConnection?.credentials,
            dimensionId: this._dimensionId,
            context: newContext,
        })
        if (result.state == OperationState.SUCCESS) {
            this._teachLessonContext = newContext
            global.dispatchEvent(new Event("avn-allow-navigation-changed"))
            return true
        }
        console.error("AVN: unexpected setLessonContext result", result)
        return false
    }

    public async resetLessonFocus(): Promise<boolean> {
        console.log("AVN: resetting lesson context")
        const result = await this.Connect.Dimensions.setLessonContext({
            credentials: this._dimensionConnection?.credentials,
            dimensionId: this._dimensionId
        })
        if (result.state == OperationState.SUCCESS) {
            this._teachLessonContext = undefined
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
        return ["https://data.avncloud.com"];
    }

    // Rooms

    // Used to add dimension to URLs for the legacy media browser to be resolved by the REST server
    transformRoomUrl(url: string) {
        return url.replace(this.dynamicAssetPrefix, `${this._assetDomain}/${this._dimensionId}`) + "#" + this._roomInfo?.assetId
    }

    async fetchRoomData(assetId: string) {
        try {
            const openRoomResult = await this.Connect.Rooms.openRoom({ dimensionId: this.dimensionId, assetId })
            return {
                hubid: openRoomResult?.roomInfo?.roomId,
                name: openRoomResult?.roomInfo?.name,
                domain: openRoomResult?.roomInfo?.domain,
                icon: openRoomResult?.roomInfo?.iconUrl,
            }
        } catch (error: unknown) {
            console.error(`Error open room '${assetId}' ${error instanceof Error ? error.message : "Unknown error"}`)
        }
        return null
    }

    // Media

    // TODO: LEGACY
    isAvnUrl(url: string) {
        return url.startsWith(this.dynamicAssetPrefix);
    }

    async fetchMediaData(mediaUrl: string) {
        try {
            const assetId = mediaUrl.split("/").pop()
            const resolveMediaResult = await this.Connect.Rooms.resolveMedia({ dimensionId: this.dimensionId, assetId })
            return {
                "origin": resolveMediaResult.assetUrl,
                "meta": {
                    "tags": resolveMediaResult.tagIds,
                    "thumbnail": resolveMediaResult.thumbnailUrl,
                    "expected_content_type": resolveMediaResult.mimeType,
                }
            }
        } catch (error: unknown) {
            throw new Error(`Unexpected error resolving media '${mediaUrl}' ${error instanceof Error ? error.message : "Unknown Error"}`)
        }
    }

    // Best-effort scene change
    public tryChangeScene(newAssetId: string) {
        if (!this._pendingSceneChange) {
            this._pendingSceneChange = this.asyncChangeScene(newAssetId)
        }
    }

    private _pendingSceneChange: Promise<void> | undefined = undefined
    private async asyncChangeScene(newAssetId: string): Promise<void> {
        try {
            const roomData = await AVN.fetchRoomData(newAssetId);
            if (roomData) {
                console.log(`AVN: responding to focus by changing scene to '${newAssetId}'`)
                const nextState = { hubId: roomData.hubid, newAssetId: newAssetId, oldAssetId: AVN.assetId, name: roomData.name, icon: roomData.icon };
                await changeHub(nextState, true);
            } else {
                console.error("Failed to change hub room");
            }

        } catch (error: unknown) {
            throw new Error(`Unexpected error changing scene: ${error instanceof Error ? error.message : "Unknown Error"}`)
        } finally {
            this._pendingSceneChange = undefined
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
            // Has a focus been mandated?
            if (this._learnLessonContext?.focus) {
                // Are we in the right room?
                if (this._learnLessonContext.focus?.roomId === this._roomInfo?.roomId) {
                    // Tether to the focus position
                    //characterController.tether(this._learnLessonContext?.focus?.position)
                } else {
                    // Change to the right room if not already started
                    if (!this._pendingSceneChange) {
                        this.tryChangeScene(this._learnLessonContext.focus.assetId)
                    }
                }
            }
        }
    }
}

export const AVN = new AVNBridge()

// Useful for accessing AVN singleton in legacy Javascript contexts 
// where we don't want to include this file because it breaks the build for the admin pages
declare global { var AVNGlobal: AVNBridge }
global.AVNGlobal = AVN