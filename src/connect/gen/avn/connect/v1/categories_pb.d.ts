import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Translation } from "./translations_pb.js";
/**
 * @generated from message avn.connect.v1.Category
 */
export declare class Category extends Message<Category> {
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
     * @generated from field: string preview_url = 4;
     */
    previewUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 5;
     */
    updated?: Timestamp;
    /**
     * @generated from field: optional avn.connect.v1.Translation description = 6;
     */
    description?: Translation;
    /**
     * @generated from field: optional avn.connect.v1.Translation instructions = 7;
     */
    instructions?: Translation;
    /**
     * @generated from field: optional avn.connect.v1.Translation keywords = 21;
     */
    keywords?: Translation;
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
     * @generated from oneof avn.connect.v1.Category.owner
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
    /**
     * @generated from field: int32 track_count = 16;
     */
    trackCount: number;
    constructor(data?: PartialMessage<Category>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Category";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Category;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Category;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Category;
    static equals(a: Category | PlainMessage<Category> | undefined, b: Category | PlainMessage<Category> | undefined): boolean;
}
