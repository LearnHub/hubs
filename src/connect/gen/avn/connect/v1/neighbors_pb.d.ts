import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Struct } from "@bufbuild/protobuf";
import { ClientCredentials } from "./clients_pb.js";
/**
 * @generated from message avn.connect.v1.NeighborServer
 */
export declare class NeighborServer extends Message<NeighborServer> {
    /**
     * Server ID
     *
     * @generated from field: string client_id = 1;
     */
    clientId: string;
    /**
     * Ordered list of WAN IPs the server has called in on
     *
     * @generated from field: repeated string wan_addresses = 3;
     */
    wanAddresses: string[];
    /**
     * The LAN port for the local server
     *
     * @generated from field: int32 lan_port = 4;
     */
    lanPort: number;
    /**
     * Server display name
     *
     * @generated from field: string client_name = 5;
     */
    clientName: string;
    /**
     * Ordered list of the LAN hostnames for the server
     *
     * @generated from field: repeated string lan_hostnames = 6;
     */
    lanHostnames: string[];
    constructor(data?: PartialMessage<NeighborServer>);
    static readonly runtime: typeof proto3;
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
     * The LAN port for this server
     *
     * @generated from field: int32 lan_port = 3;
     */
    lanPort: number;
    /**
     * The LAN addresses for this server
     *
     * @generated from field: repeated string lan_addresses = 4;
     */
    lanAddresses: string[];
    /**
     * Server display name
     *
     * @generated from field: string client_name = 5;
     */
    clientName: string;
    /**
     * Server statistics with flexible schema
     *
     * @generated from field: optional google.protobuf.Struct client_statistics = 6;
     */
    clientStatistics?: Struct;
    constructor(data?: PartialMessage<RegisterNeighborServerRequest>);
    static readonly runtime: typeof proto3;
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
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RegisterNeighborServerResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RegisterNeighborServerResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RegisterNeighborServerResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RegisterNeighborServerResponse;
    static equals(a: RegisterNeighborServerResponse | PlainMessage<RegisterNeighborServerResponse> | undefined, b: RegisterNeighborServerResponse | PlainMessage<RegisterNeighborServerResponse> | undefined): boolean;
}
