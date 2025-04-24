import { Translatable, TranslationRequest } from "./translations_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.TranslationService
 */
export declare const TranslationService: {
    readonly typeName: "avn.connect.v1.TranslationService";
    readonly methods: {
        /**
         * Will be used to find the source text for a translation
         * rpc Reverse(Translation) returns (TranslationRequest);
         * Will be used to update an existing translation
         * rpc Update(TranslationResult) returns (google.protobuf.Empty);
         *
         * @generated from rpc avn.connect.v1.TranslationService.Translate
         */
        readonly translate: {
            readonly name: "Translate";
            readonly I: typeof TranslationRequest;
            readonly O: typeof Translatable;
            readonly kind: MethodKind.Unary;
        };
    };
};
