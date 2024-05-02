import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { TranslationField } from "./translations_pb.js";
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
     * @generated from field: int32 activity_id = 1;
     */
    activityId: number;
    /**
     * @generated from field: string asset_id = 2;
     */
    assetId: string;
    /**
     * @generated from field: avn.connect.v1.TranslationField name = 3;
     */
    name?: TranslationField;
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
     * @generated from field: optional avn.connect.v1.TranslationField description = 7;
     */
    description?: TranslationField;
    /**
     * @generated from field: repeated int32 tags = 8;
     */
    tags: number[];
    /**
     * @generated from field: optional google.protobuf.Timestamp featured = 9;
     */
    featured?: Timestamp;
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
    /**
     * @generated from field: optional avn.connect.v1.TranslationField instructions = 13;
     */
    instructions?: TranslationField;
    /**
     * @generated from field: optional string credit = 14;
     */
    credit?: string;
    /**
     * @generated from field: avn.connect.v1.ActivityType type = 15;
     */
    type: ActivityType;
    /**
     * @generated from field: repeated string screenshot_urls = 16;
     */
    screenshotUrls: string[];
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
 * @generated from message avn.connect.v1.AddActivityFilesRequest
 */
export declare class AddActivityFilesRequest extends Message<AddActivityFilesRequest> {
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
    /**
     * @generated from field: avn.connect.v1.ActivityFileType file_type = 4;
     */
    fileType: ActivityFileType;
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
     * @generated from field: int32 activity_id = 2;
     */
    activityId: number;
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
/**
 * @generated from message avn.connect.v1.RemoveAllActivityFilesRequest
 */
export declare class RemoveAllActivityFilesRequest extends Message<RemoveAllActivityFilesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 activity_id = 2;
     */
    activityId: number;
    /**
     * @generated from field: avn.connect.v1.ActivityFileType file_type = 3;
     */
    fileType: ActivityFileType;
    constructor(data?: PartialMessage<RemoveAllActivityFilesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RemoveAllActivityFilesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveAllActivityFilesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveAllActivityFilesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveAllActivityFilesRequest;
    static equals(a: RemoveAllActivityFilesRequest | PlainMessage<RemoveAllActivityFilesRequest> | undefined, b: RemoveAllActivityFilesRequest | PlainMessage<RemoveAllActivityFilesRequest> | undefined): boolean;
}
