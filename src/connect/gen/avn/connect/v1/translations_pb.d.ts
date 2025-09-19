import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldOptions, Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from enum avn.connect.v1.TranslationFormat
 */
export declare enum TranslationFormat {
    /**
     * @generated from enum value: TRANSLATION_FORMAT_UNDEFINED = 0;
     */
    UNDEFINED = 0,
    /**
     * @generated from enum value: TRANSLATION_FORMAT_PLAIN_TEXT = 1;
     */
    PLAIN_TEXT = 1,
    /**
     * @generated from enum value: TRANSLATION_FORMAT_MARKDOWN = 2;
     */
    MARKDOWN = 2,
    /**
     * @generated from enum value: TRANSLATION_FORMAT_HTML = 3;
     */
    HTML = 3,
    /**
     * @generated from enum value: TRANSLATION_FORMAT_XLIFF = 4;
     */
    XLIFF = 4
}
/**
 * @generated from enum avn.connect.v1.TranslationFlag
 */
export declare enum TranslationFlag {
    /**
     * @generated from enum value: TRANSLATION_FLAG_UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * Is translation `text` field an AVNFS path?
     *
     * @generated from enum value: TRANSLATION_FLAG_IS_AVNFS = 1;
     */
    IS_AVNFS = 1,
    /**
     * Should translation include metadata info for translators?
     *
     * @generated from enum value: TRANSLATION_FLAG_INCLUDE_METADATA = 2;
     */
    INCLUDE_METADATA = 2,
    /**
     * Translation failed
     *
     * @generated from enum value: TRANSLATION_FLAG_ERROR = 40;
     */
    ERROR = 40,
    /**
     * Translation could not be found
     *
     * @generated from enum value: TRANSLATION_FLAG_NOT_FOUND = 41;
     */
    NOT_FOUND = 41
}
/**
 * Source or translated text details
 *
 * @generated from message avn.connect.v1.TranslationSpec
 */
export declare class TranslationSpec extends Message<TranslationSpec> {
    /**
     * Note: A blank language_id signifies that the language is expected to come from the source or, if the source doesn't support this, it should not be translated
     *
     * @generated from field: string language_id = 1;
     */
    languageId: string;
    /**
     * @generated from field: avn.connect.v1.TranslationFormat format = 2;
     */
    format: TranslationFormat;
    /**
     * Additional flags
     *
     * @generated from field: repeated avn.connect.v1.TranslationFlag translation_flags = 3;
     */
    translationFlags: TranslationFlag[];
    constructor(data?: PartialMessage<TranslationSpec>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranslationSpec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranslationSpec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranslationSpec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranslationSpec;
    static equals(a: TranslationSpec | PlainMessage<TranslationSpec> | undefined, b: TranslationSpec | PlainMessage<TranslationSpec> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TranslationResponse
 */
export declare class TranslationResponse extends Message<TranslationResponse> {
    /**
     * @generated from field: string text = 1;
     */
    text: string;
    constructor(data?: PartialMessage<TranslationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranslationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranslationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranslationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranslationResponse;
    static equals(a: TranslationResponse | PlainMessage<TranslationResponse> | undefined, b: TranslationResponse | PlainMessage<TranslationResponse> | undefined): boolean;
}
/**
 * Translation request
 *
 * @generated from message avn.connect.v1.TranslationRequest
 */
export declare class TranslationRequest extends Message<TranslationRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * Source text
     *
     * @generated from field: string text = 2;
     */
    text: string;
    /**
     * Language and format of the source text
     *
     * @generated from field: avn.connect.v1.TranslationSpec source_spec = 3;
     */
    sourceSpec?: TranslationSpec;
    /**
     * Language and format to translate:
     * - if undefined the original source will be returned unmodified
     * - if the format field is set to UNDEFINED the source format will be preserved
     *
     * @generated from field: optional avn.connect.v1.TranslationSpec target_spec = 4;
     */
    targetSpec?: TranslationSpec;
    /**
     * Differential modifier for short or ambiguous text (currently implemented as a prefix for backward compatibility with CC1)
     *
     * @generated from field: string modifier = 5;
     */
    modifier: string;
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
 * @generated from message avn.connect.v1.TranslationUpdateRequest
 */
export declare class TranslationUpdateRequest extends Message<TranslationUpdateRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: string translation_id = 2;
     */
    translationId: string;
    /**
     * @generated from field: string source_language_id = 3;
     */
    sourceLanguageId: string;
    /**
     * @generated from field: string target_language_id = 4;
     */
    targetLanguageId: string;
    /**
     * New translated text
     *
     * @generated from field: string text = 5;
     */
    text: string;
    constructor(data?: PartialMessage<TranslationUpdateRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranslationUpdateRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranslationUpdateRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranslationUpdateRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranslationUpdateRequest;
    static equals(a: TranslationUpdateRequest | PlainMessage<TranslationUpdateRequest> | undefined, b: TranslationUpdateRequest | PlainMessage<TranslationUpdateRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TranslationLookupRequest
 */
export declare class TranslationLookupRequest extends Message<TranslationLookupRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: string translation_id = 2;
     */
    translationId: string;
    /**
     * @generated from field: string source_language_id = 3;
     */
    sourceLanguageId: string;
    /**
     * @generated from field: string target_language_id = 4;
     */
    targetLanguageId: string;
    constructor(data?: PartialMessage<TranslationLookupRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranslationLookupRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranslationLookupRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranslationLookupRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranslationLookupRequest;
    static equals(a: TranslationLookupRequest | PlainMessage<TranslationLookupRequest> | undefined, b: TranslationLookupRequest | PlainMessage<TranslationLookupRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TranslationLookupResponse
 */
export declare class TranslationLookupResponse extends Message<TranslationLookupResponse> {
    /**
     * @generated from field: string source_text = 1;
     */
    sourceText: string;
    /**
     * @generated from field: string target_text = 2;
     */
    targetText: string;
    constructor(data?: PartialMessage<TranslationLookupResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TranslationLookupResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TranslationLookupResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TranslationLookupResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TranslationLookupResponse;
    static equals(a: TranslationLookupResponse | PlainMessage<TranslationLookupResponse> | undefined, b: TranslationLookupResponse | PlainMessage<TranslationLookupResponse> | undefined): boolean;
}
/**
 * @generated from extension: optional bool translatable = 1000;
 */
export declare const translatable: import("@bufbuild/protobuf").Extension<FieldOptions, boolean>;
