import React from "react";
import PropTypes from "prop-types";
import styles from "./EduverseSidebar.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";
import markdownit from "markdown-it";
import { CopyableTextInputField } from "../input/CopyableTextInputField";
import { AVN } from "../../avn-connect";

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
          {AVN.iconUri && (<img src={AVN.iconUri} className={styles.sceneIcon}/>)}
          <span className={styles.sceneName}>{room.name}</span>
        </h1>
        {(AVN.instructions || AVN.description) && (
            <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: md.render(AVN.instructions || AVN.description) }} />
        )}
      </div>
    </Sidebar>
  );
}

EduverseStudentSidebar.propTypes = {
  room: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

EduverseStudentSidebar.defaultProps = {
};
