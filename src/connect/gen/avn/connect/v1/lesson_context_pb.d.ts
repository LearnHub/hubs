import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { Quaternion, Vector3 } from "./geometry_pb.js";
/**
 * @generated from message avn.connect.v1.LessonContext
 */
export declare class LessonContext extends Message<LessonContext> {
    /**
     * TODO: Lesson plan, learning module modules, POIs - i.e. soft context for the guide rather than forced "focus" context
     *
     * @generated from field: optional avn.connect.v1.LessonFocus focus = 1;
     */
    focus?: LessonFocus;
    constructor(data?: PartialMessage<LessonContext>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.LessonContext";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LessonContext;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LessonContext;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LessonContext;
    static equals(a: LessonContext | PlainMessage<LessonContext> | undefined, b: LessonContext | PlainMessage<LessonContext> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.LessonFocus
 */
export declare class LessonFocus extends Message<LessonFocus> {
    /**
     * @generated from field: string room_id = 1;
     */
    roomId: string;
    /**
     * @generated from field: string asset_id = 2;
     */
    assetId: string;
    /**
     * @generated from field: optional avn.connect.v1.Vector3 position = 3;
     */
    position?: Vector3;
    /**
     * @generated from field: optional avn.connect.v1.Quaternion orientation = 4;
     */
    orientation?: Quaternion;
    constructor(data?: PartialMessage<LessonFocus>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.LessonFocus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LessonFocus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LessonFocus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LessonFocus;
    static equals(a: LessonFocus | PlainMessage<LessonFocus> | undefined, b: LessonFocus | PlainMessage<LessonFocus> | undefined): boolean;
}
