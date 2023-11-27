import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { ConnectionCredentials } from "./connections_pb.js";
/**
 * @generated from enum avn.connect.v1.IdentityProvider
 */
export declare enum IdentityProvider {
    /**
     * @generated from enum value: IDENTITY_UNSPECIFIED = 0;
     */
    IDENTITY_UNSPECIFIED = 0,
    /**
     * @generated from enum value: IDENTITY_ANONYMOUS = 1;
     */
    IDENTITY_ANONYMOUS = 1,
    /**
     * @generated from enum value: IDENTITY_CLASSCONNECT = 2;
     */
    IDENTITY_CLASSCONNECT = 2,
    /**
     * @generated from enum value: IDENTITY_GOOGLE = 3;
     */
    IDENTITY_GOOGLE = 3,
    /**
     * @generated from enum value: IDENTITY_MICROSOFT = 4;
     */
    IDENTITY_MICROSOFT = 4,
    /**
     * @generated from enum value: IDENTITY_CLEVER = 5;
     */
    IDENTITY_CLEVER = 5,
    /**
     * @generated from enum value: IDENTITY_CLASSLINK = 6;
     */
    IDENTITY_CLASSLINK = 6
}
/**
 * @generated from message avn.connect.v1.Authorization
 */
export declare class Authorization extends Message<Authorization> {
    /**
     * @generated from oneof avn.connect.v1.Authorization.method
     */
    method: {
        /**
         * The OpenID JWT of the authenticated user
         *
         * @generated from field: string user_jwt = 1;
         */
        value: string;
        case: "userJwt";
    } | {
        /**
         * Just the dimension ID
         *
         * @generated from field: string dimension_id = 2;
         */
        value: string;
        case: "dimensionId";
    } | {
        /**
         * The confirmed connection credentials
         *
         * @generated from field: avn.connect.v1.ConnectionCredentials credentials = 3;
         */
        value: ConnectionCredentials;
        case: "credentials";
    } | {
        /**
         * Fixed API key
         *
         * @generated from field: string user_api_key = 4;
         */
        value: string;
        case: "userApiKey";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<Authorization>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Authorization";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Authorization;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Authorization;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Authorization;
    static equals(a: Authorization | PlainMessage<Authorization> | undefined, b: Authorization | PlainMessage<Authorization> | undefined): boolean;
}
