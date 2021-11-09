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
import { ReactComponent as HmcLogo } from "../icons/HmcLogo.svg";
import styles from "./RoomEntryModal.scss";
import styleUtils from "../styles/style-utils.scss";
import { useCssBreakpoints } from "react-use-css-breakpoints";
import { Column } from "../layout/Column";
import { FormattedMessage } from "react-intl";
import configs from "../../utils/configs";

export function RoomEntryModal({
  appName,
  logoSrc,
  className,
  roomName,
  showJoinRoom,
  onJoinRoom,
  showEnterOnDevice,
  onEnterOnDevice,
  showSpectate,
  onSpectate,
  showOptions,
  onOptions,
  headsetConnected,
  onEnterOnConnectedHeadset,
  ...rest
}) {
  const breakpoint = useCssBreakpoints();
  const isHmc = configs.feature("show_cloud");
  return (
    <Modal className={classNames(styles.roomEntryModal, className)} disableFullscreen {...rest}>
      <Column center className={styles.content}>
        {breakpoint !== "sm" &&
          breakpoint !== "md" && (
            <div className={styles.logoContainer}>
              {isHmc ? <HmcLogo className="hmc-logo" /> : <img crossOrigin="anonymous" src={logoSrc} alt={appName} />}
            </div>
          )}
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
            <Button preset="accent4" onClick={onJoinRoom}>
              <EnterIcon />
              <span>
                <FormattedMessage id="room-entry-modal.join-room-button" defaultMessage="Join Room" />
              </span>
            </Button>
          )}
          {showEnterOnDevice && (
            <Button preset="accent5" onClick={onEnterOnDevice}>
              <PhoneIcon />
              <span>
                <FormattedMessage id="room-entry-modal.enter-on-device-button" defaultMessage="Move To Another Device" />
              </span>
            </Button>
          )}

          {/* AVN: Duplicated code from EnterOnDeviceModal. Hidden for now while there are issues with Google VR */}
          {false && headsetConnected &&            
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
          {showOptions &&
            breakpoint !== "sm" && (
              <>
                <hr className={styleUtils.showLg} />
                <Button preset="transparent" className={styleUtils.showLg} onClick={onOptions}>
                  <SettingsIcon />
                  <span>
                    <FormattedMessage id="room-entry-modal.options-button" defaultMessage="Options" />
                  </span>
                </Button>
              </>
            )}
        </Column>
      </Column>
    </Modal>
  );
}

RoomEntryModal.propTypes = {
  appName: PropTypes.string,
  logoSrc: PropTypes.string,
  className: PropTypes.string,
  roomName: PropTypes.string.isRequired,
  showJoinRoom: PropTypes.bool,
  onJoinRoom: PropTypes.func,
  showEnterOnDevice: PropTypes.bool,
  onEnterOnDevice: PropTypes.func,
  showSpectate: PropTypes.bool,
  onSpectate: PropTypes.func,
  showOptions: PropTypes.bool,
  onOptions: PropTypes.func
};

RoomEntryModal.defaultProps = {
  showJoinRoom: true,
  showEnterOnDevice: true,
  showSpectate: true,
  showOptions: true
};
