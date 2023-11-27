import { RegisterNeighborServerRequest, RegisterNeighborServerResponse } from "./neighbors_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.NeighborService
 */
export declare const NeighborService: {
    readonly typeName: "avn.connect.v1.NeighborService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.NeighborService.RegisterNeighborServer
         */
        readonly registerNeighborServer: {
            readonly name: "RegisterNeighborServer";
            readonly I: typeof RegisterNeighborServerRequest;
            readonly O: typeof RegisterNeighborServerResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
