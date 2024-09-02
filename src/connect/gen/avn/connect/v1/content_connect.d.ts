import { MatchActivityFromCloudRequest, MatchActivityFromFilesRequest, MatchActivityFromUrlRequest, MatchActivityResponse, SubmitCommunityCategoryRequest } from "./content_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.ContentService
 */
export declare const ContentService: {
    readonly typeName: "avn.connect.v1.ContentService";
    readonly methods: {
        /**
         * Find or create an activity that matches the given cloud file
         *
         * @generated from rpc avn.connect.v1.ContentService.MatchActivityFromCloud
         */
        readonly matchActivityFromCloud: {
            readonly name: "MatchActivityFromCloud";
            readonly I: typeof MatchActivityFromCloudRequest;
            readonly O: typeof MatchActivityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Find or create an activity that matches the given file URLs
         *
         * @generated from rpc avn.connect.v1.ContentService.MatchActivityFromFiles
         */
        readonly matchActivityFromFiles: {
            readonly name: "MatchActivityFromFiles";
            readonly I: typeof MatchActivityFromFilesRequest;
            readonly O: typeof MatchActivityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Find or create an activity that matches the given web link
         *
         * @generated from rpc avn.connect.v1.ContentService.MatchActivityFromUrl
         */
        readonly matchActivityFromUrl: {
            readonly name: "MatchActivityFromUrl";
            readonly I: typeof MatchActivityFromUrlRequest;
            readonly O: typeof MatchActivityResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * User submissions for community library
         *
         * @generated from rpc avn.connect.v1.ContentService.SubmitCommunityCategory
         */
        readonly submitCommunityCategory: {
            readonly name: "SubmitCommunityCategory";
            readonly I: typeof SubmitCommunityCategoryRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
    };
};
