import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { CloseButton } from "../input/CloseButton";
import { Modal } from "../modal/Modal";
import { FormattedMessage, useIntl, defineMessages } from "react-intl";
import { Column } from "../layout/Column";
import { Button } from "../input/Button";
import { ReactComponent as EnterIcon } from "../icons/Enter.svg";

// Expects informationType of "subscribe" or "signin"

export function AvnInformationModal({ closeable, onClose, onClick, informationType, ...rest }) {
  return (
    <Modal
      title={<FormattedMessage id="avn-information-modal.title" defaultMessage="Eduverse Information" />}
      beforeTitle={closeable && <CloseButton onClick={onClose} />}
      {...rest}
    >
      {informationType === "signin" && (
        <Column center padding>
          <p>
            <FormattedMessage id="avn-information-modal.function-requires-signin" defaultMessage="Sign in to access this feature" />
          </p>
          <p>
            <FormattedMessage id="avn-information-modal.function-signin-description" defaultMessage="You can sign in using your school account or you can register an Eduverse account using your email address" />
          </p>
          <Button 
            preset="accept" 
            type="submit"
            onClick={() => {
              onClose();
              onClick();
            }}
          >
            <EnterIcon />
            <span>
              <FormattedMessage id="more-menu.sign-in" defaultMessage="Sign In" />
            </span>
          </Button>
        </Column>
      )}
      {informationType === "subscribe" && (
        <Column center padding>
          <p>
            <FormattedMessage id="avn-information-modal.function-requires-subscription" defaultMessage="A subcription is required to access teacher notes and controls" />
          </p>
          <p>
            <a href="https://eduverse.com" target="_blank" rel="noopener noreferrer">
              <FormattedMessage id="avn-information-modal.subscription-anchor-text" defaultMessage="Subscribe today" />
            </a>
          </p>

        </Column>
      )}

    </Modal>
  );
}

AvnInformationModal.propTypes = {
  closeable: PropTypes.bool,
  informationType: PropTypes.string,
  onClose: PropTypes.func,
  onClick: PropTypes.func,
};
