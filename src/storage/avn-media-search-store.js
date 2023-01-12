import { EventTarget } from "event-target-shim";
import { isLocalClient } from "../utils/phoenix-utils";
import { pushHistoryPath, sluglessPath, withSlug } from "../utils/history";
import { AVN } from "../avn-bridge";

const EMPTY_RESULT = { entries: [], meta: {} };

const SEARCH_CONTEXT_PARAMS = ["q", "cursor", "channel", "profile", "category"];

export default class AvnMediaSearchStore extends EventTarget {
  constructor() {
    super();
    this.requestIndex = 0;
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


  setHistory(history) {
    this.history = history;
    this._update(this.history.location);
    this.history.listen(location => {
      this._update(location);
    });
  }

  _update = async location => {
    this.result = null;
    this.dispatchEvent(new CustomEvent("statechanged"));

    const urlParams = new URLSearchParams(location.search);

    this.requestIndex++;
    const currentRequestIndex = this.requestIndex;
    const searchParams = new URLSearchParams();
    const locationSearchParams = new URLSearchParams(location.search);

    for (const param of SEARCH_CONTEXT_PARAMS) {
      if (!urlParams.get(param)) continue;
      searchParams.set(param, urlParams.get(param));
    }

    this.isFetching = true;
    this.dispatchEvent(new CustomEvent("statechanged"));

    const categoryId = Number(searchParams.get("category"));
    const entries = categoryId > 0 ? await AVN.getActivitiesForCategory(categoryId) : []
    const result = { entries, meta: { /*next_cursor: 25*/  } }

    if (this.requestIndex != currentRequestIndex) return;

    this.result = result;
    this.nextCursor = this.result && this.result.meta && this.result.meta.next_cursor;
    this.isFetching = false;
    this.dispatchEvent(new CustomEvent("statechanged"));
  };

  pageNavigate = delta => {
    if (delta === -1) {
      this.history.goBack();
    } else {
      const location = this.history.location;
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("cursor", this.nextCursor);
      pushHistoryPath(this.history, location.pathname, searchParams.toString());
    }
  };

  queryNavigate = (query) => {
    const location = this.history.location;
    const searchParams = new URLSearchParams(location.search);
    if (query) {
      searchParams.set("q", query);
    } else {
      searchParams.delete("q");
    }
    searchParams.delete("cursor");
    searchParams.delete("profile");
    searchParams.delete("category");
    pushHistoryPath(this.history, location.pathname, searchParams.toString());
  };

  channelNavigate = async (channelId) => {
    const location = this.history.location;
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("channel", channelId)
    searchParams.delete("cursor");
    searchParams.delete("profile");
    searchParams.delete("category");
    pushHistoryPath(this.history, location.pathname, searchParams.toString());
  };

  profileNavigate = async (profileId) => {
    const location = this.history.location;
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("profile", profileId)
    searchParams.delete("q");
    searchParams.delete("cursor");
    searchParams.delete("category");
    pushHistoryPath(this.history, location.pathname, searchParams.toString());
  };

  categoryNavigate = async (categoryId) => {
    const location = this.history.location;
    const searchParams = new URLSearchParams(location.search);
    searchParams.set("category", categoryId)
    searchParams.delete("q");
    searchParams.delete("cursor");
    pushHistoryPath(this.history, location.pathname, searchParams.toString());
  };

  getSearchClearedSearchParams = (location, keepSource, keepNav, keepSelectAction) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.delete("avn-media");
    searchParams.delete("q");
    searchParams.delete("cursor");
    searchParams.delete("channel");
    searchParams.delete("profile");
    searchParams.delete("category");

    return searchParams;
  };

  activate = () => {
    const searchParams = new URLSearchParams(this.history.location.search);
    if(this._stashedParams) {
      for (const [k, v] of Object.entries(this._stashedParams)) {
        searchParams.set(k, v)
      }
      this._stashedParams = null;
    }
    if (isLocalClient()) {
      searchParams.set("avn-media", "active");
      pushHistoryPath(this.history, this.history.location.pathname, searchParams.toString());
    } else {
      pushHistoryPath(this.history, withSlug(this.history.location, `/avn-media`), searchParams.toString());
    }
  }

  isActive = location => {
    const { search } = location;
    const urlParams = new URLSearchParams(search);
    const pathname = sluglessPath(location);
    return pathname.startsWith("/avn-media") || urlParams.get("avn-media");
  };

  //TODO: THIS MIGHT NEED FIXING IN PRODUCTION
  deactivate = () => {
    // Stash the current search for next time the dialog is opened
    const searchParams = new URLSearchParams(this.history.location.search);
    this._stashedParams = {};
    for (const param of SEARCH_CONTEXT_PARAMS) {
      const value = searchParams.get(param);
      if (value) {
        this._stashedParams[param] = value;
      }
    }
    
    const { pathname } = this.history.location;
    const hasMediaPath = true //sluglessPath(history.location).startsWith("/avn-media")

    pushHistoryPath(
      this.history,
      hasMediaPath ? withSlug(this.history.location, "/") : pathname,
      this.getSearchClearedSearchParams(this.history.location).toString()
    );
    this.dispatchEvent(new CustomEvent("media-exit"));
  };
}
