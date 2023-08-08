import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.InteractionPermissions
 */
export declare class InteractionPermissions extends Message<InteractionPermissions> {
    /**
     * @generated from field: bool allow_back = 1;
     */
    allowBack: boolean;
    /**
     * @generated from field: bool allow_explore = 2;
     */
    allowExplore: boolean;
    /**
     * @generated from field: bool allow_navigation = 3;
     */
    allowNavigation: boolean;
    /**
     * @generated from field: bool allow_invite = 10;
     */
    allowInvite: boolean;
    /**
     * @generated from field: bool allow_pass = 11;
     */
    allowPass: boolean;
    /**
     * @generated from field: bool allow_change_avatar = 12;
     */
    allowChangeAvatar: boolean;
    /**
     * @generated from field: bool allow_teacher_notes = 13;
     */
    allowTeacherNotes: boolean;
    /**
     * @generated from field: bool allow_student_notes = 14;
     */
    allowStudentNotes: boolean;
    /**
     * @generated from field: bool allow_people_menu = 15;
     */
    allowPeopleMenu: boolean;
    /**
     * @generated from field: bool allow_focus = 20;
     */
    allowFocus: boolean;
    /**
     * @generated from field: bool allow_mute = 21;
     */
    allowMute: boolean;
    /**
     * @generated from field: bool allow_broadcast = 22;
     */
    allowBroadcast: boolean;
    /**
     * @generated from field: bool allow_voip = 31;
     */
    allowVoip: boolean;
    /**
     * @generated from field: bool allow_text = 32;
     */
    allowText: boolean;
    /**
     * @generated from field: bool allow_move_media = 33;
     */
    allowMoveMedia: boolean;
    /**
     * @generated from field: bool allow_pin_media = 34;
     */
    allowPinMedia: boolean;
    /**
     * @generated from field: bool allow_react = 35;
     */
    allowReact: boolean;
    /**
     * @generated from field: bool allow_share_media = 36;
     */
    allowShareMedia: boolean;
    /**
     * @generated from field: bool allow_share_screen = 37;
     */
    allowShareScreen: boolean;
    /**
     * @generated from field: bool allow_fly = 38;
     */
    allowFly: boolean;
    /**
     * @generated from field: bool allow_pen = 39;
     */
    allowPen: boolean;
    constructor(data?: PartialMessage<InteractionPermissions>);
    static readonly runtime: import("@bufbuild/protobuf/dist/types/private/proto-runtime").ProtoRuntime;
    static readonly typeName = "avn.connect.v1.InteractionPermissions";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InteractionPermissions;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InteractionPermissions;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InteractionPermissions;
    static equals(a: InteractionPermissions | PlainMessage<InteractionPermissions> | undefined, b: InteractionPermissions | PlainMessage<InteractionPermissions> | undefined): boolean;
}
