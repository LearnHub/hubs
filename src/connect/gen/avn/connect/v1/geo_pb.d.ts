import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from enum avn.connect.v1.GeoPlaceType
 */
export declare enum GeoPlaceType {
    /**
     * @generated from enum value: GEO_PLACE_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_BLOCK = 1;
     */
    BLOCK = 1,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_COUNTRY = 2;
     */
    COUNTRY = 2,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_DISTRICT = 3;
     */
    DISTRICT = 3,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_INTERPOLATED_ADDRESS = 4;
     */
    INTERPOLATED_ADDRESS = 4,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_INTERSECTION = 5;
     */
    INTERSECTION = 5,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_LOCALITY = 6;
     */
    LOCALITY = 6,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_POINT_ADDRESS = 7;
     */
    POINT_ADDRESS = 7,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_POINT_OF_INTEREST = 8;
     */
    POINT_OF_INTEREST = 8,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_POSTAL_CODE = 9;
     */
    POSTAL_CODE = 9,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_REGION = 10;
     */
    REGION = 10,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_STREET = 11;
     */
    STREET = 11,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_SUB_BLOCK = 12;
     */
    SUB_BLOCK = 12,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_SUB_DISTRICT = 13;
     */
    SUB_DISTRICT = 13,
    /**
     * @generated from enum value: GEO_PLACE_TYPE_SUB_REGION = 14;
     */
    SUB_REGION = 14
}
/**
 * @generated from message avn.connect.v1.GetGeoPlaceRequest
 */
export declare class GetGeoPlaceRequest extends Message<GetGeoPlaceRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: string place_id = 2;
     */
    placeId: string;
    /**
     * @generated from field: optional string language_id = 3;
     */
    languageId?: string;
    constructor(data?: PartialMessage<GetGeoPlaceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetGeoPlaceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGeoPlaceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGeoPlaceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGeoPlaceRequest;
    static equals(a: GetGeoPlaceRequest | PlainMessage<GetGeoPlaceRequest> | undefined, b: GetGeoPlaceRequest | PlainMessage<GetGeoPlaceRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetGeoPlaceResponse
 */
export declare class GetGeoPlaceResponse extends Message<GetGeoPlaceResponse> {
    /**
     * @generated from field: avn.connect.v1.GeoPlace place = 1;
     */
    place?: GeoPlace;
    /**
     * Heuristically composed ClassConnect fields
     *
     * @generated from field: avn.connect.v1.GeoAddress address = 2;
     */
    address?: GeoAddress;
    /**
     * Full result from geolocation service
     *
     * @generated from field: optional avn.connect.v1.AwsPlacesAddress aws_places_address = 3;
     */
    awsPlacesAddress?: AwsPlacesAddress;
    /**
     * @generated from field: repeated avn.connect.v1.GeoContact emails = 4;
     */
    emails: GeoContact[];
    /**
     * @generated from field: repeated avn.connect.v1.GeoContact faxes = 5;
     */
    faxes: GeoContact[];
    /**
     * @generated from field: repeated avn.connect.v1.GeoContact phones = 6;
     */
    phones: GeoContact[];
    /**
     * @generated from field: repeated avn.connect.v1.GeoContact websites = 7;
     */
    websites: GeoContact[];
    constructor(data?: PartialMessage<GetGeoPlaceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetGeoPlaceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetGeoPlaceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetGeoPlaceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetGeoPlaceResponse;
    static equals(a: GetGeoPlaceResponse | PlainMessage<GetGeoPlaceResponse> | undefined, b: GetGeoPlaceResponse | PlainMessage<GetGeoPlaceResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GeoSuggestRequest
 */
export declare class GeoSuggestRequest extends Message<GeoSuggestRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * Text to search for
     *
     * @generated from field: string text = 2;
     */
    text: string;
    /**
     * Optional list of countries to include in the search
     *
     * @generated from field: repeated string country_ids = 3;
     */
    countryIds: string[];
    /**
     * Optional position to use for ordering results
     *
     * @generated from field: optional avn.connect.v1.GeoLocation bias_position = 4;
     */
    biasPosition?: GeoLocation;
    /**
     * Max number of results
     *
     * @generated from field: optional int32 page_size = 5;
     */
    pageSize?: number;
    /**
     * Language override
     *
     * @generated from field: optional string language_id = 6;
     */
    languageId?: string;
    constructor(data?: PartialMessage<GeoSuggestRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GeoSuggestRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeoSuggestRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeoSuggestRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeoSuggestRequest;
    static equals(a: GeoSuggestRequest | PlainMessage<GeoSuggestRequest> | undefined, b: GeoSuggestRequest | PlainMessage<GeoSuggestRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GeoSuggestResponse
 */
export declare class GeoSuggestResponse extends Message<GeoSuggestResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.GeoPlace results = 1;
     */
    results: GeoPlace[];
    constructor(data?: PartialMessage<GeoSuggestResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GeoSuggestResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeoSuggestResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeoSuggestResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeoSuggestResponse;
    static equals(a: GeoSuggestResponse | PlainMessage<GeoSuggestResponse> | undefined, b: GeoSuggestResponse | PlainMessage<GeoSuggestResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GeoPlace
 */
export declare class GeoPlace extends Message<GeoPlace> {
    /**
     * @generated from field: string place_id = 1;
     */
    placeId: string;
    /**
     * @generated from field: string title = 2;
     */
    title: string;
    /**
     * @generated from field: avn.connect.v1.GeoPlaceType place_type = 3;
     */
    placeType: GeoPlaceType;
    /**
     * @generated from field: optional avn.connect.v1.GeoLocation position = 7;
     */
    position?: GeoLocation;
    constructor(data?: PartialMessage<GeoPlace>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GeoPlace";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeoPlace;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeoPlace;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeoPlace;
    static equals(a: GeoPlace | PlainMessage<GeoPlace> | undefined, b: GeoPlace | PlainMessage<GeoPlace> | undefined): boolean;
}
/**
 * Full results from AWS Places service
 *
 * @generated from message avn.connect.v1.AwsPlacesAddress
 */
export declare class AwsPlacesAddress extends Message<AwsPlacesAddress> {
    /**
     * @generated from field: string address_number = 1;
     */
    addressNumber: string;
    /**
     * @generated from field: string building = 2;
     */
    building: string;
    /**
     * @generated from field: string street = 3;
     */
    street: string;
    /**
     * @generated from field: string block = 4;
     */
    block: string;
    /**
     * @generated from field: string sub_block = 5;
     */
    subBlock: string;
    /**
     * @generated from field: repeated string intersection = 6;
     */
    intersection: string[];
    /**
     * @generated from field: string locality = 7;
     */
    locality: string;
    /**
     * @generated from field: string region = 8;
     */
    region: string;
    /**
     * @generated from field: string sub_region = 9;
     */
    subRegion: string;
    /**
     * @generated from field: string district = 10;
     */
    district: string;
    /**
     * @generated from field: string sub_district = 11;
     */
    subDistrict: string;
    /**
     * @generated from field: string post_code = 12;
     */
    postCode: string;
    /**
     * @generated from field: string country_id = 13;
     */
    countryId: string;
    constructor(data?: PartialMessage<AwsPlacesAddress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AwsPlacesAddress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AwsPlacesAddress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AwsPlacesAddress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AwsPlacesAddress;
    static equals(a: AwsPlacesAddress | PlainMessage<AwsPlacesAddress> | undefined, b: AwsPlacesAddress | PlainMessage<AwsPlacesAddress> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GeoAddress
 */
export declare class GeoAddress extends Message<GeoAddress> {
    /**
     * Street name and building name or number
     *
     * @generated from field: string street_address = 1;
     */
    streetAddress: string;
    /**
     * City, town, or village
     *
     * @generated from field: string city = 2;
     */
    city: string;
    /**
     * State or municipality
     *
     * @generated from field: string state = 3;
     */
    state: string;
    /**
     * Post or zip code
     *
     * @generated from field: string post_code = 4;
     */
    postCode: string;
    /**
     * @generated from field: string country_id = 5;
     */
    countryId: string;
    constructor(data?: PartialMessage<GeoAddress>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GeoAddress";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeoAddress;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeoAddress;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeoAddress;
    static equals(a: GeoAddress | PlainMessage<GeoAddress> | undefined, b: GeoAddress | PlainMessage<GeoAddress> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GeoContact
 */
export declare class GeoContact extends Message<GeoContact> {
    /**
     * @generated from field: string label = 1;
     */
    label: string;
    /**
     * @generated from field: string value = 2;
     */
    value: string;
    constructor(data?: PartialMessage<GeoContact>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GeoContact";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeoContact;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeoContact;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeoContact;
    static equals(a: GeoContact | PlainMessage<GeoContact> | undefined, b: GeoContact | PlainMessage<GeoContact> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GeoLocation
 */
export declare class GeoLocation extends Message<GeoLocation> {
    /**
     * @generated from field: float lon = 1;
     */
    lon: number;
    /**
     * @generated from field: float lat = 2;
     */
    lat: number;
    constructor(data?: PartialMessage<GeoLocation>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GeoLocation";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeoLocation;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeoLocation;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeoLocation;
    static equals(a: GeoLocation | PlainMessage<GeoLocation> | undefined, b: GeoLocation | PlainMessage<GeoLocation> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GeoBounds
 */
export declare class GeoBounds extends Message<GeoBounds> {
    /**
     * @generated from field: avn.connect.v1.GeoLocation sw = 1;
     */
    sw?: GeoLocation;
    /**
     * @generated from field: avn.connect.v1.GeoLocation ne = 2;
     */
    ne?: GeoLocation;
    constructor(data?: PartialMessage<GeoBounds>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GeoBounds";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GeoBounds;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GeoBounds;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GeoBounds;
    static equals(a: GeoBounds | PlainMessage<GeoBounds> | undefined, b: GeoBounds | PlainMessage<GeoBounds> | undefined): boolean;
}
