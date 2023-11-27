import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from message avn.connect.v1.Activity
 */
export declare class Activity extends Message<Activity> {
    /**
     * @generated from field: int32 activity_id = 1;
     */
    activityId: number;
    /**
     * @generated from field: string asset_id = 2;
     */
    assetId: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string icon_url = 4;
     */
    iconUrl: string;
    /**
     * @generated from field: string preview_image_url = 5;
     */
    previewImageUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 6;
     */
    updated?: Timestamp;
    /**
     * @generated from field: optional string description = 7;
     */
    description?: string;
    /**
     * @generated from field: repeated int32 tags = 8;
     */
    tags: number[];
    /**
     * @generated from field: bool featured = 9;
     */
    featured: boolean;
    /**
     * @generated from field: bool available = 10;
     */
    available: boolean;
    /**
     * @generated from field: repeated string file_urls = 11;
     */
    fileUrls: string[];
    /**
     * @generated from field: int32 organization_id = 12;
     */
    organizationId: number;
    constructor(data?: PartialMessage<Activity>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Activity";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Activity;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Activity;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Activity;
    static equals(a: Activity | PlainMessage<Activity> | undefined, b: Activity | PlainMessage<Activity> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetActivityRequest
 */
export declare class GetActivityRequest extends Message<GetActivityRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 activity_id = 2;
     */
    activityId: number;
    constructor(data?: PartialMessage<GetActivityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetActivityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActivityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActivityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActivityRequest;
    static equals(a: GetActivityRequest | PlainMessage<GetActivityRequest> | undefined, b: GetActivityRequest | PlainMessage<GetActivityRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.AddFilesRequest
 */
export declare class AddFilesRequest extends Message<AddFilesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 activity_id = 2;
     */
    activityId: number;
    /**
     * @generated from field: repeated string file_urls = 3;
     */
    fileUrls: string[];
    constructor(data?: PartialMessage<AddFilesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AddFilesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddFilesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddFilesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddFilesRequest;
    static equals(a: AddFilesRequest | PlainMessage<AddFilesRequest> | undefined, b: AddFilesRequest | PlainMessage<AddFilesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RemoveFilesRequest
 */
export declare class RemoveFilesRequest extends Message<RemoveFilesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 activity_id = 2;
     */
    activityId: number;
    /**
     * @generated from field: repeated string file_urls = 3;
     */
    fileUrls: string[];
    constructor(data?: PartialMessage<RemoveFilesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RemoveFilesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveFilesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveFilesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveFilesRequest;
    static equals(a: RemoveFilesRequest | PlainMessage<RemoveFilesRequest> | undefined, b: RemoveFilesRequest | PlainMessage<RemoveFilesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RemoveAllFilesRequest
 */
export declare class RemoveAllFilesRequest extends Message<RemoveAllFilesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 activity_id = 2;
     */
    activityId: number;
    constructor(data?: PartialMessage<RemoveAllFilesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RemoveAllFilesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveAllFilesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveAllFilesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveAllFilesRequest;
    static equals(a: RemoveAllFilesRequest | PlainMessage<RemoveAllFilesRequest> | undefined, b: RemoveAllFilesRequest | PlainMessage<RemoveAllFilesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.SearchActivitiesRequest
 */
export declare class SearchActivitiesRequest extends Message<SearchActivitiesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 channel_id = 2;
     */
    channelId: number;
    /**
     * @generated from field: string search_text = 3;
     */
    searchText: string;
    /**
     * @generated from field: optional string target_language_id = 4;
     */
    targetLanguageId?: string;
    /**
     * @generated from field: optional int32 page_size = 5;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 6;
     */
    pageToken?: string;
    constructor(data?: PartialMessage<SearchActivitiesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SearchActivitiesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchActivitiesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchActivitiesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchActivitiesRequest;
    static equals(a: SearchActivitiesRequest | PlainMessage<SearchActivitiesRequest> | undefined, b: SearchActivitiesRequest | PlainMessage<SearchActivitiesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.SearchActivitiesResponse
 */
export declare class SearchActivitiesResponse extends Message<SearchActivitiesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.Activity results = 1;
     */
    results: Activity[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<SearchActivitiesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SearchActivitiesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchActivitiesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchActivitiesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchActivitiesResponse;
    static equals(a: SearchActivitiesResponse | PlainMessage<SearchActivitiesResponse> | undefined, b: SearchActivitiesResponse | PlainMessage<SearchActivitiesResponse> | undefined): boolean;
}
