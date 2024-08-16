import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Translation } from "./translations_pb.js";
/**
 * @generated from message avn.connect.v1.Channel
 */
export declare class Channel extends Message<Channel> {
    /**
     * @generated from field: int32 entity_id = 1;
     */
    entityId: number;
    /**
     * @generated from field: avn.connect.v1.Translation name = 2;
     */
    name?: Translation;
    /**
     * @generated from field: string icon_url = 3;
     */
    iconUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp created = 4;
     */
    created?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 5;
     */
    updated?: Timestamp;
    /**
     * @generated from field: optional avn.connect.v1.Translation description = 6;
     */
    description?: Translation;
    constructor(data?: PartialMessage<Channel>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Channel";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Channel;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Channel;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Channel;
    static equals(a: Channel | PlainMessage<Channel> | undefined, b: Channel | PlainMessage<Channel> | undefined): boolean;
}
