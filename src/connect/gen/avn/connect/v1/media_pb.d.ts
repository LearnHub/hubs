import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { OperationState } from "./operations_pb.js";
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
 * @generated from enum avn.connect.v1.MediaCompatibilityArea
 */
export declare enum MediaCompatibilityArea {
    /**
     * @generated from enum value: MEDIA_COMPATIBILITY_AREA_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: MEDIA_COMPATIBILITY_AREA_CONTAINER = 1;
     */
    CONTAINER = 1,
    /**
     * @generated from enum value: MEDIA_COMPATIBILITY_AREA_VIDEO_CODEC = 2;
     */
    VIDEO_CODEC = 2,
    /**
     * @generated from enum value: MEDIA_COMPATIBILITY_AREA_AUDIO_CODEC = 3;
     */
    AUDIO_CODEC = 3,
    /**
     * @generated from enum value: MEDIA_COMPATIBILITY_AREA_OTHER_CODEC = 4;
     */
    OTHER_CODEC = 4
}
/**
 * @generated from enum avn.connect.v1.MediaCompatibilityReason
 */
export declare enum MediaCompatibilityReason {
    /**
     * @generated from enum value: MEDIA_COMPATIBILITY_REASON_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Errors (incompatible)
     *
     * @generated from enum value: MEDIA_COMPATIBILITY_REASON_NOT_SUPPORTED = 1;
     */
    NOT_SUPPORTED = 1,
    /**
     * @generated from enum value: MEDIA_COMPATIBILITY_REASON_MAX_PIXEL_WIDTH = 2;
     */
    MAX_PIXEL_WIDTH = 2,
    /**
     * @generated from enum value: MEDIA_COMPATIBILITY_REASON_MAX_PIXEL_HEIGHT = 3;
     */
    MAX_PIXEL_HEIGHT = 3,
    /**
     * @generated from enum value: MEDIA_COMPATIBILITY_REASON_PIXEL_FORMAT = 4;
     */
    PIXEL_FORMAT = 4,
    /**
     * @generated from enum value: MEDIA_COMPATIBILITY_REASON_MAX_FRAMERATE = 5;
     */
    MAX_FRAMERATE = 5,
    /**
     * @generated from enum value: MEDIA_COMPATIBILITY_REASON_MAX_BITRATE = 6;
     */
    MAX_BITRATE = 6,
    /**
     * @generated from enum value: MEDIA_COMPATIBILITY_REASON_CHANNEL_COUNT = 7;
     */
    CHANNEL_COUNT = 7,
    /**
     * Warnings (compatible, but exceeding target)
     *
     * @generated from enum value: MEDIA_COMPATIBILITY_REASON_TARGET_BITRATE = 8;
     */
    TARGET_BITRATE = 8
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
     * @generated from field: float width = 1;
     */
    width: number;
    /**
     * Height
     *
     * @generated from field: float height = 2;
     */
    height: number;
    /**
     * Media type
     *
     * @generated from field: string media_type = 3;
     */
    mediaType: string;
    /**
     * One of in,mm,cm,pt,pc,px,em,ex
     *
     * @generated from field: string width_units = 4;
     */
    widthUnits: string;
    /**
     * @generated from field: string height_units = 5;
     */
    heightUnits: string;
    /**
     * Orientation
     *
     * @generated from field: optional int32 orientation = 6;
     */
    orientation?: number;
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
     * One of: hvc1, hev1, avc1, mp4a
     *
     * @generated from field: string codec_tag = 4;
     */
    codecTag: string;
    /**
     * One of: h264, hevc, mp3, aac
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
     * @generated from field: avn.connect.v1.MediaRational real_base_framerate = 9;
     */
    realBaseFramerate?: MediaRational;
    /**
     * Average frame rate of the stream
     *
     * @generated from field: avn.connect.v1.MediaRational average_framerate = 10;
     */
    averageFramerate?: MediaRational;
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
     * Container information (may include synonyms such as mov, mp4, m4a, 3gp, 3g2, mj2)
     *
     * @generated from field: repeated string container_formats = 1;
     */
    containerFormats: string[];
    /**
     * @generated from field: string container_display_name = 2;
     */
    containerDisplayName: string;
    /**
     * Overall duration (not all files populate the duration field)
     *
     * @generated from field: optional float duration_seconds = 3;
     */
    durationSeconds?: number;
    /**
     * Total size
     *
     * @generated from field: int64 size_bytes = 4;
     */
    sizeBytes: bigint;
    /**
     * Estimated average bitrate (not all files populate the bitrate field)
     *
     * @generated from field: optional int64 bitrate_bits_per_second = 5;
     */
    bitrateBitsPerSecond?: bigint;
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
     * Maximum height or width in pixels
     * Must be one of 8, 16, 32, 64, 128, 256, 512, 1024, or 2048
     * -1 indicates that the original image should be returned
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
     * @generated from field: string codec_name = 1;
     */
    codecName: string;
    /**
     * Supported tags such as hvc1 or hev1 (empty implies that all stream types supported)
     *
     * @generated from field: repeated string supported_codec_tags = 2;
     */
    supportedCodecTags: string[];
    /**
     * Stream type to use this codec with
     *
     * @generated from field: avn.connect.v1.MediaStreamType stream_type = 3;
     */
    streamType: MediaStreamType;
    /**
     * Priority of this codec as a transcode target
     *
     * @generated from field: int32 priority = 4;
     */
    priority: number;
    /**
     * Max width in pixels
     *
     * @generated from field: optional int32 max_width_pixels = 5;
     */
    maxWidthPixels?: number;
    /**
     * Target width when transcoding
     *
     * @generated from field: optional int32 target_width_pixels = 6;
     */
    targetWidthPixels?: number;
    /**
     * Max Height in pixels
     *
     * @generated from field: optional int32 max_height_pixels = 7;
     */
    maxHeightPixels?: number;
    /**
     * Target height when transcoding
     *
     * @generated from field: optional int32 target_height_pixels = 8;
     */
    targetHeightPixels?: number;
    /**
     * Supported pixel formats for video
     *
     * @generated from field: repeated string supported_pixel_formats = 9;
     */
    supportedPixelFormats: string[];
    /**
     * Max frame rate
     *
     * @generated from field: optional int32 max_framerate = 10;
     */
    maxFramerate?: number;
    /**
     * Max bitrate
     *
     * @generated from field: optional int64 max_bitrate_bits_per_second = 11;
     */
    maxBitrateBitsPerSecond?: bigint;
    /**
     * Target bitrate when transcoding
     *
     * @generated from field: optional int64 target_bitrate_bits_per_second = 12;
     */
    targetBitrateBitsPerSecond?: bigint;
    /**
     * Target quality when transcoding
     *
     * @generated from field: optional int32 target_quality_percent = 15;
     */
    targetQualityPercent?: number;
    /**
     * Max number of audio channels
     *
     * @generated from field: optional int32 max_audio_channels = 13;
     */
    maxAudioChannels?: number;
    /**
     * Max audio sample rate
     *
     * @generated from field: optional int32 max_sample_rate_hertz = 14;
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
     * @generated from field: string media_device_id = 1;
     */
    mediaDeviceId: string;
    /**
     * @generated from field: string media_device_name = 2;
     */
    mediaDeviceName: string;
    /**
     * First container is the preferred option when transcoding
     *
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
     * The media file to transcode
     *
     * @generated from field: string media_url = 2;
     */
    mediaUrl: string;
    /**
     * The target spec to transcode to
     *
     * @generated from field: avn.connect.v1.MediaDeviceSpec target_device_spec = 3;
     */
    targetDeviceSpec?: MediaDeviceSpec;
    /**
     * Force transcoding even if the media file is already on spec
     *
     * @generated from field: bool force_transcode = 4;
     */
    forceTranscode: boolean;
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
     * State of the transcoding process
     *
     * @generated from field: avn.connect.v1.OperationState state = 1;
     */
    state: OperationState;
    /**
     * Set once the job has finished regardless of outcome
     *
     * @generated from field: optional avn.connect.v1.TranscodeVideoResult result = 2;
     */
    result?: TranscodeVideoResult;
    /**
     * May be set when processing to indicated progress
     *
     * @generated from field: optional int32 progress_percent = 3;
     */
    progressPercent?: number;
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
 * @generated from message avn.connect.v1.TranscodeVideoResult
 */
export declare class TranscodeVideoResult extends Message<TranscodeVideoResult> {
    /**
     * Set if the job succeeded
     *
     * @generated from field: optional string media_url = 1;
     */
    mediaUrl?: string;
    /**
     * Populated if there were transcode errors
     *
     * @generated from field: repeated string errors = 2;
     */
    errors: string[];
    /**
     * Populated if there were transcode warnings
     *
     * @generated from field: repeated string warnings = 3;
     */
    warnings: string[];
    constructor(data?: PartialMessage<TranscodeVideoResult>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranscodeVideoResult";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranscodeVideoResult;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranscodeVideoResult;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranscodeVideoResult;
    static equals(a: TranscodeVideoResult | PlainMessage<TranscodeVideoResult> | undefined, b: TranscodeVideoResult | PlainMessage<TranscodeVideoResult> | undefined): boolean;
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
/**
 * @generated from message avn.connect.v1.MediaCompatibilityIssue
 */
export declare class MediaCompatibilityIssue extends Message<MediaCompatibilityIssue> {
    /**
     * @generated from field: avn.connect.v1.MediaCompatibilityArea area = 1;
     */
    area: MediaCompatibilityArea;
    /**
     * @generated from field: avn.connect.v1.MediaCompatibilityReason reason = 2;
     */
    reason: MediaCompatibilityReason;
    /**
     * @generated from field: string detail = 3;
     */
    detail: string;
    constructor(data?: PartialMessage<MediaCompatibilityIssue>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.MediaCompatibilityIssue";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MediaCompatibilityIssue;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MediaCompatibilityIssue;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MediaCompatibilityIssue;
    static equals(a: MediaCompatibilityIssue | PlainMessage<MediaCompatibilityIssue> | undefined, b: MediaCompatibilityIssue | PlainMessage<MediaCompatibilityIssue> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CheckMediaCompatibilityRequest
 */
export declare class CheckMediaCompatibilityRequest extends Message<CheckMediaCompatibilityRequest> {
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
    constructor(data?: PartialMessage<CheckMediaCompatibilityRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CheckMediaCompatibilityRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckMediaCompatibilityRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckMediaCompatibilityRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckMediaCompatibilityRequest;
    static equals(a: CheckMediaCompatibilityRequest | PlainMessage<CheckMediaCompatibilityRequest> | undefined, b: CheckMediaCompatibilityRequest | PlainMessage<CheckMediaCompatibilityRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CheckMediaCompatibilityResponse
 */
export declare class CheckMediaCompatibilityResponse extends Message<CheckMediaCompatibilityResponse> {
    /**
     * @generated from field: bool container_is_supported = 1;
     */
    containerIsSupported: boolean;
    /**
     * @generated from field: bool video_stream_is_available = 2;
     */
    videoStreamIsAvailable: boolean;
    /**
     * @generated from field: bool video_stream_is_supported = 3;
     */
    videoStreamIsSupported: boolean;
    /**
     * @generated from field: bool audio_stream_is_available = 4;
     */
    audioStreamIsAvailable: boolean;
    /**
     * @generated from field: bool audio_stream_is_supported = 5;
     */
    audioStreamIsSupported: boolean;
    /**
     * @generated from field: repeated avn.connect.v1.MediaCompatibilityIssue errors = 6;
     */
    errors: MediaCompatibilityIssue[];
    /**
     * @generated from field: repeated avn.connect.v1.MediaCompatibilityIssue warnings = 7;
     */
    warnings: MediaCompatibilityIssue[];
    constructor(data?: PartialMessage<CheckMediaCompatibilityResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CheckMediaCompatibilityResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CheckMediaCompatibilityResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CheckMediaCompatibilityResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CheckMediaCompatibilityResponse;
    static equals(a: CheckMediaCompatibilityResponse | PlainMessage<CheckMediaCompatibilityResponse> | undefined, b: CheckMediaCompatibilityResponse | PlainMessage<CheckMediaCompatibilityResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetMediaDeviceSpecsRequest
 */
export declare class GetMediaDeviceSpecsRequest extends Message<GetMediaDeviceSpecsRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: repeated string media_device_ids = 2;
     */
    mediaDeviceIds: string[];
    constructor(data?: PartialMessage<GetMediaDeviceSpecsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetMediaDeviceSpecsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMediaDeviceSpecsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMediaDeviceSpecsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMediaDeviceSpecsRequest;
    static equals(a: GetMediaDeviceSpecsRequest | PlainMessage<GetMediaDeviceSpecsRequest> | undefined, b: GetMediaDeviceSpecsRequest | PlainMessage<GetMediaDeviceSpecsRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetMediaDeviceSpecsResponse
 */
export declare class GetMediaDeviceSpecsResponse extends Message<GetMediaDeviceSpecsResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.MediaDeviceSpec media_device_specs = 1;
     */
    mediaDeviceSpecs: MediaDeviceSpec[];
    constructor(data?: PartialMessage<GetMediaDeviceSpecsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetMediaDeviceSpecsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMediaDeviceSpecsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMediaDeviceSpecsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMediaDeviceSpecsResponse;
    static equals(a: GetMediaDeviceSpecsResponse | PlainMessage<GetMediaDeviceSpecsResponse> | undefined, b: GetMediaDeviceSpecsResponse | PlainMessage<GetMediaDeviceSpecsResponse> | undefined): boolean;
}
