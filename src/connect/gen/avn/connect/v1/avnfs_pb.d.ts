import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { HeaderField } from "./http_pb.js";
/**
 * @generated from enum avn.connect.v1.AltServerType
 */
export declare enum AltServerType {
    /**
     * @generated from enum value: ALT_SERVER_UNSPECIFIED = 0;
     */
    ALT_SERVER_UNSPECIFIED = 0,
    /**
     * @generated from enum value: ALT_SERVER_LAN = 1;
     */
    ALT_SERVER_LAN = 1,
    /**
     * @generated from enum value: ALT_SERVER_WAN = 2;
     */
    ALT_SERVER_WAN = 2,
    /**
     * @generated from enum value: ALT_SERVER_REGIONAL = 3;
     */
    ALT_SERVER_REGIONAL = 3
}
/**
 * @generated from message avn.connect.v1.GetFileUrlRequest
 */
export declare class GetFileUrlRequest extends Message<GetFileUrlRequest> {
    /**
     * base64url encoded SHA256 hash of the file contents
     *
     * @generated from field: string base64url = 1;
     */
    base64url: string;
    /**
     * size in bytes
     *
     * @generated from field: int64 sizeBytes = 2;
     */
    sizeBytes: bigint;
    /**
     * media type
     *
     * @generated from field: string mediaType = 3;
     */
    mediaType: string;
    /**
     * filename (optional and only modifies the returned URL)
     *
     * @generated from field: optional string fileName = 4;
     */
    fileName?: string;
    constructor(data?: PartialMessage<GetFileUrlRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetFileUrlRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFileUrlRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFileUrlRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFileUrlRequest;
    static equals(a: GetFileUrlRequest | PlainMessage<GetFileUrlRequest> | undefined, b: GetFileUrlRequest | PlainMessage<GetFileUrlRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetFileUrlResponse
 */
export declare class GetFileUrlResponse extends Message<GetFileUrlResponse> {
    /**
     * Only set if the file already exists
     *
     * @generated from field: optional string url = 1;
     */
    url?: string;
    constructor(data?: PartialMessage<GetFileUrlResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetFileUrlResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFileUrlResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFileUrlResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFileUrlResponse;
    static equals(a: GetFileUrlResponse | PlainMessage<GetFileUrlResponse> | undefined, b: GetFileUrlResponse | PlainMessage<GetFileUrlResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetManifestRequest
 */
export declare class GetManifestRequest extends Message<GetManifestRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * base64url encoded SHA256 hash of the file contents
     *
     * @generated from field: string base64url = 2;
     */
    base64url: string;
    /**
     * size in bytes for checking against allowances
     *
     * @generated from field: int64 sizeBytes = 3;
     */
    sizeBytes: bigint;
    /**
     * media types are expected to be overriden in the reference URL, but this might be useful for post-processing actions
     *
     * @generated from field: string mediaType = 4;
     */
    mediaType: string;
    /**
     * filename (optional and only modifies the returned URL)
     *
     * @generated from field: optional string fileName = 5;
     */
    fileName?: string;
    constructor(data?: PartialMessage<GetManifestRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetManifestRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetManifestRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetManifestRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetManifestRequest;
    static equals(a: GetManifestRequest | PlainMessage<GetManifestRequest> | undefined, b: GetManifestRequest | PlainMessage<GetManifestRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.UploadManifest
 */
export declare class UploadManifest extends Message<UploadManifest> {
    /**
     * URL to upload to
     *
     * @generated from field: string uploadUrl = 1;
     */
    uploadUrl: string;
    /**
     * Eventual download URL
     *
     * @generated from field: string downloadUrl = 2;
     */
    downloadUrl: string;
    /**
     * Additional fields to add to a POST
     *
     * @generated from field: repeated avn.connect.v1.HeaderField headerFields = 3;
     */
    headerFields: HeaderField[];
    constructor(data?: PartialMessage<UploadManifest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.UploadManifest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UploadManifest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UploadManifest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UploadManifest;
    static equals(a: UploadManifest | PlainMessage<UploadManifest> | undefined, b: UploadManifest | PlainMessage<UploadManifest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.AltServer
 */
export declare class AltServer extends Message<AltServer> {
    /**
     * @generated from field: avn.connect.v1.AltServerType type = 1;
     */
    type: AltServerType;
    /**
     * @generated from field: string host = 2;
     */
    host: string;
    constructor(data?: PartialMessage<AltServer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AltServer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AltServer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AltServer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AltServer;
    static equals(a: AltServer | PlainMessage<AltServer> | undefined, b: AltServer | PlainMessage<AltServer> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetAltServersRequest
 */
export declare class GetAltServersRequest extends Message<GetAltServersRequest> {
    constructor(data?: PartialMessage<GetAltServersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetAltServersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAltServersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAltServersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAltServersRequest;
    static equals(a: GetAltServersRequest | PlainMessage<GetAltServersRequest> | undefined, b: GetAltServersRequest | PlainMessage<GetAltServersRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetAltServersResponse
 */
export declare class GetAltServersResponse extends Message<GetAltServersResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.AltServer servers = 1;
     */
    servers: AltServer[];
    constructor(data?: PartialMessage<GetAltServersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetAltServersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAltServersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAltServersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAltServersResponse;
    static equals(a: GetAltServersResponse | PlainMessage<GetAltServersResponse> | undefined, b: GetAltServersResponse | PlainMessage<GetAltServersResponse> | undefined): boolean;
}
