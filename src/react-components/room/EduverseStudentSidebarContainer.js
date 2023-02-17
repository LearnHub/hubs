import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { EduverseStudentSidebar } from "./EduverseStudentSidebar";

export function EduverseStudentSidebarContainer({ roomInfo, onClose }) {

  return (
    <EduverseStudentSidebar roomInfo={roomInfo} onClose={onClose}>
    </EduverseStudentSidebar>
  );
}

EduverseStudentSidebarContainer.propTypes = {
  roomInfo: PropTypes.object.isRequired,
  onClose: PropTypes.func
};
