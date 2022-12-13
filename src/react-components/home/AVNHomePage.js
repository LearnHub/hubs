import { HealthCheckResponse_ServingStatus } from "connect-sdk/dist/gen/grpc/health/v1/healthcheck_pb";
import React, { useContext, useEffect } from "react";
import { PageContainer } from "../layout/PageContainer";
import { AVN } from "../../avn-connect"
import { sleep } from "../../utils/async-utils";
import { AppLogo } from "../misc/AppLogo";
import styles from "./HomePage.scss";
import { isLocalClient } from "../../utils/phoenix-utils";
export class AVNHomePage extends React.Component {

  static propTypes = {
    // onPreloadLoadClicked: PropTypes.func,
    // embed: PropTypes.bool,
    // onLoaded: PropTypes.func,
    // activeObject: PropTypes.object,
    // selectedObject: PropTypes.object,
    // breakpoint: PropTypes.string,
    // canVoiceChat: PropTypes.bool
  };

  state = {
    statusMessage: "Starting...",
    // enterInVR: false,
    // autoExitTimerStartedAt: null,
  };

  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps) {
    console.log("AVNHomePage::componentDidUpdate", this.props, prevProps)
    // const { hubChannel, showSignInDialog } = this.props;
    // if (hubChannel) {
    //   const { signedIn } = hubChannel;
    //   if (signedIn !== this.state.signedIn) {
    //     this.setState({ signedIn });
    //   }
    // }
  }

  async componentDidMount() {

    // Belt and braces code to create a new dimension

    console.log("AVNHomePage::componentDidMount")
    this.setState({statusMessage: "Checking AVN Cloud connection..." })
    if(await AVN.isHealthy()) {
      this.setState({statusMessage: "Opening new dimension..." })
      if(await AVN.openNewDimension()) {
        console.log(`newDimensionId = ${AVN.dimensionId}`)
        this.setState({statusMessage: `New dimension is open ${AVN.dimensionId} with default asset ID ${AVN.assetId}` })  
      } else {
        this.setState({statusMessage: "Failed to create a new dimension" })
      }
      
      const room = await AVN.Connect.Rooms.findRoom({dimensionId: AVN.dimensionId, assetId: AVN.assetId})
      console.log(`room = ${room.domain} ${room.roomId}`)
      this.setState({statusMessage: `Found room ${room.domain} ${room.roomId}` })
            
      if (isLocalClient()) {
        document.location.replace(`/hub.html?hub_id=${room.roomId}`)
      } else {
        document.location.replace(`https://${room.domain}/${room.roomId}`)
      }
    

    } else {
      this.setState({statusMessage: "Failed to connect to AVN Cloud" })
    }
  }

  componentWillUnmount() {
    // this.props.scene.removeEventListener("loaded", this.onSceneLoaded);
    // this.props.scene.removeEventListener("exit", this.exitEventHandler);
    // this.props.scene.removeEventListener("share_video_enabled", this.onShareVideoEnabled);
    // this.props.scene.removeEventListener("share_video_disabled", this.onShareVideoDisabled);
    // this.props.scene.removeEventListener("share_video_failed", this.onShareVideoFailed);
    // this.props.scene.removeEventListener("action_media_tweet", this.onTweet);
    // this.props.store.removeEventListener("statechanged", this.storeUpdated);
    // window.removeEventListener("concurrentload", this.onConcurrentLoad);
    // window.removeEventListener("idle_detected", this.onIdleDetected);
    // window.removeEventListener("activity_detected", this.onActivityDetected);
    // window.removeEventListener("focus_chat", this.onFocusChat);
  }

  onSceneLoaded = () => {
    // console.log("UI root scene has loaded");
    // this.setState({ sceneLoaded: true });
  };

  onSubscribeChanged = async () => {
    // if (!this.props.subscriptions) return;

    // await this.props.subscriptions.toggle();
    // this.updateSubscribedState();
  };

  render() {
//    const hide = this.state.hide || this.props.hide;
    if (true /*this.state.isRecordingMode*/) {
      return (
        <div>
          <div>
            <AppLogo />
          </div>
          <p>{this.state.statusMessage}</p>
        </div>
      );
    }
  }
}
