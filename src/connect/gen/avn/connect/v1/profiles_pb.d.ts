import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Translatable } from "./translations_pb.js";
/**
 * @generated from message avn.connect.v1.Profile
 */
export declare class Profile extends Message<Profile> {
    /**
     * @generated from field: int32 entity_id = 1;
     */
    entityId: number;
    /**
     * @generated from field: avn.connect.v1.Translatable name = 2;
     */
    name?: Translatable;
    /**
     * @generated from field: string icon_url = 3;
     */
    iconUrl: string;
    /**
     * @generated from field: string preview_url = 4;
     */
    previewUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 5;
     */
    updated?: Timestamp;
    /**
     * @generated from field: optional avn.connect.v1.Translatable description = 6;
     */
    description?: Translatable;
    /**
     * @generated from field: optional avn.connect.v1.Translatable instructions = 7;
     */
    instructions?: Translatable;
    /**
     * @generated from field: optional avn.connect.v1.Translatable keywords = 21;
     */
    keywords?: Translatable;
    /**
     * @generated from field: string language_id = 8;
     */
    languageId: string;
    /**
     * @generated from field: repeated int32 tags = 9;
     */
    tags: number[];
    /**
     * @generated from field: optional google.protobuf.Timestamp published = 10;
     */
    published?: Timestamp;
    /**
     * @generated from field: optional google.protobuf.Timestamp featured = 11;
     */
    featured?: Timestamp;
    /**
     * @generated from oneof avn.connect.v1.Profile.owner
     */
    owner: {
        /**
         * @generated from field: int32 organization_id = 12;
         */
        value: number;
        case: "organizationId";
    } | {
        /**
         * @generated from field: int32 user_id = 13;
         */
        value: number;
        case: "userId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: bool deleted = 14;
     */
    deleted: boolean;
    /**
     * @generated from field: int32 item_count = 15;
     */
    itemCount: number;
    constructor(data?: PartialMessage<Profile>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Profile";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Profile;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Profile;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Profile;
    static equals(a: Profile | PlainMessage<Profile> | undefined, b: Profile | PlainMessage<Profile> | undefined): boolean;
}
