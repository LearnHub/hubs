import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
import { TranslationSpec } from "./translations_pb.js";
import { OperationState } from "./operations_pb.js";
import { EntityInfo } from "./entities_pb.js";
/**
 * @generated from message avn.connect.v1.BlockadeSkyboxStyleFamily
 */
export declare class BlockadeSkyboxStyleFamily extends Message<BlockadeSkyboxStyleFamily> {
    /**
     * @generated from field: int32 entity_id = 1;
     */
    entityId: number;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: repeated avn.connect.v1.BlockadeSkyboxStyle styles = 3;
     */
    styles: BlockadeSkyboxStyle[];
    constructor(data?: PartialMessage<BlockadeSkyboxStyleFamily>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.BlockadeSkyboxStyleFamily";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockadeSkyboxStyleFamily;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockadeSkyboxStyleFamily;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockadeSkyboxStyleFamily;
    static equals(a: BlockadeSkyboxStyleFamily | PlainMessage<BlockadeSkyboxStyleFamily> | undefined, b: BlockadeSkyboxStyleFamily | PlainMessage<BlockadeSkyboxStyleFamily> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.BlockadeSkyboxStyle
 */
export declare class BlockadeSkyboxStyle extends Message<BlockadeSkyboxStyle> {
    /**
     * @generated from field: int32 entity_id = 1;
     */
    entityId: number;
    /**
     * @generated from field: string name = 2;
     */
    name: string;
    /**
     * @generated from field: optional string description = 3;
     */
    description?: string;
    /**
     * @generated from field: int32 max_prompt_size = 4;
     */
    maxPromptSize: number;
    /**
     * @generated from field: int32 max_negative_prompt_size = 5;
     */
    maxNegativePromptSize: number;
    /**
     * @generated from field: optional string preview_url = 6;
     */
    previewUrl?: string;
    constructor(data?: PartialMessage<BlockadeSkyboxStyle>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.BlockadeSkyboxStyle";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BlockadeSkyboxStyle;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BlockadeSkyboxStyle;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BlockadeSkyboxStyle;
    static equals(a: BlockadeSkyboxStyle | PlainMessage<BlockadeSkyboxStyle> | undefined, b: BlockadeSkyboxStyle | PlainMessage<BlockadeSkyboxStyle> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetSkyboxStyleFamiliesRequest
 */
export declare class GetSkyboxStyleFamiliesRequest extends Message<GetSkyboxStyleFamiliesRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: avn.connect.v1.TranslationSpec translate = 2;
     */
    translate?: TranslationSpec;
    constructor(data?: PartialMessage<GetSkyboxStyleFamiliesRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetSkyboxStyleFamiliesRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSkyboxStyleFamiliesRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSkyboxStyleFamiliesRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSkyboxStyleFamiliesRequest;
    static equals(a: GetSkyboxStyleFamiliesRequest | PlainMessage<GetSkyboxStyleFamiliesRequest> | undefined, b: GetSkyboxStyleFamiliesRequest | PlainMessage<GetSkyboxStyleFamiliesRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GetSkyboxStyleFamiliesResponse
 */
export declare class GetSkyboxStyleFamiliesResponse extends Message<GetSkyboxStyleFamiliesResponse> {
    /**
     * @generated from field: repeated avn.connect.v1.BlockadeSkyboxStyleFamily families = 1;
     */
    families: BlockadeSkyboxStyleFamily[];
    constructor(data?: PartialMessage<GetSkyboxStyleFamiliesResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GetSkyboxStyleFamiliesResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetSkyboxStyleFamiliesResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetSkyboxStyleFamiliesResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetSkyboxStyleFamiliesResponse;
    static equals(a: GetSkyboxStyleFamiliesResponse | PlainMessage<GetSkyboxStyleFamiliesResponse> | undefined, b: GetSkyboxStyleFamiliesResponse | PlainMessage<GetSkyboxStyleFamiliesResponse> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GenerateSkyboxRequest
 */
export declare class GenerateSkyboxRequest extends Message<GenerateSkyboxRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: int32 skybox_style_id = 2;
     */
    skyboxStyleId: number;
    /**
     * @generated from field: string prompt = 3;
     */
    prompt: string;
    /**
     * @generated from field: optional string negative_prompt = 4;
     */
    negativePrompt?: string;
    /**
     * @generated from field: optional string control_image_url = 5;
     */
    controlImageUrl?: string;
    /**
     * @generated from field: bool enhance_prompt = 6;
     */
    enhancePrompt: boolean;
    /**
     * Override to the user agent language
     *
     * @generated from field: optional string language_id = 7;
     */
    languageId?: string;
    /**
     * The seed used to generate the image; may be set by the returned image when cached
     *
     * @generated from field: optional int32 seed = 8;
     */
    seed?: number;
    /**
     * License context to use independent of authorization
     *
     * @generated from field: int32 context_organization_id = 9;
     */
    contextOrganizationId: number;
    constructor(data?: PartialMessage<GenerateSkyboxRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GenerateSkyboxRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenerateSkyboxRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenerateSkyboxRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenerateSkyboxRequest;
    static equals(a: GenerateSkyboxRequest | PlainMessage<GenerateSkyboxRequest> | undefined, b: GenerateSkyboxRequest | PlainMessage<GenerateSkyboxRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.GenerateSkyboxResponse
 */
export declare class GenerateSkyboxResponse extends Message<GenerateSkyboxResponse> {
    /**
     * State of the process
     *
     * @generated from field: avn.connect.v1.OperationState state = 1;
     */
    state: OperationState;
    /**
     * Only set if the job completes successfully
     *
     * @generated from field: optional avn.connect.v1.EntityInfo activity_info = 2;
     */
    activityInfo?: EntityInfo;
    /**
     * May be set when processing to indicated progress
     *
     * @generated from field: optional int32 progress_percent = 3;
     */
    progressPercent?: number;
    constructor(data?: PartialMessage<GenerateSkyboxResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.GenerateSkyboxResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GenerateSkyboxResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GenerateSkyboxResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GenerateSkyboxResponse;
    static equals(a: GenerateSkyboxResponse | PlainMessage<GenerateSkyboxResponse> | undefined, b: GenerateSkyboxResponse | PlainMessage<GenerateSkyboxResponse> | undefined): boolean;
}
