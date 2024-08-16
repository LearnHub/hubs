import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from message avn.connect.v1.JoinOrganizationRequest
 */
export declare class JoinOrganizationRequest extends Message<JoinOrganizationRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: string join_code = 2;
     */
    joinCode: string;
    constructor(data?: PartialMessage<JoinOrganizationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.JoinOrganizationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JoinOrganizationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JoinOrganizationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JoinOrganizationRequest;
    static equals(a: JoinOrganizationRequest | PlainMessage<JoinOrganizationRequest> | undefined, b: JoinOrganizationRequest | PlainMessage<JoinOrganizationRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.JoinOrganizationResponse
 */
export declare class JoinOrganizationResponse extends Message<JoinOrganizationResponse> {
    constructor(data?: PartialMessage<JoinOrganizationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.JoinOrganizationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JoinOrganizationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JoinOrganizationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JoinOrganizationResponse;
    static equals(a: JoinOrganizationResponse | PlainMessage<JoinOrganizationResponse> | undefined, b: JoinOrganizationResponse | PlainMessage<JoinOrganizationResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CreateNewUserOrganizationRequest
 */
export declare class CreateNewUserOrganizationRequest extends Message<CreateNewUserOrganizationRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: avn.connect.v1.OrganizationSpec organization_spec = 2;
     */
    organizationSpec?: OrganizationSpec;
    constructor(data?: PartialMessage<CreateNewUserOrganizationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CreateNewUserOrganizationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateNewUserOrganizationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateNewUserOrganizationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateNewUserOrganizationRequest;
    static equals(a: CreateNewUserOrganizationRequest | PlainMessage<CreateNewUserOrganizationRequest> | undefined, b: CreateNewUserOrganizationRequest | PlainMessage<CreateNewUserOrganizationRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CreateNewUserOrganizationResponse
 */
export declare class CreateNewUserOrganizationResponse extends Message<CreateNewUserOrganizationResponse> {
    /**
     * @generated from field: avn.connect.v1.Organization organization = 1;
     */
    organization?: Organization;
    constructor(data?: PartialMessage<CreateNewUserOrganizationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CreateNewUserOrganizationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateNewUserOrganizationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateNewUserOrganizationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateNewUserOrganizationResponse;
    static equals(a: CreateNewUserOrganizationResponse | PlainMessage<CreateNewUserOrganizationResponse> | undefined, b: CreateNewUserOrganizationResponse | PlainMessage<CreateNewUserOrganizationResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.Organization
 */
export declare class Organization extends Message<Organization> {
    /**
     * @generated from field: int32 organization_id = 1;
     */
    organizationId: number;
    /**
     * @generated from field: string email = 2;
     */
    email: string;
    /**
     * @generated from field: string name = 3;
     */
    name: string;
    /**
     * @generated from field: string address = 4;
     */
    address: string;
    /**
     * @generated from field: string post_code = 5;
     */
    postCode: string;
    /**
     * @generated from field: string phone = 6;
     */
    phone: string;
    /**
     * @generated from field: string timezone = 7;
     */
    timezone: string;
    /**
     * @generated from field: string language_id = 8;
     */
    languageId: string;
    /**
     * @generated from field: bool deleted = 9;
     */
    deleted: boolean;
    /**
     * @generated from field: optional google.protobuf.Timestamp created = 10;
     */
    created?: Timestamp;
    /**
     * @generated from field: optional google.protobuf.Timestamp updated = 11;
     */
    updated?: Timestamp;
    /**
     * @generated from field: optional string enrollment_secret = 12;
     */
    enrollmentSecret?: string;
    /**
     * @generated from field: string city = 13;
     */
    city: string;
    /**
     * @generated from field: string state = 14;
     */
    state: string;
    /**
     * @generated from field: string country_id = 15;
     */
    countryId: string;
    constructor(data?: PartialMessage<Organization>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Organization";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Organization;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Organization;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Organization;
    static equals(a: Organization | PlainMessage<Organization> | undefined, b: Organization | PlainMessage<Organization> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.OrganizationSpec
 */
export declare class OrganizationSpec extends Message<OrganizationSpec> {
    /**
     * @generated from field: string name = 1;
     */
    name: string;
    /**
     * @generated from field: string address = 2;
     */
    address: string;
    /**
     * @generated from field: string city = 3;
     */
    city: string;
    /**
     * @generated from field: string state = 4;
     */
    state: string;
    /**
     * @generated from field: string post_code = 5;
     */
    postCode: string;
    /**
     * @generated from field: string country_id = 6;
     */
    countryId: string;
    /**
     * @generated from field: string phone = 7;
     */
    phone: string;
    constructor(data?: PartialMessage<OrganizationSpec>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.OrganizationSpec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrganizationSpec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrganizationSpec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrganizationSpec;
    static equals(a: OrganizationSpec | PlainMessage<OrganizationSpec> | undefined, b: OrganizationSpec | PlainMessage<OrganizationSpec> | undefined): boolean;
}
