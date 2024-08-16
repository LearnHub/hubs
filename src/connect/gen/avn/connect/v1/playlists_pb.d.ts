import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Translation } from "./translations_pb.js";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from enum avn.connect.v1.PlaylistTrackType
 */
export declare enum PlaylistTrackType {
    /**
     * @generated from enum value: PLAYLIST_TRACK_TYPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PLAYLIST_TRACK_TYPE_ACTIVITY = 1;
     */
    ACTIVITY = 1,
    /**
     * @generated from enum value: PLAYLIST_TRACK_TYPE_CLOUD = 2;
     */
    CLOUD = 2
}
/**
 * @generated from message avn.connect.v1.Playlist
 */
export declare class Playlist extends Message<Playlist> {
    /**
     * @generated from field: int32 playlist_id = 1;
     */
    playlistId: number;
    /**
     * User owner id
     *
     * @generated from field: int32 owner_id = 2;
     */
    ownerId: number;
    /**
     * @generated from field: avn.connect.v1.Translation name = 3;
     */
    name?: Translation;
    /**
     * @generated from field: optional avn.connect.v1.Translation description = 4;
     */
    description?: Translation;
    /**
     * @generated from field: string icon_url = 5;
     */
    iconUrl: string;
    /**
     * @generated from field: google.protobuf.Timestamp created = 6;
     */
    created?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated = 7;
     */
    updated?: Timestamp;
    /**
     * @generated from field: optional google.protobuf.Timestamp published = 8;
     */
    published?: Timestamp;
    /**
     * @generated from field: optional google.protobuf.Timestamp featured = 9;
     */
    featured?: Timestamp;
    /**
     * @generated from field: optional google.protobuf.Timestamp approved = 10;
     */
    approved?: Timestamp;
    /**
     * @generated from field: repeated avn.connect.v1.PlaylistTrack tracks = 11;
     */
    tracks: PlaylistTrack[];
    constructor(data?: PartialMessage<Playlist>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Playlist";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Playlist;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Playlist;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Playlist;
    static equals(a: Playlist | PlainMessage<Playlist> | undefined, b: Playlist | PlainMessage<Playlist> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.PlaylistTrack
 */
export declare class PlaylistTrack extends Message<PlaylistTrack> {
    /**
     * @generated from field: int32 playlist_id = 1;
     */
    playlistId: number;
    /**
     * @generated from field: avn.connect.v1.PlaylistTrackType type = 2;
     */
    type: PlaylistTrackType;
    /**
     * @generated from field: int32 entity_id = 3;
     */
    entityId: number;
    /**
     * Output only parameters
     *
     * @generated from field: avn.connect.v1.Translation name = 4;
     */
    name?: Translation;
    /**
     * @generated from field: string icon_url = 5;
     */
    iconUrl: string;
    constructor(data?: PartialMessage<PlaylistTrack>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.PlaylistTrack";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PlaylistTrack;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PlaylistTrack;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PlaylistTrack;
    static equals(a: PlaylistTrack | PlainMessage<PlaylistTrack> | undefined, b: PlaylistTrack | PlainMessage<PlaylistTrack> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CreatePlaylistRequest
 */
export declare class CreatePlaylistRequest extends Message<CreatePlaylistRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: string language_id = 3;
     */
    languageId: string;
    constructor(data?: PartialMessage<CreatePlaylistRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CreatePlaylistRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePlaylistRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePlaylistRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePlaylistRequest;
    static equals(a: CreatePlaylistRequest | PlainMessage<CreatePlaylistRequest> | undefined, b: CreatePlaylistRequest | PlainMessage<CreatePlaylistRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CreatePlaylistResponse
 */
export declare class CreatePlaylistResponse extends Message<CreatePlaylistResponse> {
    /**
     * @generated from field: int32 playlist_id = 1;
     */
    playlistId: number;
    constructor(data?: PartialMessage<CreatePlaylistResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CreatePlaylistResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreatePlaylistResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreatePlaylistResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreatePlaylistResponse;
    static equals(a: CreatePlaylistResponse | PlainMessage<CreatePlaylistResponse> | undefined, b: CreatePlaylistResponse | PlainMessage<CreatePlaylistResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.DeletePlaylistRequest
 */
export declare class DeletePlaylistRequest extends Message<DeletePlaylistRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 playlist_id = 2;
     */
    playlistId: number;
    constructor(data?: PartialMessage<DeletePlaylistRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.DeletePlaylistRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeletePlaylistRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeletePlaylistRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeletePlaylistRequest;
    static equals(a: DeletePlaylistRequest | PlainMessage<DeletePlaylistRequest> | undefined, b: DeletePlaylistRequest | PlainMessage<DeletePlaylistRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.ReplaceTracksRequest
 */
export declare class ReplaceTracksRequest extends Message<ReplaceTracksRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 playlist_id = 2;
     */
    playlistId: number;
    /**
     * @generated from field: repeated avn.connect.v1.PlaylistTrack tracks = 3;
     */
    tracks: PlaylistTrack[];
    constructor(data?: PartialMessage<ReplaceTracksRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.ReplaceTracksRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ReplaceTracksRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ReplaceTracksRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ReplaceTracksRequest;
    static equals(a: ReplaceTracksRequest | PlainMessage<ReplaceTracksRequest> | undefined, b: ReplaceTracksRequest | PlainMessage<ReplaceTracksRequest> | undefined): boolean;
}
