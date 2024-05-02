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
     * Is text a base64 AVNFS path?
     *
     * @generated from enum value: TRANSLATION_FLAGS_IS_AVNFS = 1;
     */
    IS_AVNFS = 1,
    /**
     * Media type flags (hint for translation)
     *
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
     * Translation result flags
     *
     * @generated from enum value: TRANSLATION_FLAGS_TRANSLATED = 20;
     */
    TRANSLATED = 20,
    /**
     * @generated from enum value: TRANSLATION_FLAGS_SAME_LANGUAGE = 21;
     */
    SAME_LANGUAGE = 21,
    /**
     * @generated from enum value: TRANSLATION_FLAGS_DIALECT = 22;
     */
    DIALECT = 22,
    /**
     * @generated from enum value: TRANSLATION_FLAGS_FAILED = 23;
     */
    FAILED = 23,
    /**
     * @generated from enum value: TRANSLATION_FLAGS_NOT_FOUND = 24;
     */
    NOT_FOUND = 24
}
/**
 * @generated from message avn.connect.v1.TranslationField
 */
export declare class TranslationField extends Message<TranslationField> {
    /**
     * Source text (text or AVNFS reference)
     *
     * @generated from field: string text = 1;
     */
    text: string;
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
     * For Translate: Differential modifier for short or ambiguous text (implemented as a prefix)
     * For Reverse:   Source ID from a successful translation
     * For Update:    Source ID from a successful translation
     *
     * @generated from field: string idOrModifier = 4;
     */
    idOrModifier: string;
    /**
     * Additional context
     *
     * @generated from field: repeated avn.connect.v1.TranslationFlags flags = 5;
     */
    flags: TranslationFlags[];
    constructor(data?: PartialMessage<TranslationField>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranslationField";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranslationField;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranslationField;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranslationField;
    static equals(a: TranslationField | PlainMessage<TranslationField> | undefined, b: TranslationField | PlainMessage<TranslationField> | undefined): boolean;
}
