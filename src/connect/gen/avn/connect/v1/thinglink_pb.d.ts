import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.TransformMediaRequest
 */
export declare class TransformMediaRequest extends Message<TransformMediaRequest> {
    /**
     * @generated from field: string url = 1;
     */
    url: string;
    constructor(data?: PartialMessage<TransformMediaRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TransformMediaRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransformMediaRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransformMediaRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransformMediaRequest;
    static equals(a: TransformMediaRequest | PlainMessage<TransformMediaRequest> | undefined, b: TransformMediaRequest | PlainMessage<TransformMediaRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.TransformMediaResponse
 */
export declare class TransformMediaResponse extends Message<TransformMediaResponse> {
    /**
     * @generated from field: string url = 1;
     */
    url: string;
    constructor(data?: PartialMessage<TransformMediaResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.TransformMediaResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): TransformMediaResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): TransformMediaResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): TransformMediaResponse;
    static equals(a: TransformMediaResponse | PlainMessage<TransformMediaResponse> | undefined, b: TransformMediaResponse | PlainMessage<TransformMediaResponse> | undefined): boolean;
}
