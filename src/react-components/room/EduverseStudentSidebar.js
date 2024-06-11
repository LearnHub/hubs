import React from "react";
import PropTypes from "prop-types";
import styles from "./EduverseSidebar.scss";
import markdownStyles from "./AvnMarkdown.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";

export function EduverseStudentSidebar({ roomActivity, roomInfo, onClose }) {
console.log("!!!", roomActivity)
  const name = roomActivity?.name?.translation
  const text = roomActivity?.instructions?.translation || roomActivity?.description?.translation
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
          <span className={styles.sceneName}>{name}</span>
        </h1>
        {text && (
            <div className={markdownStyles.markdown} dangerouslySetInnerHTML={{ __html: AVNGlobal.MD.render(text) }} />
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
