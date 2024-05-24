import { CreatePlaylistRequest, CreatePlaylistResponse, DeletePlaylistRequest, MatchUserActivitiesCloudRequest, MatchUserActivitiesFilesRequest, MatchUserActivitiesResponse, MatchUserActivitiesUrlRequest, Playlist, ReplaceTracksRequest } from "./playlists_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
import { EntityInfoListRequest, EntityInfoListResponse, GetEntityRequest, SetEntityPropertiesRequest } from "./entities_pb.js";
/**
 * @generated from service avn.connect.v1.PlaylistService
 */
export declare const PlaylistService: {
    readonly typeName: "avn.connect.v1.PlaylistService";
    readonly methods: {
        /**
         * Find or create an activity that matches the given cloud files
         *
         * @generated from rpc avn.connect.v1.PlaylistService.MatchUserActivitiesCloud
         */
        readonly matchUserActivitiesCloud: {
            readonly name: "MatchUserActivitiesCloud";
            readonly I: typeof MatchUserActivitiesCloudRequest;
            readonly O: typeof MatchUserActivitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Find or create an activity that matches the given file URLs links
         *
         * @generated from rpc avn.connect.v1.PlaylistService.MatchUserActivitiesFiles
         */
        readonly matchUserActivitiesFiles: {
            readonly name: "MatchUserActivitiesFiles";
            readonly I: typeof MatchUserActivitiesFilesRequest;
            readonly O: typeof MatchUserActivitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Find or create an activity that matches the given web links
         *
         * @generated from rpc avn.connect.v1.PlaylistService.MatchUserActivitiesUrl
         */
        readonly matchUserActivitiesUrl: {
            readonly name: "MatchUserActivitiesUrl";
            readonly I: typeof MatchUserActivitiesUrlRequest;
            readonly O: typeof MatchUserActivitiesResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Create a new playlist
         *
         * @generated from rpc avn.connect.v1.PlaylistService.CreatePlaylist
         */
        readonly createPlaylist: {
            readonly name: "CreatePlaylist";
            readonly I: typeof CreatePlaylistRequest;
            readonly O: typeof CreatePlaylistResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Delete an existing playlist
         *
         * @generated from rpc avn.connect.v1.PlaylistService.DeletePlaylist
         */
        readonly deletePlaylist: {
            readonly name: "DeletePlaylist";
            readonly I: typeof DeletePlaylistRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get a specific playlist (personal or public)
         *
         * @generated from rpc avn.connect.v1.PlaylistService.GetPlaylist
         */
        readonly getPlaylist: {
            readonly name: "GetPlaylist";
            readonly I: typeof GetEntityRequest;
            readonly O: typeof Playlist;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get playlists for the authorized user
         *
         * @generated from rpc avn.connect.v1.PlaylistService.GetPlaylistsPersonal
         */
        readonly getPlaylistsPersonal: {
            readonly name: "GetPlaylistsPersonal";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get community playlists
         *
         * @generated from rpc avn.connect.v1.PlaylistService.GetPlaylistsPublic
         */
        readonly getPlaylistsPublic: {
            readonly name: "GetPlaylistsPublic";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Set playlist properties
         *
         * @generated from rpc avn.connect.v1.PlaylistService.SetProperties
         */
        readonly setProperties: {
            readonly name: "SetProperties";
            readonly I: typeof SetEntityPropertiesRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Track management is atomic for simplicity
         *
         * @generated from rpc avn.connect.v1.PlaylistService.ReplaceTracks
         */
        readonly replaceTracks: {
            readonly name: "ReplaceTracks";
            readonly I: typeof ReplaceTracksRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
    };
};
