import React from "react";
import { FormattedMessage, defineMessages, useIntl } from "react-intl";
import PropTypes from "prop-types";
import { Modal } from "../modal/Modal";
import { CancelButton } from "../input/Button";
import { Column } from "../layout/Column";
import { Button } from "../input/Button";

export function AvnDimensionStatusModal({ onCancel, detail }) {
  const intl = useIntl();

  return (
    <Modal title="Session closed">
      <Column padding center>
      <p>
          <FormattedMessage
            id="avn-dimension-status-modal.closed-message"
            defaultMessage="This Eduverse session has stopped and this room may soon close. The session may be reopened if the session owner rejoins."
          />
        </p>
        <p>{detail}</p>
        <Button preset="accept" onClick={() => AVNGlobal.startNewSession()}>
          <FormattedMessage id="avn-dimension-status-modal.start-new-session" defaultMessage="Start a new session" />
        </Button> 
      </Column>
    </Modal>
  );
}

AvnDimensionStatusModal.propTypes = {
  detail: PropTypes.string,
};
