import React from "react";
import { AVN } from "../../avn-bridge"
import { isLocalClient } from "../../utils/phoenix-utils";
import { store } from "../../utils/store-instance";
import { LoadingScreen } from "../room/LoadingScreen";

export class AVNHomePage extends React.Component {

  state = {
    message: "Loading...",
    errorMessage: null,
  };

  constructor(props) {
    super(props);
  }

  async componentDidMount() {
    try {
      const accessToken = store.state.credentials?.extras?.access_token;
      if (accessToken) {
        console.log("AVN: authenticating with existing token")
        this.setState({ message: "Authenticating..." })
        await AVN.authenticate(accessToken)
      } else {
        console.log("AVN: no token found so connection will be anonymous")
      }
      this.setState({ message: "Checking Eduverse connection..." })
      if (await AVN.isHealthy()) {
        this.setState({ message: "Opening new dimension..." })
        if (await AVN.openNewDimension()) {
          console.log(`New dimension is open ${AVN.dimensionId} with default asset ID ${AVN.assetId}`)
          this.setState({ message: "Finding a room..." })
          const room = await AVN.Connect.Rooms.findRoom({ dimensionId: AVN.dimensionId, assetId: AVN.assetId })
          console.log(`Found room ${room.domain} ${room.roomId}`)
          const roomUrl = isLocalClient() ? `/hub.html?hub_id=${room.roomId}` : `https://${room.domain}/${room.roomId}`
          this.setState({ message: `Joining room...` })
          document.location.replace(roomUrl)
        } else {
          this.setState({ message: "An unexpected error occured", errorMessage: "Failed to create a new dimension" })
        }
      } else {
        this.setState({ message: "An unexpected error occured", errorMessage: "Failed to connect to AVN Cloud" })
      }
    } catch(error) {
      this.setState({ message: "An unexpected exception occured", errorMessage: error?.message })
    }
  }

  render() {
    return <LoadingScreen message={this.state.message} errorMessage={this.state.errorMessage} />;
  }
}
