import React, { useCallback, useRef } from "react";
import PropTypes from "prop-types";
import { EduverseSidebar } from "./EduverseSidebar";

export function EduverseSidebarContainer({ onClose }) {

  return (
    <EduverseSidebar onClose={onClose}>
    </EduverseSidebar>
  );
}

EduverseSidebarContainer.propTypes = {
  onClose: PropTypes.func
};
