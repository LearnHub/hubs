import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from enum avn.connect.v1.Properties
 */
export declare enum Properties {
    /**
     * @generated from enum value: PROPERTY_UNSPECIFIED = 0;
     */
    PROPERTY_UNSPECIFIED = 0,
    /**
     * @generated from enum value: PROPERTY_ID = 1;
     */
    PROPERTY_ID = 1,
    /**
     * @generated from enum value: PROPERTY_NAME = 2;
     */
    PROPERTY_NAME = 2,
    /**
     * TODO: ADD ALL THE PROPERTIES
     *
     * @generated from enum value: PROPERTY_DESCRIPTION = 3;
     */
    PROPERTY_DESCRIPTION = 3
}
/**
 * @generated from message avn.connect.v1.SetPropertyRequest
 */
export declare class SetPropertyRequest extends Message<SetPropertyRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 target_id = 2;
     */
    targetId: number;
    /**
     * @generated from field: avn.connect.v1.Properties property = 3;
     */
    property: Properties;
    /**
     * @generated from oneof avn.connect.v1.SetPropertyRequest.value
     */
    value: {
        /**
         * @generated from field: bool bool = 4;
         */
        value: boolean;
        case: "bool";
    } | {
        /**
         * @generated from field: int32 int32 = 5;
         */
        value: number;
        case: "int32";
    } | {
        /**
         * @generated from field: int64 int64 = 6;
         */
        value: bigint;
        case: "int64";
    } | {
        /**
         * @generated from field: float float = 7;
         */
        value: number;
        case: "float";
    } | {
        /**
         * @generated from field: double double = 8;
         */
        value: number;
        case: "double";
    } | {
        /**
         * @generated from field: string string = 9;
         */
        value: string;
        case: "string";
    } | {
        /**
         * @generated from field: google.protobuf.Timestamp timestamp = 10;
         */
        value: Timestamp;
        case: "timestamp";
    } | {
        case: undefined;
        value?: undefined;
    };
    constructor(data?: PartialMessage<SetPropertyRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SetPropertyRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetPropertyRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetPropertyRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetPropertyRequest;
    static equals(a: SetPropertyRequest | PlainMessage<SetPropertyRequest> | undefined, b: SetPropertyRequest | PlainMessage<SetPropertyRequest> | undefined): boolean;
}
