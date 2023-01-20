import { AVNConnect } from "connect-sdk"
import { OperationState } from "connect-sdk/dist/gen/avn/connect/v1/operations_pb"
import { DimensionEvent } from "connect-sdk/dist/gen/avn/connect/v1/dimensions_pb"
import { Channel } from "connect-sdk/dist/gen/avn/connect/v1/channels_pb"
import { HealthCheckResponse_ServingStatus } from "connect-sdk/dist/gen/grpc/health/v1/healthcheck_pb"
import { store } from "./utils/store-instance"
import { v4 as uuidv4 } from 'uuid'
import { isLocalClient } from "./utils/phoenix-utils"
import { ConnectionCredentials } from "connect-sdk/dist/gen/avn/connect/v1/connections_pb"
import { LessonContext } from "connect-sdk/dist/gen/avn/connect/v1/lesson_context_pb"
import { changeHub, changeHubAvn } from "./change-hub"
import { Vector3 } from "three"
import { CharacterControllerSystem } from "./systems/character-controller-system"
import { Authorization } from "connect-sdk/dist/gen/avn/connect/v1/authorization_pb"
import { Profile } from "connect-sdk/dist/gen/avn/connect/v1/profiles_pb"
import { Category } from "connect-sdk/dist/gen/avn/connect/v1/categories_pb"
import { Activity } from "connect-sdk/dist/gen/avn/connect/v1/activities_pb"
import configs from "./utils/configs"
import { Pass } from "connect-sdk/dist/gen/avn/connect/v1/passes_pb"

// Debug configuration (do not check in)
const PreferredDomain = (configs as any).RETICULUM_SERVER
console.log(`AVN PreferredDomain: ${PreferredDomain}`)
const ConnectToAlphaBackend = PreferredDomain === "ap.eduverse.com"
const ChannelPostfix = ConnectToAlphaBackend ? `-alpha` : ""
const LocalDevMode = isLocalClient()

// Create unique client ID if not already done
if (!store.state.profile.clientId) {
    store.update({ profile: { clientId: uuidv4() } });
    console.info(`AVN: Created new client ID '${store.state.profile.clientId}'`)
}

class AVNBridge {

    // TODO: NOT CLEAR WHICH OF THESE LEGACY FIELDS ARE STILL USEFUL
    _assetDomain = LocalDevMode ? "https://localhost:8181" : `https://rest${ChannelPostfix}.avncloud.com`
    _iconUri: string | null = null
    _isSolo = false
    _description: string | undefined = undefined
    _instructions: string | undefined = undefined
    _accessToken: string | undefined = undefined
    _connectionCredentials: ConnectionCredentials | undefined
    _roomId: string | undefined = undefined
    _teachLessonContext: LessonContext | undefined = undefined
    _learnLessonContext: LessonContext | undefined = undefined
    _dimensionLicensedCreator: boolean = false

    public Connect = new AVNConnect(LocalDevMode 
        ? "http://127.0.0.1:8282" 
        : `https://gweb${ChannelPostfix}.avncloud.com`)

    public async authenticate(accessToken: string): Promise<boolean> {
        this._accessToken = accessToken
        this.abortStreamIfActive()
        // If this is a solo dimension it was created anonymously and the user must be the owner (mostly true)
        // so a replacement dimension should be created with the full auth permissions
        if(this.isSolo) {
            console.log("AVN dimension is solo, so it will be replaced")
            if(this._passId) {
                document.location.replace(`/?asset=${this.assetId}&pass=${this._passId}`);
            } else {
                document.location.replace(`/?asset=${this.assetId}`);
            }
        }
        return true
    }

    public async deauthenticate(): Promise<void> {
        this._accessToken = undefined
        this.abortStreamIfActive()
    }

    public async isHealthy(): Promise<boolean> {
        try {
            const healthCheckResult = await this.Connect.Health.check({})
            console.debug(`AVN health check result: ${healthCheckResult.status}`)
            return healthCheckResult.status === HealthCheckResponse_ServingStatus.SERVING
        } catch (error: unknown) {
            console.error(`AVN health check exception`, error)
        }
        return false
    }

    _dimensionId: string = ""
    get dimensionId(): string {
        return this._dimensionId
    }

    _assetId: string | undefined = undefined
    get assetId(): string {
        return this._assetId || "homeroom"
    }

    _assetName: string = ""
    get assetName(): string {
        return this._assetName
    }

    public async getLicensedChannels(): Promise<Channel[]> {
        const result = await this.Connect.Channels.getLicensedChannels({auth: new Authorization({method: {case:"dimensionId", value: this._dimensionId }})})
        return result.results
    }

    public async getProfilesForChannel(channelId: number): Promise<Profile[]> {
        const result = await this.Connect.Channels.getProfiles({auth: new Authorization({method: {case:"dimensionId", value: this._dimensionId }}), channelId})
        return result.results
    }

    public async getCategoriesForProfile(profileId: number): Promise<Category[]> {
        const result = await this.Connect.Profiles.getCategories({auth: new Authorization({method: {case:"dimensionId", value: this._dimensionId }}), profileId})
        return result.results
    }

    public async getActivitiesForProfile(profileId: number): Promise<Activity[]> {
        const result = await this.Connect.Profiles.getActivities({auth: new Authorization({method: {case:"dimensionId", value: this._dimensionId }}), profileId})
        return result.results
    }

    public async getActivitiesForCategory(categoryId: number): Promise<Activity[]> {
        const result = await this.Connect.Categories.getActivities({auth: new Authorization({method: {case:"dimensionId", value: this._dimensionId }}), categoryId})
        return result.results
    }

    public async searchActivitiesForChannel(channelId: number, searchText: string): Promise<Activity[]> {
        const result = await this.Connect.Activities.searchActivities({auth: new Authorization({method: {case:"dimensionId", value: this._dimensionId }}), channelId, searchText})
        return result.results
    }

    get dimensionIsLicensed() {
        return this._dimensionLicensedCreator
    }
    
    get hallPassPrefix(): string {
        return "https://edvr.se"
    }

    _passId: string | undefined = undefined
    get passId(): string | undefined {
        return this._passId
    }

    public async openNewDimension(passId: string | undefined): Promise<boolean> {
        const openDimensionResult = await this.Connect.Dimensions.openDimension({
            clientId: store.state.profile.clientId,
            userJwt: this._accessToken,
            preferredDomain: PreferredDomain,
            passId,     
        })
        this._dimensionId = openDimensionResult.dimensionId
        this._dimensionLicensedCreator = false

        return true
    }

    public async setDimensionFromRoomId(roomId: string): Promise<boolean> {
        try {
            const getRoomDimensionResult = await this.Connect.Rooms.getRoomDimension({ roomId: roomId })
            this._dimensionId = getRoomDimensionResult.dimensionId
            this._dimensionLicensedCreator = false
            console.log(`AVN matched dimension ID '${this._dimensionId}' for room`)
            return true
        } catch {
            console.error(`AVN failed to match dimension`)
        }
        return false
    }

    // Controls the dimension stream and indicates that a stream is active
    _streamAbortController: AbortController | null
    // It might not be necessary to hold a reference to the loop promise, but it makes the code clearer
    _streamMessageHandlerPromise: Promise<void> | null

    _dimensionRejoinTimeout = 1000
    _lastRejoinTimeout: NodeJS.Timeout

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
                        if (value.message.value.state == OperationState.CLOSED) {
                            console.log(`Dimension was closed with reason '${value.message.value.detail}'`)
                            //TODO: PROPER ABORT AND UI DISPLAY
                            // this.abortStreamIfActive()
                            // APP.entryManager?.exitScene()
                        } else {
                            console.warn(`Unexpected dimension state change '${value.message.value.state}'`)
                        }
                        break
                    case "credentials":
                        this._connectionCredentials = value.message.value
                        console.info(`AVN update connection credentials. Connection id is now '${this._connectionCredentials?.connectionId}'`)
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
                        console.debug(`AVN lesson context set`, value.message.value)
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
            this._lastRejoinTimeout = setTimeout(() => this.rejoinDimension(), 0)
        }
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

    abortStreamIfActive() {
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
            this.abortStreamIfActive()
            const abortController = new AbortController()
            const dimensionStream = this.Connect.Dimensions.joinDimension(
                {
                    dimensionId: this.dimensionId,
                    clientId: store.state.profile.clientId,
                    userJwt: this._accessToken,
                },
                { signal: abortController.signal }
            )
            const dimensionStreamIterator: AsyncIterator<DimensionEvent, DimensionEvent> = dimensionStream[Symbol.asyncIterator]()
            const { done, value } = await dimensionStreamIterator.next()
            if (done) {
                console.error(`AVN dimension stream unexpectedly terminated`)
                abortController.abort("STREAM_OPEN_FAILED")
                return OperationState.UNSPECIFIED
            }
            // First message must say that the dimension is OPEN
            if (value.message.case !== "status" || value.message.value.state !== OperationState.OPEN) {
                console.error(`AVN failed to join dimension '${this.dimensionId}', got message ${value.message}`)
                abortController.abort("STREAM_STATE_UNEXPECTED")
                return value.message.case === "status" ? value.message.value.state : OperationState.UNSPECIFIED
            }
            // Record license status
            this._dimensionLicensedCreator = value.message.value.licensed
            this._passId = value.message.value.passId
            console.log(`AVN: Joined dimension '${this.dimensionId}' with licensed status '${this._dimensionLicensedCreator}'`)
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
        this._roomId = roomId
        await this.Connect.Rooms.enterRoom({
            credentials: this._connectionCredentials,
            roomId,
            sessionId
        })
    }

    public goHome() {
        this.tryChangeScene("homeroom")
    }

    // Guiding

    public async setLessonFocus(position: THREE.Vector3 | undefined): Promise<boolean> {
        const newContext = new LessonContext({
            focus: {
                roomId: this._roomId,
                assetId: this._assetId,
                position
            }
        })
        console.log("AVN setting lesson context", this._teachLessonContext)
        const result = await this.Connect.Dimensions.setLessonContext({
            credentials: this._connectionCredentials,
            dimensionId: this._dimensionId,
            context: newContext,
        })
        if(result.state == OperationState.OPEN) {
            this._teachLessonContext = newContext
            global.dispatchEvent(new Event("avn-allow-navigation-changed"))
            return true
        }
        console.error("AVN unexpected setLessonContext result", result)
        return false
    }

    public async resetLessonFocus(): Promise<boolean> {
        console.log("AVN resetting lesson context")
        const result = await this.Connect.Dimensions.setLessonContext({
            credentials: this._connectionCredentials,
            dimensionId: this._dimensionId
        })
        if(result.state == OperationState.OPEN) {
            this._teachLessonContext = undefined
            global.dispatchEvent(new Event("avn-allow-navigation-changed"))
            return true
        }
        console.error("AVN unexpected resetLessonFocus result", result)
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

    // TODO: REVIEW THIS LEGACY BEHVAIOUR
    public updateFromHub(hub: any) {
        const userData = hub.user_data
        if (userData) {
            if (userData.assetid && this._assetId != userData.assetid) {
                this._assetId = userData.assetid;
                global.dispatchEvent(new Event("avn-asset-id-changed"))
                console.info(`AVN: Updated asset id to '${this._assetId}'`)
            }
            if (this._iconUri != userData.iconuri) {
                this._iconUri = userData.iconuri;
                console.info(`AVN: Updated icon to '${this._iconUri}'`)
                if (!this._iconUri) {
                    console.error("AVN: No iconuri is set")
                }
            }
            this._isSolo = hub.room_size <= 1
            this._assetName = hub.name
            this._description = userData.description
            this._instructions = userData.instructions

        } else {
            console.error("AVN: No user_data is set")
        }
    }

    get iconUri() {
        return this._iconUri;
    }

    get description() {
        return this._description
    }

    get instructions() {
        return this._instructions
    }

    get isSolo() {
        return this._isSolo
    }

    get allowNavigation() {
        return !!this._teachLessonContext || !this._learnLessonContext?.focus
    }

    // Rooms

    // Used to add dimension to URLs for the legacy media browser to be resolved by the REST server
    transformRoomUrl(url: string) {
        return url.replace(this.dynamicAssetPrefix, `${this._assetDomain}/${this._dimensionId}`) + "#" + this._assetId
    }

    async fetchRoomData(assetId: string) {
        try {
            const findRoomResult = await this.Connect.Rooms.findRoom({ dimensionId: this.dimensionId, assetId })
            return {
                hubid: findRoomResult.roomId,
                name: findRoomResult.name,
                icon: findRoomResult.iconUrl,
            }
        } catch (error: unknown) {
            console.error(`Error fetching room '${assetId}' ${error instanceof Error ? error.message : "Unknown error"}`)
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
                    "tags": resolveMediaResult.tagNames,
                    "tag_ids": resolveMediaResult.tagIds,
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
        if(!this._pendingSceneChange) {
            this._pendingSceneChange = this.asyncChangeScene(newAssetId)
        }
    }

    private _pendingSceneChange : Promise<void> | undefined = undefined
    private async asyncChangeScene(newAssetId: string) : Promise<void> {
        try {
            const roomData = await AVN.fetchRoomData(newAssetId);
            if (roomData) {
                console.log(`AVN responding to focus by changing scene to '${newAssetId}'`)
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

    private _pendingFocusUpdate : Promise<void> | undefined = undefined
    private async asyncFocusUpdate() : Promise<void> {
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
        if(this._teachLessonContext) {
            // Have we changed room since setting the focus?
            if(this._teachLessonContext.focus?.roomId !== this._roomId) {
                // Change room focus if not already started
                if(!this._pendingFocusUpdate) {
                    this._pendingFocusUpdate = this.asyncFocusUpdate()
                }
            }
        } else {
            // Default to no tethering
            characterController.tether(null)
            // Has a focus been mandated?
            if(this._learnLessonContext?.focus) {
                // Are we in the right room?
                if(this._learnLessonContext.focus?.roomId === this._roomId) {
                    // Tether to the focus position
                    //characterController.tether(this._learnLessonContext?.focus?.position)
                } else {
                    // Change to the right room if not already started
                    if(!this._pendingSceneChange) {
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