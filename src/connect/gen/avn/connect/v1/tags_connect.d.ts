import { GetTagGroupRequest, GetTagGroupResponse, GetTagsRequest, GetTagsResponse } from "./tags_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.TagService
 */
export declare const TagService: {
    readonly typeName: "avn.connect.v1.TagService";
    readonly methods: {
        /**
         * Resolve tag IDs
         *
         * @generated from rpc avn.connect.v1.TagService.GetTags
         */
        readonly getTags: {
            readonly name: "GetTags";
            readonly I: typeof GetTagsRequest;
            readonly O: typeof GetTagsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Get all the details of a tag groups from an ID
         *
         * @generated from rpc avn.connect.v1.TagService.GetTagGroup
         */
        readonly getTagGroup: {
            readonly name: "GetTagGroup";
            readonly I: typeof GetTagGroupRequest;
            readonly O: typeof GetTagGroupResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
