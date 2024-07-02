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
    /**
     * @generated from field: bool deleted = 7;
     */
    deleted: boolean;
    /**
     * @generated from field: string preview_url = 8;
     */
    previewUrl: string;
    constructor(data?: PartialMessage<Category>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Category";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Category;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Category;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Category;
    static equals(a: Category | PlainMessage<Category> | undefined, b: Category | PlainMessage<Category> | undefined): boolean;
}
