import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
/**
 * @generated from enum avn.connect.v1.PermissionScope
 */
export declare enum PermissionScope {
    /**
     * @generated from enum value: PERMISSION_SCOPE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: PERMISSION_SCOPE_GLOBAL = 1;
     */
    GLOBAL = 1,
    /**
     * @generated from enum value: PERMISSION_SCOPE_INHERITED = 2;
     */
    INHERITED = 2,
    /**
     * @generated from enum value: PERMISSION_SCOPE_BRANCH = 3;
     */
    BRANCH = 3
}
/**
 * @generated from message avn.connect.v1.Permission
 */
export declare class Permission extends Message<Permission> {
    /**
     * @generated from field: string permission_id = 1;
     */
    permissionId: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: avn.connect.v1.PermissionScope scope = 3;
     */
    scope: PermissionScope;
    /**
     * @generated from field: string description = 4;
     */
    description: string;
    constructor(data?: PartialMessage<Permission>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.Permission";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Permission;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Permission;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Permission;
    static equals(a: Permission | PlainMessage<Permission> | undefined, b: Permission | PlainMessage<Permission> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.IsPermittedRequest
 */
export declare class IsPermittedRequest extends Message<IsPermittedRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * The permissions to test
     *
     * @generated from field: string permissions_id = 2;
     */
    permissionsId: string;
    /**
     * The user under test (unset to use the ID of the authorizing user)
     *
     * @generated from field: optional int32 user_id = 3;
     */
    userId?: number;
    /**
     * The organization for non-global permissions
     *
     * @generated from field: optional int32 organization_id = 4;
     */
    organizationId?: number;
    constructor(data?: PartialMessage<IsPermittedRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.IsPermittedRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IsPermittedRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IsPermittedRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IsPermittedRequest;
    static equals(a: IsPermittedRequest | PlainMessage<IsPermittedRequest> | undefined, b: IsPermittedRequest | PlainMessage<IsPermittedRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.IsPermittedResponse
 */
export declare class IsPermittedResponse extends Message<IsPermittedResponse> {
    /**
     * @generated from field: bool value = 1;
     */
    value: boolean;
    constructor(data?: PartialMessage<IsPermittedResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.IsPermittedResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): IsPermittedResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): IsPermittedResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): IsPermittedResponse;
    static equals(a: IsPermittedResponse | PlainMessage<IsPermittedResponse> | undefined, b: IsPermittedResponse | PlainMessage<IsPermittedResponse> | undefined): boolean;
}
