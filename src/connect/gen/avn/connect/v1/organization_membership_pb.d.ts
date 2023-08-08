import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.OrganizationMembership
 */
export declare class OrganizationMembership extends Message<OrganizationMembership> {
    /**
     * @generated from field: int32 user_id = 1;
     */
    userId: number;
    /**
     * @generated from field: int32 organization_id = 2;
     */
    organizationId: number;
    /**
     * @generated from field: int32 role_id = 3;
     */
    roleId: number;
    /**
     * @generated from field: repeated string additional_permissions = 4;
     */
    additionalPermissions: string[];
    constructor(data?: PartialMessage<OrganizationMembership>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.OrganizationMembership";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): OrganizationMembership;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): OrganizationMembership;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): OrganizationMembership;
    static equals(a: OrganizationMembership | PlainMessage<OrganizationMembership> | undefined, b: OrganizationMembership | PlainMessage<OrganizationMembership> | undefined): boolean;
}
