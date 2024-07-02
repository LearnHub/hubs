import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
/**
 * Video stream types
 *
 * @generated from enum avn.connect.v1.MediaStreamType
 */
export declare enum MediaStreamType {
    /**
     * @generated from enum value: MEDIA_STREAM_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: MEDIA_STREAM_TYPE_UNKNOWN = 1;
     */
    UNKNOWN = 1,
    /**
     * @generated from enum value: MEDIA_STREAM_TYPE_VIDEO = 2;
     */
    VIDEO = 2,
    /**
     * @generated from enum value: MEDIA_STREAM_TYPE_AUDIO = 3;
     */
    AUDIO = 3,
    /**
     * @generated from enum value: MEDIA_STREAM_TYPE_DATA = 4;
     */
    DATA = 4,
    /**
     * @generated from enum value: MEDIA_STREAM_TYPE_SUBTITLE = 5;
     */
    SUBTITLE = 5,
    /**
     * @generated from enum value: MEDIA_STREAM_TYPE_ATTACHMENT = 6;
     */
    ATTACHMENT = 6,
    /**
     * @generated from enum value: MEDIA_STREAM_TYPE_NB = 7;
     */
    NB = 7
}
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
     * @generated from field: optional string media_url = 1;
     */
    mediaUrl?: string;
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
 * Rational ratio type used for media frame timing
 *
 * @generated from message avn.connect.v1.MediaRational
 */
export declare class MediaRational extends Message<MediaRational> {
    /**
     * @generated from field: int32 num = 1;
     */
    num: number;
    /**
     * @generated from field: int32 den = 2;
     */
    den: number;
    constructor(data?: PartialMessage<MediaRational>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.MediaRational";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MediaRational;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MediaRational;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MediaRational;
    static equals(a: MediaRational | PlainMessage<MediaRational> | undefined, b: MediaRational | PlainMessage<MediaRational> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.MediaStreamMetadata
 */
export declare class MediaStreamMetadata extends Message<MediaStreamMetadata> {
    /**
     * Format-specific stream ID
     *
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * General type of the encoded data
     *
     * @generated from field: avn.connect.v1.MediaStreamType stream_type = 2;
     */
    streamType: MediaStreamType;
    /**
     * Is this the default stream of this type? (typically parsed from disposition)
     *
     * @generated from field: bool is_default = 3;
     */
    isDefault: boolean;
    /**
     * FOURCC codec tag code
     *
     * @generated from field: string codec_tag = 4;
     */
    codecTag: string;
    /**
     * Codec details
     *
     * @generated from field: string codec_name = 5;
     */
    codecName: string;
    /**
     * @generated from field: string codec_display_name = 6;
     */
    codecDisplayName: string;
    /**
     * Stream duration
     *
     * @generated from field: float duration_seconds = 7;
     */
    durationSeconds: number;
    /**
     * The fundamental unit of time (in seconds) in terms of which frame timestamps are represented
     *
     * @generated from field: avn.connect.v1.MediaRational time_base = 8;
     */
    timeBase?: MediaRational;
    /**
     * Real base frame rate of the stream (in variable frame rate streams, this is the fastest rate to expect)
     *
     * @generated from field: avn.connect.v1.MediaRational real_base_frame_rate = 9;
     */
    realBaseFrameRate?: MediaRational;
    /**
     * Average frame rate of the stream
     *
     * @generated from field: avn.connect.v1.MediaRational average_frame_rate = 10;
     */
    averageFrameRate?: MediaRational;
    /**
     * The average bitrate of the encoded data (in bits per second)
     *
     * @generated from field: int64 bitrate_bits_per_second = 11;
     */
    bitrateBitsPerSecond: bigint;
    /**
     * Number of frames in this stream (if known)
     *
     * @generated from field: optional int64 frame_count = 12;
     */
    frameCount?: bigint;
    /**
     * Video width
     *
     * @generated from field: optional int32 width_pixels = 13;
     */
    widthPixels?: number;
    /**
     * Video height
     *
     * @generated from field: optional int32 height_pixels = 14;
     */
    heightPixels?: number;
    /**
     * Video sample aspect ratio
     *
     * @generated from field: optional avn.connect.v1.MediaRational sample_aspect_ratio = 15;
     */
    sampleAspectRatio?: MediaRational;
    /**
     * Video display aspect ratio
     *
     * @generated from field: optional avn.connect.v1.MediaRational display_aspect_ratio = 16;
     */
    displayAspectRatio?: MediaRational;
    /**
     * Video pixel format
     *
     * @generated from field: optional string pixel_format = 17;
     */
    pixelFormat?: string;
    /**
     * Audio sample rate
     *
     * @generated from field: optional int32 sample_rate_hertz = 18;
     */
    sampleRateHertz?: number;
    /**
     * Audio channel count
     *
     * @generated from field: optional int32 channel_count = 19;
     */
    channelCount?: number;
    /**
     * Audio channel layout
     *
     * @generated from field: optional string channel_layout = 20;
     */
    channelLayout?: string;
    /**
     * Display directives such as "default", "dub", "captions", etc...
     *
     * @generated from field: repeated string dispositions = 21;
     */
    dispositions: string[];
    /**
     * Additional metadata
     *
     * @generated from field: map<string, string> tags = 22;
     */
    tags: {
        [key: string]: string;
    };
    constructor(data?: PartialMessage<MediaStreamMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.MediaStreamMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MediaStreamMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MediaStreamMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MediaStreamMetadata;
    static equals(a: MediaStreamMetadata | PlainMessage<MediaStreamMetadata> | undefined, b: MediaStreamMetadata | PlainMessage<MediaStreamMetadata> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.MediaFormatMetadata
 */
export declare class MediaFormatMetadata extends Message<MediaFormatMetadata> {
    /**
     * Container information (may include synonyms such as mov,mp4,m4a,3gp,3g2,mj2)
     *
     * @generated from field: repeated string container_formats = 1;
     */
    containerFormats: string[];
    /**
     * @generated from field: string container_display_name = 2;
     */
    containerDisplayName: string;
    /**
     * Overall duration
     *
     * @generated from field: float duration_seconds = 3;
     */
    durationSeconds: number;
    /**
     * Total size
     *
     * @generated from field: int64 size_bytes = 4;
     */
    sizeBytes: bigint;
    /**
     * Estimated average bitrate
     *
     * @generated from field: int64 bitrate_bits_per_second = 5;
     */
    bitrateBitsPerSecond: bigint;
    /**
     * Additional metadata
     *
     * @generated from field: map<string, string> tags = 6;
     */
    tags: {
        [key: string]: string;
    };
    constructor(data?: PartialMessage<MediaFormatMetadata>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.MediaFormatMetadata";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MediaFormatMetadata;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MediaFormatMetadata;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MediaFormatMetadata;
    static equals(a: MediaFormatMetadata | PlainMessage<MediaFormatMetadata> | undefined, b: MediaFormatMetadata | PlainMessage<MediaFormatMetadata> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetVideoMetadataResponse
 */
export declare class GetVideoMetadataResponse extends Message<GetVideoMetadataResponse> {
    /**
     * @generated from field: avn.connect.v1.MediaFormatMetadata format = 1;
     */
    format?: MediaFormatMetadata;
    /**
     * @generated from field: repeated avn.connect.v1.MediaStreamMetadata streams = 2;
     */
    streams: MediaStreamMetadata[];
    constructor(data?: PartialMessage<GetVideoMetadataResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetVideoMetadataResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetVideoMetadataResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetVideoMetadataResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetVideoMetadataResponse;
    static equals(a: GetVideoMetadataResponse | PlainMessage<GetVideoMetadataResponse> | undefined, b: GetVideoMetadataResponse | PlainMessage<GetVideoMetadataResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TranscodeImageSpec
 */
export declare class TranscodeImageSpec extends Message<TranscodeImageSpec> {
    /**
     * Maximum height or width in pixels: must be one of 8, 16, 32, 64, 128, 256, 512, 1024, or 2048
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
     * @generated from field: string media_url = 2;
     */
    mediaUrl: string;
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
     * @generated from field: string media_url = 1;
     */
    mediaUrl: string;
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
 * @generated from message avn.connect.v1.MediaFormatSpec
 */
export declare class MediaFormatSpec extends Message<MediaFormatSpec> {
    /**
     * FOURCC codec tag code
     *
     * @generated from field: string codec_tag = 1;
     */
    codecTag: string;
    /**
     * Stream type to use this codec with
     *
     * @generated from field: avn.connect.v1.MediaStreamType stream_type = 2;
     */
    streamType: MediaStreamType;
    /**
     * Priority of this codec as a transcode target
     *
     * @generated from field: int32 priority = 3;
     */
    priority: number;
    /**
     * Max width in pixels
     *
     * @generated from field: optional int32 max_width_pixels = 4;
     */
    maxWidthPixels?: number;
    /**
     * Target width when transcoding
     *
     * @generated from field: optional int32 target_width_pixels = 5;
     */
    targetWidthPixels?: number;
    /**
     * Max Height in pixels
     *
     * @generated from field: optional int32 max_height_pixels = 6;
     */
    maxHeightPixels?: number;
    /**
     * Target height when transcoding
     *
     * @generated from field: optional int32 target_height_pixels = 7;
     */
    targetHeightPixels?: number;
    /**
     * Supported pixel formats for video
     *
     * @generated from field: repeated string supported_pixel_formats = 8;
     */
    supportedPixelFormats: string[];
    /**
     * Max frame rate
     *
     * @generated from field: optional int32 max_frame_rate = 9;
     */
    maxFrameRate?: number;
    /**
     * Max bitrate
     *
     * @generated from field: optional int64 max_bitrate_bits_per_second = 10;
     */
    maxBitrateBitsPerSecond?: bigint;
    /**
     * Target bitrate when transcoding
     *
     * @generated from field: optional int64 target_bitrate_bits_per_second = 11;
     */
    targetBitrateBitsPerSecond?: bigint;
    /**
     * Max number of audio channels
     *
     * @generated from field: optional int32 max_audio_channels = 12;
     */
    maxAudioChannels?: number;
    /**
     * Max audio sample rate
     *
     * @generated from field: optional int32 max_sample_rate_hertz = 13;
     */
    maxSampleRateHertz?: number;
    constructor(data?: PartialMessage<MediaFormatSpec>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.MediaFormatSpec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MediaFormatSpec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MediaFormatSpec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MediaFormatSpec;
    static equals(a: MediaFormatSpec | PlainMessage<MediaFormatSpec> | undefined, b: MediaFormatSpec | PlainMessage<MediaFormatSpec> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.MediaDeviceSpec
 */
export declare class MediaDeviceSpec extends Message<MediaDeviceSpec> {
    /**
     * @generated from field: string device_id = 1;
     */
    deviceId: string;
    /**
     * @generated from field: string device_name = 2;
     */
    deviceName: string;
    /**
     * @generated from field: repeated string supported_container_formats = 3;
     */
    supportedContainerFormats: string[];
    /**
     * Supported codecs by codec tag
     *
     * @generated from field: map<string, avn.connect.v1.MediaFormatSpec> supported_codecs = 4;
     */
    supportedCodecs: {
        [key: string]: MediaFormatSpec;
    };
    constructor(data?: PartialMessage<MediaDeviceSpec>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.MediaDeviceSpec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MediaDeviceSpec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MediaDeviceSpec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MediaDeviceSpec;
    static equals(a: MediaDeviceSpec | PlainMessage<MediaDeviceSpec> | undefined, b: MediaDeviceSpec | PlainMessage<MediaDeviceSpec> | undefined): boolean;
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
     * @generated from field: string media_url = 2;
     */
    mediaUrl: string;
    /**
     * @generated from field: avn.connect.v1.MediaDeviceSpec target_device_spec = 3;
     */
    targetDeviceSpec?: MediaDeviceSpec;
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
     * @generated from field: string media_url = 1;
     */
    mediaUrl: string;
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
