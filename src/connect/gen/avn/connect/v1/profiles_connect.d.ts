import { EntityInfoListRequest, EntityInfoListResponse, GetEntityRequest, SetEntityPropertiesRequest } from "./entities_pb.js";
import { Profile } from "./profiles_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.ProfileService
 */
export declare const ProfileService: {
    readonly typeName: "avn.connect.v1.ProfileService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.ProfileService.GetProfile
         */
        readonly getProfile: {
            readonly name: "GetProfile";
            readonly I: typeof GetEntityRequest;
            readonly O: typeof Profile;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get all published categories in the given profile
         *
         * @generated from rpc avn.connect.v1.ProfileService.GetCategories
         */
        readonly getCategories: {
            readonly name: "GetCategories";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get all published activities in the given profile
         *
         * @generated from rpc avn.connect.v1.ProfileService.GetActivities
         */
        readonly getActivities: {
            readonly name: "GetActivities";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.ProfileService.SetProperties
         */
        readonly setProperties: {
            readonly name: "SetProperties";
            readonly I: typeof SetEntityPropertiesRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
    };
};
