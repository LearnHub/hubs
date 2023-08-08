import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.Pass
 */
export declare class Pass extends Message<Pass> {
    /**
     * @generated from field: string pass_id = 1;
     */
    passId: string;
    /**
     * @generated from field: int32 capacity = 2;
     */
    capacity: number;
    /**
     * @generated from field: string description = 3;
     */
    description: string;
    /**
     * @generated from field: optional google.protobuf.Timestamp expires = 4;
     */
    expires?: Timestamp;
    constructor(data?: PartialMessage<Pass>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.Pass";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Pass;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Pass;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Pass;
    static equals(a: Pass | PlainMessage<Pass> | undefined, b: Pass | PlainMessage<Pass> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetPassRequest
 */
export declare class GetPassRequest extends Message<GetPassRequest> {
    /**
     * @generated from field: string pass_id = 1;
     */
    passId: string;
    constructor(data?: PartialMessage<GetPassRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetPassRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPassRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPassRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPassRequest;
    static equals(a: GetPassRequest | PlainMessage<GetPassRequest> | undefined, b: GetPassRequest | PlainMessage<GetPassRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetPassResponse
 */
export declare class GetPassResponse extends Message<GetPassResponse> {
    /**
     * @generated from field: avn.connect.v1.Pass result = 1;
     */
    result?: Pass;
    constructor(data?: PartialMessage<GetPassResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetPassResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetPassResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetPassResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetPassResponse;
    static equals(a: GetPassResponse | PlainMessage<GetPassResponse> | undefined, b: GetPassResponse | PlainMessage<GetPassResponse> | undefined): boolean;
}
