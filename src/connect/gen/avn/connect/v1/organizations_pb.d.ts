import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { Organization, OrganizationSpec } from "./organization_pb.js";
/**
 * @generated from message avn.connect.v1.GetOrganizationRequest
 */
export declare class GetOrganizationRequest extends Message<GetOrganizationRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 organization_id = 2;
     */
    organizationId: number;
    constructor(data?: PartialMessage<GetOrganizationRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.GetOrganizationRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetOrganizationRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetOrganizationRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetOrganizationRequest;
    static equals(a: GetOrganizationRequest | PlainMessage<GetOrganizationRequest> | undefined, b: GetOrganizationRequest | PlainMessage<GetOrganizationRequest> | undefined): boolean;
}
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
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
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.CreateNewUserOrganizationResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateNewUserOrganizationResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateNewUserOrganizationResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateNewUserOrganizationResponse;
    static equals(a: CreateNewUserOrganizationResponse | PlainMessage<CreateNewUserOrganizationResponse> | undefined, b: CreateNewUserOrganizationResponse | PlainMessage<CreateNewUserOrganizationResponse> | undefined): boolean;
}
