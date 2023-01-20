import { EventTarget } from "event-target-shim";
import { AVN } from "../avn-bridge";

const EMPTY_RESULT = { entries: [], meta: {} };

export default class AvnMediaSearchStore extends EventTarget {
  constructor() {
    super();
    this.requestIndex = 0;
  }

  get active() {
    return this._active;
  }
  set active(value) {
    if(this._active !== value) {
      this._active = value;
      this._update();
    }
  }

  _channels = undefined
  getChannels() {
    if(!this._channels) {
      (async () => {
        this._channels = await AVN.getLicensedChannels();
        this.dispatchEvent(new CustomEvent("statechanged"));
      })();
    }
    return this._channels;
  }

  _profilesByChannel = {}
  getProfilesForChannel(channelId) {
    if(!this._profilesByChannel[channelId]) {
      (async () => {
        this._profilesByChannel[channelId] = await AVN.getProfilesForChannel(channelId);
        this.dispatchEvent(new CustomEvent("statechanged"));  
      })();
    }
    return this._profilesByChannel[channelId];
  }

  _categoriesByProfile = {}
  getCategoriesForProfile(profileId) {
    if(!this._categoriesByProfile[profileId]) {
      (async () => {
        this._categoriesByProfile[profileId] = await AVN.getCategoriesForProfile(profileId);
        this.dispatchEvent(new CustomEvent("statechanged"));  
      })();
    }
    return this._categoriesByProfile[profileId];
  }

  _fullSearchByChannel = {}

  _update = async () => {

    if(!this._active) {
      this.result = EMPTY_RESULT;
      this.dispatchEvent(new CustomEvent("statechanged"));
      return
    }

    this.result = null;    
    this.dispatchEvent(new CustomEvent("statechanged"));

    this.requestIndex++;
    const currentRequestIndex = this.requestIndex;

    this.isFetching = true;
    this.dispatchEvent(new CustomEvent("statechanged"));

    // A channel must be set for searching
    if(!this._channelId) return;
    let entries = undefined;
    if(this._categoryId > 0) {
      entries = await AVN.getActivitiesForCategory(this._categoryId);
    } else {
      if(this._profileId > 0) {
        entries = await AVN.getActivitiesForProfile(this._profileId);
      } else {
        if(this._query) {
          entries = await AVN.searchActivitiesForChannel(this._channelId, this._query);
        } else {
          const cachedResult = this._fullSearchByChannel[this._channelId];
          if(cachedResult) {
            entries = cachedResult;
          } else {
            entries = await AVN.searchActivitiesForChannel(this._channelId, this._query);
            this._fullSearchByChannel[this._channelId] = entries;
          }
        }
      }
    }

    const result = { entries, meta: { /*next_cursor: 25*/  } }

    if (this.requestIndex != currentRequestIndex) return;

    this.result = result;
    this.nextCursor = this.result && this.result.meta && this.result.meta.next_cursor;
    this.isFetching = false;
    this.dispatchEvent(new CustomEvent("statechanged"));
  };

  _cursor = undefined;
  pageNavigate = delta => {
    if (delta === -1) {
      this.history.goBack();
    } else {
      this._cursor = this.nextCursor;
    }
    this._update();
  };

  get query() {
    return this._query;
  }
  set query(q) {
    this._query = q?.trim();
    this._cursor = undefined;
    this._profileId = undefined;
    this._categoryId = undefined;
    this._update();
  }

  get channelId() {
    return this._channelId;
  }
  set channelId(id) {
    this._channelId = id;
    this._cursor = undefined;
    this._profileId = undefined;
    this._categoryId = undefined;
    this._update();
  }

  get profileId() {
    return this._profileId;
  }
  set profileId(id) {
    this._profileId = id;
    this._query = undefined;
    this._cursor = undefined;
    this._categoryId = undefined;
    this._update();
  }

  get categoryId() {
    return this._categoryId;
  }
  set categoryId(id) {
    this._categoryId = id;
    this._query = undefined;
    this._cursor = undefined;
    this._update();
  }

}
