import { TranslationRequest, TranslationResponse } from "./translations_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.TranslationService
 */
export declare const TranslationService: {
    readonly typeName: "avn.connect.v1.TranslationService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.TranslationService.Translate
         */
        readonly translate: {
            readonly name: "Translate";
            readonly I: typeof TranslationRequest;
            readonly O: typeof TranslationResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
