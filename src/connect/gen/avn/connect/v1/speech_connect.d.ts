import { GetCapabilitiesRequest, GetCapabilitiesResponse, SynthesizeResponse, SynthesizeTranscriptRequest } from "./speech_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.SpeechService
 */
export declare const SpeechService: {
    readonly typeName: "avn.connect.v1.SpeechService";
    readonly methods: {
        /**
         * Synthesize speech to match a Transcript
         *
         * @generated from rpc avn.connect.v1.SpeechService.SynthesizeTranscript
         */
        readonly synthesizeTranscript: {
            readonly name: "SynthesizeTranscript";
            readonly I: typeof SynthesizeTranscriptRequest;
            readonly O: typeof SynthesizeResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Capabilities of the speech engine
         *
         * @generated from rpc avn.connect.v1.SpeechService.GetCapabilities
         */
        readonly getCapabilities: {
            readonly name: "GetCapabilities";
            readonly I: typeof GetCapabilitiesRequest;
            readonly O: typeof GetCapabilitiesResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
