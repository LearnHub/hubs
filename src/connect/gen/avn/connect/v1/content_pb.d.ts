import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { EntityInfo } from "./entities_pb.js";
/**
 * @generated from message avn.connect.v1.MatchActivityFromCloudRequest
 */
export declare class MatchActivityFromCloudRequest extends Message<MatchActivityFromCloudRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    /**
     * Optional override for the org to assign
     *
     * @generated from field: optional int32 organization_id = 3;
     */
    organizationId?: number;
    constructor(data?: PartialMessage<MatchActivityFromCloudRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.MatchActivityFromCloudRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MatchActivityFromCloudRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MatchActivityFromCloudRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MatchActivityFromCloudRequest;
    static equals(a: MatchActivityFromCloudRequest | PlainMessage<MatchActivityFromCloudRequest> | undefined, b: MatchActivityFromCloudRequest | PlainMessage<MatchActivityFromCloudRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.MatchActivityFromFilesRequest
 */
export declare class MatchActivityFromFilesRequest extends Message<MatchActivityFromFilesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string icon_url = 3;
     */
    iconUrl: string;
    /**
     * @generated from field: repeated int32 tags = 4;
     */
    tags: number[];
    /**
     * @generated from field: repeated string file_urls = 5;
     */
    fileUrls: string[];
    /**
     * Optional override for the org to assign
     *
     * @generated from field: optional int32 organization_id = 6;
     */
    organizationId?: number;
    constructor(data?: PartialMessage<MatchActivityFromFilesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.MatchActivityFromFilesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MatchActivityFromFilesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MatchActivityFromFilesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MatchActivityFromFilesRequest;
    static equals(a: MatchActivityFromFilesRequest | PlainMessage<MatchActivityFromFilesRequest> | undefined, b: MatchActivityFromFilesRequest | PlainMessage<MatchActivityFromFilesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.MatchActivityFromUrlRequest
 */
export declare class MatchActivityFromUrlRequest extends Message<MatchActivityFromUrlRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string icon_url = 3;
     */
    iconUrl: string;
    /**
     * @generated from field: repeated int32 tags = 4;
     */
    tags: number[];
    /**
     * @generated from field: string url = 5;
     */
    url: string;
    /**
     * @generated from field: optional string context = 6;
     */
    context?: string;
    /**
     * Optional override for the org to assign
     *
     * @generated from field: optional int32 organization_id = 7;
     */
    organizationId?: number;
    constructor(data?: PartialMessage<MatchActivityFromUrlRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.MatchActivityFromUrlRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MatchActivityFromUrlRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MatchActivityFromUrlRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MatchActivityFromUrlRequest;
    static equals(a: MatchActivityFromUrlRequest | PlainMessage<MatchActivityFromUrlRequest> | undefined, b: MatchActivityFromUrlRequest | PlainMessage<MatchActivityFromUrlRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.MatchActivityResponse
 */
export declare class MatchActivityResponse extends Message<MatchActivityResponse> {
    /**
     * @generated from field: avn.connect.v1.EntityInfo activity = 1;
     */
    activity?: EntityInfo;
    constructor(data?: PartialMessage<MatchActivityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.MatchActivityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MatchActivityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MatchActivityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MatchActivityResponse;
    static equals(a: MatchActivityResponse | PlainMessage<MatchActivityResponse> | undefined, b: MatchActivityResponse | PlainMessage<MatchActivityResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.SubmitCommunityCategoryRequest
 */
export declare class SubmitCommunityCategoryRequest extends Message<SubmitCommunityCategoryRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    constructor(data?: PartialMessage<SubmitCommunityCategoryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SubmitCommunityCategoryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SubmitCommunityCategoryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SubmitCommunityCategoryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SubmitCommunityCategoryRequest;
    static equals(a: SubmitCommunityCategoryRequest | PlainMessage<SubmitCommunityCategoryRequest> | undefined, b: SubmitCommunityCategoryRequest | PlainMessage<SubmitCommunityCategoryRequest> | undefined): boolean;
}
