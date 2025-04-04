import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3, Timestamp } from "@bufbuild/protobuf";
import { ClientCredentials } from "./clients_pb.js";
import { Authorization, IdentityProvider } from "./authorization_pb.js";
import { ConnectionCredentials, ConnectionInstance } from "./connections_pb.js";
import { PresenceUpdate } from "./presence_pb.js";
import { LessonContext } from "./lesson_context_pb.js";
import { OperationState } from "./operations_pb.js";
import { AvailableContent, UserInterfaceFeatures } from "./features_pb.js";
import { InteractionPermissions } from "./interaction_permissions_pb.js";
import { LicenseInfo } from "./licenses_pb.js";
import { PartnerSession } from "./partners_pb.js";
/**
 * @generated from enum avn.connect.v1.ExpiryStrategy
 */
export declare enum ExpiryStrategy {
    /**
     * @generated from enum value: EXPIRY_STRATEGY_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: EXPIRY_STRATEGY_ANY_CONNECTION = 1;
     */
    ANY_CONNECTION = 1,
    /**
     * @generated from enum value: EXPIRY_STRATEGY_ONLY_OWNER = 2;
     */
    ONLY_OWNER = 2
}
/**
 * @generated from message avn.connect.v1.CreateDimensionRequest
 */
export declare class CreateDimensionRequest extends Message<CreateDimensionRequest> {
    /**
     * The client that is making the request
     *
     * @generated from field: avn.connect.v1.ClientCredentials client = 1;
     */
    client?: ClientCredentials;
    /**
     * Authorization for the dimension creator
     *
     * @generated from field: optional avn.connect.v1.Authorization auth = 2;
     */
    auth?: Authorization;
    /**
     * A hall pass to use for additional licensing
     *
     * @generated from field: optional string pass_id = 3;
     */
    passId?: string;
    /**
     * Which Eduverse cloud domain to use?
     *
     * @generated from field: optional string preferred_domain = 4;
     */
    preferredDomain?: string;
    /**
     * Where is the request coming from? (typically a hostname)
     *
     * @generated from field: optional string referrer = 5;
     */
    referrer?: string;
    /**
     * Narrow dimension license scope to a specific organization
     *
     * @generated from field: optional int32 context_organization_id = 6;
     */
    contextOrganizationId?: number;
    constructor(data?: PartialMessage<CreateDimensionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CreateDimensionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDimensionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDimensionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDimensionRequest;
    static equals(a: CreateDimensionRequest | PlainMessage<CreateDimensionRequest> | undefined, b: CreateDimensionRequest | PlainMessage<CreateDimensionRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.CreateDimensionResponse
 */
export declare class CreateDimensionResponse extends Message<CreateDimensionResponse> {
    /**
     * @generated from field: string dimension_id = 1;
     */
    dimensionId: string;
    constructor(data?: PartialMessage<CreateDimensionResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.CreateDimensionResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CreateDimensionResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CreateDimensionResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CreateDimensionResponse;
    static equals(a: CreateDimensionResponse | PlainMessage<CreateDimensionResponse> | undefined, b: CreateDimensionResponse | PlainMessage<CreateDimensionResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetDimensionRequest
 */
export declare class GetDimensionRequest extends Message<GetDimensionRequest> {
    /**
     * @generated from field: avn.connect.v1.ClientCredentials client = 1;
     */
    client?: ClientCredentials;
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 2;
     */
    auth?: Authorization;
    /**
     * @generated from field: string dimension_id = 3;
     */
    dimensionId: string;
    constructor(data?: PartialMessage<GetDimensionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetDimensionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetDimensionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetDimensionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetDimensionRequest;
    static equals(a: GetDimensionRequest | PlainMessage<GetDimensionRequest> | undefined, b: GetDimensionRequest | PlainMessage<GetDimensionRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.JoinDimensionRequest
 */
export declare class JoinDimensionRequest extends Message<JoinDimensionRequest> {
    /**
     * @generated from field: avn.connect.v1.ClientCredentials client = 1;
     */
    client?: ClientCredentials;
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 2;
     */
    auth?: Authorization;
    /**
     * @generated from field: string dimension_id = 3;
     */
    dimensionId: string;
    constructor(data?: PartialMessage<JoinDimensionRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.JoinDimensionRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): JoinDimensionRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): JoinDimensionRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): JoinDimensionRequest;
    static equals(a: JoinDimensionRequest | PlainMessage<JoinDimensionRequest> | undefined, b: JoinDimensionRequest | PlainMessage<JoinDimensionRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.DimensionEvent
 */
export declare class DimensionEvent extends Message<DimensionEvent> {
    /**
     * Status of the connected dimension
     *
     * @generated from field: optional avn.connect.v1.DimensionStatus status = 1;
     */
    status?: DimensionStatus;
    /**
     * Immutable info about the dimension
     *
     * @generated from field: optional avn.connect.v1.DimensionInfo info = 2;
     */
    info?: DimensionInfo;
    /**
     * Connection details including credentials for future calls
     *
     * @generated from field: optional avn.connect.v1.ConnectionInstance connection = 3;
     */
    connection?: ConnectionInstance;
    /**
     * Broadcast message to display
     *
     * @generated from field: optional avn.connect.v1.DimensionBroadcast broadcast = 4;
     */
    broadcast?: DimensionBroadcast;
    /**
     * Track people joinging and leaving the dimension
     *
     * @generated from field: optional avn.connect.v1.PresenceUpdate presence = 5;
     */
    presence?: PresenceUpdate;
    /**
     * Track lesson context changes (gather and look)
     *
     * @generated from field: optional avn.connect.v1.LessonContext lesson = 6;
     */
    lesson?: LessonContext;
    constructor(data?: PartialMessage<DimensionEvent>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.DimensionEvent";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DimensionEvent;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DimensionEvent;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DimensionEvent;
    static equals(a: DimensionEvent | PlainMessage<DimensionEvent> | undefined, b: DimensionEvent | PlainMessage<DimensionEvent> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.DimensionStatus
 */
export declare class DimensionStatus extends Message<DimensionStatus> {
    /**
     * @generated from field: avn.connect.v1.OperationState state = 1;
     */
    state: OperationState;
    /**
     * @generated from field: optional string detail = 2;
     */
    detail?: string;
    constructor(data?: PartialMessage<DimensionStatus>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.DimensionStatus";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DimensionStatus;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DimensionStatus;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DimensionStatus;
    static equals(a: DimensionStatus | PlainMessage<DimensionStatus> | undefined, b: DimensionStatus | PlainMessage<DimensionStatus> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.DimensionInstance
 */
export declare class DimensionInstance extends Message<DimensionInstance> {
    /**
     * @generated from field: avn.connect.v1.DimensionInfo info = 1;
     */
    info?: DimensionInfo;
    /**
     * @generated from field: avn.connect.v1.AvailableContent content = 2;
     */
    content?: AvailableContent;
    /**
     * @generated from field: avn.connect.v1.InteractionPermissions permissions = 4;
     */
    permissions?: InteractionPermissions;
    /**
     * @generated from field: avn.connect.v1.UserInterfaceFeatures features = 5;
     */
    features?: UserInterfaceFeatures;
    constructor(data?: PartialMessage<DimensionInstance>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.DimensionInstance";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DimensionInstance;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DimensionInstance;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DimensionInstance;
    static equals(a: DimensionInstance | PlainMessage<DimensionInstance> | undefined, b: DimensionInstance | PlainMessage<DimensionInstance> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.DimensionInfo
 */
export declare class DimensionInfo extends Message<DimensionInfo> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: google.protobuf.Timestamp created = 3;
     */
    created?: Timestamp;
    /**
     * @generated from field: avn.connect.v1.ExpiryStrategy expiry_strategy = 4;
     */
    expiryStrategy: ExpiryStrategy;
    /**
     * @generated from field: string domain = 5;
     */
    domain: string;
    /**
     * @generated from field: optional string pass_id = 6;
     */
    passId?: string;
    /**
     * @generated from field: avn.connect.v1.AccessLimits access_limits = 7;
     */
    accessLimits?: AccessLimits;
    /**
     * @generated from field: avn.connect.v1.DimensionOrigin origin = 8;
     */
    origin?: DimensionOrigin;
    /**
     * @generated from field: repeated avn.connect.v1.LicenseInfo licenses = 9;
     */
    licenses: LicenseInfo[];
    /**
     * @generated from field: optional string entry_message = 10;
     */
    entryMessage?: string;
    constructor(data?: PartialMessage<DimensionInfo>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.DimensionInfo";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DimensionInfo;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DimensionInfo;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DimensionInfo;
    static equals(a: DimensionInfo | PlainMessage<DimensionInfo> | undefined, b: DimensionInfo | PlainMessage<DimensionInfo> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.DimensionOrigin
 */
export declare class DimensionOrigin extends Message<DimensionOrigin> {
    /**
     * @generated from field: optional string client_id = 1;
     */
    clientId?: string;
    /**
     * @generated from field: optional int32 user_id = 2;
     */
    userId?: number;
    /**
     * @generated from field: optional avn.connect.v1.PartnerSession partner_session = 3;
     */
    partnerSession?: PartnerSession;
    constructor(data?: PartialMessage<DimensionOrigin>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.DimensionOrigin";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DimensionOrigin;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DimensionOrigin;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DimensionOrigin;
    static equals(a: DimensionOrigin | PlainMessage<DimensionOrigin> | undefined, b: DimensionOrigin | PlainMessage<DimensionOrigin> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.DimensionBroadcast
 */
export declare class DimensionBroadcast extends Message<DimensionBroadcast> {
    /**
     * @generated from field: string message = 1;
     */
    message: string;
    /**
     * @generated from field: optional string announcer_connection_id = 2;
     */
    announcerConnectionId?: string;
    constructor(data?: PartialMessage<DimensionBroadcast>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.DimensionBroadcast";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DimensionBroadcast;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DimensionBroadcast;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DimensionBroadcast;
    static equals(a: DimensionBroadcast | PlainMessage<DimensionBroadcast> | undefined, b: DimensionBroadcast | PlainMessage<DimensionBroadcast> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.AccessLimits
 */
export declare class AccessLimits extends Message<AccessLimits> {
    /**
     * @generated from field: int32 room_capacity = 1;
     */
    roomCapacity: number;
    /**
     * @generated from field: int32 dimension_capacity = 2;
     */
    dimensionCapacity: number;
    /**
     * @generated from field: repeated avn.connect.v1.IdentityProvider identity_providers = 3;
     */
    identityProviders: IdentityProvider[];
    /**
     * @generated from field: repeated string email_whitelist = 4;
     */
    emailWhitelist: string[];
    constructor(data?: PartialMessage<AccessLimits>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.AccessLimits";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AccessLimits;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AccessLimits;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AccessLimits;
    static equals(a: AccessLimits | PlainMessage<AccessLimits> | undefined, b: AccessLimits | PlainMessage<AccessLimits> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.SetLessonContextRequest
 */
export declare class SetLessonContextRequest extends Message<SetLessonContextRequest> {
    /**
     * @generated from field: avn.connect.v1.ConnectionCredentials credentials = 1;
     */
    credentials?: ConnectionCredentials;
    /**
     * @generated from field: string dimension_id = 2;
     */
    dimensionId: string;
    /**
     * @generated from field: optional avn.connect.v1.LessonContext context = 3;
     */
    context?: LessonContext;
    constructor(data?: PartialMessage<SetLessonContextRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SetLessonContextRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetLessonContextRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetLessonContextRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetLessonContextRequest;
    static equals(a: SetLessonContextRequest | PlainMessage<SetLessonContextRequest> | undefined, b: SetLessonContextRequest | PlainMessage<SetLessonContextRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.SetLessonContextResponse
 */
export declare class SetLessonContextResponse extends Message<SetLessonContextResponse> {
    /**
     * @generated from field: avn.connect.v1.OperationState state = 1;
     */
    state: OperationState;
    /**
     * @generated from field: optional string detail = 2;
     */
    detail?: string;
    constructor(data?: PartialMessage<SetLessonContextResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.SetLessonContextResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SetLessonContextResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SetLessonContextResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SetLessonContextResponse;
    static equals(a: SetLessonContextResponse | PlainMessage<SetLessonContextResponse> | undefined, b: SetLessonContextResponse | PlainMessage<SetLessonContextResponse> | undefined): boolean;
}
