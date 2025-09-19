import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ConnectionCredentials } from "./connections_pb.js";
/**
 * @generated from enum avn.connect.v1.IdentityProvider
 */
export declare enum IdentityProvider {
    /**
     * @generated from enum value: IDENTITY_PROVIDER_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: IDENTITY_PROVIDER_ANONYMOUS = 1;
     */
    ANONYMOUS = 1,
    /**
     * @generated from enum value: IDENTITY_PROVIDER_CLASSCONNECT = 2;
     */
    CLASSCONNECT = 2,
    /**
     * @generated from enum value: IDENTITY_PROVIDER_GOOGLE = 3;
     */
    GOOGLE = 3,
    /**
     * @generated from enum value: IDENTITY_PROVIDER_MICROSOFT = 4;
     */
    MICROSOFT = 4,
    /**
     * @generated from enum value: IDENTITY_PROVIDER_CLEVER = 5;
     */
    CLEVER = 5,
    /**
     * @generated from enum value: IDENTITY_PROVIDER_CLASSLINK = 6;
     */
    CLASSLINK = 6
}
/**
 * Authorization to content and services from one or more sources
 *
 * @generated from message avn.connect.v1.Authorization
 */
export declare class Authorization extends Message<Authorization> {
    /**
     * The OpenID JWT of the authenticated user
     *
     * @generated from field: optional string user_jwt = 1;
     */
    userJwt?: string;
    /**
     * Dimensions have intrinsic authorization parameters
     *
     * @generated from field: optional string dimension_id = 2;
     */
    dimensionId?: string;
    /**
     * The confirmed connection credentials
     *
     * @generated from field: optional avn.connect.v1.ConnectionCredentials credentials = 3;
     */
    credentials?: ConnectionCredentials;
    /**
     * API key used exlusively for CC1 legacy access
     *
     * @generated from field: optional string user_api_key = 4;
     */
    userApiKey?: string;
    /**
     * JWT for a device
     *
     * @generated from field: optional string device_jwt = 5;
     */
    deviceJwt?: string;
    /**
     * Hall passes can grant content access
     *
     * @generated from field: optional string pass_id = 6;
     */
    passId?: string;
    constructor(data?: PartialMessage<Authorization>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Authorization";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Authorization;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Authorization;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Authorization;
    static equals(a: Authorization | PlainMessage<Authorization> | undefined, b: Authorization | PlainMessage<Authorization> | undefined): boolean;
}
/**
 * Utility message for services that only required authorization
 *
 * @generated from message avn.connect.v1.AuthOnlyRequest
 */
export declare class AuthOnlyRequest extends Message<AuthOnlyRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    constructor(data?: PartialMessage<AuthOnlyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AuthOnlyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AuthOnlyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AuthOnlyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AuthOnlyRequest;
    static equals(a: AuthOnlyRequest | PlainMessage<AuthOnlyRequest> | undefined, b: AuthOnlyRequest | PlainMessage<AuthOnlyRequest> | undefined): boolean;
}
