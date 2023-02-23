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
            defaultMessage="This Eduverse session has been closed and so this room will also soon close."
          />
        </p>
        <p>
          <FormattedMessage
            id="avn-dimension-status-modal.reopen-message"
            defaultMessage="This session may be reopened if the session owner rejoins."
          />
        </p>
        <p>{detail}</p>
      </Column>
    </Modal>
  );
}

AvnDimensionStatusModal.propTypes = {
  detail: PropTypes.string,
};
