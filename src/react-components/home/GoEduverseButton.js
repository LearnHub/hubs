import React from "react";
import { FormattedMessage } from "react-intl";
import { createAndRedirectToNewHub } from "../../utils/phoenix-utils";
import { Button } from "../input/Button";
import { useCssBreakpoints } from "react-use-css-breakpoints";

import { avnBridge } from "../../avn-bridge"


export function GoEduverseButton() {
  const breakpoint = useCssBreakpoints();

  return (
    <Button
      thick={breakpoint === "sm" || breakpoint === "md"}
      xl={breakpoint !== "sm" && breakpoint !== "md"}
      preset="landing"
      onClick={e => {
        e.preventDefault();
        document.location.replace(avnBridge.eduverseSessionDomain)
      }}
    >
      <FormattedMessage id="go-eduverse-button" defaultMessage="Enter the Eduverse" />
    </Button>
  );
}
