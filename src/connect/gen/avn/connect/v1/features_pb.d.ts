import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message avn.connect.v1.UserInterfaceFeatures
 */
export declare class UserInterfaceFeatures extends Message<UserInterfaceFeatures> {
    /**
     * @generated from field: bool show_navbar = 1;
     */
    showNavbar: boolean;
    /**
     * @generated from field: bool show_sidebar = 2;
     */
    showSidebar: boolean;
    /**
     * @generated from field: bool show_room_entry_flow = 3;
     */
    showRoomEntryFlow: boolean;
    /**
     * @generated from field: bool show_teacher_notes = 10;
     */
    showTeacherNotes: boolean;
    /**
     * @generated from field: bool show_student_notes = 11;
     */
    showStudentNotes: boolean;
    /**
     * @generated from field: bool show_sign_in = 12;
     */
    showSignIn: boolean;
    /**
     * @generated from field: bool show_change_avatar = 13;
     */
    showChangeAvatar: boolean;
    /**
     * @generated from field: bool show_invite = 14;
     */
    showInvite: boolean;
    /**
     * @generated from field: bool show_pass = 15;
     */
    showPass: boolean;
    /**
     * @generated from field: bool show_object_list = 16;
     */
    showObjectList: boolean;
    /**
     * @generated from field: bool show_camera = 17;
     */
    showCamera: boolean;
    /**
     * @generated from field: bool show_photo = 18;
     */
    showPhoto: boolean;
    /**
     * @generated from field: bool show_voip = 19;
     */
    showVoip: boolean;
    /**
     * @generated from field: bool show_text = 20;
     */
    showText: boolean;
    /**
     * @generated from field: bool show_people_menu = 21;
     */
    showPeopleMenu: boolean;
    /**
     * @generated from field: bool show_account_info = 22;
     */
    showAccountInfo: boolean;
    /**
     * @generated from field: bool show_dimension_info = 23;
     */
    showDimensionInfo: boolean;
    /**
     * @generated from field: bool show_device_qr_invite = 24;
     */
    showDeviceQrInvite: boolean;
    /**
     * @generated from field: bool show_focus = 30;
     */
    showFocus: boolean;
    /**
     * @generated from field: bool show_mute = 31;
     */
    showMute: boolean;
    /**
     * @generated from field: bool show_analytics = 32;
     */
    showAnalytics: boolean;
    /**
     * @generated from field: bool show_start_tour = 33;
     */
    showStartTour: boolean;
    constructor(data?: PartialMessage<UserInterfaceFeatures>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "avn.connect.v1.UserInterfaceFeatures";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UserInterfaceFeatures;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UserInterfaceFeatures;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UserInterfaceFeatures;
    static equals(a: UserInterfaceFeatures | PlainMessage<UserInterfaceFeatures> | undefined, b: UserInterfaceFeatures | PlainMessage<UserInterfaceFeatures> | undefined): boolean;
}
