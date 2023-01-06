import { AVNConnect } from "connect-sdk"
import { DimensionState, DimensionEvent } from "connect-sdk/dist/gen/avn/connect/v1/dimensions_pb"
import { HealthCheckResponse_ServingStatus } from "connect-sdk/dist/gen/grpc/health/v1/healthcheck_pb"
import { store } from "./utils/store-instance"
import { v4 as uuidv4 } from 'uuid'
import { isLocalClient } from "./utils/phoenix-utils"
import { ConnectionCredentials } from "connect-sdk/dist/gen/avn/connect/v1/connections_pb"
import { LessonContext } from "connect-sdk/dist/gen/avn/connect/v1/lesson_context_pb"
import { changeHubAvn } from "./change-hub"

// For debug
const LocalDevMode = isLocalClient() //&& false

// Create unique client ID if not already done
if (!store.state.profile.clientId) {
    store.update({ profile: { clientId: uuidv4() } });
    console.info(`AVN: Created new client ID '${store.state.profile.clientId}'`)
}

class AVNBridge {

    // TODO: NOT CLEAR WHICH OF THESE LEGACY FIELDS ARE STILL USEFUL
    _iconUri: string | null = null
    _ownerIsAuthenticated = false
    _ownerIsSubscriber = false
    _allowNavigation = true
    _isSolo = false
    _description: string | undefined = undefined
    _instructions: string | undefined = undefined
    _assetDomain = LocalDevMode ? "https://localhost:8181" : "https://rest.avncloud.com"
    _accessToken: string | undefined = undefined
    _connectionCredentials: ConnectionCredentials | undefined
    _roomId: string | undefined = undefined

    public Connect = new AVNConnect(LocalDevMode ? "http://127.0.0.1:8282" : "https://gweb.avncloud.com")

    public async authenticate(accessToken: string): Promise<boolean> {
        this._accessToken = accessToken
        this.abortStreamIfActive()
        return true
    }

    public async deauthenticate(): Promise<void> {
        this._accessToken = undefined
        this.abortStreamIfActive()
    }

    public async isHealthy(): Promise<boolean> {
        try {
            const healthCheckResult = await this.Connect.Health.check({})
            console.info(`AVN health check result: ${healthCheckResult.status}`)
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

    _assetId: string = ""
    get assetId(): string {
        return this._assetId
    }

    public async openNewDimension(): Promise<boolean> {
        const openDimensionResult = await this.Connect.Dimensions.openDimension({
            clientId: store.state.profile.clientId,
            userJwt: this._accessToken,
        })
        this._dimensionId = openDimensionResult.dimensionId
        this._assetId = openDimensionResult.defaultAssetId
        return true
    }

    public async setDimensionFromRoomId(roomId: string): Promise<boolean> {
        try {
            const getRoomDimensionResult = await this.Connect.Rooms.getRoomDimension({ roomId: roomId })
            this._dimensionId = getRoomDimensionResult.dimensionId
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
                        if(value.message.value.state == DimensionState.CLOSED) {
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
                        console.debug("TODO: broadcast MESSAGE", value.message)
                        break
                    case "presence":
                        console.debug("TODO: presence MESSAGE", value.message)
                        break
                    case "lesson":
                        // Has a lesson focus been request?
                        if(value.message.value.focus) {
                            if(value.message.value.focus.roomId !== this._roomId) {
                                const sceneLinkUrl = `${this.dynamicAssetPrefix}/${value.message.value.focus.assetId}`
                                console.log(`AVN responding to focus request to asset '${value.message.value.focus.assetId}' (expecting room ${value.message.value.focus.roomId})`)
                                changeHubAvn(sceneLinkUrl)
                            } else {
                                console.log("AVN focus request room already active")
                            }
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
            this._lastRejoinTimeout = setTimeout(() => this.rejoinDimension(), 0)
        }
    }

    async rejoinDimension(): Promise<void> {
        console.log("AVN: rejoining dimension...")
        const result = await this.joinDimension()
        if (result === DimensionState.OPEN) {
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

    public async joinDimension(): Promise<DimensionState> {
        try {
            if (!this.dimensionId) {
                console.error("No dimension ID has been set")
                return DimensionState.UNSPECIFIED
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
                return DimensionState.UNSPECIFIED
            }
            // First message must say that the dimension is OPEN
            if (value.message.case !== "status" || value.message.value.state !== DimensionState.OPEN) {
                console.error(`AVN failed to join dimension '${this.dimensionId}', got message ${value.message}`)
                abortController.abort("STREAM_STATE_UNEXPECTED")
                return value.message.case === "status" ? value.message.value.state : DimensionState.UNSPECIFIED
            }
            console.log(`AVN: Joined dimension '${this.dimensionId}'`)
            // Record abort controller
            this._streamAbortController = abortController
            // Start message loop
            this._streamMessageHandlerPromise = this.streamMessageHandler(abortController, dimensionStreamIterator)

            return DimensionState.OPEN
        } catch (error: unknown) {
            console.warn(`AVN: exception joining dimension: ${error instanceof Error ? error.message : "Unknown error"}`)
        }
        return DimensionState.UNSPECIFIED
    }

    public async enterRoom(roomId: string, sessionId: string): Promise<void> {
        this._roomId = roomId
        await this.Connect.Rooms.enterRoom({ 
            credentials: this._connectionCredentials, 
            roomId, 
            sessionId 
        })
    }

    public async setLessonContext(): Promise<void> {
        const lessonContext = new LessonContext({focus: {
            roomId: this._roomId,
            assetId: this._assetId,
        }})
        const result = await this.Connect.Dimensions.setLessonContext({ 
            credentials: this._connectionCredentials, 
            dimensionId: this._dimensionId,
            context: lessonContext,
        })
        console.log("AVN setLessonContext result", result)
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
        const userData = hub.user_data;
        if (userData) {
            this._allowNavigation = userData.allownavigation;
            if (userData.assetid && this._assetId != userData.assetid) {
                this._assetId = userData.assetid;
                console.info(`AVN: Updated asset id to '${this._assetId}'`);
            } else {
                // Asset ID is expected if room allows navigation
                if (this._allowNavigation) {
                    console.error("AVN: No assetid is set")
                } else {
                    console.info("AVN: No assetid is set")
                }
            }
            if (this._iconUri != userData.iconuri) {
                this._iconUri = userData.iconuri;
                console.info(`AVN: Updated icon to '${this._iconUri}'`);
                if (!this._iconUri) {
                    console.error("AVN: No iconuri is set")
                }
            }
            this._ownerIsAuthenticated = userData.ownerisauthenticated;
            this._ownerIsSubscriber = userData.ownerissubscriber;
            this._isSolo = hub.room_size <= 1;
            this._description = userData.description;
            this._instructions = userData.instructions;

        } else {
            console.error("AVN: No user_data is set")
        }
    }

    get iconUri() {
        return this._iconUri;
    }

    get description() {
        return this._description;
    }

    get instructions() {
        return this._instructions;
    }

    get isSolo() {
        return this._isSolo;
    }

    // TODO: LEGACY
    get allowNavigation() {
        return this._allowNavigation;
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

}

export const AVN = new AVNBridge()

// Useful for accessing AVN singleton in legacy Javascript contexts 
// where we don't want to include this file because it breaks the build for the admin pages
declare global { var AVNGlobal: AVNBridge }
global.AVNGlobal = AVN