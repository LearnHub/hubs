import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.MediaTypeExtension
 */
export declare class MediaTypeExtension extends Message<MediaTypeExtension> {
    /**
     * @generated from field: string extension = 1;
     */
    extension: string;
    /**
     * @generated from field: string media_type = 2;
     */
    mediaType: string;
    constructor(data?: PartialMessage<MediaTypeExtension>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.MediaTypeExtension";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MediaTypeExtension;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MediaTypeExtension;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MediaTypeExtension;
    static equals(a: MediaTypeExtension | PlainMessage<MediaTypeExtension> | undefined, b: MediaTypeExtension | PlainMessage<MediaTypeExtension> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetMediaTypeExtensionMapRequest
 */
export declare class GetMediaTypeExtensionMapRequest extends Message<GetMediaTypeExtensionMapRequest> {
    constructor(data?: PartialMessage<GetMediaTypeExtensionMapRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetMediaTypeExtensionMapRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMediaTypeExtensionMapRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMediaTypeExtensionMapRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMediaTypeExtensionMapRequest;
    static equals(a: GetMediaTypeExtensionMapRequest | PlainMessage<GetMediaTypeExtensionMapRequest> | undefined, b: GetMediaTypeExtensionMapRequest | PlainMessage<GetMediaTypeExtensionMapRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetMediaTypeExtensionMapResponse
 */
export declare class GetMediaTypeExtensionMapResponse extends Message<GetMediaTypeExtensionMapResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.MediaTypeExtension media_types = 1;
     */
    mediaTypes: MediaTypeExtension[];
    constructor(data?: PartialMessage<GetMediaTypeExtensionMapResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetMediaTypeExtensionMapResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMediaTypeExtensionMapResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMediaTypeExtensionMapResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMediaTypeExtensionMapResponse;
    static equals(a: GetMediaTypeExtensionMapResponse | PlainMessage<GetMediaTypeExtensionMapResponse> | undefined, b: GetMediaTypeExtensionMapResponse | PlainMessage<GetMediaTypeExtensionMapResponse> | undefined): boolean;
}
