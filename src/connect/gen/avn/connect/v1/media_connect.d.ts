import { GetMediaTypeExtensionMapRequest, GetMediaTypeExtensionMapResponse } from "./media_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.MediaService
 */
export declare const MediaService: {
    readonly typeName: "avn.connect.v1.MediaService";
    readonly methods: {
        /**
         * A mapping of well known file extensions to media types
         *
         * @generated from rpc avn.connect.v1.MediaService.GetMediaTypeExtensionMap
         */
        readonly getMediaTypeExtensionMap: {
            readonly name: "GetMediaTypeExtensionMap";
            readonly I: typeof GetMediaTypeExtensionMapRequest;
            readonly O: typeof GetMediaTypeExtensionMapResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
