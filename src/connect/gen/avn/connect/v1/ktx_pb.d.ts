import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
import { Authorization } from "./authorization_pb.js";
/**
 * Supports a subset of the useful parameters for toktx
 *
 * @generated from message avn.connect.v1.ToKtxRequest
 */
export declare class ToKtxRequest extends Message<ToKtxRequest> {
    /**
     * @generated from field: avn.connect.v1.Authorization auth = 1;
     */
    auth?: Authorization;
    /**
     * @generated from field: avn.connect.v1.ToKtxParameters params = 2;
     */
    params?: ToKtxParameters;
    constructor(data?: PartialMessage<ToKtxRequest>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.ToKtxRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ToKtxRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ToKtxRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ToKtxRequest;
    static equals(a: ToKtxRequest | PlainMessage<ToKtxRequest> | undefined, b: ToKtxRequest | PlainMessage<ToKtxRequest> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.ToKtxParameters
 */
export declare class ToKtxParameters extends Message<ToKtxParameters> {
    /**
     * Input files
     *
     * @generated from field: repeated string urls = 1;
     */
    urls: string[];
    /**
     * --cubemap    KTX file is for a cubemap. At least 6 <infile>s must be provided,
     *              more if --mipmap is also specified. Provide the images in the
     *              order +X, -X, +Y, -Y, +Z, -Z where the arrangement is a
     *              left-handed coordinate system with +Y up. So if you're facing +Z,
     *              -X will be on your left and +X on your right. If --layers > 1
     *              is specified, provide the faces for layer 0 first then for
     *              layer 1, etc. Images must have an upper left origin so
     *              --lower_left_maps_to_s0t0 is ignored with this option.
     *
     * @generated from field: optional bool cubemap = 2;
     */
    cubemap?: boolean;
    /**
     * --genmipmap  Causes mipmaps to be generated for each input file. This option
     *              is mutually exclusive with --automipmap and --mipmap. When set
     *              the following mipmap-generation related options become valid,
     *              otherwise they are ignored.
     *
     * @generated from field: optional bool genmipmap = 3;
     */
    genmipmap?: boolean;
    /**
     * --target_type <type>
     *              Specify the number of components in the created texture. type is
     *              one of the following strings: @c R, @c RG, @c RGB or @c RGBA.
     *              Excess input components will be dropped. Output components with
     *              no mapping from the input will be set to 0 or, if the alpha
     *              component, 1.0.
     *
     * @generated from field: optional string target_type = 4;
     */
    targetType?: string;
    /**
     * --t2         Output in KTX2 format. Default is KTX.
     *
     * @generated from field: optional bool t2 = 5;
     */
    t2?: boolean;
    /**
     * --bcmp       Supercompress the image data with ETC1S / BasisLZ. Implies --t2.
     *              RED images will become RGB with RED in each component. RG images
     *              will have R in the RGB part and G in the alpha part of the
     *              compressed texture. When set, the following BasisLZ-related
     *              options become valid, otherwise they are ignored.
     *
     * @generated from field: optional bool bcmp = 6;
     */
    bcmp?: boolean;
    /**
     *     --clevel <level>
     *              ETC1S / BasisLZ compression level, an encoding speed vs. quality
     *              tradeoff. Range is [0,5], default is 1. Higher values are slower,
     *              but give higher quality.
     *
     * @generated from field: optional int32 clevel = 7;
     */
    clevel?: number;
    /**
     *     --qlevel <level>
     *              ETC1S / BasisLZ quality level. Range is [1,255]. Lower gives
     *              better compression/lower quality/faster. Higher gives less
     *              compression/higher quality/slower. --qlevel automatically
     *              determines values for --max_endpoints, --max-selectors,
     *              --endpoint_rdo_threshold and --selector_rdo_threshold for the
     *              target quality level. Setting these options overrides the values
     *              determined by -qlevel which defaults to 128 if neither it nor
     *              both of --max_endpoints and --max_selectors have been set.
     *
     *              Note that both of --max_endpoints and --max_selectors
     *              must be set for them to have any effect. If all three options
     *              are set, a warning will be issued that --qlevel will be ignored.
     *
     *              Note also that --qlevel will only determine values for
     *              --endpoint_rdo_threshold and --selector_rdo_threshold when
     *              its value exceeds 128, otherwise their defaults will be used.
     *
     * @generated from field: optional int32 qlevel = 8;
     */
    qlevel?: number;
    /**
     * DEPRECATED: https://github.com/KhronosGroup/KTX-Software/discussions/601
     *     --normal_map
     *              Tunes codec parameters for better quality on normal maps (no
     *              selector RDO, no endpoint RDO). Only valid for linear textures.
     *
     * @generated from field: optional bool normal_map = 9 [deprecated = true];
     * @deprecated
     */
    normalMap?: boolean;
    /**
     * --uastc [<level>]
     *              Create a texture in high-quality transcodable UASTC format.
     *              Implies --t2. The optional parameter <level> selects a speed
     *              vs quality tradeoff as shown in the following table:
     *
     *                Level |  Speed    | Quality
     *                ----- | -------   | -------
     *                  0   |  Fastest  | 43.45dB
     *                  1   |  Faster   | 46.49dB
     *                  2   |  Default  | 47.47dB
     *                  3   |  Slower   | 48.01dB
     *                  4   | Very slow | 48.24dB
     *
     *              You are strongly encouraged to also specify --zcmp to losslessly
     *              compress the UASTC data. This and any LZ-style compression can
     *              be made more effective by conditioning the UASTC texture data
     *              using the Rate Distortion Optimization (RDO) post-process stage.
     *
     * @generated from field: optional int32 uastc = 10;
     */
    uastc?: number;
    /**
     * --zcmp [<compressionLevel>]
     *              Supercompress the data with Zstandard. Implies --t2. Can be used
     *              with data in any format except ETC1S / BasisLZ (--bcmp). Most
     *              effective with RDO-conditioned UASTC or uncompressed formats. The
     *              optional compressionLevel range is 1 - 22 and the default is 3.
     *              Lower values=faster but give less compression. Values above 20
     *              should be used with caution as they require more memory.
     *
     * @generated from field: optional int32 zcmp = 11;
     */
    zcmp?: number;
    /**
     * --assign_oetf <linear|srgb>
     *              Force the created texture to have the specified transfer
     *              function. If this is specified, implicit or explicit color space
     *              information from the input file(s) will be ignored and no color
     *              transformation will be performed. USE WITH CAUTION preferably
     *              only when you know the file format information is wrong.
     *
     * @generated from field: optional string assign_oetf = 12;
     */
    assignOetf?: string;
    /**
     * --assign_primaries <bt709|none|srgb>
     *              Force the created texture to have the specified primaries. If
     *              this is specified, implicit or explicit color space information
     *              from the input file(s) will be ignored and no color
     *              transformation will be performed. USE WITH CAUTION preferably
     *              only when you know the file format information is wrong.
     *
     * @generated from field: optional string assign_primaries = 13;
     */
    assignPrimaries?: string;
    /**
     * --convert_oetf <linear|srgb>
     *              Convert the input images to the specified transfer function, if
     *              the current transfer function is different. If both this and
     *              --assign_oetf are specified, conversion will be performed from
     *              the assigned transfer function to the transfer function specified
     *              by this option, if different.
     *
     * @generated from field: optional string convert_oetf = 14;
     */
    convertOetf?: string;
    /**
     *   You can prevent conversion of the normal map to two components
     *   by specifying '--input_swizzle rgb1'.
     *
     * @generated from field: optional bool normal_mode = 15;
     */
    normalMode?: boolean;
    /**
     * --input_swizzle <swizzle>
     *              Swizzle the input components according to swizzle which is an
     *              alhpanumeric sequence matching the regular expression
     *              ^[rgba01]{4}$.
     *
     * @generated from field: optional string input_swizzle = 16;
     */
    inputSwizzle?: string;
    constructor(data?: PartialMessage<ToKtxParameters>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.ToKtxParameters";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ToKtxParameters;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ToKtxParameters;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ToKtxParameters;
    static equals(a: ToKtxParameters | PlainMessage<ToKtxParameters> | undefined, b: ToKtxParameters | PlainMessage<ToKtxParameters> | undefined): boolean;
}
/**
 * @generated from message avn.connect.v1.ToKtxResponse
 */
export declare class ToKtxResponse extends Message<ToKtxResponse> {
    /**
     * @generated from field: string url = 1;
     */
    url: string;
    constructor(data?: PartialMessage<ToKtxResponse>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime.js").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.ToKtxResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ToKtxResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ToKtxResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ToKtxResponse;
    static equals(a: ToKtxResponse | PlainMessage<ToKtxResponse> | undefined, b: ToKtxResponse | PlainMessage<ToKtxResponse> | undefined): boolean;
}
