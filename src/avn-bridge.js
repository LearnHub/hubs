// Utilities for linking Hubs and AVN Cloud

class AvnBridge {

  constructor() {
    this._shareDomain = "https://eduverse.link";
    this._assetDomain = "https://scene.link";
    this._apiDomain = "https://api.avncloud.com";
    this._dimensionId = new URLSearchParams(document.location.search).get("dimension_id");
    this._assetId = new URLSearchParams(document.location.search).get("asset_id");
    const pathParts = document.location.pathname.split('/');
    if(pathParts.length > 2) {
      this._dimensionId = document.location.pathname.split('/')[2];
    }
    if(pathParts.length > 3) {
      this._assetId = document.location.pathname.split('/')[3];
    }
    if(this._dimensionId) {
      console.log(`AVN: Dimension ID: ${this._dimensionId}`);
    } else {
      console.error("AVN: No dimension found");
    }
    if(this._assetId) {
      console.log(`AVN: Asset ID: ${this._assetId}`);
    } else {
      console.warn("AVN: No asset ID found so scene links will be disabled");
    }

    this._mediaEndpoint = this._assetDomain + `/com/Dimensions.cfc?method=media&dimensionid=${this._dimensionId}`;

  }

  get invitationUrl() {
    // TODO: RESOLVE HOW SHARING LINKS WILL WORK. PROBABLY USER CENTRIC
    //return `${this._shareDomain}/${this._dimensionId}`;
    return `${this._shareDomain}/${this._dimensionId}/${this._assetId}`;
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

  set assetId(value) {
    this._assetId = value;
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
