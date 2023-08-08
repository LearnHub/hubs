import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
/**
 * @generated from message avn.core.v1.Vector3
 */
export declare class Vector3 extends Message<Vector3> {
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
    constructor(data?: PartialMessage<Vector3>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.core.v1.Vector3";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Vector3;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Vector3;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Vector3;
    static equals(a: Vector3 | PlainMessage<Vector3> | undefined, b: Vector3 | PlainMessage<Vector3> | undefined): boolean;
}
