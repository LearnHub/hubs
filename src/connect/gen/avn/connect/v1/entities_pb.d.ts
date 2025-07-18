import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Translatable, TranslationSpec } from "./translations_pb.js";
import { Authorization } from "./authorization_pb.js";
import { TranscodeImageSpec } from "./media_pb.js";
import { TagFilter } from "./tags_pb.js";
/**
 * @generated from enum avn.connect.v1.SearchFlags
 */
export declare enum SearchFlags {
    /**
     * @generated from enum value: SEARCH_FLAGS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SEARCH_FLAGS_EXACT_MATCH = 1;
     */
    EXACT_MATCH = 1
}
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
     * @generated from enum value: ENTITY_PROPERTY_CONTEXT = 10;
     */
    CONTEXT = 10,
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
    PUBLISHED = 13,
    /**
     * @generated from enum value: ENTITY_PROPERTY_AVAILABLE = 14;
     */
    AVAILABLE = 14,
    /**
     * @generated from enum value: ENTITY_PROPERTY_FEATURED = 15;
     */
    FEATURED = 15,
    /**
     * @generated from enum value: ENTITY_PROPERTY_MAC_ADDRESS = 16;
     */
    MAC_ADDRESS = 16,
    /**
     * @generated from enum value: ENTITY_PROPERTY_SW_VERSION = 17;
     */
    SW_VERSION = 17,
    /**
     * @generated from enum value: ENTITY_PROPERTY_HOSTNAME = 18;
     */
    HOSTNAME = 18,
    /**
     * @generated from enum value: ENTITY_PROPERTY_PLATFORM = 19;
     */
    PLATFORM = 19,
    /**
     * @generated from enum value: ENTITY_PROPERTY_APPROVED = 20;
     */
    APPROVED = 20,
    /**
     * @generated from enum value: ENTITY_PROPERTY_FILENAME = 21;
     */
    FILENAME = 21,
    /**
     * @generated from enum value: ENTITY_PROPERTY_ITEM_COUNT = 22;
     */
    ITEM_COUNT = 22,
    /**
     * @generated from enum value: ENTITY_PROPERTY_TRACK_COUNT = 23;
     */
    TRACK_COUNT = 23,
    /**
     * @generated from enum value: ENTITY_PROPERTY_TAGS = 24;
     */
    TAGS = 24,
    /**
     * @generated from enum value: ENTITY_PROPERTY_ADDRESS = 25;
     */
    ADDRESS = 25,
    /**
     * @generated from enum value: ENTITY_PROPERTY_CITY = 26;
     */
    CITY = 26,
    /**
     * @generated from enum value: ENTITY_PROPERTY_STATE = 27;
     */
    STATE = 27,
    /**
     * @generated from enum value: ENTITY_PROPERTY_POSTCODE = 28;
     */
    POSTCODE = 28,
    /**
     * @generated from enum value: ENTITY_PROPERTY_PHONE = 29;
     */
    PHONE = 29,
    /**
     * @generated from enum value: ENTITY_PROPERTY_EMAIL = 30;
     */
    EMAIL = 30,
    /**
     * @generated from enum value: ENTITY_PROPERTY_KEYWORDS = 31;
     */
    KEYWORDS = 31,
    /**
     * @generated from enum value: ENTITY_PROPERTY_SUMMARY = 32;
     */
    SUMMARY = 32
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
     * @generated from field: avn.connect.v1.Translatable name = 2;
     */
    name?: Translatable;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 3;
     */
    updated?: Timestamp;
    /**
     * @generated from field: string icon_url = 4;
     */
    iconUrl: string;
    /**
     * @generated from field: string preview_url = 5;
     */
    previewUrl: string;
    /**
     * An indication of the origin of the entity
     *
     * @generated from field: optional string context = 6;
     */
    context?: string;
    /**
     * @generated from field: repeated int32 tags = 7;
     */
    tags: number[];
    /**
     * @generated from field: optional google.protobuf.Timestamp published = 8;
     */
    published?: Timestamp;
    /**
     * @generated from field: optional google.protobuf.Timestamp featured = 9;
     */
    featured?: Timestamp;
    /**
     * @generated from oneof avn.connect.v1.EntityInfo.owner
     */
    owner: {
        /**
         * @generated from field: int32 organization_id = 10;
         */
        value: number;
        case: "organizationId";
    } | {
        /**
         * @generated from field: int32 user_id = 11;
         */
        value: number;
        case: "userId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: bool available = 20;
     */
    available: boolean;
    /**
     * @generated from field: optional string asset_id = 21;
     */
    assetId?: string;
    /**
     * @generated from field: optional int64 size_bytes = 22;
     */
    sizeBytes?: bigint;
    /**
     * @generated from field: optional int32 item_count = 30;
     */
    itemCount?: number;
    /**
     * @generated from field: optional int32 track_count = 31;
     */
    trackCount?: number;
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
    /**
     * @generated from field: avn.connect.v1.TranslationSpec translate = 3;
     */
    translate?: TranslationSpec;
    /**
     * @generated from field: optional avn.connect.v1.TranscodeImageSpec icon_spec = 4;
     */
    iconSpec?: TranscodeImageSpec;
    /**
     * @generated from field: optional avn.connect.v1.TranscodeImageSpec preview_spec = 5;
     */
    previewSpec?: TranscodeImageSpec;
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
 * @generated from message avn.connect.v1.CreateEntityRequest
 */
export declare class CreateEntityRequest extends Message<CreateEntityRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * Entities with no organization belong to the creating user by default
     *
     * @generated from field: optional int32 organization_id = 2;
     */
    organizationId?: number;
    /**
     * Override to the user agent language
     *
     * @generated from field: optional string language_id = 3;
     */
    languageId?: string;
    constructor(data?: PartialMessage<CreateEntityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CreateEntityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateEntityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateEntityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateEntityRequest;
    static equals(a: CreateEntityRequest | PlainMessage<CreateEntityRequest> | undefined, b: CreateEntityRequest | PlainMessage<CreateEntityRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CreateEntityResponse
 */
export declare class CreateEntityResponse extends Message<CreateEntityResponse> {
    /**
     * @generated from field: int32 entity_id = 1;
     */
    entityId: number;
    constructor(data?: PartialMessage<CreateEntityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CreateEntityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateEntityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateEntityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateEntityResponse;
    static equals(a: CreateEntityResponse | PlainMessage<CreateEntityResponse> | undefined, b: CreateEntityResponse | PlainMessage<CreateEntityResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.DeleteEntityRequest
 */
export declare class DeleteEntityRequest extends Message<DeleteEntityRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    constructor(data?: PartialMessage<DeleteEntityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.DeleteEntityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteEntityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteEntityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteEntityRequest;
    static equals(a: DeleteEntityRequest | PlainMessage<DeleteEntityRequest> | undefined, b: DeleteEntityRequest | PlainMessage<DeleteEntityRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CopyEntityRequest
 */
export declare class CopyEntityRequest extends Message<CopyEntityRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * Entities with no organization belong to the creating user by default
     *
     * @generated from field: optional int32 organization_id = 2;
     */
    organizationId?: number;
    /**
     * Target entity to copy
     *
     * @generated from field: optional int32 target_id = 3;
     */
    targetId?: number;
    constructor(data?: PartialMessage<CopyEntityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CopyEntityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CopyEntityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CopyEntityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CopyEntityRequest;
    static equals(a: CopyEntityRequest | PlainMessage<CopyEntityRequest> | undefined, b: CopyEntityRequest | PlainMessage<CopyEntityRequest> | undefined): boolean;
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
     * IDs of container elements (e.g. categories) or owner organizations (i.e. channels)
     *
     * @generated from field: repeated int32 entity_ids = 2;
     */
    entityIds: number[];
    /**
     * @generated from field: avn.connect.v1.TranslationSpec translate = 3;
     */
    translate?: TranslationSpec;
    /**
     * Search text fields
     *
     * @generated from field: optional avn.connect.v1.TextSearch text_search = 4;
     */
    textSearch?: TextSearch;
    /**
     * Return entities for which all the TagFilters are true
     *
     * @generated from field: repeated avn.connect.v1.TagFilter tag_filters = 5;
     */
    tagFilters: TagFilter[];
    /**
     * Clauses to order the results by
     *
     * @generated from field: repeated avn.connect.v1.OrderClause order_by = 7;
     */
    orderBy: OrderClause[];
    /**
     * @generated from field: optional int32 page_size = 8;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 9;
     */
    pageToken?: string;
    /**
     * @generated from field: optional avn.connect.v1.TranscodeImageSpec icon_spec = 10;
     */
    iconSpec?: TranscodeImageSpec;
    /**
     * @generated from field: optional avn.connect.v1.TranscodeImageSpec preview_spec = 11;
     */
    previewSpec?: TranscodeImageSpec;
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
 * @generated from message avn.connect.v1.AddChildrenRequest
 */
export declare class AddChildrenRequest extends Message<AddChildrenRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 parent_id = 2;
     */
    parentId: number;
    /**
     * @generated from field: repeated int32 child_ids = 3;
     */
    childIds: number[];
    /**
     * @generated from field: optional bool replace_existing = 4;
     */
    replaceExisting?: boolean;
    constructor(data?: PartialMessage<AddChildrenRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AddChildrenRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddChildrenRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddChildrenRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddChildrenRequest;
    static equals(a: AddChildrenRequest | PlainMessage<AddChildrenRequest> | undefined, b: AddChildrenRequest | PlainMessage<AddChildrenRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RemoveChildrenRequest
 */
export declare class RemoveChildrenRequest extends Message<RemoveChildrenRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 parent_id = 2;
     */
    parentId: number;
    /**
     * @generated from field: repeated int32 child_ids = 3;
     */
    childIds: number[];
    constructor(data?: PartialMessage<RemoveChildrenRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RemoveChildrenRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveChildrenRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveChildrenRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveChildrenRequest;
    static equals(a: RemoveChildrenRequest | PlainMessage<RemoveChildrenRequest> | undefined, b: RemoveChildrenRequest | PlainMessage<RemoveChildrenRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.EntityMetadata
 */
export declare class EntityMetadata extends Message<EntityMetadata> {
    /**
     * @generated from field: int32 entity_id = 1;
     */
    entityId: number;
    /**
     * @generated from field: string key = 2;
     */
    key: string;
    /**
     * @generated from field: optional string value = 3;
     */
    value?: string;
    constructor(data?: PartialMessage<EntityMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.EntityMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityMetadata;
    static equals(a: EntityMetadata | PlainMessage<EntityMetadata> | undefined, b: EntityMetadata | PlainMessage<EntityMetadata> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.MetadataRequest
 */
export declare class MetadataRequest extends Message<MetadataRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: avn.connect.v1.EntityMetadata metadata = 2;
     */
    metadata?: EntityMetadata;
    constructor(data?: PartialMessage<MetadataRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.MetadataRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MetadataRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MetadataRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MetadataRequest;
    static equals(a: MetadataRequest | PlainMessage<MetadataRequest> | undefined, b: MetadataRequest | PlainMessage<MetadataRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetMetadataResponse
 */
export declare class GetMetadataResponse extends Message<GetMetadataResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.EntityMetadata results = 1;
     */
    results: EntityMetadata[];
    constructor(data?: PartialMessage<GetMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMetadataResponse;
    static equals(a: GetMetadataResponse | PlainMessage<GetMetadataResponse> | undefined, b: GetMetadataResponse | PlainMessage<GetMetadataResponse> | undefined): boolean;
}
/**
 * Generic pattern for entity property setting
 *
 * @generated from message avn.connect.v1.SetEntityPropertiesRequest
 */
export declare class SetEntityPropertiesRequest extends Message<SetEntityPropertiesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    /**
     * @generated from field: repeated avn.connect.v1.EntityPropertyState property_states = 3;
     */
    propertyStates: EntityPropertyState[];
    constructor(data?: PartialMessage<SetEntityPropertiesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SetEntityPropertiesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetEntityPropertiesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetEntityPropertiesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetEntityPropertiesRequest;
    static equals(a: SetEntityPropertiesRequest | PlainMessage<SetEntityPropertiesRequest> | undefined, b: SetEntityPropertiesRequest | PlainMessage<SetEntityPropertiesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.EntityPropertyState
 */
export declare class EntityPropertyState extends Message<EntityPropertyState> {
    /**
     * @generated from field: avn.connect.v1.EntityProperty property = 3;
     */
    property: EntityProperty;
    /**
     * @generated from oneof avn.connect.v1.EntityPropertyState.state
     */
    state: {
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
         * @generated from field: bytes bytes = 10;
         */
        value: Uint8Array;
        case: "bytes";
    } | {
        /**
         * @generated from field: google.protobuf.Timestamp timestamp = 11;
         */
        value: Timestamp;
        case: "timestamp";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<EntityPropertyState>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.EntityPropertyState";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EntityPropertyState;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EntityPropertyState;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EntityPropertyState;
    static equals(a: EntityPropertyState | PlainMessage<EntityPropertyState> | undefined, b: EntityPropertyState | PlainMessage<EntityPropertyState> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TextSearch
 */
export declare class TextSearch extends Message<TextSearch> {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
    /**
     * @generated from field: repeated avn.connect.v1.EntityProperty properties = 2;
     */
    properties: EntityProperty[];
    /**
     * @generated from field: repeated avn.connect.v1.SearchFlags conditions = 3;
     */
    conditions: SearchFlags[];
    constructor(data?: PartialMessage<TextSearch>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TextSearch";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TextSearch;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TextSearch;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TextSearch;
    static equals(a: TextSearch | PlainMessage<TextSearch> | undefined, b: TextSearch | PlainMessage<TextSearch> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.OrderClause
 */
export declare class OrderClause extends Message<OrderClause> {
    /**
     * @generated from field: avn.connect.v1.EntityProperty property = 7;
     */
    property: EntityProperty;
    /**
     * @generated from field: optional avn.connect.v1.SortOrder sort_order = 8;
     */
    sortOrder?: SortOrder;
    constructor(data?: PartialMessage<OrderClause>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.OrderClause";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrderClause;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrderClause;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrderClause;
    static equals(a: OrderClause | PlainMessage<OrderClause> | undefined, b: OrderClause | PlainMessage<OrderClause> | undefined): boolean;
}
