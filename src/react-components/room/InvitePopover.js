import React from "react";
import PropTypes from "prop-types";
import styles from "./InvitePopover.scss";
import { CopyableTextInputField } from "../input/CopyableTextInputField";
import { Popover } from "../popover/Popover";
import { ToolbarButton } from "../input/ToolbarButton";
import { ReactComponent as InviteIcon } from "../icons/Invite.svg";
import { Column } from "../layout/Column";
import { InviteLinkInputField } from "./InviteLinkInputField";
import { FormattedMessage, defineMessage, useIntl } from "react-intl";

import { avnBridge } from "../../avn-bridge"
const QRCode = require('qrcode.react');

function InvitePopoverContent({ url, shortUrl, code, embed, inviteRequired, fetchingInvite, inviteUrl, revokeInvite, roomSize }) {
  const loginDomain = `https://${avnBridge.sessionDomain}/eduverse/login`;
  return (
    <Column center padding grow gap="lg" className={styles.invitePopover}>
      {inviteRequired ? (
        <>
          <InviteLinkInputField fetchingInvite={fetchingInvite} inviteUrl={inviteUrl} onRevokeInvite={revokeInvite} />
        </>
      ) : (
        avnBridge.dimensionOwnerIsAuthenticated ? (
          <>
            <QRCode 
              value={url} 
              renderAs="svg"
              size={256}
            />
            <CopyableTextInputField
              label={<FormattedMessage id="invite-popover.room-link" defaultMessage="Room Link" />}
              value={url}
              buttonPreset="accent3"
            />
            {/* <CopyableTextInputField
              label={<FormattedMessage id="invite-popover.embed-code" defaultMessage="Embed Code" />}
              value={embed}
              buttonPreset="accent5"
            /> */}
            {
              <p>This session can host up to {roomSize} people</p>
            }
            { !avnBridge.dimensionOwnerIsSubscriber && (<p><a href="https://www.avantisworld.com/pricing" target="_blank">Subscribe</a> to host more</p>) }
          </>
        ) : (
          <>
            <p>This session was created by an anonymous user and cannot be shared.</p>
            <p><a href={loginDomain}>Sign in</a> to start a new session and invite people to join you.</p>
          </>
        )
      )}
    </Column>
  );
}

InvitePopoverContent.propTypes = {
  url: PropTypes.string.isRequired,
  embed: PropTypes.string.isRequired,
  inviteRequired: PropTypes.bool,
  fetchingInvite: PropTypes.bool,
  inviteUrl: PropTypes.string,
  revokeInvite: PropTypes.func,
  roomSize: PropTypes.number.isRequired,
};

const invitePopoverTitle = defineMessage({
  id: "invite-popover.title",
  defaultMessage: "Invite"
});

export function InvitePopoverButton({
  url,
  embed,
  initiallyVisible,
  popoverApiRef,
  inviteRequired,
  fetchingInvite,
  inviteUrl,
  revokeInvite,
  roomSize,
  ...rest
}) {
  const intl = useIntl();
  const title = intl.formatMessage(invitePopoverTitle);

  return (
    <Popover
      title={title}
      content={() => (
        <InvitePopoverContent
          url={url}
          embed={embed}
          inviteRequired={inviteRequired}
          fetchingInvite={fetchingInvite}
          inviteUrl={inviteUrl}
          revokeInvite={revokeInvite}
          roomSize={roomSize}
        />
      )}
      placement="top-start"
      offsetDistance={28}
      initiallyVisible={initiallyVisible}
      popoverApiRef={popoverApiRef}
    >
      {({ togglePopover, popoverVisible, triggerRef }) => (
        <ToolbarButton
          ref={triggerRef}
          icon={<InviteIcon />}
          selected={popoverVisible}
          onClick={togglePopover}
          label={title}
          {...rest}
        />
      )}
    </Popover>
  );
}

InvitePopoverButton.propTypes = {
  initiallyVisible: PropTypes.bool,
  popoverApiRef: PropTypes.object,
  ...InvitePopoverContent.propTypes
};
