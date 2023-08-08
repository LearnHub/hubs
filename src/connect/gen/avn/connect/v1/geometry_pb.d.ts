import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.Vector3
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
    static readonly typeName = "avn.connect.v1.Vector3";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Vector3;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Vector3;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Vector3;
    static equals(a: Vector3 | PlainMessage<Vector3> | undefined, b: Vector3 | PlainMessage<Vector3> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.Quaternion
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.Quaternion";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Quaternion;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Quaternion;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Quaternion;
    static equals(a: Quaternion | PlainMessage<Quaternion> | undefined, b: Quaternion | PlainMessage<Quaternion> | undefined): boolean;
}
