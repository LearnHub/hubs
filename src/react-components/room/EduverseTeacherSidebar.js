import React from "react";
import PropTypes from "prop-types";
import styles from "./EduverseSidebar.scss";
import markdownStyles from "./AvnMarkdown.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";

export function EduverseTeacherSidebar({ roomInfo, onClose }) {
  return (
    <Sidebar
      title={
        <FormattedMessage
          id="eduverse-teacher-sidebar.title"
          defaultMessage="Teach"
        />
      }
      beforeTitle={<CloseButton onClick={onClose} />}
      disableOverflowScroll
      className="eduverse-sidebar"
    >
      <div className={styles.informationContainer}>
        <h1>
          {roomInfo.iconUrl && (<img src={roomInfo.iconUrl} className={styles.sceneIcon}/>)}
          <span className={styles.sceneName}>{roomInfo.name}</span>
        </h1>
        {roomInfo.description && (
            <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: AVNGlobal.MD.render(roomInfo.description) }} />
        )}
      </div>
    </Sidebar>
  );
}

EduverseTeacherSidebar.propTypes = {
  roomInfo: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

EduverseTeacherSidebar.defaultProps = {
};
