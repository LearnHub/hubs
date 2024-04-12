import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from enum avn.connect.v1.SortOrder
 */
export declare enum SortOrder {
    /**
     * @generated from enum value: SORT_ORDER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SORT_ORDER_ASC = 1;
     */
    ASC = 1,
    /**
     * @generated from enum value: SORT_ORDER_DESC = 2;
     */
    DESC = 2
}
/**
 * @generated from enum avn.connect.v1.EntityProperty
 */
export declare enum EntityProperty {
    /**
     * @generated from enum value: ENTITY_PROPERTY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: ENTITY_PROPERTY_ID = 1;
     */
    ID = 1,
    /**
     * @generated from enum value: ENTITY_PROPERTY_NAME = 2;
     */
    NAME = 2,
    /**
     * @generated from enum value: ENTITY_PROPERTY_DESCRIPTION = 3;
     */
    DESCRIPTION = 3,
    /**
     * @generated from enum value: ENTITY_PROPERTY_CREATED = 4;
     */
    CREATED = 4,
    /**
     * @generated from enum value: ENTITY_PROPERTY_UPDATED = 5;
     */
    UPDATED = 5,
    /**
     * @generated from enum value: ENTITY_PROPERTY_SIZE = 6;
     */
    SIZE = 6,
    /**
     * @generated from enum value: ENTITY_PROPERTY_SORT_ORDER = 7;
     */
    SORT_ORDER = 7,
    /**
     * @generated from enum value: ENTITY_PROPERTY_ICON_URL = 8;
     */
    ICON_URL = 8,
    /**
     * @generated from enum value: ENTITY_PROPERTY_INSTRUCTIONS = 9;
     */
    INSTRUCTIONS = 9,
    /**
     * @generated from enum value: ENTITY_PROPERTY_CREDIT = 10;
     */
    CREDIT = 10,
    /**
     * @generated from enum value: ENTITY_PROPERTY_ASSET_ID = 11;
     */
    ASSET_ID = 11,
    /**
     * @generated from enum value: ENTITY_PROPERTY_LANGUAGE_ID = 12;
     */
    LANGUAGE_ID = 12,
    /**
     * @generated from enum value: ENTITY_PROPERTY_PUBLISHED = 13;
     */
    PUBLISHED = 13
}
/**
 * Common info for channels, profiles, categories, and activities
 *
 * @generated from message avn.connect.v1.EntityInfo
 */
export declare class EntityInfo extends Message<EntityInfo> {
    /**
     * @generated from field: int32 entity_id = 1;
     */
    entityId: number;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 3;
     */
    updated?: Timestamp;
    /**
     * @generated from field: string icon_url = 4;
     */
    iconUrl: string;
    /**
     * @generated from field: string preview_image_url = 5;
     */
    previewImageUrl: string;
    /**
     * @generated from field: repeated int32 tags = 7;
     */
    tags: number[];
    /**
     * @generated from field: bool available = 8;
     */
    available: boolean;
    /**
     * @generated from field: optional google.protobuf.Timestamp featured = 9;
     */
    featured?: Timestamp;
    /**
     * Currently only used for activities
     *
     * @generated from field: optional string asset_id = 10;
     */
    assetId?: string;
    constructor(data?: PartialMessage<EntityInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.EntityInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityInfo;
    static equals(a: EntityInfo | PlainMessage<EntityInfo> | undefined, b: EntityInfo | PlainMessage<EntityInfo> | undefined): boolean;
}
/**
 * Common request signature for entity types
 *
 * @generated from message avn.connect.v1.GetEntityRequest
 */
export declare class GetEntityRequest extends Message<GetEntityRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    constructor(data?: PartialMessage<GetEntityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetEntityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetEntityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetEntityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetEntityRequest;
    static equals(a: GetEntityRequest | PlainMessage<GetEntityRequest> | undefined, b: GetEntityRequest | PlainMessage<GetEntityRequest> | undefined): boolean;
}
/**
 * Common request for entity lists
 *
 * @generated from message avn.connect.v1.EntityInfoListRequest
 */
export declare class EntityInfoListRequest extends Message<EntityInfoListRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    /**
     * Override to the user agent language
     *
     * @generated from field: optional string language_id = 3;
     */
    languageId?: string;
    /**
     * Search all text fields
     *
     * @generated from field: optional string search_text = 4;
     */
    searchText?: string;
    /**
     * Narrow search results by tag
     *
     * @generated from field: repeated int32 filter_in_tags = 5;
     */
    filterInTags: number[];
    /**
     * @generated from field: repeated int32 filter_out_tags = 6;
     */
    filterOutTags: number[];
    /**
     * One or more clauses to order the results by
     *
     * @generated from field: repeated avn.connect.v1.EntityProperty order_by = 7;
     */
    orderBy: EntityProperty[];
    /**
     * @generated from field: optional avn.connect.v1.SortOrder sort_order = 8;
     */
    sortOrder?: SortOrder;
    /**
     * @generated from field: optional int32 page_size = 9;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 10;
     */
    pageToken?: string;
    constructor(data?: PartialMessage<EntityInfoListRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.EntityInfoListRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityInfoListRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityInfoListRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityInfoListRequest;
    static equals(a: EntityInfoListRequest | PlainMessage<EntityInfoListRequest> | undefined, b: EntityInfoListRequest | PlainMessage<EntityInfoListRequest> | undefined): boolean;
}
/**
 * Common response for entity lists
 *
 * @generated from message avn.connect.v1.EntityInfoListResponse
 */
export declare class EntityInfoListResponse extends Message<EntityInfoListResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.EntityInfo results = 1;
     */
    results: EntityInfo[];
    /**
     * @generated from field: optional string next_page_token = 2;
     */
    nextPageToken?: string;
    constructor(data?: PartialMessage<EntityInfoListResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.EntityInfoListResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityInfoListResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityInfoListResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityInfoListResponse;
    static equals(a: EntityInfoListResponse | PlainMessage<EntityInfoListResponse> | undefined, b: EntityInfoListResponse | PlainMessage<EntityInfoListResponse> | undefined): boolean;
}
/**
 * Generic pattern for entity property setting
 *
 * @generated from message avn.connect.v1.SetEntityPropertyRequest
 */
export declare class SetEntityPropertyRequest extends Message<SetEntityPropertyRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    /**
     * @generated from field: avn.connect.v1.EntityProperty property = 3;
     */
    property: EntityProperty;
    /**
     * @generated from oneof avn.connect.v1.SetEntityPropertyRequest.value
     */
    value: {
        /**
         * @generated from field: bool bool = 4;
         */
        value: boolean;
        case: "bool";
    } | {
        /**
         * @generated from field: int32 int32 = 5;
         */
        value: number;
        case: "int32";
    } | {
        /**
         * @generated from field: int64 int64 = 6;
         */
        value: bigint;
        case: "int64";
    } | {
        /**
         * @generated from field: float float = 7;
         */
        value: number;
        case: "float";
    } | {
        /**
         * @generated from field: double double = 8;
         */
        value: number;
        case: "double";
    } | {
        /**
         * @generated from field: string string = 9;
         */
        value: string;
        case: "string";
    } | {
        /**
         * @generated from field: google.protobuf.Timestamp timestamp = 10;
         */
        value: Timestamp;
        case: "timestamp";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<SetEntityPropertyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SetEntityPropertyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetEntityPropertyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetEntityPropertyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetEntityPropertyRequest;
    static equals(a: SetEntityPropertyRequest | PlainMessage<SetEntityPropertyRequest> | undefined, b: SetEntityPropertyRequest | PlainMessage<SetEntityPropertyRequest> | undefined): boolean;
}
