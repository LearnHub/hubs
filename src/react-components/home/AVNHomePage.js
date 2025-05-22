import React from "react";
import { AVN } from "../../avn-bridge"
import { sleep } from "../../utils/async-utils";
import { store } from "../../utils/store-instance";
import { LoadingScreen } from "../room/LoadingScreen";
import configs from "../../utils/configs";
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
              this.setState({ message: "Hall pass not found", errorMessage: errorMessage + ` ${n} second${n > 1 ? "s" : ""}`})
              await sleep(1000);
            }
            this.setState({ message: null, errorMessage: null })
          }
        }

        this.setState({ message: "Creating new session..." })
        if (await AVN.createNewDimension(passId)) {
          console.log(`New dimension '${AVN.dimensionId}' is open`)
          this.setState({ message: "Finding a room..." })
          let roomInfo
          let assetId
          // Direct URL to media
          const mediaUrl = searchParams.get("mediaurl")
          if(mediaUrl) {
            roomInfo = await AVN.fetchRoomInfoForUrl(mediaUrl)
            assetId = roomInfo.assetId
          } else {
            assetId = searchParams.get("assetid") || AVN.assetId
            // Try the requested assetid first, but it might be premium or unavailable in some other way
            try {
              roomInfo = await AVN.fetchRoomInfoForUrl(`https://scene.link/${assetId}`)
            } catch(error) {
              console.warn(`AVN: Failed to open a room with assetid '${assetId}' so will try default instead`)
            }
            // If that operation failed (because no license for that asset for instance), try the "homeroom"
            if(!roomInfo) {
              const errorMessage = `The requested scene '${assetId}' could not be found so the default scene will be used instead in `;
              for(let n = 10; n > 0; --n) {
                this.setState({ message: "Scene not found", errorMessage: errorMessage + ` ${n} second${n > 1 ? "s" : ""}`})
                await sleep(1000);
              }
              roomInfo = await AVN.fetchRoomInfoForUrl(`https://scene.link/homeroom`)
            }
          }
          if(roomInfo) {
            console.log(`Found room ${roomInfo.domain} ${roomInfo.roomId}`)
            const newUrlParams = []
            let roomUrl
            if(configs.IS_LOCAL_CLIENT) {
              roomUrl = `/hub.html`
              newUrlParams.push(`hub_id=${roomInfo.roomId}`)
            } else {
              roomUrl = `https://${roomInfo.domain}${document.location.port != 443 ? `:${document.location.port}` : ""}/${roomInfo.roomId}/${assetId}`
            }
            this.setState({ message: `Joining ${roomInfo.name}...` })
            // Add on any support utility parameters
            const AvnUtilityParameters = [ "hubsHost", "gwebHost", "restHost", "shortHost" ]
            AvnUtilityParameters.forEach(param => {
              const value = searchParams.get(param)
              if(value) {
                newUrlParams.push(`${param}=${value}`)
              }
            })
            if(newUrlParams.length > 0) {
              roomUrl += "?" + newUrlParams.join("&")
            }
            console.log(`Redirecting to ${roomUrl}`)
            document.location.replace(roomUrl)
          } else {
            console.error("AVN: Failed to open a room")
            this.setState({ message: "Session failure", errorMessage: "Unable to create rooms within a session. Try refreshing the page or following the links below for more information." })  
          }
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
