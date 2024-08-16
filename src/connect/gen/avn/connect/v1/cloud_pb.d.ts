import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { TranscodeImageSpec } from "./media_pb.js";
import { OrderClause, TextSearch } from "./entities_pb.js";
import { TagFilter } from "./tags_pb.js";
/**
 * @generated from message avn.connect.v1.CloudFile
 */
export declare class CloudFile extends Message<CloudFile> {
    /**
     * @generated from field: int32 entity_id = 1;
     */
    entityId: number;
    /**
     * Cloud files can be owned by users or organizations
     *
     * @generated from oneof avn.connect.v1.CloudFile.owner
     */
    owner: {
        /**
         * @generated from field: int32 organization_id = 2;
         */
        value: number;
        case: "organizationId";
    } | {
        /**
         * @generated from field: int32 user_id = 3;
         */
        value: number;
        case: "userId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * AVNFS URL
     *
     * @generated from field: string file_url = 4;
     */
    fileUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 5;
     */
    updated?: Timestamp;
    /**
     * @generated from field: repeated int32 tags = 6;
     */
    tags: number[];
    /**
     * In future this should be based on an image request spec in the request
     *
     * @generated from field: string preview_url = 7;
     */
    previewUrl: string;
    /**
     * CLOUD_FILE_LEGACY_ID
     *
     * @generated from field: string legacy_id = 10;
     */
    legacyId: string;
    /**
     * Legacy fields
     *
     * @generated from field: optional string user_name = 11;
     */
    userName?: string;
    /**
     * @generated from field: optional string device_name = 12;
     */
    deviceName?: string;
    /**
     * @generated from field: optional int32 place_id = 13;
     */
    placeId?: number;
    /**
     * @generated from field: optional string file_name = 14;
     */
    fileName?: string;
    /**
     * @generated from field: optional string media_type = 15;
     */
    mediaType?: string;
    /**
     * @generated from field: optional int64 size_bytes = 16;
     */
    sizeBytes?: bigint;
    constructor(data?: PartialMessage<CloudFile>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CloudFile";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CloudFile;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CloudFile;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CloudFile;
    static equals(a: CloudFile | PlainMessage<CloudFile> | undefined, b: CloudFile | PlainMessage<CloudFile> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetCloudFilesRequest
 */
export declare class GetCloudFilesRequest extends Message<GetCloudFilesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: repeated int32 entity_ids = 2;
     */
    entityIds: number[];
    /**
     * @generated from field: avn.connect.v1.TranscodeImageSpec preview_spec = 3;
     */
    previewSpec?: TranscodeImageSpec;
    /**
     * @generated from field: repeated string legacy_ids = 10;
     */
    legacyIds: string[];
    constructor(data?: PartialMessage<GetCloudFilesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetCloudFilesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCloudFilesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCloudFilesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCloudFilesRequest;
    static equals(a: GetCloudFilesRequest | PlainMessage<GetCloudFilesRequest> | undefined, b: GetCloudFilesRequest | PlainMessage<GetCloudFilesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetCloudFilesResponse
 */
export declare class GetCloudFilesResponse extends Message<GetCloudFilesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.CloudFile results = 1;
     */
    results: CloudFile[];
    constructor(data?: PartialMessage<GetCloudFilesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetCloudFilesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCloudFilesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCloudFilesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCloudFilesResponse;
    static equals(a: GetCloudFilesResponse | PlainMessage<GetCloudFilesResponse> | undefined, b: GetCloudFilesResponse | PlainMessage<GetCloudFilesResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.AddCloudFilesRequest
 */
export declare class AddCloudFilesRequest extends Message<AddCloudFilesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from oneof avn.connect.v1.AddCloudFilesRequest.owner
     */
    owner: {
        /**
         * @generated from field: int32 organization_id = 2;
         */
        value: number;
        case: "organizationId";
    } | {
        /**
         * @generated from field: int32 user_id = 3;
         */
        value: number;
        case: "userId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: repeated string file_urls = 4;
     */
    fileUrls: string[];
    constructor(data?: PartialMessage<AddCloudFilesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AddCloudFilesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddCloudFilesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddCloudFilesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddCloudFilesRequest;
    static equals(a: AddCloudFilesRequest | PlainMessage<AddCloudFilesRequest> | undefined, b: AddCloudFilesRequest | PlainMessage<AddCloudFilesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.AddCloudFilesResponse
 */
export declare class AddCloudFilesResponse extends Message<AddCloudFilesResponse> {
    /**
     * @generated from field: repeated int32 entity_ids = 1;
     */
    entityIds: number[];
    /**
     * CLOUD_FILE_LEGACY_ID
     *
     * @generated from field: repeated string legacy_ids = 10;
     */
    legacyIds: string[];
    constructor(data?: PartialMessage<AddCloudFilesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AddCloudFilesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddCloudFilesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddCloudFilesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddCloudFilesResponse;
    static equals(a: AddCloudFilesResponse | PlainMessage<AddCloudFilesResponse> | undefined, b: AddCloudFilesResponse | PlainMessage<AddCloudFilesResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RemoveCloudFilesRequest
 */
export declare class RemoveCloudFilesRequest extends Message<RemoveCloudFilesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: repeated int32 entity_ids = 2;
     */
    entityIds: number[];
    /**
     * @generated from field: repeated string legacy_ids = 10;
     */
    legacyIds: string[];
    constructor(data?: PartialMessage<RemoveCloudFilesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RemoveCloudFilesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveCloudFilesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveCloudFilesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveCloudFilesRequest;
    static equals(a: RemoveCloudFilesRequest | PlainMessage<RemoveCloudFilesRequest> | undefined, b: RemoveCloudFilesRequest | PlainMessage<RemoveCloudFilesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.SearchCloudFilesRequest
 */
export declare class SearchCloudFilesRequest extends Message<SearchCloudFilesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from oneof avn.connect.v1.SearchCloudFilesRequest.owner
     */
    owner: {
        /**
         * @generated from field: int32 organization_id = 2;
         */
        value: number;
        case: "organizationId";
    } | {
        /**
         * @generated from field: int32 user_id = 3;
         */
        value: number;
        case: "userId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * Search text fields
     *
     * @generated from field: optional avn.connect.v1.TextSearch text_search = 4;
     */
    textSearch?: TextSearch;
    /**
     * Not implemented yet
     *
     * @generated from field: repeated avn.connect.v1.TagFilter tag_filters = 5;
     */
    tagFilters: TagFilter[];
    /**
     * @generated from field: repeated string filter_media_types = 6;
     */
    filterMediaTypes: string[];
    /**
     * @generated from field: optional google.protobuf.Timestamp after = 7;
     */
    after?: Timestamp;
    /**
     * @generated from field: optional google.protobuf.Timestamp before = 8;
     */
    before?: Timestamp;
    /**
     * Clauses to order the results by
     *
     * @generated from field: repeated avn.connect.v1.OrderClause order_by = 9;
     */
    orderBy: OrderClause[];
    /**
     * @generated from field: optional int32 page_size = 11;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 12;
     */
    pageToken?: string;
    /**
     * @generated from field: avn.connect.v1.TranscodeImageSpec preview_spec = 13;
     */
    previewSpec?: TranscodeImageSpec;
    constructor(data?: PartialMessage<SearchCloudFilesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SearchCloudFilesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchCloudFilesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchCloudFilesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchCloudFilesRequest;
    static equals(a: SearchCloudFilesRequest | PlainMessage<SearchCloudFilesRequest> | undefined, b: SearchCloudFilesRequest | PlainMessage<SearchCloudFilesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.SearchCloudFilesResponse
 */
export declare class SearchCloudFilesResponse extends Message<SearchCloudFilesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.CloudFile results = 1;
     */
    results: CloudFile[];
    /**
     * @generated from field: optional string next_page_token = 2;
     */
    nextPageToken?: string;
    constructor(data?: PartialMessage<SearchCloudFilesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SearchCloudFilesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchCloudFilesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchCloudFilesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchCloudFilesResponse;
    static equals(a: SearchCloudFilesResponse | PlainMessage<SearchCloudFilesResponse> | undefined, b: SearchCloudFilesResponse | PlainMessage<SearchCloudFilesResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetCloudSummaryRequest
 */
export declare class GetCloudSummaryRequest extends Message<GetCloudSummaryRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from oneof avn.connect.v1.GetCloudSummaryRequest.owner
     */
    owner: {
        /**
         * @generated from field: int32 organization_id = 2;
         */
        value: number;
        case: "organizationId";
    } | {
        /**
         * @generated from field: int32 user_id = 3;
         */
        value: number;
        case: "userId";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<GetCloudSummaryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetCloudSummaryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCloudSummaryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCloudSummaryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCloudSummaryRequest;
    static equals(a: GetCloudSummaryRequest | PlainMessage<GetCloudSummaryRequest> | undefined, b: GetCloudSummaryRequest | PlainMessage<GetCloudSummaryRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetCloudSummaryResponse
 */
export declare class GetCloudSummaryResponse extends Message<GetCloudSummaryResponse> {
    /**
     * @generated from field: int32 total_count = 1;
     */
    totalCount: number;
    /**
     * @generated from field: int64 total_bytes = 2;
     */
    totalBytes: bigint;
    /**
     * @generated from field: int64 capacity_bytes = 3;
     */
    capacityBytes: bigint;
    /**
     * @generated from field: optional google.protobuf.Timestamp oldest = 4;
     */
    oldest?: Timestamp;
    /**
     * @generated from field: optional google.protobuf.Timestamp newest = 5;
     */
    newest?: Timestamp;
    constructor(data?: PartialMessage<GetCloudSummaryResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetCloudSummaryResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCloudSummaryResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCloudSummaryResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCloudSummaryResponse;
    static equals(a: GetCloudSummaryResponse | PlainMessage<GetCloudSummaryResponse> | undefined, b: GetCloudSummaryResponse | PlainMessage<GetCloudSummaryResponse> | undefined): boolean;
}
