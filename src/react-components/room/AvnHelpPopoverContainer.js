import React, { useEffect, useRef } from "react";
import { AvnHelpPopoverButton } from "./AvnHelpPopover";

export function AvnHelpPopoverContainer({...rest}) {
  return (
    <AvnHelpPopoverButton {...rest}/>
  );
}

AvnHelpPopoverContainer.propTypes = {
};
