import { DockerMode } from "./avn-bridge"
import { AVNConnect } from "connect-sdk"
import { DimensionState, JoinDimensionResponse } from "connect-sdk/dist/gen/avn/connect/v1/dimensions_pb"
import { HealthCheckResponse_ServingStatus } from "connect-sdk/dist/gen/grpc/health/v1/healthcheck_pb"

class AVNBridge2 {

    public Connect = new AVNConnect(DockerMode ? "http://127.0.0.1:8282" : "https://gweb.avncloud.com")

    public async isHealthy() : Promise<boolean> {
        const healthCheckResult = await this.Connect.Health.check({})
        console.info(`AVN health check result: ${healthCheckResult.status}`)
        return healthCheckResult.status === HealthCheckResponse_ServingStatus.SERVING
    }

    _dimensionId : string = ""
    get dimensionId() : string {
        return this._dimensionId
    }

    _assetId : string = ""
    get assetId() : string {
        return this._assetId
    }

    public async openNewDimension() : Promise<boolean> {
        const openDimensionResult = await this.Connect.Dimensions.openDimension({})
        this._dimensionId = openDimensionResult.dimensionId
        this._assetId = openDimensionResult.defaultAssetId
        return true  
    }

    public async setDimensionFromRoomId(roomId: string) : Promise<boolean> {
        try {
            const getRoomDimensionResult = await this.Connect.Rooms.getRoomDimension({roomId: roomId})
            this._dimensionId = getRoomDimensionResult.dimensionId
            console.log(`AVN matched dimension ID '${this._dimensionId}' for room`)
            return true
        } catch {
            console.error(`AVN failed to match dimension`)
        }
        return false
    }

    public async joinDimension() : Promise<boolean> {
        if(!this.dimensionId) {
            console.error("No dimension ID has been set")
            return false
        }
        const dimensionStream = this.Connect.Dimensions.joinDimension({dimensionId: this.dimensionId})
        const dimensionStreamIterator : AsyncIterator<JoinDimensionResponse, JoinDimensionResponse> = dimensionStream[Symbol.asyncIterator]()
        const { done, value : initialState } = await dimensionStreamIterator.next()
        if(done) {
            console.error(`AVN dimension stream unexpectedly terminated`)
            return false
        }
        if(initialState.state !== DimensionState.OPEN) {
            console.error(`AVN failed to join dimension '${this.dimensionId}', got state ${initialState.state}`)
            return false
        }

        //TODO: MONITOR FOR DIMENSION CLOSING
        // for await (const state of dimensionStream) {
        //   console.debug("!!!", state)
        //   break
        // }

        return true
    }
}

export const AVN = new AVNBridge2()