import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from enum avn.connect.v1.ReleaseChannel
 */
export declare enum ReleaseChannel {
    /**
     * @generated from enum value: RELEASE_CHANNEL_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: RELEASE_CHANNEL_ALPHA = 1;
     */
    ALPHA = 1,
    /**
     * @generated from enum value: RELEASE_CHANNEL_BETA = 2;
     */
    BETA = 2,
    /**
     * @generated from enum value: RELEASE_CHANNEL_PRODUCTION = 3;
     */
    PRODUCTION = 3
}
/**
 * @generated from message avn.connect.v1.AndroidPackage
 */
export declare class AndroidPackage extends Message<AndroidPackage> {
    /**
     * @generated from field: int32 entity_id = 1;
     */
    entityId: number;
    /**
     * Associated activity
     *
     * @generated from field: int32 activity_id = 2;
     */
    activityId: number;
    /**
     * Software release channel targeted
     *
     * @generated from field: avn.connect.v1.ReleaseChannel channel = 3;
     */
    channel: ReleaseChannel;
    /**
     * Package name and class (ANDROID_PACKAGE_REFACTORING)
     *
     * @generated from field: string package_name = 4;
     */
    packageName: string;
    /**
     * @generated from field: optional string package_class = 5;
     */
    packageClass?: string;
    /**
     * APK file
     *
     * @generated from field: string apk_url = 6;
     */
    apkUrl: string;
    /**
     * Optional OBB files
     *
     * @generated from field: optional string obb_main_url = 7;
     */
    obbMainUrl?: string;
    /**
     * @generated from field: optional string obb_patch_url = 8;
     */
    obbPatchUrl?: string;
    /**
     * Minimum Android SDK supported
     *
     * @generated from field: int32 min_sdk = 9;
     */
    minSdk: number;
    /**
     * Target ABI if architecture specific
     *
     * @generated from field: optional string target_abi = 10;
     */
    targetAbi?: string;
    /**
     * @generated from field: google.protobuf.Timestamp created = 11;
     */
    created?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 12;
     */
    updated?: Timestamp;
    constructor(data?: PartialMessage<AndroidPackage>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AndroidPackage";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AndroidPackage;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AndroidPackage;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AndroidPackage;
    static equals(a: AndroidPackage | PlainMessage<AndroidPackage> | undefined, b: AndroidPackage | PlainMessage<AndroidPackage> | undefined): boolean;
}
