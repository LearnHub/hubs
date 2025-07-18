import { Translatable, TranslationLookupRequest, TranslationLookupResponse, TranslationRequest, TranslationUpdateRequest } from "./translations_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.TranslationService
 */
export declare const TranslationService: {
    readonly typeName: "avn.connect.v1.TranslationService";
    readonly methods: {
        /**
         * Translate a given source
         *
         * @generated from rpc avn.connect.v1.TranslationService.Translate
         */
        readonly translate: {
            readonly name: "Translate";
            readonly I: typeof TranslationRequest;
            readonly O: typeof Translatable;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lookup an existing translation
         *
         * @generated from rpc avn.connect.v1.TranslationService.Lookup
         */
        readonly lookup: {
            readonly name: "Lookup";
            readonly I: typeof TranslationLookupRequest;
            readonly O: typeof TranslationLookupResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Update an existing translation
         *
         * @generated from rpc avn.connect.v1.TranslationService.Update
         */
        readonly update: {
            readonly name: "Update";
            readonly I: typeof TranslationUpdateRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
    };
};
