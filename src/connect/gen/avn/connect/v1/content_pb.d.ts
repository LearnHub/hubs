import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.AvailableContent
 */
export declare class AvailableContent extends Message<AvailableContent> {
    /**
     * Hint of what channels should be shown for browsing
     *
     * @generated from field: repeated int32 browsable_channels = 1;
     */
    browsableChannels: number[];
    /**
     * Published content from these channels is available
     *
     * @generated from field: repeated int32 licensed_channels = 2;
     */
    licensedChannels: number[];
    /**
     * Published content in these categories is available
     *
     * @generated from field: repeated int32 licensed_categories = 4;
     */
    licensedCategories: number[];
    /**
     * Published content owned exclusively by these users is available (i.e. from the users playlists)
     *
     * @generated from field: repeated int32 licensed_users = 5;
     */
    licensedUsers: number[];
    /**
     * DEPRECATED IN FAVOUR OF TagFilter SYSTEM LIKE IN entities.proto
     * Future extension for filtering appropriate content for dimensions
     *
     * @generated from field: repeated int32 tag_whitelist = 10;
     */
    tagWhitelist: number[];
    /**
     * @generated from field: repeated int32 tag_blacklist = 11;
     */
    tagBlacklist: number[];
    constructor(data?: PartialMessage<AvailableContent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AvailableContent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AvailableContent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AvailableContent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AvailableContent;
    static equals(a: AvailableContent | PlainMessage<AvailableContent> | undefined, b: AvailableContent | PlainMessage<AvailableContent> | undefined): boolean;
}
