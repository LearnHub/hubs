import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, Timestamp } from "@bufbuild/protobuf";
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.OrganizationSpec";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrganizationSpec;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrganizationSpec;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrganizationSpec;
    static equals(a: OrganizationSpec | PlainMessage<OrganizationSpec> | undefined, b: OrganizationSpec | PlainMessage<OrganizationSpec> | undefined): boolean;
}
