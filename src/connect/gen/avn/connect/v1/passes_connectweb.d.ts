import { GetPassRequest, GetPassResponse } from "./passes_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.PassService
 */
export declare const PassService: {
    readonly typeName: "avn.connect.v1.PassService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.PassService.GetPass
         */
        readonly getPass: {
            readonly name: "GetPass";
            readonly I: typeof GetPassRequest;
            readonly O: typeof GetPassResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
