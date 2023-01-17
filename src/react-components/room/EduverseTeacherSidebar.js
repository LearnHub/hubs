import React from "react";
import { Toolbar } from "../layout/Toolbar";
import PropTypes from "prop-types";
import styles from "./EduverseSidebar.scss";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";
import markdownit from "markdown-it";
import markdownitattrs from "markdown-it-attrs";
import markdownitbracketedspans from "markdown-it-bracketed-spans";
import { CopyableTextInputField } from "../input/CopyableTextInputField";
import { ReactComponent as GatherIcon } from "../icons/People.svg";
import { ReactComponent as HushIcon } from "../icons/Hush.svg";
import { ReactComponent as LookIcon } from "../icons/Show.svg";
import { ToolbarButton } from "../input/ToolbarButton";
import { AVN } from "../../avn-bridge";

const md = markdownit()
  .use(markdownitattrs, { allowedAttributes: ['id', 'class' ] })
  .use(markdownitbracketedspans);

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

export function EduverseTeacherSidebar({ room, onClose }) {
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
          {AVN.iconUri && (<img src={AVN.iconUri} className={styles.sceneIcon}/>)}
          <span className={styles.sceneName}>{room.name}</span>
        </h1>
        {AVN.description && (
            <div className={styles.markdown} dangerouslySetInnerHTML={{ __html: md.render(AVN.description) }} />
        )}
      </div>
      {/* <Toolbar right={
        <>
          <ToolbarButton
            icon={<GatherIcon />}
            label={<FormattedMessage id="toolbar.gather-button" defaultMessage="Gather" />}
            preset="basic"
            onClick={() => alert("NOT IMPLEMENTED")}
            />
          <ToolbarButton
            icon={<HushIcon />}
            label={<FormattedMessage id="toolbar.hush-button" defaultMessage="Hush" />}
            preset="basic"
            onClick={() => alert("NOT IMPLEMENTED")}
          />
          <ToolbarButton
            icon={<LookIcon />}
            label={<FormattedMessage id="toolbar.look-button" defaultMessage="Look" />}
            preset="basic"
            onClick={() => alert("NOT IMPLEMENTED")}
          />
        </>
      }/> */}
    </Sidebar>
  );
}

EduverseTeacherSidebar.propTypes = {
  room: PropTypes.object.isRequired,
  onClose: PropTypes.func
};

EduverseTeacherSidebar.defaultProps = {
};
