import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from message avn.connect.v1.CommandRequest
 */
export declare class CommandRequest extends Message<CommandRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * Command to execute
     *
     * @generated from field: string command = 2;
     */
    command: string;
    /**
     * Escape output filenames with angle brackets, e.g. <output.txt>
     *
     * @generated from field: repeated string arguments = 3;
     */
    arguments: string[];
    constructor(data?: PartialMessage<CommandRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CommandRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommandRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommandRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommandRequest;
    static equals(a: CommandRequest | PlainMessage<CommandRequest> | undefined, b: CommandRequest | PlainMessage<CommandRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CommandResponse
 */
export declare class CommandResponse extends Message<CommandResponse> {
    /**
     * @generated from field: int32 code = 1;
     */
    code: number;
    /**
     * @generated from field: string stdout = 2;
     */
    stdout: string;
    /**
     * @generated from field: string stderr = 3;
     */
    stderr: string;
    /**
     * @generated from field: repeated string output_file_urls = 4;
     */
    outputFileUrls: string[];
    constructor(data?: PartialMessage<CommandResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CommandResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CommandResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CommandResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CommandResponse;
    static equals(a: CommandResponse | PlainMessage<CommandResponse> | undefined, b: CommandResponse | PlainMessage<CommandResponse> | undefined): boolean;
}
