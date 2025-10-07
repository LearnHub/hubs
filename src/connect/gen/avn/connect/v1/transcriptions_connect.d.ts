import { GetActivityTranscriptRequest, GetMediaTranscriptRequest, GetTranscriptResponse, SetActivityTranscriptRequest } from "./transcriptions_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.TranscriptionService
 */
export declare const TranscriptionService: {
    readonly typeName: "avn.connect.v1.TranscriptionService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.TranscriptionService.GetMediaTranscript
         */
        readonly getMediaTranscript: {
            readonly name: "GetMediaTranscript";
            readonly I: typeof GetMediaTranscriptRequest;
            readonly O: typeof GetTranscriptResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.TranscriptionService.GetActivityTranscript
         */
        readonly getActivityTranscript: {
            readonly name: "GetActivityTranscript";
            readonly I: typeof GetActivityTranscriptRequest;
            readonly O: typeof GetTranscriptResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.TranscriptionService.SetActivityTranscript
         */
        readonly setActivityTranscript: {
            readonly name: "SetActivityTranscript";
            readonly I: typeof SetActivityTranscriptRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
    };
};
