import { GetFileUrlRequest, GetFileUrlResponse, GetManifestRequest, UploadManifest } from "./avnfs_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.AvnfsService
 */
export declare const AvnfsService: {
    readonly typeName: "avn.connect.v1.AvnfsService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.AvnfsService.GetFileUrl
         */
        readonly getFileUrl: {
            readonly name: "GetFileUrl";
            readonly I: typeof GetFileUrlRequest;
            readonly O: typeof GetFileUrlResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.AvnfsService.GetPutManifest
         */
        readonly getPutManifest: {
            readonly name: "GetPutManifest";
            readonly I: typeof GetManifestRequest;
            readonly O: typeof UploadManifest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.AvnfsService.GetPostManifest
         */
        readonly getPostManifest: {
            readonly name: "GetPostManifest";
            readonly I: typeof GetManifestRequest;
            readonly O: typeof UploadManifest;
            readonly kind: MethodKind.Unary;
        };
    };
};
