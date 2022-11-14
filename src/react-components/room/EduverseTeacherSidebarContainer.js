import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { EduverseTeacherSidebar } from "./EduverseTeacherSidebar";

export function EduverseTeacherSidebarContainer({ room, onClose }) {

  return (
    <EduverseTeacherSidebar room={room} onClose={onClose}>
    </EduverseTeacherSidebar>
  );
}

EduverseTeacherSidebarContainer.propTypes = {
  room: PropTypes.object.isRequired,
  onClose: PropTypes.func
};
