import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.DeviceCredentials
 */
export declare class DeviceCredentials extends Message<DeviceCredentials> {
    /**
     * @generated from field: string device_id = 1;
     */
    deviceId: string;
    /**
     * @generated from field: string device_secret = 2;
     */
    deviceSecret: string;
    constructor(data?: PartialMessage<DeviceCredentials>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.DeviceCredentials";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeviceCredentials;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeviceCredentials;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeviceCredentials;
    static equals(a: DeviceCredentials | PlainMessage<DeviceCredentials> | undefined, b: DeviceCredentials | PlainMessage<DeviceCredentials> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.AuthorizeDeviceRequest
 */
export declare class AuthorizeDeviceRequest extends Message<AuthorizeDeviceRequest> {
    /**
     * The device that is making the request
     *
     * @generated from field: avn.connect.v1.DeviceCredentials device = 1;
     */
    device?: DeviceCredentials;
    constructor(data?: PartialMessage<AuthorizeDeviceRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AuthorizeDeviceRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthorizeDeviceRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthorizeDeviceRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthorizeDeviceRequest;
    static equals(a: AuthorizeDeviceRequest | PlainMessage<AuthorizeDeviceRequest> | undefined, b: AuthorizeDeviceRequest | PlainMessage<AuthorizeDeviceRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.AuthorizeDeviceResponse
 */
export declare class AuthorizeDeviceResponse extends Message<AuthorizeDeviceResponse> {
    /**
     * @generated from field: string device_jwt = 1;
     */
    deviceJwt: string;
    constructor(data?: PartialMessage<AuthorizeDeviceResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AuthorizeDeviceResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthorizeDeviceResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthorizeDeviceResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthorizeDeviceResponse;
    static equals(a: AuthorizeDeviceResponse | PlainMessage<AuthorizeDeviceResponse> | undefined, b: AuthorizeDeviceResponse | PlainMessage<AuthorizeDeviceResponse> | undefined): boolean;
}
