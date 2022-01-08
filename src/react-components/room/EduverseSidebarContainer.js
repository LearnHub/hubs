import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { EduverseSidebar } from "./EduverseSidebar";

export function EduverseSidebarContainer({ room, onClose }) {

  return (
    <EduverseSidebar room={room} onClose={onClose}>
    </EduverseSidebar>
  );
}

EduverseSidebarContainer.propTypes = {
  room: PropTypes.object.isRequired,
  onClose: PropTypes.func
};
