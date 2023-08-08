import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.Role
 */
export declare class Role extends Message<Role> {
    /**
     * @generated from field: int32 role_id = 1;
     */
    roleId: number;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: int32 level = 3;
     */
    level: number;
    constructor(data?: PartialMessage<Role>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.Role";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Role;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Role;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Role;
    static equals(a: Role | PlainMessage<Role> | undefined, b: Role | PlainMessage<Role> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetRolesRequest
 */
export declare class GetRolesRequest extends Message<GetRolesRequest> {
    constructor(data?: PartialMessage<GetRolesRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetRolesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRolesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRolesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRolesRequest;
    static equals(a: GetRolesRequest | PlainMessage<GetRolesRequest> | undefined, b: GetRolesRequest | PlainMessage<GetRolesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetRolesResponse
 */
export declare class GetRolesResponse extends Message<GetRolesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.Role roles = 1;
     */
    roles: Role[];
    constructor(data?: PartialMessage<GetRolesResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetRolesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetRolesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetRolesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetRolesResponse;
    static equals(a: GetRolesResponse | PlainMessage<GetRolesResponse> | undefined, b: GetRolesResponse | PlainMessage<GetRolesResponse> | undefined): boolean;
}
