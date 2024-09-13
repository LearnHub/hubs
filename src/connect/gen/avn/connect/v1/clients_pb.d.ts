import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct, Timestamp } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { EntityPropertyState } from "./entities_pb.js";
/**
 * @generated from message avn.connect.v1.ClientCredentials
 */
export declare class ClientCredentials extends Message<ClientCredentials> {
    /**
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * @generated from field: optional string client_secret = 2;
     */
    clientSecret?: string;
    constructor(data?: PartialMessage<ClientCredentials>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.ClientCredentials";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ClientCredentials;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ClientCredentials;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ClientCredentials;
    static equals(a: ClientCredentials | PlainMessage<ClientCredentials> | undefined, b: ClientCredentials | PlainMessage<ClientCredentials> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RecordActionRequest
 */
export declare class RecordActionRequest extends Message<RecordActionRequest> {
    /**
     * @generated from field: avn.connect.v1.ClientCredentials client = 1;
     */
    client?: ClientCredentials;
    /**
     * The action identifier
     *
     * @generated from field: string action_id = 2;
     */
    actionId: string;
    /**
     * The source of the action: button, anchor, etc...
     *
     * @generated from field: string source_id = 3;
     */
    sourceId: string;
    /**
     * Optional extra data associated with the action
     *
     * @generated from field: optional google.protobuf.Struct data = 4;
     */
    data?: Struct;
    /**
     * Optional authorization info to provide context and permission
     *
     * @generated from field: optional avn.connect.v1.Authorization auth = 5;
     */
    auth?: Authorization;
    constructor(data?: PartialMessage<RecordActionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RecordActionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordActionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordActionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordActionRequest;
    static equals(a: RecordActionRequest | PlainMessage<RecordActionRequest> | undefined, b: RecordActionRequest | PlainMessage<RecordActionRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RecordActionResponse
 */
export declare class RecordActionResponse extends Message<RecordActionResponse> {
    constructor(data?: PartialMessage<RecordActionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RecordActionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordActionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordActionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordActionResponse;
    static equals(a: RecordActionResponse | PlainMessage<RecordActionResponse> | undefined, b: RecordActionResponse | PlainMessage<RecordActionResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RecordFeedbackRequest
 */
export declare class RecordFeedbackRequest extends Message<RecordFeedbackRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * The feedback identifier
     *
     * @generated from field: string feedback_id = 2;
     */
    feedbackId: string;
    /**
     * The primary feedback reason ID
     *
     * @generated from field: string feedback_reason = 3;
     */
    feedbackReason: string;
    /**
     * Freeform details supplied by the user
     *
     * @generated from field: optional string feedback_detail = 4;
     */
    feedbackDetail?: string;
    /**
     * Optional extra structured data
     *
     * @generated from field: optional google.protobuf.Struct data = 5;
     */
    data?: Struct;
    constructor(data?: PartialMessage<RecordFeedbackRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RecordFeedbackRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordFeedbackRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordFeedbackRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordFeedbackRequest;
    static equals(a: RecordFeedbackRequest | PlainMessage<RecordFeedbackRequest> | undefined, b: RecordFeedbackRequest | PlainMessage<RecordFeedbackRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RecordFeedbackResponse
 */
export declare class RecordFeedbackResponse extends Message<RecordFeedbackResponse> {
    constructor(data?: PartialMessage<RecordFeedbackResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RecordFeedbackResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordFeedbackResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordFeedbackResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordFeedbackResponse;
    static equals(a: RecordFeedbackResponse | PlainMessage<RecordFeedbackResponse> | undefined, b: RecordFeedbackResponse | PlainMessage<RecordFeedbackResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CreateClientCredentialsRequest
 */
export declare class CreateClientCredentialsRequest extends Message<CreateClientCredentialsRequest> {
    /**
     * Useful for user-friendly naming
     *
     * @generated from field: optional string prefix = 1;
     */
    prefix?: string;
    /**
     * @generated from field: optional string postfix = 2;
     */
    postfix?: string;
    /**
     * Fingerprint of client
     *
     * @generated from field: repeated avn.connect.v1.EntityPropertyState client_state = 3;
     */
    clientState: EntityPropertyState[];
    constructor(data?: PartialMessage<CreateClientCredentialsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CreateClientCredentialsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateClientCredentialsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateClientCredentialsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateClientCredentialsRequest;
    static equals(a: CreateClientCredentialsRequest | PlainMessage<CreateClientCredentialsRequest> | undefined, b: CreateClientCredentialsRequest | PlainMessage<CreateClientCredentialsRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CreateClientCredentialsResponse
 */
export declare class CreateClientCredentialsResponse extends Message<CreateClientCredentialsResponse> {
    /**
     * @generated from field: avn.connect.v1.ClientCredentials client_credentials = 1;
     */
    clientCredentials?: ClientCredentials;
    constructor(data?: PartialMessage<CreateClientCredentialsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CreateClientCredentialsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateClientCredentialsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateClientCredentialsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateClientCredentialsResponse;
    static equals(a: CreateClientCredentialsResponse | PlainMessage<CreateClientCredentialsResponse> | undefined, b: CreateClientCredentialsResponse | PlainMessage<CreateClientCredentialsResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.LighthouseServer
 */
export declare class LighthouseServer extends Message<LighthouseServer> {
    /**
     * @generated from field: string lighthouse_id = 1;
     */
    lighthouseId: string;
    /**
     * @generated from field: string wanAddress = 2;
     */
    wanAddress: string;
    /**
     * @generated from field: string wanHostname = 3;
     */
    wanHostname: string;
    /**
     * @generated from field: google.protobuf.Timestamp registered = 4;
     */
    registered?: Timestamp;
    constructor(data?: PartialMessage<LighthouseServer>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.LighthouseServer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LighthouseServer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LighthouseServer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LighthouseServer;
    static equals(a: LighthouseServer | PlainMessage<LighthouseServer> | undefined, b: LighthouseServer | PlainMessage<LighthouseServer> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RegisterLighthouseServerRequest
 */
export declare class RegisterLighthouseServerRequest extends Message<RegisterLighthouseServerRequest> {
    /**
     * @generated from field: avn.connect.v1.ClientCredentials client = 1;
     */
    client?: ClientCredentials;
    constructor(data?: PartialMessage<RegisterLighthouseServerRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RegisterLighthouseServerRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterLighthouseServerRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterLighthouseServerRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterLighthouseServerRequest;
    static equals(a: RegisterLighthouseServerRequest | PlainMessage<RegisterLighthouseServerRequest> | undefined, b: RegisterLighthouseServerRequest | PlainMessage<RegisterLighthouseServerRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RegisterLighthouseServerResponse
 */
export declare class RegisterLighthouseServerResponse extends Message<RegisterLighthouseServerResponse> {
    /**
     * @generated from field: avn.connect.v1.LighthouseServer server = 1;
     */
    server?: LighthouseServer;
    constructor(data?: PartialMessage<RegisterLighthouseServerResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RegisterLighthouseServerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterLighthouseServerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterLighthouseServerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterLighthouseServerResponse;
    static equals(a: RegisterLighthouseServerResponse | PlainMessage<RegisterLighthouseServerResponse> | undefined, b: RegisterLighthouseServerResponse | PlainMessage<RegisterLighthouseServerResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetLighthouseServersRequest
 */
export declare class GetLighthouseServersRequest extends Message<GetLighthouseServersRequest> {
    constructor(data?: PartialMessage<GetLighthouseServersRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetLighthouseServersRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLighthouseServersRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLighthouseServersRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLighthouseServersRequest;
    static equals(a: GetLighthouseServersRequest | PlainMessage<GetLighthouseServersRequest> | undefined, b: GetLighthouseServersRequest | PlainMessage<GetLighthouseServersRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetLighthouseServersResponse
 */
export declare class GetLighthouseServersResponse extends Message<GetLighthouseServersResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.LighthouseServer servers = 1;
     */
    servers: LighthouseServer[];
    constructor(data?: PartialMessage<GetLighthouseServersResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetLighthouseServersResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetLighthouseServersResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetLighthouseServersResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetLighthouseServersResponse;
    static equals(a: GetLighthouseServersResponse | PlainMessage<GetLighthouseServersResponse> | undefined, b: GetLighthouseServersResponse | PlainMessage<GetLighthouseServersResponse> | undefined): boolean;
}
