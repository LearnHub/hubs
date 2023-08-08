import { CreateClientCredentialsRequest, CreateClientCredentialsResponse, RecordActionRequest, RecordActionResponse } from "./clients_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service avn.connect.v1.ClientService
 */
export declare const ClientService: {
    readonly typeName: "avn.connect.v1.ClientService";
    readonly methods: {
        /**
         * @generated from rpc avn.connect.v1.ClientService.CreateClientCredentials
         */
        readonly createClientCredentials: {
            readonly name: "CreateClientCredentials";
            readonly I: typeof CreateClientCredentialsRequest;
            readonly O: typeof CreateClientCredentialsResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * TODO
         * rpc RecordPlatform(RecordPlatformRequest) returns (RecordPlatformResponse);
         * rpc RecordStatistic(RecordStatisticRequest) returns (RecordStatisticResponse);
         *
         * @generated from rpc avn.connect.v1.ClientService.RecordAction
         */
        readonly recordAction: {
            readonly name: "RecordAction";
            readonly I: typeof RecordActionRequest;
            readonly O: typeof RecordActionResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
