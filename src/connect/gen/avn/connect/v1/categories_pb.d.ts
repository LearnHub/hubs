import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { Activity } from "./activities_pb.js";
/**
 * @generated from message avn.connect.v1.Category
 */
export declare class Category extends Message<Category> {
    /**
     * @generated from field: int32 category_id = 1;
     */
    categoryId: number;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string icon_url = 3;
     */
    iconUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 4;
     */
    updated?: Timestamp;
    /**
     * @generated from field: optional string description = 5;
     */
    description?: string;
    /**
     * @generated from field: repeated int32 tags = 6;
     */
    tags: number[];
    constructor(data?: PartialMessage<Category>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Category";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Category;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Category;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Category;
    static equals(a: Category | PlainMessage<Category> | undefined, b: Category | PlainMessage<Category> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetCategoryActivitiesRequest
 */
export declare class GetCategoryActivitiesRequest extends Message<GetCategoryActivitiesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 category_id = 2;
     */
    categoryId: number;
    /**
     * @generated from field: optional string target_language_id = 3;
     */
    targetLanguageId?: string;
    /**
     * @generated from field: optional int32 page_size = 4;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 5;
     */
    pageToken?: string;
    constructor(data?: PartialMessage<GetCategoryActivitiesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetCategoryActivitiesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCategoryActivitiesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCategoryActivitiesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCategoryActivitiesRequest;
    static equals(a: GetCategoryActivitiesRequest | PlainMessage<GetCategoryActivitiesRequest> | undefined, b: GetCategoryActivitiesRequest | PlainMessage<GetCategoryActivitiesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetCategoryActivitiesResponse
 */
export declare class GetCategoryActivitiesResponse extends Message<GetCategoryActivitiesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.Activity results = 1;
     */
    results: Activity[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<GetCategoryActivitiesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetCategoryActivitiesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCategoryActivitiesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCategoryActivitiesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCategoryActivitiesResponse;
    static equals(a: GetCategoryActivitiesResponse | PlainMessage<GetCategoryActivitiesResponse> | undefined, b: GetCategoryActivitiesResponse | PlainMessage<GetCategoryActivitiesResponse> | undefined): boolean;
}
