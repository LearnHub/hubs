import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.Certificate
 */
export declare class Certificate extends Message<Certificate> {
    /**
     * SHA256 fingerprint
     *
     * @generated from field: string fingerprint = 1;
     */
    fingerprint: string;
    /**
     * Hostname that certificate is issued for
     *
     * @generated from field: string hostname = 2;
     */
    hostname: string;
    /**
     * Time range certificate is valid for
     *
     * @generated from field: google.protobuf.Timestamp valid_from = 3;
     */
    validFrom?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp valid_to = 4;
     */
    validTo?: Timestamp;
    /**
     * The private TLS certificate for servers
     *
     * @generated from field: string file_url = 5;
     */
    fileUrl: string;
    /**
     * The legacy certificate file is for use on legacy platforms like Mono
     *
     * @generated from field: string legacy_file_url = 6;
     */
    legacyFileUrl: string;
    /**
     * When the certificate was created
     *
     * @generated from field: google.protobuf.Timestamp created = 7;
     */
    created?: Timestamp;
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
