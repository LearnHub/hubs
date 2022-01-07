import React from "react";
import PropTypes from "prop-types";
import styles from "./InvitePopover.scss";
import { CopyableTextInputField } from "../input/CopyableTextInputField";
import { Popover } from "../popover/Popover";
import { ToolbarButton } from "../input/ToolbarButton";
import { ReactComponent as InviteIcon } from "../icons/Invite.svg";
import { Column } from "../layout/Column";
import { FormattedMessage, defineMessage, useIntl } from "react-intl";
const QRCode = require('qrcode.react');

function InviteAvnPopoverContent({ url }) {
  return (
    <Column center padding grow gap="lg" className={styles.inviteAvnPopover}>
      <>
        <QRCode 
          value={url} 
          renderAs="svg"
          size="256"
        />
        <CopyableTextInputField
          value={url}
          buttonPreset="accent3"
          className={styles.inputFieldWide}
        />
      </>
    </Column>
  );
}

InviteAvnPopoverContent.propTypes = {
  url: PropTypes.string.isRequired,
};

const invitePopoverTitle = defineMessage({
  id: "invite-popover.title",
  defaultMessage: "Invite"
});

export function InviteAvnPopoverButton({
  url,
  code,
  embed,
  initiallyVisible,
  popoverApiRef,
  ...rest
}) {
  const intl = useIntl();
  const title = intl.formatMessage(invitePopoverTitle);

  return (
    <Popover
      title={title}
      content={() => (
        <InviteAvnPopoverContent
          url={url}
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

InviteAvnPopoverButton.propTypes = {
  initiallyVisible: PropTypes.bool,
  popoverApiRef: PropTypes.object,
  ...InviteAvnPopoverContent.propTypes
};
