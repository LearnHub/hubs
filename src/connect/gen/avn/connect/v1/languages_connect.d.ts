import { GetLanguagesRequest, GetLanguagesResponse } from "./languages_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.LanguageService
 */
export declare const LanguageService: {
    readonly typeName: "avn.connect.v1.LanguageService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.LanguageService.GetLanguages
         */
        readonly getLanguages: {
            readonly name: "GetLanguages";
            readonly I: typeof GetLanguagesRequest;
            readonly O: typeof GetLanguagesResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
