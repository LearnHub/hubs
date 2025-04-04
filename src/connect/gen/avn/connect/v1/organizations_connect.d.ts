import { GetEntityRequest, SetEntityPropertiesRequest } from "./entities_pb.js";
import { CreateOrganizationRequest, CreateOrganizationResponse, JoinOrganizationRequest, JoinOrganizationResponse, Organization } from "./organizations_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
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
            readonly I: typeof GetEntityRequest;
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
        /**
         * rpc CreateNewUserOrganization(CreateNewUserOrganizationRequest) returns (CreateNewUserOrganizationResponse);
         *
         * @generated from rpc avn.connect.v1.OrganizationService.CreateOrganization
         */
        readonly createOrganization: {
            readonly name: "CreateOrganization";
            readonly I: typeof CreateOrganizationRequest;
            readonly O: typeof CreateOrganizationResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Property management
         *
         * @generated from rpc avn.connect.v1.OrganizationService.SetProperties
         */
        readonly setProperties: {
            readonly name: "SetProperties";
            readonly I: typeof SetEntityPropertiesRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
    };
};
