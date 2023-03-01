import React from "react";
import PropTypes from "prop-types";
import styles from "./EduverseSidebar.scss";
import markdownStyles from "./AvnMarkdown.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";

export function EduverseStudentSidebar({ roomInfo, onClose }) {
  return (
    <Sidebar
      title={
        <FormattedMessage
          id="eduverse-student-sidebar.title"
          defaultMessage="Learn"
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
        {(roomInfo.instructions || roomInfo.description) && (
            <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: AVNGlobal.MD.render(roomInfo.instructions || roomInfo.description) }} />
        )}
      </div>
    </Sidebar>
  );
}

EduverseStudentSidebar.propTypes = {
  roomInfo: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

EduverseStudentSidebar.defaultProps = {
};
