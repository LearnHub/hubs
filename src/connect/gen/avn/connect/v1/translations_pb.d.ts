import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum avn.connect.v1.TranslationFlags
 */
export declare enum TranslationFlags {
    /**
     * @generated from enum value: TRANSLATION_FLAGS_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * Is text a base64 AVNFS path? (not yet implemented)
     *
     * @generated from enum value: TRANSLATION_FLAGS_IS_AVNFS = 1;
     */
    IS_AVNFS = 1,
    /**
     * @generated from enum value: TRANSLATION_FLAGS_MEDIA_TYPE_TEXT = 10;
     */
    MEDIA_TYPE_TEXT = 10,
    /**
     * @generated from enum value: TRANSLATION_FLAGS_MEDIA_TYPE_MARKDOWN = 11;
     */
    MEDIA_TYPE_MARKDOWN = 11,
    /**
     * @generated from enum value: TRANSLATION_FLAGS_MEDIA_TYPE_HTML = 12;
     */
    MEDIA_TYPE_HTML = 12,
    /**
     * Translation succeeded
     *
     * @generated from enum value: TRANSLATION_FLAGS_OK = 20;
     */
    OK = 20,
    /**
     * Translation failed
     *
     * @generated from enum value: TRANSLATION_FLAGS_ERROR = 40;
     */
    ERROR = 40,
    /**
     * No translation was needed
     *
     * @generated from enum value: TRANSLATION_FLAGS_SAME_LANGUAGE = 21;
     */
    SAME_LANGUAGE = 21,
    /**
     * Partial translation using dialect rules
     *
     * @generated from enum value: TRANSLATION_FLAGS_DIALECT = 22;
     */
    DIALECT = 22,
    /**
     * The source has no language ID
     *
     * @generated from enum value: TRANSLATION_FLAGS_NEUTRAL_SOURCE = 23;
     */
    NEUTRAL_SOURCE = 23,
    /**
     * Original source was requested
     *
     * @generated from enum value: TRANSLATION_FLAGS_ORIGINAL_SOURCE = 24;
     */
    ORIGINAL_SOURCE = 24,
    /**
     * Translation could not be found
     *
     * @generated from enum value: TRANSLATION_FLAGS_NOT_FOUND = 41;
     */
    NOT_FOUND = 41
}
/**
 * @generated from message avn.connect.v1.TranslationRequest
 */
export declare class TranslationRequest extends Message<TranslationRequest> {
    /**
     * Source text (immediate text string or AVNFS reference)
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
     * Differential modifier for short or ambiguous text (currently implemented as a prefix for backward compatibility with CC1)
     *
     * @generated from field: string modifier = 4;
     */
    modifier: string;
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
 * @generated from message avn.connect.v1.Translation
 */
export declare class Translation extends Message<Translation> {
    /**
     * Translated text (immediate text string or AVNFS reference)
     *
     * @generated from field: string translation = 1;
     */
    translation: string;
    /**
     * Language of the source text (blank if source is language neutral)
     *
     * @generated from field: string source_language_id = 2;
     */
    sourceLanguageId: string;
    /**
     * Language to translate to (blank if source should not be translated)
     *
     * @generated from field: string target_language_id = 3;
     */
    targetLanguageId: string;
    /**
     * Unique ID for identifying translation, based on source text and modifier
     *
     * @generated from field: string translation_id = 4;
     */
    translationId: string;
    /**
     * Additional context
     *
     * @generated from field: repeated avn.connect.v1.TranslationFlags flags = 5;
     */
    flags: TranslationFlags[];
    constructor(data?: PartialMessage<Translation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Translation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Translation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Translation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Translation;
    static equals(a: Translation | PlainMessage<Translation> | undefined, b: Translation | PlainMessage<Translation> | undefined): boolean;
}
