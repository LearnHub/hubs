import React from "react";
import { AvnHallPassPopoverButton } from "./AvnHallPassPopover";

export function AvnHallPassPopoverContainer({ ...rest }) {
  return (
    <AvnHallPassPopoverButton
      {...rest}
    />
  );
}

AvnHallPassPopoverContainer.propTypes = {
};
