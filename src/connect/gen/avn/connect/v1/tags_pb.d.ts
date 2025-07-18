import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Translatable, TranslationSpec } from "./translations_pb.js";
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
 * @generated from enum avn.connect.v1.TagGroupId
 */
export declare enum TagGroupId {
    /**
     * @generated from enum value: TAG_GROUP_ID_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: TAG_GROUP_ID_SUBJECT = 1;
     */
    SUBJECT = 1,
    /**
     * @generated from enum value: TAG_GROUP_ID_AGE_RANGE = 2;
     */
    AGE_RANGE = 2,
    /**
     * @generated from enum value: TAG_GROUP_ID_PLATFORM = 10;
     */
    PLATFORM = 10,
    /**
     * @generated from enum value: TAG_GROUP_ID_MEDIA = 28;
     */
    MEDIA = 28
}
/**
 * @generated from enum avn.connect.v1.TagId
 */
export declare enum TagId {
    /**
     * @generated from enum value: TAG_ID_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * Information
     *
     * @generated from enum value: TAG_ID_EDUVERSE_AI = 2745;
     */
    EDUVERSE_AI = 2745,
    /**
     * @generated from enum value: TAG_ID_AI_GENERATED = 2747;
     */
    AI_GENERATED = 2747,
    /**
     * @generated from enum value: TAG_ID_SKYBOX_AI = 2746;
     */
    SKYBOX_AI = 2746,
    /**
     * @generated from enum value: TAG_ID_CLASS_CANVAS = 2778;
     */
    CLASS_CANVAS = 2778,
    /**
     * @generated from enum value: TAG_ID_NOT_BROWSABLE = 2427;
     */
    NOT_BROWSABLE = 2427,
    /**
     * @generated from enum value: TAG_ID_NAVIGABLE = 2683;
     */
    NAVIGABLE = 2683,
    /**
     * @generated from enum value: TAG_ID_COSPACES = 2743;
     */
    COSPACES = 2743,
    /**
     * @generated from enum value: TAG_ID_THINGLINK = 2742;
     */
    THINGLINK = 2742,
    /**
     * @generated from enum value: TAG_ID_SHIM_CONTAINER = 2795;
     */
    SHIM_CONTAINER = 2795,
    /**
     * Media
     *
     * @generated from enum value: TAG_ID_FLAT = 2715;
     */
    FLAT = 2715,
    /**
     * @generated from enum value: TAG_ID_EQUIRECTANGULAR_360 = 2363;
     */
    EQUIRECTANGULAR_360 = 2363,
    /**
     * @generated from enum value: TAG_ID_EQUIRECTANGULAR_180 = 2550;
     */
    EQUIRECTANGULAR_180 = 2550,
    /**
     * @generated from enum value: TAG_ID_CUBEMAP = 2373;
     */
    CUBEMAP = 2373,
    /**
     * @generated from enum value: TAG_ID_STEREO_TB_LR = 2362;
     */
    STEREO_TB_LR = 2362,
    /**
     * @generated from enum value: TAG_ID_STEREO_SBS = 2364;
     */
    STEREO_SBS = 2364,
    /**
     * @generated from enum value: TAG_ID_AR = 2367;
     */
    AR = 2367,
    /**
     * @generated from enum value: TAG_ID_VR = 2366;
     */
    VR = 2366,
    /**
     * @generated from enum value: TAG_ID_SCENE_GUIDE = 2656;
     */
    SCENE_GUIDE = 2656,
    /**
     * @generated from enum value: TAG_ID_LESSON_PLAN = 2372;
     */
    LESSON_PLAN = 2372,
    /**
     * @generated from enum value: TAG_ID_WORKSHEET = 2371;
     */
    WORKSHEET = 2371,
    /**
     * @generated from enum value: TAG_ID_ANIMATED = 2613;
     */
    ANIMATED = 2613,
    /**
     * @generated from enum value: TAG_ID_INTERACTIVE = 2697;
     */
    INTERACTIVE = 2697,
    /**
     * @generated from enum value: TAG_ID_SCENE = 2375;
     */
    SCENE = 2375,
    /**
     * @generated from enum value: TAG_ID_AVATAR = 2666;
     */
    AVATAR = 2666,
    /**
     * @generated from enum value: TAG_ID_MODEL = 2374;
     */
    MODEL = 2374,
    /**
     * @generated from enum value: TAG_ID_AUDIO = 2655;
     */
    AUDIO = 2655,
    /**
     * @generated from enum value: TAG_ID_IMAGE = 2376;
     */
    IMAGE = 2376,
    /**
     * @generated from enum value: TAG_ID_VIDEO = 2377;
     */
    VIDEO = 2377,
    /**
     * @generated from enum value: TAG_ID_TOPIC = 2741;
     */
    TOPIC = 2741,
    /**
     * @generated from enum value: TAG_ID_THREE_DOF = 2776;
     */
    THREE_DOF = 2776,
    /**
     * @generated from enum value: TAG_ID_SIX_DOF = 2777;
     */
    SIX_DOF = 2777,
    /**
     * Age Ranges
     *
     * @generated from enum value: TAG_ID_AGE_RANGE_UNDER_5 = 17;
     */
    AGE_RANGE_UNDER_5 = 17,
    /**
     * @generated from enum value: TAG_ID_AGE_RANGE_5_TO_7 = 18;
     */
    AGE_RANGE_5_TO_7 = 18,
    /**
     * @generated from enum value: TAG_ID_AGE_RANGE_7_TO_11 = 19;
     */
    AGE_RANGE_7_TO_11 = 19,
    /**
     * @generated from enum value: TAG_ID_AGE_RANGE_11_TO_14 = 20;
     */
    AGE_RANGE_11_TO_14 = 20,
    /**
     * @generated from enum value: TAG_ID_AGE_RANGE_14_TO_16 = 21;
     */
    AGE_RANGE_14_TO_16 = 21,
    /**
     * @generated from enum value: TAG_ID_AGE_RANGE_OVER_16 = 22;
     */
    AGE_RANGE_OVER_16 = 22
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
     * @generated from field: avn.connect.v1.Translatable name = 2;
     */
    name?: Translatable;
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
     * @generated from field: avn.connect.v1.Translatable name = 2;
     */
    name?: Translatable;
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
     * @generated from field: avn.connect.v1.TranslationSpec translate = 2;
     */
    translate?: TranslationSpec;
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
     * @generated from field: avn.connect.v1.TranslationSpec translate = 2;
     */
    translate?: TranslationSpec;
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
