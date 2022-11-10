import React from "react";
import PropTypes from "prop-types";
import { LoadingScreenLayout } from "../layout/LoadingScreenLayout";
import { Spinner } from "../misc/Spinner";
import { useRandomMessageTransition } from "./useRandomMessageTransition";
import SaveConsoleLog from "../../utils/record-log.js";
import { Button } from "../input/Button";
import styles from "../layout/LoadingScreenLayout.scss";
import { FormattedMessage } from "react-intl";
export function LoadingScreen({ message, infoMessages }) {
  // AVN: Hide info messages as not currently relevant
  //const infoMessage = useRandomMessageTransition(infoMessages);
  return (
    <LoadingScreenLayout
      center={
        <>
          <Spinner />
          <p>{message}</p>
        </>
      }
      bottom={
        <>
{
          // <h3>{infoMessage.heading}</h3>
          // <p>{infoMessage.message}</p>
}
          { 
          // AVN: Button for saving logs will appear if load takes a long time
          <Button className={styles.lateFadeIn} preset="basic" onClick={() => SaveConsoleLog()}>
            <FormattedMessage id="more-menu.save-console-logs" defaultMessage="Save Logs" />
          </Button> 
          }
        </>
      }
    />
  );
}

LoadingScreen.propTypes = {
  message: PropTypes.node,
  infoMessages: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.node.isRequired,
      message: PropTypes.node.isRequired
    })
  )
};

LoadingScreen.defaultProps = {
  infoMessages: []
};
