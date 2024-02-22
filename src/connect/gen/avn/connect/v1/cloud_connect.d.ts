import { AddCloudFilesRequest, AddCloudFilesResponse, GetCloudFilesRequest, GetCloudFilesResponse, GetCloudSummaryRequest, GetCloudSummaryResponse, RemoveCloudFilesRequest, SearchCloudFilesRequest, SearchCloudFilesResponse } from "./cloud_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { AddTagsRequest, RemoveTagsRequest } from "./tags_pb.js";
/**
 * @generated from service avn.connect.v1.CloudService
 */
export declare const CloudService: {
    readonly typeName: "avn.connect.v1.CloudService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.CloudService.GetCloudFiles
         */
        readonly getCloudFiles: {
            readonly name: "GetCloudFiles";
            readonly I: typeof GetCloudFilesRequest;
            readonly O: typeof GetCloudFilesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.CloudService.AddCloudFiles
         */
        readonly addCloudFiles: {
            readonly name: "AddCloudFiles";
            readonly I: typeof AddCloudFilesRequest;
            readonly O: typeof AddCloudFilesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.CloudService.RemoveCloudFiles
         */
        readonly removeCloudFiles: {
            readonly name: "RemoveCloudFiles";
            readonly I: typeof RemoveCloudFilesRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.CloudService.AddTags
         */
        readonly addTags: {
            readonly name: "AddTags";
            readonly I: typeof AddTagsRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.CloudService.RemoveTags
         */
        readonly removeTags: {
            readonly name: "RemoveTags";
            readonly I: typeof RemoveTagsRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.CloudService.SearchCloudFiles
         */
        readonly searchCloudFiles: {
            readonly name: "SearchCloudFiles";
            readonly I: typeof SearchCloudFilesRequest;
            readonly O: typeof SearchCloudFilesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.CloudService.GetCloudSummary
         */
        readonly getCloudSummary: {
            readonly name: "GetCloudSummary";
            readonly I: typeof GetCloudSummaryRequest;
            readonly O: typeof GetCloudSummaryResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
