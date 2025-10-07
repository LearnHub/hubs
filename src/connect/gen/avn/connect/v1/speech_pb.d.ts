import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from enum avn.connect.v1.SpeakerGender
 */
export declare enum SpeakerGender {
    /**
     * @generated from enum value: SPEAKER_GENDER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: SPEAKER_GENDER_NEUTRAL = 1;
     */
    NEUTRAL = 1,
    /**
     * @generated from enum value: SPEAKER_GENDER_MALE = 2;
     */
    MALE = 2,
    /**
     * @generated from enum value: SPEAKER_GENDER_FEMALE = 3;
     */
    FEMALE = 3
}
/**
 * @generated from enum avn.connect.v1.SpeechFlag
 */
export declare enum SpeechFlag {
    /**
     * @generated from enum value: SPEECH_FLAG_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * Don't translate this speaker or segment
     *
     * @generated from enum value: SPEECH_FLAG_NO_TRANSLATION = 1;
     */
    NO_TRANSLATION = 1,
    /**
     * Speech of a child
     *
     * @generated from enum value: SPEECH_FLAG_CHILD = 2;
     */
    CHILD = 2
}
/**
 * @generated from message avn.connect.v1.SynthesizeTranscriptRequest
 */
export declare class SynthesizeTranscriptRequest extends Message<SynthesizeTranscriptRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * The transcript to synthesize
     *
     * @generated from field: string transcript_url = 2;
     */
    transcriptUrl: string;
    constructor(data?: PartialMessage<SynthesizeTranscriptRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SynthesizeTranscriptRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SynthesizeTranscriptRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SynthesizeTranscriptRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SynthesizeTranscriptRequest;
    static equals(a: SynthesizeTranscriptRequest | PlainMessage<SynthesizeTranscriptRequest> | undefined, b: SynthesizeTranscriptRequest | PlainMessage<SynthesizeTranscriptRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.SynthesizeResponse
 */
export declare class SynthesizeResponse extends Message<SynthesizeResponse> {
    /**
     * @generated from field: string speech_url = 1;
     */
    speechUrl: string;
    /**
     * Populated if there were synth errors
     *
     * @generated from field: repeated string errors = 2;
     */
    errors: string[];
    /**
     * Populated if there were synth warnings
     *
     * @generated from field: repeated string warnings = 3;
     */
    warnings: string[];
    constructor(data?: PartialMessage<SynthesizeResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SynthesizeResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SynthesizeResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SynthesizeResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SynthesizeResponse;
    static equals(a: SynthesizeResponse | PlainMessage<SynthesizeResponse> | undefined, b: SynthesizeResponse | PlainMessage<SynthesizeResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.Speech
 */
export declare class Speech extends Message<Speech> {
    /**
     * @generated from field: repeated avn.connect.v1.SpeechSegment segments = 1;
     */
    segments: SpeechSegment[];
    constructor(data?: PartialMessage<Speech>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Speech";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Speech;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Speech;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Speech;
    static equals(a: Speech | PlainMessage<Speech> | undefined, b: Speech | PlainMessage<Speech> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.SpeechSegment
 */
export declare class SpeechSegment extends Message<SpeechSegment> {
    /**
     * @generated from field: string audio_url = 1;
     */
    audioUrl: string;
    /**
     * @generated from field: float duration_seconds = 2;
     */
    durationSeconds: number;
    constructor(data?: PartialMessage<SpeechSegment>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SpeechSegment";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SpeechSegment;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SpeechSegment;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SpeechSegment;
    static equals(a: SpeechSegment | PlainMessage<SpeechSegment> | undefined, b: SpeechSegment | PlainMessage<SpeechSegment> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.Speaker
 */
export declare class Speaker extends Message<Speaker> {
    /**
     * @generated from field: int32 speaker_id = 1;
     */
    speakerId: number;
    /**
     * @generated from field: avn.connect.v1.SpeakerGender gender = 2;
     */
    gender: SpeakerGender;
    /**
     * @generated from field: optional string name = 3;
     */
    name?: string;
    /**
     * @generated from field: repeated avn.connect.v1.SpeechFlag speech_flags = 4;
     */
    speechFlags: SpeechFlag[];
    constructor(data?: PartialMessage<Speaker>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Speaker";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Speaker;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Speaker;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Speaker;
    static equals(a: Speaker | PlainMessage<Speaker> | undefined, b: Speaker | PlainMessage<Speaker> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetCapabilitiesRequest
 */
export declare class GetCapabilitiesRequest extends Message<GetCapabilitiesRequest> {
    constructor(data?: PartialMessage<GetCapabilitiesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetCapabilitiesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCapabilitiesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCapabilitiesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCapabilitiesRequest;
    static equals(a: GetCapabilitiesRequest | PlainMessage<GetCapabilitiesRequest> | undefined, b: GetCapabilitiesRequest | PlainMessage<GetCapabilitiesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetCapabilitiesResponse
 */
export declare class GetCapabilitiesResponse extends Message<GetCapabilitiesResponse> {
    /**
     * @generated from field: repeated string supportedLanguageIds = 1;
     */
    supportedLanguageIds: string[];
    constructor(data?: PartialMessage<GetCapabilitiesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetCapabilitiesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCapabilitiesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCapabilitiesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCapabilitiesResponse;
    static equals(a: GetCapabilitiesResponse | PlainMessage<GetCapabilitiesResponse> | undefined, b: GetCapabilitiesResponse | PlainMessage<GetCapabilitiesResponse> | undefined): boolean;
}
