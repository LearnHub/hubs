import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { LoadingScreenLayout } from "../layout/LoadingScreenLayout";
import { Spinner } from "../misc/Spinner";
import { useRandomMessageTransition } from "./useRandomMessageTransition";
import { SaveConsoleLog } from "../../utils/record-log.js";
import { Button } from "../input/Button";
import styles from "../layout/LoadingScreenLayout.scss";
import { FormattedMessage } from "react-intl";
import { ReactComponent as SupportIcon } from "../icons/Support.svg";

export function LoadingScreen({ message, errorMessage, infoMessages }) {
  // AVN: Hide info messages as not currently relevant
  //const infoMessage = useRandomMessageTransition(infoMessages);
  const fadeClass = errorMessage ? styles.showNow : styles.showLater
  return (
    <LoadingScreenLayout
      center={
        <>          
          {!errorMessage && (<Spinner />)}
          <b>{message}</b>
          <p className={styles.errorMessage}>{errorMessage}</p>
        </>
      }
      bottom={
        <Fragment>
            <SupportIcon className={fadeClass}/>
            <a className={fadeClass} href="https://status.eduverse.com" target="_blank">Check Eduverse service status</a>
            <a className={fadeClass} href="https://support.avantiseducation.com/" target="_blank">Search Eduverse support</a>
            <Button className={fadeClass} preset="basic" onClick={() => SaveConsoleLog()}>
              <FormattedMessage id="more-menu.save-console-logs" defaultMessage="Save Logs" />
            </Button> 
        </Fragment>
      }
    />
  );
}

LoadingScreen.propTypes = {
  message: PropTypes.node,
  errorMessage: PropTypes.string,
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
