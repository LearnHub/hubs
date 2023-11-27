import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.Certificate
 */
export declare class Certificate extends Message<Certificate> {
    /**
     * @generated from field: string certificate_url = 1;
     */
    certificateUrl: string;
    constructor(data?: PartialMessage<Certificate>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Certificate";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Certificate;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Certificate;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Certificate;
    static equals(a: Certificate | PlainMessage<Certificate> | undefined, b: Certificate | PlainMessage<Certificate> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetHostnameCertificatesRequest
 */
export declare class GetHostnameCertificatesRequest extends Message<GetHostnameCertificatesRequest> {
    /**
     * @generated from field: string hostname = 1;
     */
    hostname: string;
    constructor(data?: PartialMessage<GetHostnameCertificatesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetHostnameCertificatesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetHostnameCertificatesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetHostnameCertificatesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetHostnameCertificatesRequest;
    static equals(a: GetHostnameCertificatesRequest | PlainMessage<GetHostnameCertificatesRequest> | undefined, b: GetHostnameCertificatesRequest | PlainMessage<GetHostnameCertificatesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetHostnameCertificatesResponse
 */
export declare class GetHostnameCertificatesResponse extends Message<GetHostnameCertificatesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.Certificate certificates = 1;
     */
    certificates: Certificate[];
    constructor(data?: PartialMessage<GetHostnameCertificatesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetHostnameCertificatesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetHostnameCertificatesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetHostnameCertificatesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetHostnameCertificatesResponse;
    static equals(a: GetHostnameCertificatesResponse | PlainMessage<GetHostnameCertificatesResponse> | undefined, b: GetHostnameCertificatesResponse | PlainMessage<GetHostnameCertificatesResponse> | undefined): boolean;
}
