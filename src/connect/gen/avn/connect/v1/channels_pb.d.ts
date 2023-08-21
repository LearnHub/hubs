import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, Timestamp } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { Profile } from "./profiles_pb.js";
import { Activity } from "./activities_pb.js";
/**
 * @generated from message avn.connect.v1.Channel
 */
export declare class Channel extends Message<Channel> {
    /**
     * @generated from field: int32 channel_id = 1;
     */
    channelId: number;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string icon_url = 3;
     */
    iconUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp created = 4;
     */
    created?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 5;
     */
    updated?: Timestamp;
    /**
     * @generated from field: optional string description = 6;
     */
    description?: string;
    constructor(data?: PartialMessage<Channel>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.Channel";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Channel;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Channel;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Channel;
    static equals(a: Channel | PlainMessage<Channel> | undefined, b: Channel | PlainMessage<Channel> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetChannelRequest
 */
export declare class GetChannelRequest extends Message<GetChannelRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 channel_id = 2;
     */
    channelId: number;
    /**
     * @generated from field: optional string target_language_id = 3;
     */
    targetLanguageId?: string;
    constructor(data?: PartialMessage<GetChannelRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetChannelRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetChannelRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetChannelRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetChannelRequest;
    static equals(a: GetChannelRequest | PlainMessage<GetChannelRequest> | undefined, b: GetChannelRequest | PlainMessage<GetChannelRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetBrowsableChannelsRequest
 */
export declare class GetBrowsableChannelsRequest extends Message<GetBrowsableChannelsRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: optional string target_language_id = 2;
     */
    targetLanguageId?: string;
    /**
     * @generated from field: optional int32 page_size = 3;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 4;
     */
    pageToken?: string;
    constructor(data?: PartialMessage<GetBrowsableChannelsRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetBrowsableChannelsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBrowsableChannelsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBrowsableChannelsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBrowsableChannelsRequest;
    static equals(a: GetBrowsableChannelsRequest | PlainMessage<GetBrowsableChannelsRequest> | undefined, b: GetBrowsableChannelsRequest | PlainMessage<GetBrowsableChannelsRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetBrowsableChannelsResponse
 */
export declare class GetBrowsableChannelsResponse extends Message<GetBrowsableChannelsResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.Channel results = 1;
     */
    results: Channel[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<GetBrowsableChannelsResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetBrowsableChannelsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetBrowsableChannelsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetBrowsableChannelsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetBrowsableChannelsResponse;
    static equals(a: GetBrowsableChannelsResponse | PlainMessage<GetBrowsableChannelsResponse> | undefined, b: GetBrowsableChannelsResponse | PlainMessage<GetBrowsableChannelsResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetProfilesRequest
 */
export declare class GetProfilesRequest extends Message<GetProfilesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 channel_id = 2;
     */
    channelId: number;
    /**
     * @generated from field: optional string target_language_id = 3;
     */
    targetLanguageId?: string;
    /**
     * @generated from field: optional int32 page_size = 4;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 5;
     */
    pageToken?: string;
    constructor(data?: PartialMessage<GetProfilesRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetProfilesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProfilesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProfilesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProfilesRequest;
    static equals(a: GetProfilesRequest | PlainMessage<GetProfilesRequest> | undefined, b: GetProfilesRequest | PlainMessage<GetProfilesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetProfilesResponse
 */
export declare class GetProfilesResponse extends Message<GetProfilesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.Profile results = 1;
     */
    results: Profile[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<GetProfilesResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetProfilesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetProfilesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetProfilesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetProfilesResponse;
    static equals(a: GetProfilesResponse | PlainMessage<GetProfilesResponse> | undefined, b: GetProfilesResponse | PlainMessage<GetProfilesResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetActivitiesRequest
 */
export declare class GetActivitiesRequest extends Message<GetActivitiesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 channel_id = 2;
     */
    channelId: number;
    /**
     * @generated from field: optional string target_language_id = 3;
     */
    targetLanguageId?: string;
    /**
     * @generated from field: optional int32 page_size = 4;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 5;
     */
    pageToken?: string;
    constructor(data?: PartialMessage<GetActivitiesRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetActivitiesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActivitiesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActivitiesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActivitiesRequest;
    static equals(a: GetActivitiesRequest | PlainMessage<GetActivitiesRequest> | undefined, b: GetActivitiesRequest | PlainMessage<GetActivitiesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetActivitiesResponse
 */
export declare class GetActivitiesResponse extends Message<GetActivitiesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.Activity results = 1;
     */
    results: Activity[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<GetActivitiesResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetActivitiesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetActivitiesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetActivitiesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetActivitiesResponse;
    static equals(a: GetActivitiesResponse | PlainMessage<GetActivitiesResponse> | undefined, b: GetActivitiesResponse | PlainMessage<GetActivitiesResponse> | undefined): boolean;
}
