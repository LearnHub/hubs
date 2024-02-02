import { SearchImagesRequest, SearchImagesResponse } from "./three_sixty_cities_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.ThreeSixtyCitiesService
 */
export declare const ThreeSixtyCitiesService: {
    readonly typeName: "avn.connect.v1.ThreeSixtyCitiesService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.ThreeSixtyCitiesService.SearchImages
         */
        readonly searchImages: {
            readonly name: "SearchImages";
            readonly I: typeof SearchImagesRequest;
            readonly O: typeof SearchImagesResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
