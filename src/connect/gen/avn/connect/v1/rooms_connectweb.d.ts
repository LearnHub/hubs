import { EnterRoomRequest, EnterRoomResponse, GetRoomDimensionRequest, GetRoomDimensionResponse, GetRoomRequest, GetRoomResponse, OpenRoomRequest, OpenRoomResponse, ResolveMediaRequest, ResolveMediaResponse } from "./rooms_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.RoomService
 */
export declare const RoomService: {
    readonly typeName: "avn.connect.v1.RoomService";
    readonly methods: {
        /**
         * Lookup a room by ID
         *
         * @generated from rpc avn.connect.v1.RoomService.GetRoom
         */
        readonly getRoom: {
            readonly name: "GetRoom";
            readonly I: typeof GetRoomRequest;
            readonly O: typeof GetRoomResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Open a room for a given dimension-URL combination (may return an existing room)
         *
         * @generated from rpc avn.connect.v1.RoomService.OpenRoom
         */
        readonly openRoom: {
            readonly name: "OpenRoom";
            readonly I: typeof OpenRoomRequest;
            readonly O: typeof OpenRoomResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.RoomService.GetRoomDimension
         */
        readonly getRoomDimension: {
            readonly name: "GetRoomDimension";
            readonly I: typeof GetRoomDimensionRequest;
            readonly O: typeof GetRoomDimensionResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Record entry to a room
         *
         * @generated from rpc avn.connect.v1.RoomService.EnterRoom
         */
        readonly enterRoom: {
            readonly name: "EnterRoom";
            readonly I: typeof EnterRoomRequest;
            readonly O: typeof EnterRoomResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Legacy function for hubs media resolution
         *
         * @generated from rpc avn.connect.v1.RoomService.ResolveMedia
         */
        readonly resolveMedia: {
            readonly name: "ResolveMedia";
            readonly I: typeof ResolveMediaRequest;
            readonly O: typeof ResolveMediaResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
