import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum avn.connect.v1.TranslationFlags
 */
export declare enum TranslationFlags {
    /**
     * @generated from enum value: MARKDOWN_SOURCE = 0;
     */
    MARKDOWN_SOURCE = 0
}
/**
 * @generated from message avn.connect.v1.TranslationRequest
 */
export declare class TranslationRequest extends Message<TranslationRequest> {
    /**
     * Source text
     *
     * @generated from field: string source = 1;
     */
    source: string;
    /**
     * Language of the source text
     *
     * @generated from field: string source_language_id = 2;
     */
    sourceLanguageId: string;
    /**
     * Language to translate to
     *
     * @generated from field: string target_language_id = 3;
     */
    targetLanguageId: string;
    /**
     * ID / differentiator
     *
     * @generated from field: optional string modifier = 4;
     */
    modifier?: string;
    /**
     * Additional context
     *
     * @generated from field: repeated avn.connect.v1.TranslationFlags flags = 5;
     */
    flags: TranslationFlags[];
    constructor(data?: PartialMessage<TranslationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranslationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranslationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranslationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranslationRequest;
    static equals(a: TranslationRequest | PlainMessage<TranslationRequest> | undefined, b: TranslationRequest | PlainMessage<TranslationRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TranslationResponse
 */
export declare class TranslationResponse extends Message<TranslationResponse> {
    /**
     * Translated text
     *
     * @generated from field: string translation = 1;
     */
    translation: string;
    /**
     * Language of the source text
     *
     * @generated from field: string source_language_id = 2;
     */
    sourceLanguageId: string;
    /**
     * Language of the translated text
     *
     * TODO: State of the translation
     * TranslationState state = 4;
     *
     * @generated from field: string target_language_id = 3;
     */
    targetLanguageId: string;
    constructor(data?: PartialMessage<TranslationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranslationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranslationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranslationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranslationResponse;
    static equals(a: TranslationResponse | PlainMessage<TranslationResponse> | undefined, b: TranslationResponse | PlainMessage<TranslationResponse> | undefined): boolean;
}
