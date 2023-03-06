import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./AvnHallPassPopover.scss";
import { CopyableTextInputField } from "../input/CopyableTextInputField";
import { Popover } from "../popover/Popover";
import { ToolbarButton } from "../input/ToolbarButton";
import { ReactComponent as PassIcon } from "../icons/Pass.svg";
import { Column } from "../layout/Column";
import { FormattedMessage, defineMessage, useIntl } from "react-intl";
import { AVN } from "../../avn-bridge";

function AvnHallPassPopoverContent({}) {
  const hallPassUrl = AVN.passId 
    ? AVN.assetId === "homeroom"
      ? `${AVN.shortDomain}/${AVN.passId}` 
      : `${AVN.shortDomain}/${AVN.passId}/${AVN.assetId}` 
    : "";
  return (
    <Column center padding grow gap="lg" className={styles.hallPassPopover}>
      <>
        <p>
          <FormattedMessage id="avn-hall-pass-popover.invitation-preamble" defaultMessage="Invite people to create their own session starting from" />          
          <b> {AVN.assetName}</b>
        </p>
        <CopyableTextInputField
          label={<FormattedMessage id="avn-hall-pass-popover.share-link" defaultMessage="Hall Pass" />}
          disabled={!AVN.passId}
          value={hallPassUrl}
          buttonPreset="accent3"
        />
      </>
    </Column>
  );
}

AvnHallPassPopoverContent.propTypes = {
};

const avnHallPassPopoverTitle = defineMessage({
  id: "avn-hall-pass-popover.title",
  defaultMessage: "Share Hall Pass"
});

const avnHallPassButtonLabel = defineMessage({
  id: "avn-hall-pass-popover.button-label",
  defaultMessage: "Hall Pass"
});

export function AvnHallPassPopoverButton({
  ...rest
}) {
  const intl = useIntl();
  const title = intl.formatMessage(avnHallPassPopoverTitle);
  const label = intl.formatMessage(avnHallPassButtonLabel);

  return (
    <Popover
      title={title}
      content={() => (
        <AvnHallPassPopoverContent/>
      )}
      placement="top-start"
      offsetDistance={28}
    >
      {({ togglePopover, popoverVisible, triggerRef }) => (
        <ToolbarButton
          ref={triggerRef}
          icon={<PassIcon />}
          selected={popoverVisible}
          onClick={togglePopover}
          label={label}
          {...rest}
        />
      )}
    </Popover>
  );
}

AvnHallPassPopoverButton.propTypes = {
  ...AvnHallPassPopoverContent.propTypes
};
