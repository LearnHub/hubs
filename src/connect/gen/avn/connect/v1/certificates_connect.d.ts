import { GetHostnameCertificatesRequest, GetHostnameCertificatesResponse } from "./certificates_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.CertificateService
 */
export declare const CertificateService: {
    readonly typeName: "avn.connect.v1.CertificateService";
    readonly methods: {
        /**
         * TLS certificates by hostname (only avnlan.link currently supported)
         *
         * @generated from rpc avn.connect.v1.CertificateService.GetHostnameCertificates
         */
        readonly getHostnameCertificates: {
            readonly name: "GetHostnameCertificates";
            readonly I: typeof GetHostnameCertificatesRequest;
            readonly O: typeof GetHostnameCertificatesResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
