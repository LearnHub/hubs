import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.HeaderField
 */
export declare class HeaderField extends Message<HeaderField> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string value = 2;
     */
    value: string;
    constructor(data?: PartialMessage<HeaderField>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.HeaderField";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HeaderField;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HeaderField;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HeaderField;
    static equals(a: HeaderField | PlainMessage<HeaderField> | undefined, b: HeaderField | PlainMessage<HeaderField> | undefined): boolean;
}
