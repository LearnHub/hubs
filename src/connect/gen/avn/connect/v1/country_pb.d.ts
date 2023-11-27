import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.Country
 */
export declare class Country extends Message<Country> {
    /**
     * @generated from field: string country_id = 1;
     */
    countryId: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string name_english = 4;
     */
    nameEnglish: string;
    /**
     * @generated from field: string default_language_id = 5;
     */
    defaultLanguageId: string;
    /**
     * @generated from field: string default_locale_id = 6;
     */
    defaultLocaleId: string;
    /**
     * @generated from field: int32 default_organization_id = 7;
     */
    defaultOrganizationId: number;
    /**
     * @generated from field: optional int32 tag_id = 8;
     */
    tagId?: number;
    constructor(data?: PartialMessage<Country>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Country";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Country;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Country;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Country;
    static equals(a: Country | PlainMessage<Country> | undefined, b: Country | PlainMessage<Country> | undefined): boolean;
}
