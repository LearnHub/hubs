import { GetUserLicensesRequest, GetUserLicensesResponse } from "./licenses_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.LicenseService
 */
export declare const LicenseService: {
    readonly typeName: "avn.connect.v1.LicenseService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.LicenseService.GetUserLicenses
         */
        readonly getUserLicenses: {
            readonly name: "GetUserLicenses";
            readonly I: typeof GetUserLicensesRequest;
            readonly O: typeof GetUserLicensesResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
