import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { TranscodeImageSpec } from "./media_pb.js";
import { Activity } from "./activities_pb.js";
/**
 * @generated from message avn.connect.v1.SearchImagesRequest
 */
export declare class SearchImagesRequest extends Message<SearchImagesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: string search_text = 2;
     */
    searchText: string;
    /**
     * @generated from field: optional int32 page_size = 3;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 4;
     */
    pageToken?: string;
    /**
     * Override to the user agent language
     *
     * @generated from field: optional string language_id = 5;
     */
    languageId?: string;
    /**
     * @generated from field: avn.connect.v1.TranscodeImageSpec icon_spec = 6;
     */
    iconSpec?: TranscodeImageSpec;
    /**
     * @generated from field: avn.connect.v1.TranscodeImageSpec preview_spec = 7;
     */
    previewSpec?: TranscodeImageSpec;
    constructor(data?: PartialMessage<SearchImagesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SearchImagesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchImagesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchImagesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchImagesRequest;
    static equals(a: SearchImagesRequest | PlainMessage<SearchImagesRequest> | undefined, b: SearchImagesRequest | PlainMessage<SearchImagesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.SearchImagesResponse
 */
export declare class SearchImagesResponse extends Message<SearchImagesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.Activity results = 1;
     */
    results: Activity[];
    /**
     * @generated from field: optional string next_page_token = 2;
     */
    nextPageToken?: string;
    constructor(data?: PartialMessage<SearchImagesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SearchImagesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchImagesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchImagesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchImagesResponse;
    static equals(a: SearchImagesResponse | PlainMessage<SearchImagesResponse> | undefined, b: SearchImagesResponse | PlainMessage<SearchImagesResponse> | undefined): boolean;
}
