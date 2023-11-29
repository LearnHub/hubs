import { Certificate, GetHostnameCertificatesRequest } from "./certificates_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.CertificateService
 */
export declare const CertificateService: {
    readonly typeName: "avn.connect.v1.CertificateService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.CertificateService.GetLatestCertificate
         */
        readonly getLatestCertificate: {
            readonly name: "GetLatestCertificate";
            readonly I: typeof GetHostnameCertificatesRequest;
            readonly O: typeof Certificate;
            readonly kind: MethodKind.Unary;
        };
    };
};
