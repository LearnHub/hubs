import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { Category } from "./categories_pb.js";
import { Activity } from "./activities_pb.js";
/**
 * @generated from message avn.connect.v1.Profile
 */
export declare class Profile extends Message<Profile> {
    /**
     * @generated from field: int32 profile_id = 1;
     */
    profileId: number;
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
    constructor(data?: PartialMessage<Profile>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Profile";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Profile;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Profile;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Profile;
    static equals(a: Profile | PlainMessage<Profile> | undefined, b: Profile | PlainMessage<Profile> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetProfileCategoriesRequest
 */
export declare class GetProfileCategoriesRequest extends Message<GetProfileCategoriesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 profile_id = 2;
     */
    profileId: number;
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
    constructor(data?: PartialMessage<GetProfileCategoriesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetProfileCategoriesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProfileCategoriesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProfileCategoriesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProfileCategoriesRequest;
    static equals(a: GetProfileCategoriesRequest | PlainMessage<GetProfileCategoriesRequest> | undefined, b: GetProfileCategoriesRequest | PlainMessage<GetProfileCategoriesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetProfileCategoriesResponse
 */
export declare class GetProfileCategoriesResponse extends Message<GetProfileCategoriesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.Category results = 1;
     */
    results: Category[];
    /**
     * @generated from field: optional string next_page_token = 2;
     */
    nextPageToken?: string;
    constructor(data?: PartialMessage<GetProfileCategoriesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetProfileCategoriesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProfileCategoriesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProfileCategoriesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProfileCategoriesResponse;
    static equals(a: GetProfileCategoriesResponse | PlainMessage<GetProfileCategoriesResponse> | undefined, b: GetProfileCategoriesResponse | PlainMessage<GetProfileCategoriesResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetProfileActivitiesRequest
 */
export declare class GetProfileActivitiesRequest extends Message<GetProfileActivitiesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 profile_id = 2;
     */
    profileId: number;
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
    constructor(data?: PartialMessage<GetProfileActivitiesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetProfileActivitiesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProfileActivitiesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProfileActivitiesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProfileActivitiesRequest;
    static equals(a: GetProfileActivitiesRequest | PlainMessage<GetProfileActivitiesRequest> | undefined, b: GetProfileActivitiesRequest | PlainMessage<GetProfileActivitiesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetProfileActivitiesResponse
 */
export declare class GetProfileActivitiesResponse extends Message<GetProfileActivitiesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.Activity results = 1;
     */
    results: Activity[];
    /**
     * @generated from field: optional string next_page_token = 2;
     */
    nextPageToken?: string;
    constructor(data?: PartialMessage<GetProfileActivitiesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetProfileActivitiesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProfileActivitiesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProfileActivitiesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProfileActivitiesResponse;
    static equals(a: GetProfileActivitiesResponse | PlainMessage<GetProfileActivitiesResponse> | undefined, b: GetProfileActivitiesResponse | PlainMessage<GetProfileActivitiesResponse> | undefined): boolean;
}
