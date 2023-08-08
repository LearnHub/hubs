import { GetOrganizationRequest, JoinOrganizationRequest, JoinOrganizationResponse } from "./organizations_pb.js";
import { Organization } from "./organization_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.OrganizationService
 */
export declare const OrganizationService: {
    readonly typeName: "avn.connect.v1.OrganizationService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.OrganizationService.GetOrganization
         */
        readonly getOrganization: {
            readonly name: "GetOrganization";
            readonly I: typeof GetOrganizationRequest;
            readonly O: typeof Organization;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.OrganizationService.JoinOrganization
         */
        readonly joinOrganization: {
            readonly name: "JoinOrganization";
            readonly I: typeof JoinOrganizationRequest;
            readonly O: typeof JoinOrganizationResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
