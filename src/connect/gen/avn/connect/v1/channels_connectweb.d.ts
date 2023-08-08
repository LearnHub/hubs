import { Channel, GetBrowsableChannelsRequest, GetBrowsableChannelsResponse, GetChannelRequest, GetProfilesRequest, GetProfilesResponse } from "./channels_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.ChannelService
 */
export declare const ChannelService: {
    readonly typeName: "avn.connect.v1.ChannelService";
    readonly methods: {
        /**
         * Get a specific channel
         *
         * @generated from rpc avn.connect.v1.ChannelService.GetChannel
         */
        readonly getChannel: {
            readonly name: "GetChannel";
            readonly I: typeof GetChannelRequest;
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
            readonly I: typeof GetBrowsableChannelsRequest;
            readonly O: typeof GetBrowsableChannelsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get all published profiles in the given channel
         *
         * @generated from rpc avn.connect.v1.ChannelService.GetProfiles
         */
        readonly getProfiles: {
            readonly name: "GetProfiles";
            readonly I: typeof GetProfilesRequest;
            readonly O: typeof GetProfilesResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
