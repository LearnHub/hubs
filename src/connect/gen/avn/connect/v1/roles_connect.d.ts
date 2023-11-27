import { GetRolesRequest, GetRolesResponse } from "./roles_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.RoleService
 */
export declare const RoleService: {
    readonly typeName: "avn.connect.v1.RoleService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.RoleService.GetRoles
         */
        readonly getRoles: {
            readonly name: "GetRoles";
            readonly I: typeof GetRolesRequest;
            readonly O: typeof GetRolesResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
