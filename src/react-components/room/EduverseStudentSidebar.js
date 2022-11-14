import React from "react";
import PropTypes from "prop-types";
import styles from "./EduverseSidebar.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";
import markdownit from "markdown-it";
import { avnBridge } from "../../avn-bridge"
import { CopyableTextInputField } from "../input/CopyableTextInputField";

const md = markdownit();

// Opens links with target="_blank" (https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer)
const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options);
};
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  const aIndex = tokens[idx].attrIndex('target');
  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank']);
  } else {
    tokens[idx].attrs[aIndex][1] = '_blank';
  }
  return defaultRender(tokens, idx, options, env, self);
};

export function EduverseStudentSidebar({ room, onClose }) {
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
          {avnBridge.iconUri && (<img src={avnBridge.iconUri} className={styles.sceneIcon}/>)}
          <span className={styles.sceneName}>{room.name}</span>
        </h1>
        {(avnBridge.instructions || avnBridge.description) && (
            <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: md.render(avnBridge.instructions || avnBridge.description) }} />
        )}
      </div>
      {false && avnBridge.assetId && (
        // Hidden for now until use case is resolved
        <CopyableTextInputField
          className={styles.shareLinkContainer}
          label={<FormattedMessage id="eduverse-sidebar.share-link" defaultMessage="Share this scene" />}
          value={`https://${avnBridge.sessionDomain}/${avnBridge.assetId}`}
          buttonPreset="accent2"
        />
      )}
    </Sidebar>
  );
}

EduverseStudentSidebar.propTypes = {
  room: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

EduverseStudentSidebar.defaultProps = {
};
