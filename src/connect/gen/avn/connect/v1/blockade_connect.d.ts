import { GenerateSkyboxRequest, GenerateSkyboxResponse, GetSkyboxStyleFamiliesRequest, GetSkyboxStyleFamiliesResponse } from "./blockade_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.BlockadeService
 */
export declare const BlockadeService: {
    readonly typeName: "avn.connect.v1.BlockadeService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.BlockadeService.GenerateSkybox
         */
        readonly generateSkybox: {
            readonly name: "GenerateSkybox";
            readonly I: typeof GenerateSkyboxRequest;
            readonly O: typeof GenerateSkyboxResponse;
            readonly kind: MethodKind.ServerStreaming;
        };
        /**
         * @generated from rpc avn.connect.v1.BlockadeService.GetSkyboxStyleFamilies
         */
        readonly getSkyboxStyleFamilies: {
            readonly name: "GetSkyboxStyleFamilies";
            readonly I: typeof GetSkyboxStyleFamiliesRequest;
            readonly O: typeof GetSkyboxStyleFamiliesResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
