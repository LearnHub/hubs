import { TransformMediaRequest, TransformMediaResponse } from "./thinglink_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.ThingLinkService
 */
export declare const ThingLinkService: {
    readonly typeName: "avn.connect.v1.ThingLinkService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.ThingLinkService.TransformMedia
         */
        readonly transformMedia: {
            readonly name: "TransformMedia";
            readonly I: typeof TransformMediaRequest;
            readonly O: typeof TransformMediaResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
