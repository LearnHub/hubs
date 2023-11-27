import { GetProfileActivitiesRequest, GetProfileActivitiesResponse, GetProfileCategoriesRequest, GetProfileCategoriesResponse } from "./profiles_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.ProfileService
 */
export declare const ProfileService: {
    readonly typeName: "avn.connect.v1.ProfileService";
    readonly methods: {
        /**
         * Get all published categories in the given profile
         *
         * @generated from rpc avn.connect.v1.ProfileService.GetCategories
         */
        readonly getCategories: {
            readonly name: "GetCategories";
            readonly I: typeof GetProfileCategoriesRequest;
            readonly O: typeof GetProfileCategoriesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get all published activities in the given profile
         *
         * @generated from rpc avn.connect.v1.ProfileService.GetActivities
         */
        readonly getActivities: {
            readonly name: "GetActivities";
            readonly I: typeof GetProfileActivitiesRequest;
            readonly O: typeof GetProfileActivitiesResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
