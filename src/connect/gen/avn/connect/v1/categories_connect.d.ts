import { CreateEntityRequest, CreateEntityResponse, DeleteEntityRequest, EntityInfoListRequest, EntityInfoListResponse, GetEntityRequest, SetEntityPropertiesRequest } from "./entities_pb.js";
import { Category } from "./categories_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.CategoryService
 */
export declare const CategoryService: {
    readonly typeName: "avn.connect.v1.CategoryService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.CategoryService.GetCategory
         */
        readonly getCategory: {
            readonly name: "GetCategory";
            readonly I: typeof GetEntityRequest;
            readonly O: typeof Category;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.CategoryService.CreateCategory
         */
        readonly createCategory: {
            readonly name: "CreateCategory";
            readonly I: typeof CreateEntityRequest;
            readonly O: typeof CreateEntityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.CategoryService.DeleteCategory
         */
        readonly deleteCategory: {
            readonly name: "DeleteCategory";
            readonly I: typeof DeleteEntityRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * User categories do not belong to any org (previously known as playlists)
         *
         * @generated from rpc avn.connect.v1.CategoryService.GetUserCategories
         */
        readonly getUserCategories: {
            readonly name: "GetUserCategories";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get all published activities in the given category
         *
         * @generated from rpc avn.connect.v1.CategoryService.GetActivities
         */
        readonly getActivities: {
            readonly name: "GetActivities";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.CategoryService.SetProperties
         */
        readonly setProperties: {
            readonly name: "SetProperties";
            readonly I: typeof SetEntityPropertiesRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
    };
};
