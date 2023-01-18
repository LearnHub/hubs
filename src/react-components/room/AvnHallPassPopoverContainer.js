import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import configs from "../../utils/configs";
import { hubUrl } from "../../utils/phoenix-utils";
import { AvnHallPassPopoverButton } from "./AvnHallPassPopover";
import { handleExitTo2DInterstitial } from "../../utils/vr-interstitial";
import { useInviteUrl } from "./useInviteUrl";

export function AvnHallPassPopoverContainer({ ...rest }) {
  return (
    <AvnHallPassPopoverButton
      {...rest}
    />
  );
}

AvnHallPassPopoverContainer.propTypes = {
};
