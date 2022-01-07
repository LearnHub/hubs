import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import configs from "../../utils/configs";
import { hubUrl } from "../../utils/phoenix-utils";
import { InviteAvnPopoverButton } from "./InviteAvnPopover";
import { handleExitTo2DInterstitial } from "../../utils/vr-interstitial";
import { useInviteUrl } from "./useInviteUrl";
import { avnBridge } from "../../avn-bridge"

export function InviteAvnPopoverContainer({ hub, hubChannel, scene, ...rest }) {
  const url = avnBridge.invitationUrl;
  const popoverApiRef = useRef();

  // Handle clicking on the invite button while in VR.
  useEffect(
    () => {
      function onInviteButtonClicked() {
        handleExitTo2DInterstitial(true, () => {}).then(() => {
          popoverApiRef.current.openPopover();
        });
      }

      scene.addEventListener("action_invite", onInviteButtonClicked);

      return () => {
        scene.removeEventListener("action_invite", onInviteButtonClicked);
      };
    },
    [scene, popoverApiRef]
  );

  return (
    <InviteAvnPopoverButton
      url={url}
      popoverApiRef={popoverApiRef}
      {...rest}
    />
  );
}

InviteAvnPopoverContainer.propTypes = {
  hub: PropTypes.object.isRequired,
  scene: PropTypes.object.isRequired,
  hubChannel: PropTypes.object.isRequired
};
