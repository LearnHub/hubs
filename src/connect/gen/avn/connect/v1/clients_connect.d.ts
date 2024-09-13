import { CreateClientCredentialsRequest, CreateClientCredentialsResponse, GetLighthouseServersRequest, GetLighthouseServersResponse, RecordActionRequest, RecordActionResponse, RecordFeedbackRequest, RecordFeedbackResponse, RegisterLighthouseServerRequest, RegisterLighthouseServerResponse } from "./clients_pb.js";
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
         * Record arbitrary actions that might not be captured in other data flows
         *
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
        /**
         * Record user feedback
         *
         * @generated from rpc avn.connect.v1.ClientService.RecordFeedback
         */
        readonly recordFeedback: {
            readonly name: "RecordFeedback";
            readonly I: typeof RecordFeedbackRequest;
            readonly O: typeof RecordFeedbackResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Lighthouse servers provide stateless DNS resolution checking for avnlan.local style addresses
         *
         * @generated from rpc avn.connect.v1.ClientService.RegisterLighthouseServer
         */
        readonly registerLighthouseServer: {
            readonly name: "RegisterLighthouseServer";
            readonly I: typeof RegisterLighthouseServerRequest;
            readonly O: typeof RegisterLighthouseServerResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc avn.connect.v1.ClientService.GetLighthouseServers
         */
        readonly getLighthouseServers: {
            readonly name: "GetLighthouseServers";
            readonly I: typeof GetLighthouseServersRequest;
            readonly O: typeof GetLighthouseServersResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
