import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { User } from "./user_pb.js";
import { AvailableContent } from "./content_pb.js";
import { InteractionPermissions } from "./interaction_permissions_pb.js";
import { UserInterfaceFeatures } from "./features_pb.js";
/**
 * @generated from enum avn.connect.v1.ConnectionStatus
 */
export declare enum ConnectionStatus {
    /**
     * @generated from enum value: CONNECTION_STATUS_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: CONNECTION_STATUS_ANONYMOUS = 1;
     */
    ANONYMOUS = 1,
    /**
     * @generated from enum value: CONNECTION_STATUS_AUTHENTICATED = 2;
     */
    AUTHENTICATED = 2,
    /**
     * @generated from enum value: CONNECTION_STATUS_ADMIN = 3;
     */
    ADMIN = 3,
    /**
     * @generated from enum value: CONNECTION_STATUS_OWNER = 4;
     */
    OWNER = 4
}
/**
 * @generated from message avn.connect.v1.ConnectionInstance
 */
export declare class ConnectionInstance extends Message<ConnectionInstance> {
    /**
     * @generated from field: avn.connect.v1.ConnectionCredentials credentials = 1;
     */
    credentials?: ConnectionCredentials;
    /**
     * @generated from field: string client_id = 2;
     */
    clientId: string;
    /**
     * @generated from field: optional avn.connect.v1.User user = 3;
     */
    user?: User;
    /**
     * Dimension status and permissions
     *
     * @generated from field: avn.connect.v1.ConnectionStatus status = 6;
     */
    status: ConnectionStatus;
    /**
     * @generated from field: avn.connect.v1.AvailableContent content = 7;
     */
    content?: AvailableContent;
    /**
     * @generated from field: avn.connect.v1.InteractionPermissions permissions = 8;
     */
    permissions?: InteractionPermissions;
    /**
     * @generated from field: avn.connect.v1.UserInterfaceFeatures features = 9;
     */
    features?: UserInterfaceFeatures;
    constructor(data?: PartialMessage<ConnectionInstance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.ConnectionInstance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConnectionInstance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConnectionInstance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConnectionInstance;
    static equals(a: ConnectionInstance | PlainMessage<ConnectionInstance> | undefined, b: ConnectionInstance | PlainMessage<ConnectionInstance> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.ConnectionCredentials
 */
export declare class ConnectionCredentials extends Message<ConnectionCredentials> {
    /**
     * @generated from field: string connection_id = 1;
     */
    connectionId: string;
    /**
     * @generated from field: string connection_secret = 2;
     */
    connectionSecret: string;
    /**
     * @generated from field: string dimension_id = 3;
     */
    dimensionId: string;
    constructor(data?: PartialMessage<ConnectionCredentials>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.ConnectionCredentials";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ConnectionCredentials;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ConnectionCredentials;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ConnectionCredentials;
    static equals(a: ConnectionCredentials | PlainMessage<ConnectionCredentials> | undefined, b: ConnectionCredentials | PlainMessage<ConnectionCredentials> | undefined): boolean;
}
