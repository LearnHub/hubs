import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { Translatable, TranslationSpec } from "./translations_pb.js";
/**
 * @generated from message avn.connect.v1.GetCountryRequest
 */
export declare class GetCountryRequest extends Message<GetCountryRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: string country_id = 2;
     */
    countryId: string;
    /**
     * @generated from field: avn.connect.v1.TranslationSpec translate = 3;
     */
    translate?: TranslationSpec;
    constructor(data?: PartialMessage<GetCountryRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetCountryRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCountryRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCountryRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCountryRequest;
    static equals(a: GetCountryRequest | PlainMessage<GetCountryRequest> | undefined, b: GetCountryRequest | PlainMessage<GetCountryRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetCountriesRequest
 */
export declare class GetCountriesRequest extends Message<GetCountriesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: avn.connect.v1.TranslationSpec translate = 2;
     */
    translate?: TranslationSpec;
    constructor(data?: PartialMessage<GetCountriesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetCountriesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCountriesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCountriesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCountriesRequest;
    static equals(a: GetCountriesRequest | PlainMessage<GetCountriesRequest> | undefined, b: GetCountriesRequest | PlainMessage<GetCountriesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetCountriesResponse
 */
export declare class GetCountriesResponse extends Message<GetCountriesResponse> {
    /**
     * @generated from field: map<string, avn.connect.v1.Country> results = 1;
     */
    results: {
        [key: string]: Country;
    };
    constructor(data?: PartialMessage<GetCountriesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetCountriesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetCountriesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetCountriesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetCountriesResponse;
    static equals(a: GetCountriesResponse | PlainMessage<GetCountriesResponse> | undefined, b: GetCountriesResponse | PlainMessage<GetCountriesResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.Country
 */
export declare class Country extends Message<Country> {
    /**
     * ISO 3166-1 alpha-2 (default key)
     *
     * @generated from field: string country_id = 1;
     */
    countryId: string;
    /**
     * ISO 3166-1 alpha-3
     *
     * @generated from field: string alpha3 = 2;
     */
    alpha3: string;
    /**
     * Name translated into request language
     *
     * @generated from field: avn.connect.v1.Translatable name = 3;
     */
    name?: Translatable;
    /**
     * Name in the default language of the country
     *
     * @generated from field: string native_name = 4;
     */
    nativeName: string;
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
