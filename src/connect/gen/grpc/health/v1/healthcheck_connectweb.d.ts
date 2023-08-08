import { HealthCheckRequest, HealthCheckResponse } from "./healthcheck_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service grpc.health.v1.Health
 */
export declare const Health: {
    readonly typeName: "grpc.health.v1.Health";
    readonly methods: {
        /**
         * @generated from rpc grpc.health.v1.Health.Check
         */
        readonly check: {
            readonly name: "Check";
            readonly I: typeof HealthCheckRequest;
            readonly O: typeof HealthCheckResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc grpc.health.v1.Health.Watch
         */
        readonly watch: {
            readonly name: "Watch";
            readonly I: typeof HealthCheckRequest;
            readonly O: typeof HealthCheckResponse;
            readonly kind: MethodKind.ServerStreaming;
        };
    };
};
