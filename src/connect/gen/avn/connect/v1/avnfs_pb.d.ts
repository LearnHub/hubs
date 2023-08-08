import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { HeaderField } from "./http_pb.js";
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetFileUrlResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetFileUrlResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetFileUrlResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetFileUrlResponse;
    static equals(a: GetFileUrlResponse | PlainMessage<GetFileUrlResponse> | undefined, b: GetFileUrlResponse | PlainMessage<GetFileUrlResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetPostManifestRequest
 */
export declare class GetPostManifestRequest extends Message<GetPostManifestRequest> {
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
    constructor(data?: PartialMessage<GetPostManifestRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetPostManifestRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPostManifestRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPostManifestRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPostManifestRequest;
    static equals(a: GetPostManifestRequest | PlainMessage<GetPostManifestRequest> | undefined, b: GetPostManifestRequest | PlainMessage<GetPostManifestRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.PostManifest
 */
export declare class PostManifest extends Message<PostManifest> {
    /**
     * URL to POST to
     *
     * @generated from field: string uploadUrl = 1;
     */
    uploadUrl: string;
    /**
     * Additional fields to add to the POST
     *
     * @generated from field: repeated avn.connect.v1.HeaderField headerFields = 2;
     */
    headerFields: HeaderField[];
    /**
     * Eventual download URL
     *
     * @generated from field: string downloadUrl = 3;
     */
    downloadUrl: string;
    constructor(data?: PartialMessage<PostManifest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.PostManifest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PostManifest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PostManifest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PostManifest;
    static equals(a: PostManifest | PlainMessage<PostManifest> | undefined, b: PostManifest | PlainMessage<PostManifest> | undefined): boolean;
}
