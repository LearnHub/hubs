import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message avn.core.v1.Quaternion
 */
export declare class Quaternion extends Message<Quaternion> {
    /**
     * @generated from field: double x = 1;
     */
    x: number;
    /**
     * @generated from field: double y = 2;
     */
    y: number;
    /**
     * @generated from field: double z = 3;
     */
    z: number;
    /**
     * @generated from field: double w = 4;
     */
    w: number;
    constructor(data?: PartialMessage<Quaternion>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.core.v1.Quaternion";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Quaternion;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Quaternion;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Quaternion;
    static equals(a: Quaternion | PlainMessage<Quaternion> | undefined, b: Quaternion | PlainMessage<Quaternion> | undefined): boolean;
}
