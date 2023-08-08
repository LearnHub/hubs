import { ToKtxRequest, ToKtxResponse } from "./ktx_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.KtxService
 */
export declare const KtxService: {
    readonly typeName: "avn.connect.v1.KtxService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.KtxService.ToKtx
         */
        readonly toKtx: {
            readonly name: "ToKtx";
            readonly I: typeof ToKtxRequest;
            readonly O: typeof ToKtxResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
