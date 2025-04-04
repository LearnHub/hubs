import { Country, GetCountriesRequest, GetCountriesResponse, GetCountryRequest } from "./countries_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.CountryService
 */
export declare const CountryService: {
    readonly typeName: "avn.connect.v1.CountryService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.CountryService.GetCountry
         */
        readonly getCountry: {
            readonly name: "GetCountry";
            readonly I: typeof GetCountryRequest;
            readonly O: typeof Country;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.CountryService.GetCountries
         */
        readonly getCountries: {
            readonly name: "GetCountries";
            readonly I: typeof GetCountriesRequest;
            readonly O: typeof GetCountriesResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
