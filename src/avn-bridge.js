// Utilities for linking Hubs and AVN Cloud

class AvnBridge {

  constructor() {
    this._assetDomain = "https://scene.link";
    this._apiDomain = "https://api.avncloud.com";
    this._eduverseSessionDomain = "https://go.eduverse.com";
    this._dimensionId = null;
    this._assetId = null;
    this._iconUri = null;
    this._mediaEndpoint = null;
    this._ownerIsAuthenticated = false;
    this._ownerIsSubscriber = false;
    this._allowNavigation = true;
  }

  updateFromHub(hub) {
//console.log(hub);
    const userData = hub.user_data;
    if(userData) {
      if(userData.dimensionid) {
        if(this._dimensionId != userData.dimensionid) {
          this._dimensionId = userData.dimensionid;
          this._mediaEndpoint =`${this._assetDomain}/com/Dimensions.cfc?method=media&dimensionid=${this._dimensionId}`;
          console.info(`AVN: Updated dimension id to '${this._dimensionId}'`);
        }
      } else {
        console.error("AVN: No dimensionid is set")
      }
      if(userData.assetid && this._assetId != userData.assetid) {
        this._assetId = userData.assetid;
        console.info(`AVN: Updated asset id to '${this._assetId}'`);
      } else {
        console.error("AVN: No assetid is set")
      }
      if(userData.iconuri && this._iconUri != userData.iconuri) {
        this._iconUri = userData.iconuri;
        console.info(`AVN: Updated icon to '${this._iconUri}'`);
      } else {
        console.error("AVN: No iconuri is set")
      }
      this._ownerIsAuthenticated = userData.ownerisauthenticated;
      this._ownerIsSubscriber = userData.ownerissubscriber;
      this._allowNavigation = userData.allowNavigation;
    } else {
      console.error("AVN: No user_data is set")
    }
  }

  get eduverseSessionDomain() {
    return this._eduverseSessionDomain;
  }

  get assetDomain() {
    return this._assetDomain;
  }

  get dimensionId() {
    return this._dimensionId;
  }

  get assetId() {
    return this._assetId;
  }

  get iconUri() {
    return this._iconUri;
  }

  get dimensionOwnerIsAuthenticated() {
    return this._ownerIsAuthenticated;
  }

  get dimensionOwnerIsSubscriber() {
    return this._ownerIsSubscriber;
  }

  get allowNavigation() {
    return this._allowNavigation;
  }

  // Rooms

  transformRoomUrl(url) {
    // Use the absolute avatar URL is supplied otherwise it is a scene link
    // if no asset ID is supplied then the scene link is void because this room is not navigable
    // Note: the fragment sets the waypoint for the users entry position
    return this._assetId 
      ? url.replace(this._assetDomain, `${this._assetDomain}/${this._dimensionId}`) + "#" + this._assetId 
      : "";
  }

  async fetchRoomData(assetid) {
    const resolveRoomUrl = `${this._assetDomain}/com/Dimensions.cfc?method=room&dimensionid=${this._dimensionId}&assetid=${assetid}`;
    const resolveRoomResponse = await fetch(resolveRoomUrl);
    const roomData = await resolveRoomResponse.json();
    return roomData;
  }

  // Media

  isAvnUrl(url) {
    return url.startsWith(this._assetDomain);
  }

  get mediaEndpoint() {
    return this._mediaEndpoint;
  }

  // ClassConnect Activities (hack for demo room)

  isActivityUrl(url) {
    return url.startsWith(`${this._apiDomain}/manage/activity.cfm?id=`);
  }

  transformActivityUrl(url) {
    return url.replace(`${this._apiDomain}/manage/activity.cfm?id=`, `${this._assetDomain}/${this._dimensionId}/ID`)
  }

}

export const avnBridge = new AvnBridge();
