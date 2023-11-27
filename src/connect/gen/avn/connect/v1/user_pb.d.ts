import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.User
 */
export declare class User extends Message<User> {
    /**
     * @generated from field: int32 user_id = 1;
     */
    userId: number;
    /**
     * @generated from field: string email = 2;
     */
    email: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string country_id = 4;
     */
    countryId: string;
    /**
     * @generated from field: string language_id = 5;
     */
    languageId: string;
    /**
     * @generated from field: bool deleted = 6;
     */
    deleted: boolean;
    /**
     * More sensitive fields are optional based on permissions and availability
     *
     * @generated from field: optional bool email_verified = 10;
     */
    emailVerified?: boolean;
    /**
     * @generated from field: optional string picture_url = 11;
     */
    pictureUrl?: string;
    /**
     * @generated from field: optional string phone = 12;
     */
    phone?: string;
    /**
     * @generated from field: optional google.protobuf.Timestamp first_login = 13;
     */
    firstLogin?: Timestamp;
    /**
     * @generated from field: optional google.protobuf.Timestamp last_login = 14;
     */
    lastLogin?: Timestamp;
    constructor(data?: PartialMessage<User>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.User";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): User;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): User;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): User;
    static equals(a: User | PlainMessage<User> | undefined, b: User | PlainMessage<User> | undefined): boolean;
}
