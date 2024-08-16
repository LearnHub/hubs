import { EntityInfoListRequest, EntityInfoListResponse, GetEntityRequest } from "./entities_pb.js";
import { Channel } from "./channels_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.ChannelService
 */
export declare const ChannelService: {
    readonly typeName: "avn.connect.v1.ChannelService";
    readonly methods: {
        /**
         * Get details for a specific channel
         *
         * @generated from rpc avn.connect.v1.ChannelService.GetChannel
         */
        readonly getChannel: {
            readonly name: "GetChannel";
            readonly I: typeof GetEntityRequest;
            readonly O: typeof Channel;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get all channels available with the given authorization credentials
         *
         * @generated from rpc avn.connect.v1.ChannelService.GetBrowsableChannels
         */
        readonly getBrowsableChannels: {
            readonly name: "GetBrowsableChannels";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get all allowed channels from the given set of channels
         *
         * @generated from rpc avn.connect.v1.ChannelService.GetChannels
         */
        readonly getChannels: {
            readonly name: "GetChannels";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get all published profiles in the given set of channels
         *
         * @generated from rpc avn.connect.v1.ChannelService.GetProfiles
         */
        readonly getProfiles: {
            readonly name: "GetProfiles";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get all published categories in the given set of channels
         *
         * @generated from rpc avn.connect.v1.ChannelService.GetCategories
         */
        readonly getCategories: {
            readonly name: "GetCategories";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get all published activities in the given set of channels
         *
         * @generated from rpc avn.connect.v1.ChannelService.GetActivities
         */
        readonly getActivities: {
            readonly name: "GetActivities";
            readonly I: typeof EntityInfoListRequest;
            readonly O: typeof EntityInfoListResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
