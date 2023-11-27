import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.PartnerSession
 */
export declare class PartnerSession extends Message<PartnerSession> {
    /**
     * @generated from field: string partner_id = 1;
     */
    partnerId: string;
    /**
     * @generated from field: string session_id = 2;
     */
    sessionId: string;
    constructor(data?: PartialMessage<PartnerSession>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.PartnerSession";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PartnerSession;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PartnerSession;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PartnerSession;
    static equals(a: PartnerSession | PlainMessage<PartnerSession> | undefined, b: PartnerSession | PlainMessage<PartnerSession> | undefined): boolean;
}
