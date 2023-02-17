import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { EduverseTeacherSidebar } from "./EduverseTeacherSidebar";

export function EduverseTeacherSidebarContainer({ roomInfo, onClose }) {

  return (
    <EduverseTeacherSidebar roomInfo={roomInfo} onClose={onClose}>
    </EduverseTeacherSidebar>
  );
}

EduverseTeacherSidebarContainer.propTypes = {
  roomInfo: PropTypes.object.isRequired,
  onClose: PropTypes.func
};
