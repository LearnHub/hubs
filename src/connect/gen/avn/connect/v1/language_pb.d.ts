import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum avn.connect.v1.TextDirection
 */
export declare enum TextDirection {
    /**
     * @generated from enum value: LTR = 0;
     */
    LTR = 0,
    /**
     * @generated from enum value: RTL = 1;
     */
    RTL = 1
}
/**
 * @generated from message avn.connect.v1.Language
 */
export declare class Language extends Message<Language> {
    /**
     * ID
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
