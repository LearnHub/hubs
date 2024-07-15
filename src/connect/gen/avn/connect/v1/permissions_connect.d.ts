import { IsPermittedRequest, IsPermittedResponse } from "./permissions_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.PermissionService
 */
export declare const PermissionService: {
    readonly typeName: "avn.connect.v1.PermissionService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.PermissionService.IsPermitted
         */
        readonly isPermitted: {
            readonly name: "IsPermitted";
            readonly I: typeof IsPermittedRequest;
            readonly O: typeof IsPermittedResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
