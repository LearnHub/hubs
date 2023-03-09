import React from "react";
import PropTypes from "prop-types";
import { Sidebar } from "../sidebar/Sidebar";
import { CloseButton } from "../input/CloseButton";
import { BackButton } from "../input/BackButton";
import { AvnAccountContent } from "./AvnAccountContent";
import { FormattedMessage } from "react-intl";

export function AvnAccountSidebar({ className, showBackButton, onBack, onClose, avnDimensionConnection, ...rest }) {
  return (
    <Sidebar
      title={<FormattedMessage id="avn-account-sidebar.title" defaultMessage="Account" />}
      beforeTitle={showBackButton ? <BackButton onClick={onBack} /> : <CloseButton onClick={onClose} />}
      className={className}
    >
      <AvnAccountContent avnDimensionConnection={avnDimensionConnection} {...rest} />
    </Sidebar>
  );
}

AvnAccountSidebar.propTypes = {
  showBackButton: PropTypes.bool,
  className: PropTypes.string,
  onBack: PropTypes.func,
  onClose: PropTypes.func,
  avnDimensionConnection: PropTypes.object,  
};
