import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Modal } from "../modal/Modal";
import { Button } from "../input/Button";
import { ReactComponent as EnterIcon } from "../icons/Enter.svg";
import { ReactComponent as VRIcon } from "../icons/VR.svg";
import { ReactComponent as PhoneIcon } from "../icons/Phone.svg";
import { ReactComponent as ShowIcon } from "../icons/Show.svg";
import { ReactComponent as SettingsIcon } from "../icons/Settings.svg";
import styles from "./RoomEntryModal.scss";
import styleUtils from "../styles/style-utils.scss";
import markdownStyles from "./AvnMarkdown.scss";
import { useCssBreakpoints } from "react-use-css-breakpoints";
import { Column } from "../layout/Column";
import { AppLogo } from "../misc/AppLogo";
import { FormattedMessage } from "react-intl";

import qsTruthy from "../../utils/qs_truthy";
const showHiddenFeatures = qsTruthy("showHiddenFeatures");

export function RoomEntryModal({
  className,
  roomName,
  showRoomFull,
  showJoinRoom,
  onJoinRoom,
  showEnterOnDevice,
  onEnterOnDevice,
  showSpectate,
  onSpectate,
  showRoomSettings,
  onRoomSettings,
  showOptions,
  onOptions,
  headsetConnected,
  onEnterOnConnectedHeadset,
  avnEntryMessage,
  ...rest
}) {
  const breakpoint = useCssBreakpoints();
  return (
    <Modal className={classNames(styles.roomEntryModal, className)} disableFullscreen {...rest}>
      <Column center className={styles.content}>
        {breakpoint !== "sm" && breakpoint !== "md" && <AppLogo className={styles.logo} />}
        <div className={styles.roomName}>
          {
          // AVN: Title is just cruft
          // <h5>
          //   <FormattedMessage id="room-entry-modal.room-name-label" defaultMessage="Room Name" />
          // </h5>
          } 
          <p>{roomName}</p>
        </div>
        <Column center className={styles.buttons}>
        {showJoinRoom && (
            <Button preset="accept" onClick={() => {
              onJoinRoom();
              AVNGlobal.recordAction("join_room", "dialog_button");
            }}>
              <EnterIcon />
              <span>
                <FormattedMessage id="room-entry-modal.join-room-button" defaultMessage="Join Room" />
              </span>
            </Button>
          )}
          { /* AVN: Clear message when room is full */}
          {showRoomFull && (
            <span><FormattedMessage id="room-entry-modal.avn-room-is-full" defaultMessage="This room is currently full" /></span>
          )}
          {showEnterOnDevice && (
            <Button preset="accent5" onClick={() => {
              onEnterOnDevice();
              AVNGlobal.recordAction("open_enter_on_device", "dialog_button");
            }}>
              <PhoneIcon />
              <span>
                <FormattedMessage id="room-entry-modal.enter-on-device-button" defaultMessage="Move To Another Device" />
              </span>
            </Button>
          )}

          {/* AVN: Duplicated code from EnterOnDeviceModal. Hidden for now while there are issues with Google VR */}
          {showHiddenFeatures && headsetConnected &&            
            <>
              <small>
                <FormattedMessage
                  id="enter-on-device-modal.headset-connected-message"
                  defaultMessage="You have a VR headset connected to this device."
                />
              </small>
              <Button preset="accent2" onClick={onEnterOnConnectedHeadset}>
                <VRIcon />
                <span>
                  <FormattedMessage id="enter-on-device-modal.enter-in-vr-button" defaultMessage="Enter in VR" />
                </span>
              </Button>
            </>
          }

          {/* AVN: Hide the spectate button for now */false && showSpectate && (
            <Button preset="accent2" onClick={onSpectate}>
              <ShowIcon />
              <span>
                <FormattedMessage id="room-entry-modal.spectate-button" defaultMessage="Spectate" />
              </span>
            </Button>
          )}
          {showRoomSettings && breakpoint !== "sm" && (
            <>
              <hr className={styleUtils.showLg} />
              <Button preset="transparent" className={styleUtils.showLg} onClick={onRoomSettings}>
                <SettingsIcon />
                <span>
                  <FormattedMessage id="room-entry-modal.room-settings-button" defaultMessage="Room Settings" />
                </span>
              </Button>
            </>
          )}
          {avnEntryMessage && (
            <div className={classNames(styles.avnEntryMessage, markdownStyles.markdown)} dangerouslySetInnerHTML={{ __html: AVNGlobal.MD.render(avnEntryMessage) }} />
          )}
        </Column>
      </Column>
    </Modal>
  );
}

RoomEntryModal.propTypes = {
  className: PropTypes.string,
  roomName: PropTypes.string.isRequired,
  showRoomFull: PropTypes.bool,
  showJoinRoom: PropTypes.bool,
  onJoinRoom: PropTypes.func,
  showEnterOnDevice: PropTypes.bool,
  onEnterOnDevice: PropTypes.func,
  showSpectate: PropTypes.bool,
  onSpectate: PropTypes.func,
  showRoomSettings: PropTypes.bool,
  onRoomSettings: PropTypes.func,
  showOptions: PropTypes.bool,
  onOptions: PropTypes.func,
  avnEntryMessage: PropTypes.string,
};

RoomEntryModal.defaultProps = {
  showJoinRoom: true,
  showEnterOnDevice: true,
  showSpectate: true,
  showRoomSettings: true
};
