import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { CloseButton } from "../input/CloseButton";
import { Modal } from "../modal/Modal";
import { FormattedMessage, useIntl, defineMessages } from "react-intl";
import { Column } from "../layout/Column";

export function AvnSubscriptionModal({ closeable, onClose, ...rest }) {
  return (
    <Modal
      title={<FormattedMessage id="avn-subscription-modal.title" defaultMessage="Eduverse Subscription" />}
      beforeTitle={closeable && <CloseButton onClick={onClose} />}
      {...rest}
    >
    <Column center padding>
        <p>
          <FormattedMessage id="avn-subscription-modal.function-requires-subscription" defaultMessage="A subcription is required to access teacher notes and controls."/>
        </p>
        <p>
          <a href="https://eduverse.com" target="_blank" rel="noopener noreferrer">
            <FormattedMessage id="avn-subscription-modal.subscription-anchor-text" defaultMessage="Subscribe today" />
          </a>
        </p>
    </Column>

    </Modal>
  );
}

AvnSubscriptionModal.propTypes = {
  closeable: PropTypes.bool,
  onClose: PropTypes.func,
};
