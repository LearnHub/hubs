import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { PartnerSession } from "./partners_pb.js";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from message avn.connect.v1.LicenseInfo
 */
export declare class LicenseInfo extends Message<LicenseInfo> {
    /**
     * @generated from field: optional string license_id = 1;
     */
    licenseId?: string;
    /**
     * @generated from field: repeated string plan_codes = 2;
     */
    planCodes: string[];
    /**
     * @generated from oneof avn.connect.v1.LicenseInfo.source
     */
    source: {
        /**
         * Client license
         *
         * @generated from field: string client_id = 3;
         */
        value: string;
        case: "clientId";
    } | {
        /**
         * Licenses that are allocated to the user directly (currently only via Zoho email matching)
         *
         * @generated from field: int32 user_id = 4;
         */
        value: number;
        case: "userId";
    } | {
        /**
         * Organization assigned license (will be the ID of the licensee organization, not the channel library organization)
         *
         * @generated from field: int32 organization_id = 5;
         */
        value: number;
        case: "organizationId";
    } | {
        /**
         * Partner allocated license
         *
         * @generated from field: avn.connect.v1.PartnerSession partner_session = 6;
         */
        value: PartnerSession;
        case: "partnerSession";
    } | {
        /**
         * Dimensions created by authenticated users have additional privileges and allow access to user playlist activities
         *
         * @generated from field: int32 authenticated_user_id = 7;
         */
        value: number;
        case: "authenticatedUserId";
    } | {
        /**
         * Hall pass license apply to content only
         *
         * @generated from field: string pass_id = 8;
         */
        value: string;
        case: "passId";
    } | {
        /**
         * Dimension context (anything relating to how the dimension was created, e.g. 'common' plan codes that apply to all dimensions)
         *
         * @generated from field: string context = 9;
         */
        value: string;
        case: "context";
    } | {
        /**
         * Additional organization to license, currently passed through from ClassVR Player
         *
         * @generated from field: int32 user_organization_id = 10;
         */
        value: number;
        case: "userOrganizationId";
    } | {
        case: undefined;
        value?: undefined;
    };
    /**
     * @generated from field: optional google.protobuf.Timestamp expires = 20;
     */
    expires?: Timestamp;
    constructor(data?: PartialMessage<LicenseInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.LicenseInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): LicenseInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): LicenseInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): LicenseInfo;
    static equals(a: LicenseInfo | PlainMessage<LicenseInfo> | undefined, b: LicenseInfo | PlainMessage<LicenseInfo> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetUserLicensesRequest
 */
export declare class GetUserLicensesRequest extends Message<GetUserLicensesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 user_id = 2;
     */
    userId: number;
    constructor(data?: PartialMessage<GetUserLicensesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetUserLicensesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserLicensesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserLicensesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserLicensesRequest;
    static equals(a: GetUserLicensesRequest | PlainMessage<GetUserLicensesRequest> | undefined, b: GetUserLicensesRequest | PlainMessage<GetUserLicensesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetUserLicensesResponse
 */
export declare class GetUserLicensesResponse extends Message<GetUserLicensesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.LicenseInfo licenses = 1;
     */
    licenses: LicenseInfo[];
    constructor(data?: PartialMessage<GetUserLicensesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetUserLicensesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserLicensesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserLicensesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserLicensesResponse;
    static equals(a: GetUserLicensesResponse | PlainMessage<GetUserLicensesResponse> | undefined, b: GetUserLicensesResponse | PlainMessage<GetUserLicensesResponse> | undefined): boolean;
}
