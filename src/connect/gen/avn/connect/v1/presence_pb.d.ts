import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from enum avn.connect.v1.PresenceState
 */
export declare enum PresenceState {
    /**
     * @generated from enum value: PRESENCE_STATE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PRESENCE_STATE_ADDED = 1;
     */
    ADDED = 1,
    /**
     * @generated from enum value: PRESENCE_STATE_REMOVED = 2;
     */
    REMOVED = 2,
    /**
     * @generated from enum value: PRESENCE_STATE_CHANGED = 3;
     */
    CHANGED = 3
}
/**
 * @generated from message avn.connect.v1.PresenceUpdate
 */
export declare class PresenceUpdate extends Message<PresenceUpdate> {
    /**
     * @generated from field: avn.connect.v1.PresenceState state = 1;
     */
    state: PresenceState;
    /**
     * @generated from field: avn.connect.v1.PresenceInfo info = 2;
     */
    info?: PresenceInfo;
    constructor(data?: PartialMessage<PresenceUpdate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.PresenceUpdate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PresenceUpdate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PresenceUpdate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PresenceUpdate;
    static equals(a: PresenceUpdate | PlainMessage<PresenceUpdate> | undefined, b: PresenceUpdate | PlainMessage<PresenceUpdate> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.PresenceInfo
 */
export declare class PresenceInfo extends Message<PresenceInfo> {
    /**
     * @generated from field: string connection_id = 1;
     */
    connectionId: string;
    /**
     * @generated from field: optional string session_id = 2;
     */
    sessionId?: string;
    /**
     * @generated from field: optional string room_id = 3;
     */
    roomId?: string;
    /**
     * @generated from field: optional string asset_id = 4;
     */
    assetId?: string;
    constructor(data?: PartialMessage<PresenceInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.PresenceInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PresenceInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PresenceInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PresenceInfo;
    static equals(a: PresenceInfo | PlainMessage<PresenceInfo> | undefined, b: PresenceInfo | PlainMessage<PresenceInfo> | undefined): boolean;
}
