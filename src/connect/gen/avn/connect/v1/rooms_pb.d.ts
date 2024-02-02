import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { ConnectionCredentials } from "./connections_pb.js";
/**
 * @generated from message avn.connect.v1.RoomInfo
 */
export declare class RoomInfo extends Message<RoomInfo> {
    /**
     * @generated from field: string domain = 1;
     */
    domain: string;
    /**
     * @generated from field: string dimension_id = 2;
     */
    dimensionId: string;
    /**
     * @generated from field: string room_id = 3;
     */
    roomId: string;
    /**
     * @generated from field: string name = 4;
     */
    name: string;
    /**
     * @generated from field: string icon_url = 5;
     */
    iconUrl: string;
    /**
     * @generated from field: string screenshot_url = 6;
     */
    screenshotUrl: string;
    /**
     * @generated from field: string asset_id = 7;
     */
    assetId: string;
    /**
     * @generated from field: int32 activity_id = 8;
     */
    activityId: number;
    /**
     * @generated from field: google.protobuf.Timestamp created = 9;
     */
    created?: Timestamp;
    constructor(data?: PartialMessage<RoomInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RoomInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RoomInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RoomInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RoomInfo;
    static equals(a: RoomInfo | PlainMessage<RoomInfo> | undefined, b: RoomInfo | PlainMessage<RoomInfo> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetRoomRequest
 */
export declare class GetRoomRequest extends Message<GetRoomRequest> {
    /**
     * @generated from field: string room_id = 1;
     */
    roomId: string;
    constructor(data?: PartialMessage<GetRoomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetRoomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRoomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRoomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRoomRequest;
    static equals(a: GetRoomRequest | PlainMessage<GetRoomRequest> | undefined, b: GetRoomRequest | PlainMessage<GetRoomRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetRoomResponse
 */
export declare class GetRoomResponse extends Message<GetRoomResponse> {
    /**
     * @generated from field: avn.connect.v1.RoomInfo room_info = 1;
     */
    roomInfo?: RoomInfo;
    constructor(data?: PartialMessage<GetRoomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetRoomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRoomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRoomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRoomResponse;
    static equals(a: GetRoomResponse | PlainMessage<GetRoomResponse> | undefined, b: GetRoomResponse | PlainMessage<GetRoomResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.OpenRoomRequest
 */
export declare class OpenRoomRequest extends Message<OpenRoomRequest> {
    /**
     * @generated from field: string dimension_id = 1;
     */
    dimensionId: string;
    /**
     * @generated from field: string url = 2;
     */
    url: string;
    constructor(data?: PartialMessage<OpenRoomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.OpenRoomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OpenRoomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OpenRoomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OpenRoomRequest;
    static equals(a: OpenRoomRequest | PlainMessage<OpenRoomRequest> | undefined, b: OpenRoomRequest | PlainMessage<OpenRoomRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.OpenRoomResponse
 */
export declare class OpenRoomResponse extends Message<OpenRoomResponse> {
    /**
     * @generated from field: avn.connect.v1.RoomInfo room_info = 1;
     */
    roomInfo?: RoomInfo;
    constructor(data?: PartialMessage<OpenRoomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.OpenRoomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OpenRoomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OpenRoomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OpenRoomResponse;
    static equals(a: OpenRoomResponse | PlainMessage<OpenRoomResponse> | undefined, b: OpenRoomResponse | PlainMessage<OpenRoomResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.EnterRoomRequest
 */
export declare class EnterRoomRequest extends Message<EnterRoomRequest> {
    /**
     * @generated from field: avn.connect.v1.ConnectionCredentials credentials = 1;
     */
    credentials?: ConnectionCredentials;
    /**
     * @generated from field: string room_id = 2;
     */
    roomId: string;
    /**
     * @generated from field: string session_id = 3;
     */
    sessionId: string;
    constructor(data?: PartialMessage<EnterRoomRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.EnterRoomRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnterRoomRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnterRoomRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnterRoomRequest;
    static equals(a: EnterRoomRequest | PlainMessage<EnterRoomRequest> | undefined, b: EnterRoomRequest | PlainMessage<EnterRoomRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.EnterRoomResponse
 */
export declare class EnterRoomResponse extends Message<EnterRoomResponse> {
    /**
     * @generated from field: avn.connect.v1.RoomInfo room_info = 1;
     */
    roomInfo?: RoomInfo;
    constructor(data?: PartialMessage<EnterRoomResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.EnterRoomResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): EnterRoomResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): EnterRoomResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): EnterRoomResponse;
    static equals(a: EnterRoomResponse | PlainMessage<EnterRoomResponse> | undefined, b: EnterRoomResponse | PlainMessage<EnterRoomResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetRoomDimensionRequest
 */
export declare class GetRoomDimensionRequest extends Message<GetRoomDimensionRequest> {
    /**
     * @generated from field: string room_id = 1;
     */
    roomId: string;
    constructor(data?: PartialMessage<GetRoomDimensionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetRoomDimensionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRoomDimensionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRoomDimensionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRoomDimensionRequest;
    static equals(a: GetRoomDimensionRequest | PlainMessage<GetRoomDimensionRequest> | undefined, b: GetRoomDimensionRequest | PlainMessage<GetRoomDimensionRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetRoomDimensionResponse
 */
export declare class GetRoomDimensionResponse extends Message<GetRoomDimensionResponse> {
    /**
     * @generated from field: string dimension_id = 1;
     */
    dimensionId: string;
    constructor(data?: PartialMessage<GetRoomDimensionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetRoomDimensionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRoomDimensionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRoomDimensionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRoomDimensionResponse;
    static equals(a: GetRoomDimensionResponse | PlainMessage<GetRoomDimensionResponse> | undefined, b: GetRoomDimensionResponse | PlainMessage<GetRoomDimensionResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.ResolveMediaRequest
 */
export declare class ResolveMediaRequest extends Message<ResolveMediaRequest> {
    /**
     * @generated from field: string dimension_id = 1;
     */
    dimensionId: string;
    /**
     * @generated from field: string asset_id = 2;
     */
    assetId: string;
    constructor(data?: PartialMessage<ResolveMediaRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.ResolveMediaRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResolveMediaRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResolveMediaRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResolveMediaRequest;
    static equals(a: ResolveMediaRequest | PlainMessage<ResolveMediaRequest> | undefined, b: ResolveMediaRequest | PlainMessage<ResolveMediaRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.ResolveMediaResponse
 */
export declare class ResolveMediaResponse extends Message<ResolveMediaResponse> {
    /**
     * @generated from field: string asset_url = 1;
     */
    assetUrl: string;
    /**
     * @generated from field: string thumbnail_url = 2;
     */
    thumbnailUrl: string;
    /**
     * @generated from field: string mime_type = 3;
     */
    mimeType: string;
    /**
     * @generated from field: repeated int32 tag_ids = 4;
     */
    tagIds: number[];
    constructor(data?: PartialMessage<ResolveMediaResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.ResolveMediaResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ResolveMediaResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ResolveMediaResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ResolveMediaResponse;
    static equals(a: ResolveMediaResponse | PlainMessage<ResolveMediaResponse> | undefined, b: ResolveMediaResponse | PlainMessage<ResolveMediaResponse> | undefined): boolean;
}
