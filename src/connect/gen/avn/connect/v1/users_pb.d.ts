import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { OrganizationMembership } from "./organization_membership_pb.js";
/**
 * @generated from message avn.connect.v1.GetUserRequest
 */
export declare class GetUserRequest extends Message<GetUserRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 user_id = 2;
     */
    userId: number;
    constructor(data?: PartialMessage<GetUserRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetUserRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetUserRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetUserRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetUserRequest;
    static equals(a: GetUserRequest | PlainMessage<GetUserRequest> | undefined, b: GetUserRequest | PlainMessage<GetUserRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetOrganizationMembershipRequest
 */
export declare class GetOrganizationMembershipRequest extends Message<GetOrganizationMembershipRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 user_id = 2;
     */
    userId: number;
    constructor(data?: PartialMessage<GetOrganizationMembershipRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetOrganizationMembershipRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationMembershipRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationMembershipRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationMembershipRequest;
    static equals(a: GetOrganizationMembershipRequest | PlainMessage<GetOrganizationMembershipRequest> | undefined, b: GetOrganizationMembershipRequest | PlainMessage<GetOrganizationMembershipRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetOrganizationMembershipResponse
 */
export declare class GetOrganizationMembershipResponse extends Message<GetOrganizationMembershipResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.OrganizationMembership memberships = 1;
     */
    memberships: OrganizationMembership[];
    constructor(data?: PartialMessage<GetOrganizationMembershipResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetOrganizationMembershipResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationMembershipResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationMembershipResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationMembershipResponse;
    static equals(a: GetOrganizationMembershipResponse | PlainMessage<GetOrganizationMembershipResponse> | undefined, b: GetOrganizationMembershipResponse | PlainMessage<GetOrganizationMembershipResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.MemberOrganization
 */
export declare class MemberOrganization extends Message<MemberOrganization> {
    /**
     * @generated from field: int32 organization_id = 1;
     */
    organizationId: number;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    constructor(data?: PartialMessage<MemberOrganization>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.MemberOrganization";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MemberOrganization;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MemberOrganization;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MemberOrganization;
    static equals(a: MemberOrganization | PlainMessage<MemberOrganization> | undefined, b: MemberOrganization | PlainMessage<MemberOrganization> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.SearchMemberOrganizationsRequest
 */
export declare class SearchMemberOrganizationsRequest extends Message<SearchMemberOrganizationsRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: optional string search_text = 2;
     */
    searchText?: string;
    /**
     * @generated from field: optional int32 page_size = 3;
     */
    pageSize?: number;
    /**
     * @generated from field: optional string page_token = 4;
     */
    pageToken?: string;
    constructor(data?: PartialMessage<SearchMemberOrganizationsRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SearchMemberOrganizationsRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchMemberOrganizationsRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchMemberOrganizationsRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchMemberOrganizationsRequest;
    static equals(a: SearchMemberOrganizationsRequest | PlainMessage<SearchMemberOrganizationsRequest> | undefined, b: SearchMemberOrganizationsRequest | PlainMessage<SearchMemberOrganizationsRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.SearchMemberOrganizationsResponse
 */
export declare class SearchMemberOrganizationsResponse extends Message<SearchMemberOrganizationsResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.MemberOrganization results = 1;
     */
    results: MemberOrganization[];
    /**
     * @generated from field: string next_page_token = 2;
     */
    nextPageToken: string;
    constructor(data?: PartialMessage<SearchMemberOrganizationsResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SearchMemberOrganizationsResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SearchMemberOrganizationsResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SearchMemberOrganizationsResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SearchMemberOrganizationsResponse;
    static equals(a: SearchMemberOrganizationsResponse | PlainMessage<SearchMemberOrganizationsResponse> | undefined, b: SearchMemberOrganizationsResponse | PlainMessage<SearchMemberOrganizationsResponse> | undefined): boolean;
}
