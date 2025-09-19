import React from "react";
import PropTypes from "prop-types";
import styles from "./EduverseSidebar.scss";
import markdownStyles from "./AvnMarkdown.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";

export function EduverseStudentSidebar({ roomActivity, roomInfo, onClose }) {
  const name = roomActivity?.name
  const text = roomActivity?.instructions || roomActivity?.summary || roomActivity?.description
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
          <span className={styles.sceneName} dangerouslySetInnerHTML={{ __html: name }}/>
        </h1>
        {text && (
            <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: text }} />
        )}
      </div>
    </Sidebar>
  );
}

EduverseStudentSidebar.propTypes = {
  roomActivity: PropTypes.object,
  roomInfo: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

EduverseStudentSidebar.defaultProps = {
};
