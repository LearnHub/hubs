import React from "react";
import PropTypes from "prop-types";
import styles from "./EduverseSidebar.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { InputField } from "../input/InputField";
import { Column } from "../layout/Column";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";
import markdownit from "markdown-it";

const md = markdownit();

// Opens links with target="_blank" (https://github.com/markdown-it/markdown-it/blob/master/docs/architecture.md#renderer)
const defaultRender = md.renderer.rules.link_open || function(tokens, idx, options, env, self) {
  return self.renderToken(tokens, idx, options);
};
md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  let aIndex = tokens[idx].attrIndex('target');
  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank']);
  } else {
    tokens[idx].attrs[aIndex][1] = '_blank';
  }
  // Links are a premium feature
  let hIndex = tokens[idx].attrIndex('href');
  if (hIndex >= 0) {
    tokens[idx].attrs[hIndex][1] = 'https://eduverse.com';
    tokens[idx].attrPush(['title', 'This is a premium feature']);
  }
  return defaultRender(tokens, idx, options, env, self);
};

export function EduverseSidebar({ room, onClose }) {
  return (
    <Sidebar
      title={
        <FormattedMessage
          id="eduverse-sidebar.title"
          defaultMessage="Eduverse"
        />
      }
      beforeTitle={<CloseButton onClick={onClose} />}
    >
      <Column padding>
        <h1>{room.name}</h1>
        {room.description && (
            <p className={styles.markdown} dangerouslySetInnerHTML={{ __html: md.render(room.description) }} />
        )}
      </Column>
    </Sidebar>
  );
}

EduverseSidebar.propTypes = {
  room: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

EduverseSidebar.defaultProps = {
};
