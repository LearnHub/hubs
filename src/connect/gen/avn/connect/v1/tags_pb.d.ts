import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { TranslationField } from "./translations_pb.js";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from enum avn.connect.v1.TagFilterCondition
 */
export declare enum TagFilterCondition {
    /**
     * @generated from enum value: TAG_FILTER_CONDITION_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: TAG_FILTER_CONDITION_HAS_ANY_OF = 1;
     */
    HAS_ANY_OF = 1,
    /**
     * @generated from enum value: TAG_FILTER_CONDITION_HAS_ALL_OF = 2;
     */
    HAS_ALL_OF = 2,
    /**
     * @generated from enum value: TAG_FILTER_CONDITION_HAS_NONE_OF = 3;
     */
    HAS_NONE_OF = 3
}
/**
 * @generated from message avn.connect.v1.Tag
 */
export declare class Tag extends Message<Tag> {
    /**
     * @generated from field: int32 tag_id = 1;
     */
    tagId: number;
    /**
     * @generated from field: avn.connect.v1.TranslationField name = 2;
     */
    name?: TranslationField;
    /**
     * @generated from field: int32 tag_group_id = 3;
     */
    tagGroupId: number;
    /**
     * @generated from field: int32 sort_order = 4;
     */
    sortOrder: number;
    /**
     * @generated from field: string hex_color = 5;
     */
    hexColor: string;
    constructor(data?: PartialMessage<Tag>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Tag";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Tag;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Tag;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Tag;
    static equals(a: Tag | PlainMessage<Tag> | undefined, b: Tag | PlainMessage<Tag> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TagGroup
 */
export declare class TagGroup extends Message<TagGroup> {
    /**
     * @generated from field: int32 tag_group_id = 1;
     */
    tagGroupId: number;
    /**
     * @generated from field: avn.connect.v1.TranslationField name = 2;
     */
    name?: TranslationField;
    /**
     * @generated from field: string language_id = 3;
     */
    languageId: string;
    /**
     * @generated from field: repeated avn.connect.v1.Tag tags = 4;
     */
    tags: Tag[];
    constructor(data?: PartialMessage<TagGroup>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TagGroup";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TagGroup;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TagGroup;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TagGroup;
    static equals(a: TagGroup | PlainMessage<TagGroup> | undefined, b: TagGroup | PlainMessage<TagGroup> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetTagsRequest
 */
export declare class GetTagsRequest extends Message<GetTagsRequest> {
    /**
     * @generated from field: repeated int32 tag_ids = 1;
     */
    tagIds: number[];
    /**
     * @generated from field: optional string language_id = 2;
     */
    languageId?: string;
    constructor(data?: PartialMessage<GetTagsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetTagsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTagsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTagsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTagsRequest;
    static equals(a: GetTagsRequest | PlainMessage<GetTagsRequest> | undefined, b: GetTagsRequest | PlainMessage<GetTagsRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetTagsResponse
 */
export declare class GetTagsResponse extends Message<GetTagsResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.Tag tags = 1;
     */
    tags: Tag[];
    constructor(data?: PartialMessage<GetTagsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetTagsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTagsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTagsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTagsResponse;
    static equals(a: GetTagsResponse | PlainMessage<GetTagsResponse> | undefined, b: GetTagsResponse | PlainMessage<GetTagsResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetTagGroupRequest
 */
export declare class GetTagGroupRequest extends Message<GetTagGroupRequest> {
    /**
     * @generated from field: int32 tag_group_id = 1;
     */
    tagGroupId: number;
    /**
     * @generated from field: optional string language_id = 2;
     */
    languageId?: string;
    constructor(data?: PartialMessage<GetTagGroupRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetTagGroupRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTagGroupRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTagGroupRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTagGroupRequest;
    static equals(a: GetTagGroupRequest | PlainMessage<GetTagGroupRequest> | undefined, b: GetTagGroupRequest | PlainMessage<GetTagGroupRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetTagGroupResponse
 */
export declare class GetTagGroupResponse extends Message<GetTagGroupResponse> {
    /**
     * @generated from field: avn.connect.v1.TagGroup tag_group = 1;
     */
    tagGroup?: TagGroup;
    constructor(data?: PartialMessage<GetTagGroupResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetTagGroupResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTagGroupResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTagGroupResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTagGroupResponse;
    static equals(a: GetTagGroupResponse | PlainMessage<GetTagGroupResponse> | undefined, b: GetTagGroupResponse | PlainMessage<GetTagGroupResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.AddTagsRequest
 */
export declare class AddTagsRequest extends Message<AddTagsRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    /**
     * @generated from field: repeated int32 tags = 3;
     */
    tags: number[];
    /**
     * CLOUD_FILE_LEGACY_ID
     *
     * @generated from field: optional string legacy_id = 10;
     */
    legacyId?: string;
    constructor(data?: PartialMessage<AddTagsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AddTagsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddTagsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddTagsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddTagsRequest;
    static equals(a: AddTagsRequest | PlainMessage<AddTagsRequest> | undefined, b: AddTagsRequest | PlainMessage<AddTagsRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RemoveTagsRequest
 */
export declare class RemoveTagsRequest extends Message<RemoveTagsRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    /**
     * @generated from field: repeated int32 tags = 3;
     */
    tags: number[];
    /**
     * CLOUD_FILE_LEGACY_ID
     *
     * @generated from field: optional string legacy_id = 10;
     */
    legacyId?: string;
    constructor(data?: PartialMessage<RemoveTagsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RemoveTagsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveTagsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveTagsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveTagsRequest;
    static equals(a: RemoveTagsRequest | PlainMessage<RemoveTagsRequest> | undefined, b: RemoveTagsRequest | PlainMessage<RemoveTagsRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TagFilter
 */
export declare class TagFilter extends Message<TagFilter> {
    /**
     * @generated from field: avn.connect.v1.TagFilterCondition condition = 1;
     */
    condition: TagFilterCondition;
    /**
     * @generated from field: repeated int32 tags = 2;
     */
    tags: number[];
    constructor(data?: PartialMessage<TagFilter>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TagFilter";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TagFilter;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TagFilter;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TagFilter;
    static equals(a: TagFilter | PlainMessage<TagFilter> | undefined, b: TagFilter | PlainMessage<TagFilter> | undefined): boolean;
}
