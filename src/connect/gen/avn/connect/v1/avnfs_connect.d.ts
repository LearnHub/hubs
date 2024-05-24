import { GetAltServersRequest, GetAltServersResponse, GetFileUrlRequest, GetFileUrlResponse, GetManifestRequest, ImportUrlRequest, ImportUrlResponse, UploadManifest } from "./avnfs_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.AvnfsService
 */
export declare const AvnfsService: {
    readonly typeName: "avn.connect.v1.AvnfsService";
    readonly methods: {
        /**
         * Verify file exists and return URL if it does
         *
         * @generated from rpc avn.connect.v1.AvnfsService.GetFileUrl
         */
        readonly getFileUrl: {
            readonly name: "GetFileUrl";
            readonly I: typeof GetFileUrlRequest;
            readonly O: typeof GetFileUrlResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * DISABLED UNTIL METADATA ISSUES CAN BE RESOLVED S3_PUT_INSECURE
         * rpc GetPutManifest(GetManifestRequest) returns (UploadManifest);
         *
         * @generated from rpc avn.connect.v1.AvnfsService.GetPostManifest
         */
        readonly getPostManifest: {
            readonly name: "GetPostManifest";
            readonly I: typeof GetManifestRequest;
            readonly O: typeof UploadManifest;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Bring a remote file into AVNFS
         *
         * @generated from rpc avn.connect.v1.AvnfsService.ImportUrl
         */
        readonly importUrl: {
            readonly name: "ImportUrl";
            readonly I: typeof ImportUrlRequest;
            readonly O: typeof ImportUrlResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.AvnfsService.GetAltServers
         */
        readonly getAltServers: {
            readonly name: "GetAltServers";
            readonly I: typeof GetAltServersRequest;
            readonly O: typeof GetAltServersResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
