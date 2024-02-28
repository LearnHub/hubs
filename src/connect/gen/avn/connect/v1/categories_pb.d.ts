import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.Category
 */
export declare class Category extends Message<Category> {
    /**
     * @generated from field: int32 category_id = 1;
     */
    categoryId: number;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string icon_url = 3;
     */
    iconUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 4;
     */
    updated?: Timestamp;
    /**
     * @generated from field: optional string description = 5;
     */
    description?: string;
    /**
     * @generated from field: repeated int32 tags = 6;
     */
    tags: number[];
    constructor(data?: PartialMessage<Category>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Category";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Category;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Category;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Category;
    static equals(a: Category | PlainMessage<Category> | undefined, b: Category | PlainMessage<Category> | undefined): boolean;
}
