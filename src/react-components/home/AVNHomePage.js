import React from "react";
import { AVN } from "../../avn-bridge"
import { sleep } from "../../utils/async-utils";
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
      const searchParams = new URLSearchParams(document.location.search);
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
        let passId = searchParams.get("passid") || undefined;
        if(passId) {
          this.setState({ message: "Checking Hall Pass..." })
          const pass = await AVN.getPass(passId);
          if(pass) {
            if(pass.expires && pass.expires < new Date()) {
              passId = undefined
              console.error(`AVN: Hall pass has expired '${passId}'`)
              const errorMessage = "The hall pass provided has expired so a new session will be created with default settings in ";
              for(let n = 10; n > 0; --n) {
                this.setState({ message: "Hall pass has expired", errorMessage: errorMessage + ` ${n}s`})
                await sleep(1000);
              }
              this.setState({ message: null, errorMessage: null })
            } else {
              console.log("AVN: hall pass is valid")
            }
          } else {
            passId = undefined;
            console.error(`AVN: Failed to connect to find hall pass '${passId}'`)            
            const errorMessage = "The hall pass provided could not be found so a new session will be created with default settings in ";
            for(let n = 10; n > 0; --n) {
              this.setState({ message: "Hall pass not found", errorMessage: errorMessage + ` ${n}s`})
              await sleep(1000);
            }
            this.setState({ message: null, errorMessage: null })
          }
        }

        this.setState({ message: "Creating new session..." })
        if (await AVN.createNewDimension(passId)) {
          console.log(`New dimension '${AVN.dimensionId}' is open`)
          this.setState({ message: "Finding a room..." })
          const assetId = searchParams.get("assetid") || AVN.assetId
          let openRoomResult
          // Try the request assetid first, but it might be premium or unavailable in some other way
          try {
            openRoomResult = await AVN.Connect.Rooms.openRoom({ dimensionId: AVN.dimensionId, assetId })
          } catch(error) {
            console.warn(`AVN: Failed to open a room with assetid '${assetId}' so will try default instead`)
            const errorMessage = `The requested scene '${assetId}' could not be found so a new session will be created with the default scene `;
            for(let n = 10; n > 0; --n) {
              this.setState({ message: "Scene not found", errorMessage: errorMessage + ` ${n}s`})
              await sleep(1000);
            }
            openRoomResult = await AVN.Connect.Rooms.openRoom({ dimensionId: AVN.dimensionId, assetId: "homeroom" })
          }
          const room = openRoomResult.roomInfo;
          console.log(`Found room ${room.domain} ${room.roomId}`)
          const roomUrl = isLocalClient() ? `/hub.html?hub_id=${room.roomId}` : `https://${room.domain}/${room.roomId}/${assetId}`
          this.setState({ message: `Joining ${room.name}...` })
          document.location.replace(roomUrl)
        } else {
          console.error("AVN: Failed to create a new dimension")
          this.setState({ message: "Session failure", errorMessage: "Unable to create a new session. Try refreshing the page or following the links below for more information." })
        }
      } else {
        console.error("AVN: Failed to connect to AVN Cloud")
        this.setState({ message: "Connection failed", errorMessage: "Eduverse is currently unavailable. Try refreshing the page or following the links below for more information." })
      }
    } catch(error) {
      console.error(error)
      this.setState({ message: "An unexpected error occured", errorMessage: error?.message })
    }
  }

  render() {
    return <LoadingScreen message={this.state.message} errorMessage={this.state.errorMessage} />;
  }
}
