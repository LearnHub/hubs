import { TranslationField } from "./translations_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.TranslationService
 */
export declare const TranslationService: {
    readonly typeName: "avn.connect.v1.TranslationService";
    readonly methods: {
        /**
         * rpc Reverse(TranslationField) returns (TranslationField);
         * rpc Update(TranslationField) returns (google.protobuf.Empty);
         *
         * @generated from rpc avn.connect.v1.TranslationService.Translate
         */
        readonly translate: {
            readonly name: "Translate";
            readonly I: typeof TranslationField;
            readonly O: typeof TranslationField;
            readonly kind: MethodKind.Unary;
        };
    };
};
