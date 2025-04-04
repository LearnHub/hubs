import { GeoSuggestRequest, GeoSuggestResponse, GetGeoPlaceRequest, GetGeoPlaceResponse } from "./geo_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.GeoService
 */
export declare const GeoService: {
    readonly typeName: "avn.connect.v1.GeoService";
    readonly methods: {
        /**
         * Find a place using a given id
         *
         * @generated from rpc avn.connect.v1.GeoService.GetGeoPlace
         */
        readonly getGeoPlace: {
            readonly name: "GetGeoPlace";
            readonly I: typeof GetGeoPlaceRequest;
            readonly O: typeof GetGeoPlaceResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lightweight searching suitable for things like autocomplete
         *
         * @generated from rpc avn.connect.v1.GeoService.GeoSuggest
         */
        readonly geoSuggest: {
            readonly name: "GeoSuggest";
            readonly I: typeof GeoSuggestRequest;
            readonly O: typeof GeoSuggestResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
