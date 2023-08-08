import { GetOrganizationMembershipRequest, GetOrganizationMembershipResponse, GetUserRequest } from "./users_pb.js";
import { User } from "./user_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.UserService
 */
export declare const UserService: {
    readonly typeName: "avn.connect.v1.UserService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.UserService.GetUser
         */
        readonly getUser: {
            readonly name: "GetUser";
            readonly I: typeof GetUserRequest;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.UserService.GetOrganizationMembership
         */
        readonly getOrganizationMembership: {
            readonly name: "GetOrganizationMembership";
            readonly I: typeof GetOrganizationMembershipRequest;
            readonly O: typeof GetOrganizationMembershipResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
