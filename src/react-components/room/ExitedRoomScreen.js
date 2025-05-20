import React from "react";
import PropTypes from "prop-types";
import { defineMessages, FormattedMessage, useIntl } from "react-intl";
import { LoadingScreenLayout } from "../layout/LoadingScreenLayout";
import { Button } from "../input/Button";

export const ExitReason = {
  exited: "exited",
  closed: "closed",
  denied: "denied",
  disconnected: "disconnected",
  left: "left",
  full: "full",
  sceneError: "sceneError",
  connectError: "connectError",
  versionMismatch: "versionMismatch"
};

const messages = defineMessages({
  [ExitReason.exited]: {
    id: "exited-room-screen.reason.exited",
    defaultMessage: "Your session has ended. Refresh your browser to start a new one."
  },
  [ExitReason.closed]: {
    id: "exited-room-screen.reason.closed",
    defaultMessage: "This room is no longer available."
  },
  [ExitReason.denied]: {
    id: "exited-room-screen.reason.denied",
    defaultMessage: "You are not permitted to join this room. Please request permission from the room creator."
  },
  [ExitReason.disconnected]: {
    id: "exited-room-screen.reason.disconnected",
    defaultMessage: "You have disconnected from the room. Refresh the page to try to reconnect."
  },
  [ExitReason.left]: {
    id: "exited-room-screen.reason.left",
    defaultMessage: "You have left the room."
  },
  [ExitReason.full]: {
    id: "exited-room-screen.reason.full",
    defaultMessage: "This room is full, please try again later."
  },
  [ExitReason.sceneError]: {
    id: "exited-room-screen.reason.scene-error",
    defaultMessage: "The scene failed to load."
  },
  [ExitReason.connectError]: {
    id: "exited-room-screen.reason.connect-error",
    defaultMessage: "Unable to connect to this room, please try again later."
  },
  [ExitReason.versionMismatch]: {
    id: "exited-room-screen.reason.version-mismatch",
    defaultMessage: "The version you deployed is not available yet. Your browser will refresh in 5 seconds."
  }
});

export function ExitedRoomScreen({ reason, showTerms, termsUrl, showSourceLink }) {
  const intl = useIntl();

  let subtitle = null;
  if (reason === ExitReason.closed) {
    const contactEmail = intl.formatMessage({ id: "contact-email" });

    subtitle = (
      <>
        <b>
          <FormattedMessage
            id="exited-room-screen.no-longer-available"
            defaultMessage="Sorry, this room is no longer available."
          />
        </b>
        {showTerms && (
          <p>
            <FormattedMessage
              id="exited-room-screen.closed-room-tos"
              defaultMessage="A room may be closed by the room owner, or if we receive reports that it violates our <toslink>Terms of Use</toslink>."
              values={{
                // eslint-disable-next-line react/display-name
                toslink: chunks => (
                  <a target="_blank" rel="noreferrer noopener" href={termsUrl}>
                    {chunks}
                  </a>
                )
              }}
            />
          </p>
        )}
        { /* AVN: Start a new session if this one has been closed down */ }
        <Button preset="accept" onClick={() => AVNGlobal.startNewSession()}>
          <FormattedMessage id="avn-exited-room-screen.start-new-session" defaultMessage="Start a new session" />
        </Button> 
        <p>
          <FormattedMessage
            id="exited-room-screen.avn-contact-us"
            defaultMessage="Any questions? {supportUrl}"
            values={{ supportUrl: <a href={global?.AVNGlobal?.supportLink}>{global?.AVNGlobal?.supportLink}</a> }}
          />
        </p>
        {showSourceLink && (
          <p>
            <FormattedMessage
              id="exited-room-screen.source-link"
              defaultMessage="If you'd like to run your own server, Hubs's source code is available on <a>GitHub</a>."
              values={{
                // eslint-disable-next-line react/display-name
                a: chunks => <a href="https://github.com/Hubs-Foundation/hubs">{chunks}</a>
              }}
            />
          </p>
        )}        
        { /* AVN: Not suitable in all situations */ false && ( 
        <Button as="a" preset="accept" href="/">
          <FormattedMessage id="exited-room-screen.home-button" defaultMessage="Back to Home" />
        </Button>
        )}
      </>
    );
  } else {
    const tcpUrl = new URL(document.location.toString());
    const tcpParams = new URLSearchParams(tcpUrl.search);
    tcpParams.set("force_tcp", true);
    tcpUrl.search = tcpParams.toString();

    subtitle = (
      <>
        <b>{intl.formatMessage(messages[reason])}</b>

        {/* AVN: Advice not appropriate for this cloud */}
        {false && reason === ExitReason.connectError && (
          <p>
            <FormattedMessage
              id="exited-room-screen.connect-tcp"
              defaultMessage="You can try <a>connecting via TCP</a>, which may work better on some networks."
              values={{
                // eslint-disable-next-line react/display-name
                a: chunks => <a href={tcpUrl.toString()}>{chunks}</a>
              }}
            />
          </p>
        )}
        {/* AVN: Don't give the option to create rooms */}
        {false && ![ExitReason.left, ExitReason.disconnected, ExitReason.sceneError].includes(reason) && (
          <p>
            <FormattedMessage
              id="exited-room-screen.create-room"
              defaultMessage="You can also <a>create a new room</a>."
              values={{
                // eslint-disable-next-line react/display-name
                a: chunks => <a href="/">{chunks}</a>
              }}
            />
          </p>
        )}

        {/* AVN: Anchor was being intercepted by popstate event handler */}
        <Button preset="accept" onClick={() => document.location.reload()}>
          <FormattedMessage id="exited-room-screen.refresh-page-button" defaultMessage="Refresh Page" />
        </Button>
      </>
    );
  }

  return <LoadingScreenLayout center={subtitle} />;
}

ExitedRoomScreen.propTypes = {
  reason: PropTypes.string.isRequired,
  showTerms: PropTypes.bool,
  termsUrl: PropTypes.string,
  showSourceLink: PropTypes.bool
};
