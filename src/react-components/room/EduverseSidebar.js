import React from "react";
import PropTypes from "prop-types";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";

export function EduverseSidebar({ onClose }) {
  return (
    <Sidebar
      title={
        <FormattedMessage
          id="eduverse-sidebar.title"
          defaultMessage="Eduverse"
        />
      }
      beforeTitle={<CloseButton onClick={onClose} />}
    >
      <p></p>
    </Sidebar>
  );
}

EduverseSidebar.propTypes = {
  onClose: PropTypes.func
};

EduverseSidebar.defaultProps = {
};
