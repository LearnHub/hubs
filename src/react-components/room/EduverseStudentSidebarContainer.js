import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { EduverseStudentSidebar } from "./EduverseStudentSidebar";

export function EduverseStudentSidebarContainer({ room, onClose }) {

  return (
    <EduverseStudentSidebar room={room} onClose={onClose}>
    </EduverseStudentSidebar>
  );
}

EduverseStudentSidebarContainer.propTypes = {
  room: PropTypes.object.isRequired,
  onClose: PropTypes.func
};
