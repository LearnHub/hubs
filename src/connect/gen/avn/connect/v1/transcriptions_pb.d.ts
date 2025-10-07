import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { TranslationSpec } from "./translations_pb.js";
import { Speaker, SpeechFlag } from "./speech_pb.js";
/**
 * @generated from message avn.connect.v1.GetMediaTranscriptRequest
 */
export declare class GetMediaTranscriptRequest extends Message<GetMediaTranscriptRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * The media file to transcribe
     *
     * @generated from field: string media_url = 2;
     */
    mediaUrl: string;
    /**
     * @generated from field: avn.connect.v1.TranslationSpec translate = 3;
     */
    translate?: TranslationSpec;
    constructor(data?: PartialMessage<GetMediaTranscriptRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetMediaTranscriptRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetMediaTranscriptRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetMediaTranscriptRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetMediaTranscriptRequest;
    static equals(a: GetMediaTranscriptRequest | PlainMessage<GetMediaTranscriptRequest> | undefined, b: GetMediaTranscriptRequest | PlainMessage<GetMediaTranscriptRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetActivityTranscriptRequest
 */
export declare class GetActivityTranscriptRequest extends Message<GetActivityTranscriptRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * The target activity
     *
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    /**
     * @generated from field: avn.connect.v1.TranslationSpec translate = 3;
     */
    translate?: TranslationSpec;
    constructor(data?: PartialMessage<GetActivityTranscriptRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetActivityTranscriptRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActivityTranscriptRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActivityTranscriptRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActivityTranscriptRequest;
    static equals(a: GetActivityTranscriptRequest | PlainMessage<GetActivityTranscriptRequest> | undefined, b: GetActivityTranscriptRequest | PlainMessage<GetActivityTranscriptRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.SetActivityTranscriptRequest
 */
export declare class SetActivityTranscriptRequest extends Message<SetActivityTranscriptRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * The target activity
     *
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    /**
     * The AVNFS URL of the binary Transcript file to use
     *
     * @generated from field: string transcript_url = 3;
     */
    transcriptUrl: string;
    constructor(data?: PartialMessage<SetActivityTranscriptRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SetActivityTranscriptRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetActivityTranscriptRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetActivityTranscriptRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetActivityTranscriptRequest;
    static equals(a: SetActivityTranscriptRequest | PlainMessage<SetActivityTranscriptRequest> | undefined, b: SetActivityTranscriptRequest | PlainMessage<SetActivityTranscriptRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetTranscriptResponse
 */
export declare class GetTranscriptResponse extends Message<GetTranscriptResponse> {
    /**
     * Set if the job succeeded and contains an AVNFS URL to a binary Transcript file
     *
     * @generated from field: optional string transcript_url = 1;
     */
    transcriptUrl?: string;
    /**
     * Populated if there were transcription errors
     *
     * @generated from field: repeated string errors = 2;
     */
    errors: string[];
    /**
     * Populated if there were transcription warnings
     *
     * @generated from field: repeated string warnings = 3;
     */
    warnings: string[];
    constructor(data?: PartialMessage<GetTranscriptResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetTranscriptResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetTranscriptResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetTranscriptResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetTranscriptResponse;
    static equals(a: GetTranscriptResponse | PlainMessage<GetTranscriptResponse> | undefined, b: GetTranscriptResponse | PlainMessage<GetTranscriptResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.Transcript
 */
export declare class Transcript extends Message<Transcript> {
    /**
     * File version
     *
     * @generated from field: int32 version = 1;
     */
    version: number;
    /**
     * All the speakers in the transcription
     *
     * @generated from field: repeated avn.connect.v1.Speaker speakers = 2;
     */
    speakers: Speaker[];
    /**
     * All the transcribed  segments
     *
     * @generated from field: repeated avn.connect.v1.TranscriptSegment segments = 3;
     */
    segments: TranscriptSegment[];
    constructor(data?: PartialMessage<Transcript>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Transcript";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Transcript;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Transcript;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Transcript;
    static equals(a: Transcript | PlainMessage<Transcript> | undefined, b: Transcript | PlainMessage<Transcript> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TranscriptSegment
 */
export declare class TranscriptSegment extends Message<TranscriptSegment> {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
    /**
     * @generated from field: int32 speaker_id = 2;
     */
    speakerId: number;
    /**
     * @generated from field: string language_id = 3;
     */
    languageId: string;
    /**
     * @generated from field: float start_time_seconds = 4;
     */
    startTimeSeconds: number;
    /**
     * @generated from field: float end_time_seconds = 5;
     */
    endTimeSeconds: number;
    /**
     * @generated from field: repeated avn.connect.v1.SpeechFlag speech_flags = 6;
     */
    speechFlags: SpeechFlag[];
    /**
     * Translation metadata
     *
     * @generated from field: string translation_id = 7;
     */
    translationId: string;
    /**
     * @generated from field: string source_language_id = 8;
     */
    sourceLanguageId: string;
    constructor(data?: PartialMessage<TranscriptSegment>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranscriptSegment";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranscriptSegment;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranscriptSegment;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranscriptSegment;
    static equals(a: TranscriptSegment | PlainMessage<TranscriptSegment> | undefined, b: TranscriptSegment | PlainMessage<TranscriptSegment> | undefined): boolean;
}
