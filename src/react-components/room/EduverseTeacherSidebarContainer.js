import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { EduverseTeacherSidebar } from "./EduverseTeacherSidebar";

export function EduverseTeacherSidebarContainer({ roomActivity, roomInfo, onClose }) {

  return (
    <EduverseTeacherSidebar roomActivity={roomActivity} roomInfo={roomInfo} onClose={onClose}>
    </EduverseTeacherSidebar>
  );
}

EduverseTeacherSidebarContainer.propTypes = {
  roomActivity: PropTypes.object,
  roomInfo: PropTypes.object.isRequired,
  onClose: PropTypes.func
};
