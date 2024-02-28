import { GetEntityRequest } from "./entities_pb.js";
import { User } from "./user_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
import { GetOrganizationMembershipRequest, GetOrganizationMembershipResponse, SearchMemberOrganizationsRequest, SearchMemberOrganizationsResponse } from "./users_pb.js";
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
            readonly I: typeof GetEntityRequest;
            readonly O: typeof User;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get the organizations which the user directly belongs to
         *
         * @generated from rpc avn.connect.v1.UserService.GetOrganizationMembership
         */
        readonly getOrganizationMembership: {
            readonly name: "GetOrganizationMembership";
            readonly I: typeof GetOrganizationMembershipRequest;
            readonly O: typeof GetOrganizationMembershipResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Search organizations the user belongs to directly and by inheritence
         *
         * @generated from rpc avn.connect.v1.UserService.SearchMemberOrganizations
         */
        readonly searchMemberOrganizations: {
            readonly name: "SearchMemberOrganizations";
            readonly I: typeof SearchMemberOrganizationsRequest;
            readonly O: typeof SearchMemberOrganizationsResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
