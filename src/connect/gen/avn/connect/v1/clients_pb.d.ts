import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
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
     * Any extra data associated with the action (not currently used and fiddly to hook up on the client side: https://stackoverflow.com/a/66989401/671393)
     * google.protobuf.Struct data = 4;
     *
     * @generated from field: string source_id = 3;
     */
    sourceId: string;
    constructor(data?: PartialMessage<RecordActionRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.RecordActionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RecordActionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RecordActionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RecordActionResponse;
    static equals(a: RecordActionResponse | PlainMessage<RecordActionResponse> | undefined, b: RecordActionResponse | PlainMessage<RecordActionResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CreateClientCredentialsRequest
 */
export declare class CreateClientCredentialsRequest extends Message<CreateClientCredentialsRequest> {
    constructor(data?: PartialMessage<CreateClientCredentialsRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.CreateClientCredentialsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateClientCredentialsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateClientCredentialsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateClientCredentialsResponse;
    static equals(a: CreateClientCredentialsResponse | PlainMessage<CreateClientCredentialsResponse> | undefined, b: CreateClientCredentialsResponse | PlainMessage<CreateClientCredentialsResponse> | undefined): boolean;
}
