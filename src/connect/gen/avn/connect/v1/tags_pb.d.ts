import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from message avn.connect.v1.AddTagsRequest
 */
export declare class AddTagsRequest extends Message<AddTagsRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    /**
     * @generated from field: repeated int32 tags = 3;
     */
    tags: number[];
    /**
     * CLOUD_FILE_LEGACY_ID
     *
     * @generated from field: optional string legacy_id = 10;
     */
    legacyId?: string;
    constructor(data?: PartialMessage<AddTagsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AddTagsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AddTagsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AddTagsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AddTagsRequest;
    static equals(a: AddTagsRequest | PlainMessage<AddTagsRequest> | undefined, b: AddTagsRequest | PlainMessage<AddTagsRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.RemoveTagsRequest
 */
export declare class RemoveTagsRequest extends Message<RemoveTagsRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 entity_id = 2;
     */
    entityId: number;
    /**
     * @generated from field: repeated int32 tags = 3;
     */
    tags: number[];
    /**
     * CLOUD_FILE_LEGACY_ID
     *
     * @generated from field: optional string legacy_id = 10;
     */
    legacyId?: string;
    constructor(data?: PartialMessage<RemoveTagsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.RemoveTagsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RemoveTagsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RemoveTagsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RemoveTagsRequest;
    static equals(a: RemoveTagsRequest | PlainMessage<RemoveTagsRequest> | undefined, b: RemoveTagsRequest | PlainMessage<RemoveTagsRequest> | undefined): boolean;
}
