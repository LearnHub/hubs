import { AVNConnect } from "connect-sdk"
import { DimensionState, JoinDimensionResponse } from "connect-sdk/dist/gen/avn/connect/v1/dimensions_pb"
import { HealthCheckResponse_ServingStatus } from "connect-sdk/dist/gen/grpc/health/v1/healthcheck_pb"

// For debug
const DockerMode = true

class AVNBridge {

    // TODO: NOT CLEAR WHICH OF THESE LEGACY FIELDS ARE STILL USEFUL
    _iconUri: string | null = null
    _mediaEndpoint: string | null = null
    _ownerIsAuthenticated = false
    _ownerIsSubscriber = false
    _allowNavigation = true
    _isSolo = false
    _description: string | null = null
    _instructions: string | null = null
    _assetDomain = DockerMode ? "http://localhost:8181" : "https://rest.avncloud.com";

    public Connect = new AVNConnect(DockerMode ? "http://127.0.0.1:8282" : "https://gweb.avncloud.com")

    public async isHealthy(): Promise<boolean> {
        const healthCheckResult = await this.Connect.Health.check({})
        console.info(`AVN health check result: ${healthCheckResult.status}`)
        return healthCheckResult.status === HealthCheckResponse_ServingStatus.SERVING
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
        const openDimensionResult = await this.Connect.Dimensions.openDimension({})
        this._dimensionId = openDimensionResult.dimensionId
        this._assetId = openDimensionResult.defaultAssetId
        return true
    }

    public async setDimensionFromRoomId(roomId: string): Promise<boolean> {
        try {
            const getRoomDimensionResult = await this.Connect.Rooms.getRoomDimension({ roomId: roomId })
            this._dimensionId = getRoomDimensionResult.dimensionId
            console.log(`AVN matched dimension ID '${this._dimensionId}' for room`)
            this._mediaEndpoint = `${this._assetDomain}/com/Dimensions.cfc?method=media&dimensionid=${this._dimensionId}`;
            return true
        } catch {
            console.error(`AVN failed to match dimension`)
        }
        return false
    }

    public async joinDimension(): Promise<DimensionState> {
        if (!this.dimensionId) {
            console.error("No dimension ID has been set")
            return DimensionState.UNSPECIFIED
        }
        const dimensionStream = this.Connect.Dimensions.joinDimension({ dimensionId: this.dimensionId })
        const dimensionStreamIterator: AsyncIterator<JoinDimensionResponse, JoinDimensionResponse> = dimensionStream[Symbol.asyncIterator]()
        const { done, value } = await dimensionStreamIterator.next()
        if (done) {
            console.error(`AVN dimension stream unexpectedly terminated`)
            return DimensionState.UNSPECIFIED
        }
        if (value.state !== DimensionState.OPEN) {
            console.error(`AVN failed to join dimension '${this.dimensionId}', got state ${value.state}`)
            return value.state
        }

        //TODO: MONITOR FOR DIMENSION CLOSING

        return DimensionState.OPEN
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

    transformRoomUrl(url: string) {
        // Use the absolute avatar URL is supplied otherwise it is a scene link
        // if no asset ID is supplied then the scene link is void because this room is not navigable
        // Note: the fragment sets the waypoint for the users entry position
        return this._assetId
            ? url.replace(this.dynamicAssetPrefix, `${this._assetDomain}/${this._dimensionId}`) + "#" + this._assetId
            : "";
    }

    async fetchRoomData(assetid: string) {
        const resolveRoomUrl = `${this._assetDomain}/com/Dimensions.cfc?method=room&dimensionid=${this._dimensionId}&assetid=${assetid}`;
        const resolveRoomResponse = await fetch(resolveRoomUrl);
        const roomData = await resolveRoomResponse.json();
        return roomData;
    }

    // Media

    isAvnUrl(url: string) {
        return url.startsWith(this.dynamicAssetPrefix);
    }

    get mediaEndpoint() {
        return this._mediaEndpoint;
    }


}

export const AVN = new AVNBridge()