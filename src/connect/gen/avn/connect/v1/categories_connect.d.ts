import { AddChildrenRequest, CopyEntityRequest, CreateEntityRequest, CreateEntityResponse, DeleteEntityRequest, EntityInfoListRequest, EntityInfoListResponse, GetEntityRequest, RemoveChildrenRequest, SetEntityPropertiesRequest } from "./entities_pb.js";
import { Category } from "./categories_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { AddTagsRequest, RemoveTagsRequest } from "./tags_pb.js";
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
         * @generated from rpc avn.connect.v1.CategoryService.CopyCategory
         */
        readonly copyCategory: {
            readonly name: "CopyCategory";
            readonly I: typeof CopyEntityRequest;
            readonly O: typeof CreateEntityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get organization categories
         *
         * @generated from rpc avn.connect.v1.CategoryService.GetOrganizationCategories
         */
        readonly getOrganizationCategories: {
            readonly name: "GetOrganizationCategories";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get user categories (previously known as playlists)
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
         * Activity management
         *
         * @generated from rpc avn.connect.v1.CategoryService.AddActivities
         */
        readonly addActivities: {
            readonly name: "AddActivities";
            readonly I: typeof AddChildrenRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.CategoryService.RemoveActivities
         */
        readonly removeActivities: {
            readonly name: "RemoveActivities";
            readonly I: typeof RemoveChildrenRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Tag management
         *
         * @generated from rpc avn.connect.v1.CategoryService.AddTags
         */
        readonly addTags: {
            readonly name: "AddTags";
            readonly I: typeof AddTagsRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.CategoryService.RemoveTags
         */
        readonly removeTags: {
            readonly name: "RemoveTags";
            readonly I: typeof RemoveTagsRequest;
            readonly O: typeof Empty;
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
