import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetOrganizationMembershipResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationMembershipResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationMembershipResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationMembershipResponse;
    static equals(a: GetOrganizationMembershipResponse | PlainMessage<GetOrganizationMembershipResponse> | undefined, b: GetOrganizationMembershipResponse | PlainMessage<GetOrganizationMembershipResponse> | undefined): boolean;
}
