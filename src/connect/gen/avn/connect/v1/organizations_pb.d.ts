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
 * @generated from message avn.connect.v1.CreateOrganizationRequest
 */
export declare class CreateOrganizationRequest extends Message<CreateOrganizationRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: avn.connect.v1.OrganizationSpec organization_spec = 2;
     */
    organizationSpec?: OrganizationSpec;
    constructor(data?: PartialMessage<CreateOrganizationRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CreateOrganizationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOrganizationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOrganizationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOrganizationRequest;
    static equals(a: CreateOrganizationRequest | PlainMessage<CreateOrganizationRequest> | undefined, b: CreateOrganizationRequest | PlainMessage<CreateOrganizationRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CreateOrganizationResponse
 */
export declare class CreateOrganizationResponse extends Message<CreateOrganizationResponse> {
    /**
     * @generated from field: avn.connect.v1.Organization organization = 1;
     */
    organization?: Organization;
    constructor(data?: PartialMessage<CreateOrganizationResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CreateOrganizationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateOrganizationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateOrganizationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateOrganizationResponse;
    static equals(a: CreateOrganizationResponse | PlainMessage<CreateOrganizationResponse> | undefined, b: CreateOrganizationResponse | PlainMessage<CreateOrganizationResponse> | undefined): boolean;
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
     * @generated from field: string postcode = 5;
     */
    postcode: string;
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
    /**
     * @generated from field: bool publisher = 16;
     */
    publisher: boolean;
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
 * Used for creating organizations
 *
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
     * @generated from field: string postcode = 5;
     */
    postcode: string;
    /**
     * @generated from field: string country_id = 6;
     */
    countryId: string;
    /**
     * @generated from field: string phone = 7;
     */
    phone: string;
    /**
     * @generated from field: int32 parent_id = 8;
     */
    parentId: number;
    /**
     * @generated from field: optional string email = 9;
     */
    email?: string;
    constructor(data?: PartialMessage<OrganizationSpec>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.OrganizationSpec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrganizationSpec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrganizationSpec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrganizationSpec;
    static equals(a: OrganizationSpec | PlainMessage<OrganizationSpec> | undefined, b: OrganizationSpec | PlainMessage<OrganizationSpec> | undefined): boolean;
}
