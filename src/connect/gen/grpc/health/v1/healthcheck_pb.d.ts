import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message grpc.health.v1.HealthCheckRequest
 */
export declare class HealthCheckRequest extends Message<HealthCheckRequest> {
    /**
     * @generated from field: string service = 1;
     */
    service: string;
    constructor(data?: PartialMessage<HealthCheckRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "grpc.health.v1.HealthCheckRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckRequest;
    static equals(a: HealthCheckRequest | PlainMessage<HealthCheckRequest> | undefined, b: HealthCheckRequest | PlainMessage<HealthCheckRequest> | undefined): boolean;
}
/**
 * @generated from message grpc.health.v1.HealthCheckResponse
 */
export declare class HealthCheckResponse extends Message<HealthCheckResponse> {
    /**
     * @generated from field: grpc.health.v1.HealthCheckResponse.ServingStatus status = 1;
     */
    status: HealthCheckResponse_ServingStatus;
    constructor(data?: PartialMessage<HealthCheckResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "grpc.health.v1.HealthCheckResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): HealthCheckResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): HealthCheckResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): HealthCheckResponse;
    static equals(a: HealthCheckResponse | PlainMessage<HealthCheckResponse> | undefined, b: HealthCheckResponse | PlainMessage<HealthCheckResponse> | undefined): boolean;
}
/**
 * @generated from enum grpc.health.v1.HealthCheckResponse.ServingStatus
 */
export declare enum HealthCheckResponse_ServingStatus {
    /**
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * @generated from enum value: SERVING = 1;
     */
    SERVING = 1,
    /**
     * @generated from enum value: NOT_SERVING = 2;
     */
    NOT_SERVING = 2,
    /**
     * Used only by the Watch method.
     *
     * @generated from enum value: SERVICE_UNKNOWN = 3;
     */
    SERVICE_UNKNOWN = 3
}
