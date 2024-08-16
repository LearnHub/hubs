import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Translation } from "./translations_pb.js";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from enum avn.connect.v1.ActivityType
 */
export declare enum ActivityType {
    /**
     * @generated from enum value: ACTIVITY_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: ACTIVITY_TYPE_FILE = 1;
     */
    FILE = 1,
    /**
     * @generated from enum value: ACTIVITY_TYPE_URL = 2;
     */
    URL = 2,
    /**
     * @generated from enum value: ACTIVITY_TYPE_APP = 3;
     */
    APP = 3,
    /**
     * @generated from enum value: ACTIVITY_TYPE_FOLDER = 4;
     */
    FOLDER = 4
}
/**
 * @generated from enum avn.connect.v1.ActivityFileType
 */
export declare enum ActivityFileType {
    /**
     * @generated from enum value: ACTIVITY_FILE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: ACTIVITY_FILE_TYPE_CONTENT = 1;
     */
    CONTENT = 1,
    /**
     * @generated from enum value: ACTIVITY_FILE_TYPE_SCREENSHOT = 2;
     */
    SCREENSHOT = 2,
    /**
     * @generated from enum value: ACTIVITY_FILE_TYPE_PACKAGE = 3;
     */
    PACKAGE = 3
}
/**
 * @generated from message avn.connect.v1.Activity
 */
export declare class Activity extends Message<Activity> {
    /**
     * @generated from field: int32 entity_id = 1;
     */
    entityId: number;
    /**
     * @generated from field: avn.connect.v1.Translation name = 2;
     */
    name?: Translation;
    /**
     * @generated from field: string icon_url = 3;
     */
    iconUrl: string;
    /**
     * @generated from field: string preview_url = 4;
     */
    previewUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 5;
     */
    updated?: Timestamp;
    /**
     * @generated from field: optional avn.connect.v1.Translation description = 6;
     */
    description?: Translation;
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
     * @generated from oneof avn.connect.v1.Activity.owner
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
     * @generated from field: bool deleted = 12;
     */
    deleted: boolean;
    /**
     * @generated from field: bool available = 13;
     */
    available: boolean;
    /**
     * @generated from field: string asset_id = 14;
     */
    assetId: string;
    /**
     * @generated from field: optional avn.connect.v1.Translation instructions = 15;
     */
    instructions?: Translation;
    /**
     * @generated from field: optional string credit = 16;
     */
    credit?: string;
    /**
     * @generated from field: repeated string screenshot_urls = 17;
     */
    screenshotUrls: string[];
    /**
     * @generated from field: avn.connect.v1.ActivityType type = 18;
     */
    type: ActivityType;
    /**
     * Set ACTIVITY_TYPE_URL types
     *
     * @generated from field: optional string url = 20;
     */
    url?: string;
    /**
     * Set ACTIVITY_TYPE_FILE types
     *
     * @generated from field: repeated string file_urls = 30;
     */
    fileUrls: string[];
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
 * Activities must have a type, so this interface is an extension of CreateEntityRequest
 *
 * @generated from message avn.connect.v1.CreateActivityRequest
 */
export declare class CreateActivityRequest extends Message<CreateActivityRequest> {
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
    /**
     * Activity type
     *
     * @generated from field: avn.connect.v1.ActivityType type = 4;
     */
    type: ActivityType;
    constructor(data?: PartialMessage<CreateActivityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CreateActivityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateActivityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateActivityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateActivityRequest;
    static equals(a: CreateActivityRequest | PlainMessage<CreateActivityRequest> | undefined, b: CreateActivityRequest | PlainMessage<CreateActivityRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.AddActivityFilesRequest
 */
export declare class AddActivityFilesRequest extends Message<AddActivityFilesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    /**
     * @generated from field: repeated string file_urls = 3;
     */
    fileUrls: string[];
    /**
     * @generated from field: avn.connect.v1.ActivityFileType file_type = 4;
     */
    fileType: ActivityFileType;
    /**
     * Replace all existing files?
     *
     * @generated from field: optional bool replace_existing = 5;
     */
    replaceExisting?: boolean;
    constructor(data?: PartialMessage<AddActivityFilesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AddActivityFilesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddActivityFilesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddActivityFilesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddActivityFilesRequest;
    static equals(a: AddActivityFilesRequest | PlainMessage<AddActivityFilesRequest> | undefined, b: AddActivityFilesRequest | PlainMessage<AddActivityFilesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RemoveActivityFilesRequest
 */
export declare class RemoveActivityFilesRequest extends Message<RemoveActivityFilesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    /**
     * @generated from field: repeated string file_urls = 3;
     */
    fileUrls: string[];
    /**
     * @generated from field: avn.connect.v1.ActivityFileType file_type = 4;
     */
    fileType: ActivityFileType;
    constructor(data?: PartialMessage<RemoveActivityFilesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RemoveActivityFilesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveActivityFilesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveActivityFilesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveActivityFilesRequest;
    static equals(a: RemoveActivityFilesRequest | PlainMessage<RemoveActivityFilesRequest> | undefined, b: RemoveActivityFilesRequest | PlainMessage<RemoveActivityFilesRequest> | undefined): boolean;
}
