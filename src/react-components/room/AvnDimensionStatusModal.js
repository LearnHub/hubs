import React from "react";
import { FormattedMessage, defineMessages, useIntl } from "react-intl";
import PropTypes from "prop-types";
import { Modal } from "../modal/Modal";
import { CancelButton } from "../input/Button";
import { Column } from "../layout/Column";

export function AvnDimensionStatusModal({ onCancel, detail }) {
  const intl = useIntl();

  return (
    <Modal title="Session closed">
      <Column padding center>
      <p>
          <FormattedMessage
            id="avn-dimension-status-modal.closed-message"
            defaultMessage="Your Eduverse session has ended and this room will soon close."
          />
        </p>
        <p>
          <FormattedMessage
            id="avn-dimension-status-modal.rejoin-message"
            defaultMessage="Please start or join a new session to continue."
          />
        </p>
        <p>{detail}</p>
      </Column>
    </Modal>
  );
}

AvnDimensionStatusModal.propTypes = {
  detail: PropTypes.string.isRequired,
};
