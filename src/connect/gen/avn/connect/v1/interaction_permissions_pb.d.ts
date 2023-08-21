import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.InteractionPermissions
 */
export declare class InteractionPermissions extends Message<InteractionPermissions> {
    /**
     * Should the BACK button be enabled?
     *
     * @generated from field: bool allow_back = 1;
     */
    allowBack: boolean;
    /**
     * Can the user select a new scene?
     *
     * @generated from field: bool allow_explore = 2;
     */
    allowExplore: boolean;
    /**
     * Can the user follow links between rooms?
     *
     * @generated from field: bool allow_navigation = 3;
     */
    allowNavigation: boolean;
    /**
     * Can the user invite others?
     *
     * @generated from field: bool allow_invite = 10;
     */
    allowInvite: boolean;
    /**
     * Can the user issue hall passes?
     *
     * @generated from field: bool allow_pass = 11;
     */
    allowPass: boolean;
    /**
     * Can the user change their avatar?
     *
     * @generated from field: bool allow_change_avatar = 12;
     */
    allowChangeAvatar: boolean;
    /**
     * Should the teacher notes be shown?
     *
     * @generated from field: bool allow_teacher_notes = 13;
     */
    allowTeacherNotes: boolean;
    /**
     * Should the student notes be shown?
     *
     * @generated from field: bool allow_student_notes = 14;
     */
    allowStudentNotes: boolean;
    /**
     * Should the list of people in the room be visible?
     *
     * @generated from field: bool allow_people_menu = 15;
     */
    allowPeopleMenu: boolean;
    /**
     * Can the user change lesson focus?
     *
     * @generated from field: bool allow_focus = 20;
     */
    allowFocus: boolean;
    /**
     * Can the user mute everyone?
     *
     * @generated from field: bool allow_mute = 21;
     */
    allowMute: boolean;
    /**
     * Can the user send messages to every room in the dimension?
     *
     * @generated from field: bool allow_broadcast = 22;
     */
    allowBroadcast: boolean;
    /**
     * Is VoIP enabled?
     *
     * @generated from field: bool allow_voip = 31;
     */
    allowVoip: boolean;
    /**
     * Is text chat enabled?
     *
     * @generated from field: bool allow_text = 32;
     */
    allowText: boolean;
    /**
     * Can user move media?
     *
     * @generated from field: bool allow_move_media = 33;
     */
    allowMoveMedia: boolean;
    /**
     * Can user pin media?
     *
     * @generated from field: bool allow_pin_media = 34;
     */
    allowPinMedia: boolean;
    /**
     * Can user show reactions?
     *
     * @generated from field: bool allow_react = 35;
     */
    allowReact: boolean;
    /**
     * Can user share upload media to a room?
     *
     * @generated from field: bool allow_share_media = 36;
     */
    allowShareMedia: boolean;
    /**
     * Can user share their screen?
     *
     * @generated from field: bool allow_share_screen = 37;
     */
    allowShareScreen: boolean;
    /**
     * Can user fly?
     *
     * @generated from field: bool allow_fly = 38;
     */
    allowFly: boolean;
    /**
     * Can user write with the pen tool?
     *
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
