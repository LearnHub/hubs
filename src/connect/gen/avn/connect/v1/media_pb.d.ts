import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from message avn.connect.v1.GetPreviewImageRequest
 */
export declare class GetPreviewImageRequest extends Message<GetPreviewImageRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: string media_url = 2;
     */
    mediaUrl: string;
    constructor(data?: PartialMessage<GetPreviewImageRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetPreviewImageRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPreviewImageRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPreviewImageRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPreviewImageRequest;
    static equals(a: GetPreviewImageRequest | PlainMessage<GetPreviewImageRequest> | undefined, b: GetPreviewImageRequest | PlainMessage<GetPreviewImageRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetPreviewImageResponse
 */
export declare class GetPreviewImageResponse extends Message<GetPreviewImageResponse> {
    /**
     * Unset if no preview could be created for the given file
     *
     * @generated from field: optional string image_url = 1;
     */
    imageUrl?: string;
    constructor(data?: PartialMessage<GetPreviewImageResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetPreviewImageResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPreviewImageResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPreviewImageResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPreviewImageResponse;
    static equals(a: GetPreviewImageResponse | PlainMessage<GetPreviewImageResponse> | undefined, b: GetPreviewImageResponse | PlainMessage<GetPreviewImageResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetMetadataRequest
 */
export declare class GetMetadataRequest extends Message<GetMetadataRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: string media_url = 2;
     */
    mediaUrl: string;
    constructor(data?: PartialMessage<GetMetadataRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetMetadataRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMetadataRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMetadataRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMetadataRequest;
    static equals(a: GetMetadataRequest | PlainMessage<GetMetadataRequest> | undefined, b: GetMetadataRequest | PlainMessage<GetMetadataRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetImageMetadataResponse
 */
export declare class GetImageMetadataResponse extends Message<GetImageMetadataResponse> {
    /**
     * Width
     *
     * @generated from field: int32 width_pixels = 1;
     */
    widthPixels: number;
    /**
     * Height
     *
     * @generated from field: int32 height_pixels = 2;
     */
    heightPixels: number;
    constructor(data?: PartialMessage<GetImageMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetImageMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetImageMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetImageMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetImageMetadataResponse;
    static equals(a: GetImageMetadataResponse | PlainMessage<GetImageMetadataResponse> | undefined, b: GetImageMetadataResponse | PlainMessage<GetImageMetadataResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TranscodeImageSpec
 */
export declare class TranscodeImageSpec extends Message<TranscodeImageSpec> {
    /**
     * Maximum height or width in pixels: must be eight or more and a power-of-two
     *
     * @generated from field: int32 max_size_pixels = 1;
     */
    maxSizePixels: number;
    constructor(data?: PartialMessage<TranscodeImageSpec>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranscodeImageSpec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranscodeImageSpec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranscodeImageSpec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranscodeImageSpec;
    static equals(a: TranscodeImageSpec | PlainMessage<TranscodeImageSpec> | undefined, b: TranscodeImageSpec | PlainMessage<TranscodeImageSpec> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TranscodeImageRequest
 */
export declare class TranscodeImageRequest extends Message<TranscodeImageRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: string image_url = 2;
     */
    imageUrl: string;
    /**
     * @generated from field: avn.connect.v1.TranscodeImageSpec transcode_spec = 3;
     */
    transcodeSpec?: TranscodeImageSpec;
    constructor(data?: PartialMessage<TranscodeImageRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranscodeImageRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranscodeImageRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranscodeImageRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranscodeImageRequest;
    static equals(a: TranscodeImageRequest | PlainMessage<TranscodeImageRequest> | undefined, b: TranscodeImageRequest | PlainMessage<TranscodeImageRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TranscodeImageResponse
 */
export declare class TranscodeImageResponse extends Message<TranscodeImageResponse> {
    /**
     * @generated from field: string image_url = 1;
     */
    imageUrl: string;
    constructor(data?: PartialMessage<TranscodeImageResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranscodeImageResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranscodeImageResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranscodeImageResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranscodeImageResponse;
    static equals(a: TranscodeImageResponse | PlainMessage<TranscodeImageResponse> | undefined, b: TranscodeImageResponse | PlainMessage<TranscodeImageResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TranscodeVideoSpec
 */
export declare class TranscodeVideoSpec extends Message<TranscodeVideoSpec> {
    /**
     * Maximum width in pixels
     *
     * @generated from field: optional int32 max_width_pixels = 1;
     */
    maxWidthPixels?: number;
    /**
     * Maximum height in pixels
     *
     * @generated from field: optional int32 max_height_pixels = 2;
     */
    maxHeightPixels?: number;
    /**
     * Maximum frame rate
     *
     * @generated from field: optional int32 max_frame_rate = 3;
     */
    maxFrameRate?: number;
    /**
     * Maximum bitrate (bits per second)
     *
     * @generated from field: optional int32 max_bitrate_bps = 4;
     */
    maxBitrateBps?: number;
    /**
     * Acceptable video output formats (uses source format if none specified)
     *
     * TODO: ADD ACCEPTABLE CODECS OR IS THAT IN THE MEDIA TYPE https://developer.mozilla.org/en-US/docs/Web/Media/Formats/codecs_parameter?
     *
     * @generated from field: repeated string accept_media_types = 5;
     */
    acceptMediaTypes: string[];
    constructor(data?: PartialMessage<TranscodeVideoSpec>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranscodeVideoSpec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranscodeVideoSpec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranscodeVideoSpec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranscodeVideoSpec;
    static equals(a: TranscodeVideoSpec | PlainMessage<TranscodeVideoSpec> | undefined, b: TranscodeVideoSpec | PlainMessage<TranscodeVideoSpec> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TranscodeVideoRequest
 */
export declare class TranscodeVideoRequest extends Message<TranscodeVideoRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: string video_url = 2;
     */
    videoUrl: string;
    /**
     * @generated from field: avn.connect.v1.TranscodeVideoSpec transcode_spec = 3;
     */
    transcodeSpec?: TranscodeVideoSpec;
    constructor(data?: PartialMessage<TranscodeVideoRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranscodeVideoRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranscodeVideoRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranscodeVideoRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranscodeVideoRequest;
    static equals(a: TranscodeVideoRequest | PlainMessage<TranscodeVideoRequest> | undefined, b: TranscodeVideoRequest | PlainMessage<TranscodeVideoRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TranscodeVideoResponse
 */
export declare class TranscodeVideoResponse extends Message<TranscodeVideoResponse> {
    /**
     * @generated from field: string video_url = 1;
     */
    videoUrl: string;
    constructor(data?: PartialMessage<TranscodeVideoResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranscodeVideoResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranscodeVideoResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranscodeVideoResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranscodeVideoResponse;
    static equals(a: TranscodeVideoResponse | PlainMessage<TranscodeVideoResponse> | undefined, b: TranscodeVideoResponse | PlainMessage<TranscodeVideoResponse> | undefined): boolean;
}
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
