import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./InvitePopover.scss";
import { Popover } from "../popover/Popover";
import { ToolbarButton } from "../input/ToolbarButton";
import { ReactComponent as SupportIcon } from "../icons/Support.svg";
import { ReactComponent as SaveIcon } from "../icons/Save.svg";
import { Column } from "../layout/Column";
import { FormattedMessage, defineMessage, useIntl } from "react-intl";
import SaveConsoleLog from "../../utils/record-log.js";

function AvnHelpPopoverContent({ scene }) {
  const [lastBlobUrl, setLastBlobUrl] = useState();
  const [dropping, setDropping] = useState(false);

  const handleDragEnter = e => {
    e.preventDefault();
    setDropping(true);
  };
  const handleDragLeave = e => {
    e.preventDefault();
    setDropping(false);
  };

  const handleDragOver = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  };

  // This scene replacement logic is cribbed from the RoomSidebar version
  // but hacked to skip the call to update_scene, which AVN doesn't currently support
  const handleDrop = e => {
    e.preventDefault();
    URL.revokeObjectURL(lastBlobUrl);
    // Replacement scene URL as a blob
    const sceneUrl = URL.createObjectURL(e.dataTransfer.files[0]);
    scene.emit("reset_scene");
    THREE.Cache.clear();
    const sceneEl = document.querySelector("a-scene");
    const waypointSystem = sceneEl.systems["hubs-systems"].waypointSystem;
    waypointSystem.releaseAnyOccupiedWaypoints();
    const envSystem = sceneEl.systems["hubs-systems"].environmentSystem;
    const environmentEl = document.querySelector("#environment-scene").childNodes[0];
    environmentEl.addEventListener(
      "model-loaded",
      () => {
        envSystem.updateEnvironment(environmentEl);
        if (sceneEl.is("entered")) {
          waypointSystem.moveToSpawnPoint();
        }
      },
      { once: true }
    );
    environmentEl.setAttribute("gltf-model-plus", { src: sceneUrl });
    setLastBlobUrl(sceneUrl);
    setDropping(false);
  };
  
  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
    <Column center padding grow gap="lg" className={styles.invitePopover}>
        <>
        {
          <p>
            <FormattedMessage id="avn-help-popover.help-is-available" defaultMessage="Help is available on our support page " />
            <a target="_blank" rel="noopener noreferrer" href="https://support.avantiseducation.com">support.avantiseducation.com</a>
          </p>
        }
        {
          <p>
            <FormattedMessage id="avn-help-popover.technical-support" defaultMessage="For technical support you may be asked to save a copy of the application log files by clicking the button below" />            
          </p>
        }
        {
        // Permanent Save Logs button on the toolbar
        <ToolbarButton
          icon={<SaveIcon />}
          preset="basic"
          onClick={() => { 
            scene.writeStatisticsToConsole(); 
            const stats = document.getElementById("stats");
            if(stats) {
              stats.components["stats-plus"].writeStatisticsToConsole();
            }
            SaveConsoleLog();
          }}                      
        />
        }
        </>
    </Column>
    </div>
  );
}

AvnHelpPopoverContent.propTypes = {
  scene: PropTypes.object.isRequired,
};

const invitePopoverTitle = defineMessage({
  id: "avn-help-popover.title",
  defaultMessage: "Help"
});

export function AvnHelpPopoverButton({scene, ...rest}) {
  const intl = useIntl();
  const title = intl.formatMessage(invitePopoverTitle);

  return (
    <Popover
      title={title}
      content={() => (<AvnHelpPopoverContent scene={scene}/>)}
      placement="top-start"
      offsetDistance={28}
    >
      {({ togglePopover, popoverVisible, triggerRef }) => (
        <ToolbarButton
          ref={triggerRef}
          icon={<SupportIcon />}
          selected={popoverVisible}
          onClick={togglePopover}
          label={title}
          {...rest}
        />
      )}
    </Popover>
  );
}

AvnHelpPopoverButton.propTypes = {
  scene: PropTypes.object.isRequired,
  ...AvnHelpPopoverContent.propTypes
};
