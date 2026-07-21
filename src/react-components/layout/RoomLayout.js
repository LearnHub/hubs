import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./RoomLayout.scss";
import { Toolbar } from "./Toolbar";
import { ToolbarButton } from "../input/ToolbarButton";
import { FormattedMessage } from "react-intl";
import { ReactComponent as SupportIcon } from "../icons/Support.svg";
import { ReactComponent as SaveIcon } from "../icons/Save.svg";
import { SaveConsoleLog } from "../../utils/record-log.js";

export function RoomLayout({
  className,
  viewportClassName,
  sidebar,
  sidebarClassName,
  toolbarLeft,
  toolbarCenter,
  toolbarRight,
  toolbarClassName,
  modal,
  viewport,
  objectFocused,
  streaming,
  viewportRef,
  avnDimensionConnection,
  avnSessionEnded,
  ...rest
}) {
  return (
    <div className={classNames(styles.roomLayout, { [styles.objectFocused]: objectFocused }, className)} {...rest}>
      {sidebar && <div className={classNames(styles.sidebar, sidebarClassName)}>{sidebar}</div>}
      <div className={classNames(styles.modalContainer, styles.viewport)}>{modal}</div>
      {
      // Is there an AVN connection?
      avnDimensionConnection
        ? avnDimensionConnection?.features?.showNavbar && ( toolbarLeft || toolbarCenter || toolbarRight) && (
          <Toolbar
            className={classNames(styles.main, styles.toolbar, toolbarClassName)}
            left={toolbarLeft}
            center={toolbarCenter}
            right={toolbarRight}
          />)
        : 
        <Toolbar
          className={classNames(styles.main, styles.toolbar, toolbarClassName)}
          center={
            // A terminally ended session (dimension expired/closed) never comes back, so don't
            // offer a retry that would just re-hammer a dead dimension — surface it as ended.
            avnSessionEnded
            ? <ToolbarButton
                label={<FormattedMessage id="avn-room-layout.session-ended-message" defaultMessage="Session ended" />}
                iconContainerClassName={styles.avnButton}
                />
            : <ToolbarButton
                label={<FormattedMessage id="avn-room-layout.connection-message" defaultMessage="Reconnecting..." />}
                iconContainerClassName={styles.avnButton}
                onClick={() => { AVNGlobal.requestRejoin() }}
                />
          }
          right={
            <>
            <ToolbarButton
            icon={<SaveIcon/>}
            label={<FormattedMessage id="more-menu.save-console-logs" defaultMessage="Save Logs" />}
            onClick={() => { SaveConsoleLog(); }}
            />
            <ToolbarButton
            icon={<SupportIcon/>}
            label={<FormattedMessage id="more-menu.help" defaultMessage="Help" />}
            onClick={() => { window.open(global?.AVNGlobal?.supportLink); }}
            />
            </>
          }
        />
      }
      <div
        className={classNames(styles.main, styles.viewport, { [styles.streaming]: streaming }, viewportClassName)}
        ref={viewportRef}
      >
        {viewport}
      </div>
    </div>
  );
}

RoomLayout.propTypes = {
  className: PropTypes.string,
  viewportClassName: PropTypes.string,
  sidebar: PropTypes.node,
  sidebarClassName: PropTypes.string,
  toolbarLeft: PropTypes.node,
  toolbarCenter: PropTypes.node,
  toolbarRight: PropTypes.node,
  toolbarClassName: PropTypes.string,
  modal: PropTypes.node,
  viewport: PropTypes.node,
  objectFocused: PropTypes.bool,
  streaming: PropTypes.bool,
  viewportRef: PropTypes.any,
  avnDimensionConnection: PropTypes.object,
  avnSessionEnded: PropTypes.bool,
};
