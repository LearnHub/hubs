import React from "react";
import PropTypes from "prop-types";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { InputField } from "../input/InputField";
import { Column } from "../layout/Column";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";

export function EduverseSidebar({ room, onClose }) {
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
      <Column padding>
        <InputField label={<FormattedMessage id="room-sidebar.avn-scene-name" defaultMessage="Scene Name" />} fullWidth>
          {room.name}
        </InputField>
        {room.description && (
          <InputField label={<FormattedMessage id="room-sidebar.room-description" defaultMessage="Description" />} fullWidth>
            {room.description}
          </InputField>
        )}
      </Column>
    </Sidebar>
  );
}

EduverseSidebar.propTypes = {
  room: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

EduverseSidebar.defaultProps = {
};
