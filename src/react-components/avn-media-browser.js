import React, { Component } from "react";
import PropTypes from "prop-types";
import { injectIntl, FormattedMessage, defineMessages } from "react-intl";
import { showFullScreenIfWasFullScreen } from "../utils/fullscreen";
import { AvnMediaBrowser } from "./room/AvnMediaBrowser";
import { AvnMediaTile } from "./room/AvnMediaTiles";
const isMobile = AFRAME.utils.device.isMobile();
const isMobileVR = AFRAME.utils.device.isMobileVR();

const searchPlaceholderMessages = defineMessages({
  default: { id: "media-browser.search-placeholder.default", defaultMessage: "Search..." }
});

const emptyMessages = defineMessages({
  default: {
    id: "media-browser.empty.default",
    defaultMessage: "No results. Try entering a new search above."
  },
  noLicense: {
    id: "media-browser.empty.no-license",
    defaultMessage: "You don't have a license for this content."
  },
});

// TODO: Migrate to use MediaGrid and media specific components like RoomTile
class AvnMediaBrowserContainer extends Component {
  static propTypes = {
    avnMediaSearchStore: PropTypes.object,
    history: PropTypes.object,
    intl: PropTypes.object,
    hubChannel: PropTypes.object,
    onActivitySelected: PropTypes.func,
    showNonHistoriedDialog: PropTypes.func.isRequired,
    scene: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
  };

  state = { query: "", selectNextResult: false };

  constructor(props) {
    super(props);
    this.state = this.getStoreAndHistoryState(props);
    this.props.avnMediaSearchStore.addEventListener("statechanged", this.storeUpdated);
  }

  componentDidMount() {}

  componentWillUnmount() {
    this.props.avnMediaSearchStore.removeEventListener("statechanged", this.storeUpdated);
  }

  storeUpdated = () => {
    const newState = this.getStoreAndHistoryState(this.props);
    this.setState(newState);

    if (this.state.selectNextResult) {
      if (newState.result && newState.result.entries.length > 0) {
        this.selectEntry(newState.result.entries[0]);
      } else {
        this.close();
      }
    }
  };

  getSelectedChannelId = searchParams => Number(searchParams.get("channel"));
  getSelectedProfileId = searchParams => Number(searchParams.get("profile"));
  getSelectedCategoryId = searchParams => Number(searchParams.get("category"));

  getStoreAndHistoryState = props => {
    const searchParams = new URLSearchParams(props.history.location.search);
    const result = props.avnMediaSearchStore.result;

    const newState = { result, query: this.state.query || searchParams.get("q") || "" };

    newState.channelList = props.avnMediaSearchStore.getChannels();
    newState.selectedChannelId = this.getSelectedChannelId(searchParams);
    // Select a channel if none is currently active
    if(!newState.selectedChannelId && newState.channelList && newState.channelList.length > 0) {
      const channel = newState.channelList[0];
      newState.selectedChannelId = channel.channelId;
      props.avnMediaSearchStore.channelNavigate(channel.channelId);
    }
    newState.profileList = undefined;
    newState.categoryList = undefined;
    if(newState.selectedChannelId) {
      newState.profileList = props.avnMediaSearchStore.getProfilesForChannel(newState.selectedChannelId);
      newState.selectedProfileId = this.getSelectedProfileId(searchParams);
      if(newState.selectedProfileId) {
        newState.categoryList = props.avnMediaSearchStore.getCategoriesForProfile(newState.selectedProfileId);
        newState.selectedCategoryId = this.getSelectedCategoryId(searchParams);
      }
    }

    return newState;
  };

  handleQueryUpdated = (query, forceNow) => {
    this.setState({ result: null });

    if (this._sendQueryTimeout) {
      clearTimeout(this._sendQueryTimeout);
      this._sendQueryTimeout = null;
    }

    if (forceNow) {
      this.props.avnMediaSearchStore.queryNavigate(query);
    } else {
      // Don't update search on every keystroke, but buffer for some ms.
      this._sendQueryTimeout = setTimeout(() => {
        this._sendQueryTimeout = null;
        // Drop filter for now, so entering text drops into "search all" mode
        this.props.avnMediaSearchStore.queryNavigate(query);
      }, 500);
    }

    this.setState({ query });
  };

  handleEntryClicked = (evt, entry) => {
    evt.preventDefault();
    this.selectEntry(entry);
  };

  selectEntry = entry => {
    this.props.onActivitySelected(entry);
    this.close();
  };

  handleChannelClicked = channelId => {
    this.props.avnMediaSearchStore.channelNavigate(channelId);
  };

  handleProfileClicked = profileId => {
    this.setState({ query: "" }, () => { this.props.avnMediaSearchStore.profileNavigate(profileId) });
  };

  handleCategoryClicked = categoryId => {
    this.setState({ query: "" }, () => { this.props.avnMediaSearchStore.categoryNavigate(categoryId) });
  };

  close = () => {
    showFullScreenIfWasFullScreen();
    this.props.avnMediaSearchStore.deactivate();
  };

  handlePager = delta => {
    this.setState({ result: null });
    this.props.avnMediaSearchStore.pageNavigate(delta);
    this.browserDiv.scrollTop = 0;
  };

  render() {
    const intl = this.props.intl;
    const searchParams = new URLSearchParams(this.props.history.location.search);
    const entries = (this.state.result && this.state.result.entries) || [];
    const meta = this.state.result && this.state.result.meta;
    const hasNext = !!(meta && meta.next_cursor);
    const hasPrevious = !!searchParams.get("cursor");
    return (
      <AvnMediaBrowser
        browserRef={r => (this.browserDiv = r)}
        onClose={this.close}
        searchInputRef={r => (this.inputRef = r)}
        autoFocusSearch={!isMobile && !isMobileVR}
        query={this.state.query}
        onChangeQuery={e => this.handleQueryUpdated(e.target.value)}
        onSearchKeyDown={e => {
          if (e.key === "Enter" && e.ctrlKey) {
            if (entries.length > 0 && !this._sendQueryTimeout) {
              this.handleEntryClicked(e, entries[0]);
            } else if (this.state.query.trim() !== "") {
              this.handleQueryUpdated(this.state.query, true);
              this.setState({ selectNextResult: true });
            } else {
              this.close();
            }
          } else if (e.key === "Escape" || (e.key === "Enter" && isMobile)) {
            e.target.blur();
          }
        }}
        onClearSearch={() => this.handleQueryUpdated("", true)}
        channelList={this.state.channelList}
        selectedChannelId={this.state.selectedChannelId}
        onSelectChannel={this.handleChannelClicked}
        profileList={this.state.profileList}
        selectedProfileId={this.state.selectedProfileId}
        onSelectProfile={this.handleProfileClicked}
        categoryList={this.state.categoryList}
        selectedCategoryId={this.state.selectedCategoryId}
        onSelectCategory={this.handleCategoryClicked}
        searchPlaceholder={intl.formatMessage(searchPlaceholderMessages.default)}
        hasNext={hasNext}
        hasPrevious={hasPrevious}
        onNextPage={() => this.handlePager(1)}
        onPreviousPage={() => this.handlePager(-1)}
        //TODO
        noResultsMessage={
          true
            ? intl.formatMessage(emptyMessages.default)
            : intl.formatMessage(emptyMessages.noLicense)
        }
      >
        {
        this.props.avnMediaSearchStore.isFetching ||
        this._sendQueryTimeout ||
        entries.length > 0
        ? (<>
          {entries.map((entry, idx) => {
            return (
              <AvnMediaTile
                key={`${entry.id}_${idx}`}
                entry={entry}
                onClick={e => this.handleEntryClicked(e, entry)}
              />
            );
          })}
          </>) : null
        }
      </AvnMediaBrowser>
    );
  }
}

export default injectIntl(AvnMediaBrowserContainer);
