import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Translation } from "./translations_pb.js";
/**
 * @generated from message avn.connect.v1.Profile
 */
export declare class Profile extends Message<Profile> {
    /**
     * @generated from field: int32 profile_id = 1;
     */
    profileId: number;
    /**
     * @generated from field: avn.connect.v1.Translation name = 2;
     */
    name?: Translation;
    /**
     * @generated from field: string icon_url = 3;
     */
    iconUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 4;
     */
    updated?: Timestamp;
    /**
     * @generated from field: optional avn.connect.v1.Translation description = 5;
     */
    description?: Translation;
    /**
     * @generated from field: repeated int32 tags = 6;
     */
    tags: number[];
    constructor(data?: PartialMessage<Profile>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Profile";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Profile;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Profile;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Profile;
    static equals(a: Profile | PlainMessage<Profile> | undefined, b: Profile | PlainMessage<Profile> | undefined): boolean;
}
