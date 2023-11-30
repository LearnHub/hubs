import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { EduverseStudentSidebar } from "./EduverseStudentSidebar";

export function EduverseStudentSidebarContainer({ roomActivity, roomInfo, onClose }) {

  return (
    <EduverseStudentSidebar roomActivity={roomActivity} roomInfo={roomInfo} onClose={onClose}>
    </EduverseStudentSidebar>
  );
}

EduverseStudentSidebarContainer.propTypes = {
  roomActivity: PropTypes.object,
  roomInfo: PropTypes.object.isRequired,
  onClose: PropTypes.func
};
