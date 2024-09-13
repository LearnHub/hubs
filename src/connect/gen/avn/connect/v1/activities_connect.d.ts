import { CopyEntityRequest, CreateEntityResponse, DeleteEntityRequest, EntityInfoListRequest, EntityInfoListResponse, GetEntityRequest, GetMetadataResponse, MetadataRequest, SetEntityPropertiesRequest } from "./entities_pb.js";
import { Activity, AddActivityFilesRequest, CreateActivityRequest, RemoveActivityFilesRequest } from "./activities_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { AddTagsRequest, RemoveTagsRequest } from "./tags_pb.js";
/**
 * @generated from service avn.connect.v1.ActivityService
 */
export declare const ActivityService: {
    readonly typeName: "avn.connect.v1.ActivityService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.ActivityService.GetActivity
         */
        readonly getActivity: {
            readonly name: "GetActivity";
            readonly I: typeof GetEntityRequest;
            readonly O: typeof Activity;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.ActivityService.CreateActivity
         */
        readonly createActivity: {
            readonly name: "CreateActivity";
            readonly I: typeof CreateActivityRequest;
            readonly O: typeof CreateEntityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.ActivityService.DeleteActivity
         */
        readonly deleteActivity: {
            readonly name: "DeleteActivity";
            readonly I: typeof DeleteEntityRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.ActivityService.CopyActivity
         */
        readonly copyActivity: {
            readonly name: "CopyActivity";
            readonly I: typeof CopyEntityRequest;
            readonly O: typeof CreateEntityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get organization activities
         *
         * @generated from rpc avn.connect.v1.ActivityService.GetOrganizationActivities
         */
        readonly getOrganizationActivities: {
            readonly name: "GetOrganizationActivities";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get user activities
         *
         * @generated from rpc avn.connect.v1.ActivityService.GetUserActivities
         */
        readonly getUserActivities: {
            readonly name: "GetUserActivities";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Activity file management
         *
         * @generated from rpc avn.connect.v1.ActivityService.AddFiles
         */
        readonly addFiles: {
            readonly name: "AddFiles";
            readonly I: typeof AddActivityFilesRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.ActivityService.RemoveFiles
         */
        readonly removeFiles: {
            readonly name: "RemoveFiles";
            readonly I: typeof RemoveActivityFilesRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Tag management
         *
         * @generated from rpc avn.connect.v1.ActivityService.AddTags
         */
        readonly addTags: {
            readonly name: "AddTags";
            readonly I: typeof AddTagsRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.ActivityService.RemoveTags
         */
        readonly removeTags: {
            readonly name: "RemoveTags";
            readonly I: typeof RemoveTagsRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Key-value pair metadata per activity
         *
         * @generated from rpc avn.connect.v1.ActivityService.GetMetadata
         */
        readonly getMetadata: {
            readonly name: "GetMetadata";
            readonly I: typeof MetadataRequest;
            readonly O: typeof GetMetadataResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.ActivityService.SetMetadata
         */
        readonly setMetadata: {
            readonly name: "SetMetadata";
            readonly I: typeof MetadataRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Property management
         *
         * @generated from rpc avn.connect.v1.ActivityService.SetProperties
         */
        readonly setProperties: {
            readonly name: "SetProperties";
            readonly I: typeof SetEntityPropertiesRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
    };
};
