import { GetCategoryActivitiesRequest, GetCategoryActivitiesResponse } from "./categories_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.CategoryService
 */
export declare const CategoryService: {
    readonly typeName: "avn.connect.v1.CategoryService";
    readonly methods: {
        /**
         * Get all published activities in the given category
         *
         * @generated from rpc avn.connect.v1.CategoryService.GetActivities
         */
        readonly getActivities: {
            readonly name: "GetActivities";
            readonly I: typeof GetCategoryActivitiesRequest;
            readonly O: typeof GetCategoryActivitiesResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
