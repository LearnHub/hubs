import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { TranslationSpec } from "./translations_pb.js";
/**
 * @generated from enum avn.connect.v1.TextDirection
 */
export declare enum TextDirection {
    /**
     * @generated from enum value: TEXT_DIRECTION_LTR = 0;
     */
    LTR = 0,
    /**
     * @generated from enum value: TEXT_DIRECTION_RTL = 1;
     */
    RTL = 1
}
/**
 * @generated from message avn.connect.v1.Language
 */
export declare class Language extends Message<Language> {
    /**
     * ID (IETF BCP 47)
     *
     * @generated from field: string language_id = 1;
     */
    languageId: string;
    /**
     * Name (in the language itself)
     *
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * Display name (in the target language)
     *
     * @generated from field: string text = 6;
     */
    text: string;
    /**
     * Name in English
     *
     * @generated from field: string name_english = 3;
     */
    nameEnglish: string;
    /**
     * Direction
     *
     * @generated from field: avn.connect.v1.TextDirection dir = 4;
     */
    dir: TextDirection;
    /**
     * ClassConnect content tag
     *
     * @generated from field: optional int32 tag_id = 5;
     */
    tagId?: number;
    constructor(data?: PartialMessage<Language>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Language";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Language;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Language;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Language;
    static equals(a: Language | PlainMessage<Language> | undefined, b: Language | PlainMessage<Language> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetLanguagesRequest
 */
export declare class GetLanguagesRequest extends Message<GetLanguagesRequest> {
    /**
     * Required to translate language text field
     *
     * @generated from field: avn.connect.v1.TranslationSpec translate = 1;
     */
    translate?: TranslationSpec;
    constructor(data?: PartialMessage<GetLanguagesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetLanguagesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLanguagesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLanguagesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLanguagesRequest;
    static equals(a: GetLanguagesRequest | PlainMessage<GetLanguagesRequest> | undefined, b: GetLanguagesRequest | PlainMessage<GetLanguagesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetLanguagesResponse
 */
export declare class GetLanguagesResponse extends Message<GetLanguagesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.Language languages = 1;
     */
    languages: Language[];
    constructor(data?: PartialMessage<GetLanguagesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetLanguagesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLanguagesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLanguagesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLanguagesResponse;
    static equals(a: GetLanguagesResponse | PlainMessage<GetLanguagesResponse> | undefined, b: GetLanguagesResponse | PlainMessage<GetLanguagesResponse> | undefined): boolean;
}
