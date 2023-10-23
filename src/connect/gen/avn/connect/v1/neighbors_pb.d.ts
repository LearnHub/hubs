import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { ClientCredentials } from "./clients_pb.js";
/**
 * @generated from message avn.connect.v1.NeighborServer
 */
export declare class NeighborServer extends Message<NeighborServer> {
    /**
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * @generated from field: string wanAddress = 2;
     */
    wanAddress: string;
    /**
     * @generated from field: string lanAddress = 3;
     */
    lanAddress: string;
    /**
     * @generated from field: int32 lanPort = 4;
     */
    lanPort: number;
    /**
     * @generated from field: string lanHostname = 5;
     */
    lanHostname: string;
    constructor(data?: PartialMessage<NeighborServer>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.NeighborServer";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): NeighborServer;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): NeighborServer;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): NeighborServer;
    static equals(a: NeighborServer | PlainMessage<NeighborServer> | undefined, b: NeighborServer | PlainMessage<NeighborServer> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RegisterNeighborServerRequest
 */
export declare class RegisterNeighborServerRequest extends Message<RegisterNeighborServerRequest> {
    /**
     * @generated from field: avn.connect.v1.ClientCredentials client = 1;
     */
    client?: ClientCredentials;
    /**
     * @generated from field: string lanAddress = 2;
     */
    lanAddress: string;
    /**
     * @generated from field: int32 lanPort = 3;
     */
    lanPort: number;
    constructor(data?: PartialMessage<RegisterNeighborServerRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.RegisterNeighborServerRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterNeighborServerRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterNeighborServerRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterNeighborServerRequest;
    static equals(a: RegisterNeighborServerRequest | PlainMessage<RegisterNeighborServerRequest> | undefined, b: RegisterNeighborServerRequest | PlainMessage<RegisterNeighborServerRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RegisterNeighborServerResponse
 */
export declare class RegisterNeighborServerResponse extends Message<RegisterNeighborServerResponse> {
    /**
     * @generated from field: avn.connect.v1.NeighborServer server = 1;
     */
    server?: NeighborServer;
    constructor(data?: PartialMessage<RegisterNeighborServerResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.RegisterNeighborServerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterNeighborServerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterNeighborServerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterNeighborServerResponse;
    static equals(a: RegisterNeighborServerResponse | PlainMessage<RegisterNeighborServerResponse> | undefined, b: RegisterNeighborServerResponse | PlainMessage<RegisterNeighborServerResponse> | undefined): boolean;
}
