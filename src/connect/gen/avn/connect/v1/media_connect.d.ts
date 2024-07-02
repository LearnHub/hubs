import { GetImageMetadataResponse, GetMediaTypeExtensionMapRequest, GetMediaTypeExtensionMapResponse, GetMetadataRequest, GetPreviewImageRequest, GetPreviewImageResponse, GetVideoMetadataResponse, TranscodeImageRequest, TranscodeImageResponse, TranscodeVideoRequest, TranscodeVideoResponse } from "./media_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.MediaService
 */
export declare const MediaService: {
    readonly typeName: "avn.connect.v1.MediaService";
    readonly methods: {
        /**
         * Create a summary image for the given media file
         *
         * @generated from rpc avn.connect.v1.MediaService.GetPreviewImage
         */
        readonly getPreviewImage: {
            readonly name: "GetPreviewImage";
            readonly I: typeof GetPreviewImageRequest;
            readonly O: typeof GetPreviewImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Metadata functions
         *
         * @generated from rpc avn.connect.v1.MediaService.GetImageMetadata
         */
        readonly getImageMetadata: {
            readonly name: "GetImageMetadata";
            readonly I: typeof GetMetadataRequest;
            readonly O: typeof GetImageMetadataResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.MediaService.GetVideoMetadata
         */
        readonly getVideoMetadata: {
            readonly name: "GetVideoMetadata";
            readonly I: typeof GetMetadataRequest;
            readonly O: typeof GetVideoMetadataResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Transcoding functions
         *
         * @generated from rpc avn.connect.v1.MediaService.TranscodeImage
         */
        readonly transcodeImage: {
            readonly name: "TranscodeImage";
            readonly I: typeof TranscodeImageRequest;
            readonly O: typeof TranscodeImageResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.MediaService.TranscodeVideo
         */
        readonly transcodeVideo: {
            readonly name: "TranscodeVideo";
            readonly I: typeof TranscodeVideoRequest;
            readonly O: typeof TranscodeVideoResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * A mapping of well known file extensions to media types
         *
         * @generated from rpc avn.connect.v1.MediaService.GetMediaTypeExtensionMap
         */
        readonly getMediaTypeExtensionMap: {
            readonly name: "GetMediaTypeExtensionMap";
            readonly I: typeof GetMediaTypeExtensionMapRequest;
            readonly O: typeof GetMediaTypeExtensionMapResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
