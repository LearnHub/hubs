import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.Permission";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Permission;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Permission;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Permission;
    static equals(a: Permission | PlainMessage<Permission> | undefined, b: Permission | PlainMessage<Permission> | undefined): boolean;
}
