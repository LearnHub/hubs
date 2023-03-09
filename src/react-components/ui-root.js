import React, { Component, useEffect } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import copy from "copy-to-clipboard";
import { FormattedMessage } from "react-intl";
import screenfull from "screenfull";

import configs from "../utils/configs";
import { VR_DEVICE_AVAILABILITY } from "../utils/vr-caps-detect";
import { canShare } from "../utils/share";
import styles from "../assets/stylesheets/ui-root.scss";
import styleUtils from "./styles/style-utils.scss";
import { ReactAudioContext } from "./wrap-with-audio";
import {
  pushHistoryState,
  clearHistoryState,
  popToBeginningOfHubHistory,
  navigateToPriorPage,
  sluglessPath
} from "../utils/history";
import StateRoute from "./state-route.js";
import { getPresenceProfileForSession, hubUrl } from "../utils/phoenix-utils";
import { getMicrophonePresences } from "../utils/microphone-presence";
import { getCurrentStreamer } from "../utils/component-utils";
import { isIOS } from "../utils/is-mobile";

import ProfileEntryPanel from "./profile-entry-panel";
import MediaBrowserContainer from "./media-browser";
import AvnMediaBrowserContainer from "./avn-media-browser";

import EntryStartPanel from "./entry-start-panel.js";
import AvatarEditor from "./avatar-editor";
import PreferencesScreen from "./preferences-screen.js";
import { PresenceLog } from "./presence-log.js";
import PreloadOverlay from "./preload-overlay.js";
import RTCDebugPanel from "./debug-panel/RtcDebugPanel.js";
import { showFullScreenIfAvailable, showFullScreenIfWasFullScreen, exitFullScreen, isFullScreen } from "../utils/fullscreen";
import { handleExitTo2DInterstitial, exit2DInterstitialAndEnterVR, isIn2DInterstitial } from "../utils/vr-interstitial";
import maskEmail from "../utils/mask-email";
import { saveScreenshot } from "../utils/media-utils";

import qsTruthy from "../utils/qs_truthy";
import { LoadingScreenContainer } from "./room/LoadingScreenContainer";

import { RoomLayoutContainer } from "./room/RoomLayoutContainer";
import roomLayoutStyles from "./layout/RoomLayout.scss";
import { useAccessibleOutlineStyle } from "./input/useAccessibleOutlineStyle";
import { ToolbarButton } from "./input/ToolbarButton";
import { RoomEntryModal } from "./room/RoomEntryModal";
import { EnterOnDeviceModal } from "./room/EnterOnDeviceModal";
import { MicSetupModalContainer } from "./room/MicSetupModalContainer";
import { InvitePopoverContainer } from "./room/InvitePopoverContainer";
import { AvnDeviceInvitePopoverContainer } from "./room/AvnDeviceInvitePopoverContainer";
import { AvnHallPassPopoverContainer } from "./room/AvnHallPassPopoverContainer";
import { MoreMenuPopoverButton, CompactMoreMenuButton, MoreMenuContextProvider } from "./room/MoreMenuPopover";
import { ChatSidebarContainer, ChatContextProvider, ChatToolbarButtonContainer } from "./room/ChatSidebarContainer";
import { ContentMenu, PeopleMenuButton, ObjectsMenuButton, ECSDebugMenuButton, EduverseTeacherMenuButton, EduverseStudentMenuButton } from "./room/ContentMenu";
import { ReactComponent as FullScreenIcon } from "./icons/FullScreen.svg";
import { ReactComponent as ArrowBackIcon } from "./icons/ArrowBack.svg";
import { ReactComponent as CameraIcon } from "./icons/Camera.svg";
import { ReactComponent as AvatarIcon } from "./icons/Avatar.svg";
import { ReactComponent as AddIcon } from "./icons/Add.svg";
import { ReactComponent as DeleteIcon } from "./icons/Delete.svg";
import { ReactComponent as FavoritesIcon } from "./icons/Favorites.svg";
import { ReactComponent as StarOutlineIcon } from "./icons/StarOutline.svg";
import { ReactComponent as StarIcon } from "./icons/Star.svg";
import { ReactComponent as SettingsIcon } from "./icons/Settings.svg";
import { ReactComponent as WarningCircleIcon } from "./icons/WarningCircle.svg";
import { ReactComponent as HomeIcon } from "./icons/Home.svg";
import { ReactComponent as TextDocumentIcon } from "./icons/TextDocument.svg";
import { ReactComponent as SupportIcon } from "./icons/Support.svg";
import { ReactComponent as ShieldIcon } from "./icons/Shield.svg";
import { ReactComponent as DiscordIcon } from "./icons/Discord.svg";
import { ReactComponent as VRIcon } from "./icons/VR.svg";
import { ReactComponent as LeaveIcon } from "./icons/Leave.svg";
import { ReactComponent as EnterIcon } from "./icons/Enter.svg";
import { ReactComponent as InviteIcon } from "./icons/Invite.svg";
import { ReactComponent as SaveIcon } from "./icons/Save.svg";
import { ReactComponent as SceneIcon } from "./icons/Scene.svg";
import { ReactComponent as ExploreIcon } from "./icons/Explore.svg";
import { ReactComponent as PassIcon } from "./icons/Pass.svg";
import { ReactComponent as GatherIcon } from "./icons/Gather.svg";
import { PeopleSidebarContainer, userFromPresence } from "./room/PeopleSidebarContainer";
import { ObjectListProvider } from "./room/useObjectList";
import { ObjectsSidebarContainer } from "./room/ObjectsSidebarContainer";
import { ObjectMenuContainer } from "./room/ObjectMenuContainer";
import { EduverseTeacherSidebarContainer } from "./room/EduverseTeacherSidebarContainer";
import { EduverseStudentSidebarContainer } from "./room/EduverseStudentSidebarContainer";
import { useCssBreakpoints } from "react-use-css-breakpoints";
import { PlacePopoverContainer } from "./room/PlacePopoverContainer";
import { SharePopoverContainer } from "./room/SharePopoverContainer";
import { AudioPopoverContainer } from "./room/AudioPopoverContainer";
import { ReactionPopoverContainer } from "./room/ReactionPopoverContainer";
import { SafariMicModal } from "./room/SafariMicModal";
import { RoomSignInModalContainer } from "./auth/RoomSignInModalContainer";
import { SignInStep } from "./auth/SignInModal";
import { LeaveReason, LeaveRoomModal } from "./room/LeaveRoomModal";
import { RoomSidebar } from "./room/RoomSidebar";
import { RoomSettingsSidebarContainer } from "./room/RoomSettingsSidebarContainer";
import { AutoExitWarningModal, AutoExitReason } from "./room/AutoExitWarningModal";
import { ExitReason } from "./room/ExitedRoomScreen";
import { UserProfileSidebarContainer } from "./room/UserProfileSidebarContainer";
import { CloseRoomModal } from "./room/CloseRoomModal";
import { WebVRUnsupportedModal } from "./room/WebVRUnsupportedModal";
import { TweetModalContainer } from "./room/TweetModalContainer";
import { TipContainer, FullscreenTip, RecordModeTip } from "./room/TipContainer";
import { SpectatingLabel } from "./room/SpectatingLabel";
import { SignInMessages } from "./auth/SignInModal";
import { changeHubAvn } from "../change-hub";
import { MediaDevicesEvents } from "../utils/media-devices-utils";
import { TERMS, PRIVACY } from "../constants";
import { ECSDebugSidebarContainer } from "./debug-panel/ECSSidebar";
import { NotificationsContainer } from "./room/NotificationsContainer";
import { usePermissions } from "./room/usePermissions";
import { SaveConsoleLog } from "../utils/record-log.js";
import { AVN } from "../avn-bridge";
import { AvnInformationModal } from "./room/AvnInformationModal";
import { OperationState } from "connect-sdk/dist/gen/avn/connect/v1/operations_pb";
import { AvnDimensionStatusModal } from "./room/AvnDimensionStatusModal";

const avatarEditorDebug = qsTruthy("avatarEditorDebug");
const avnShowHiddenFeatures = qsTruthy("showHiddenFeatures");

const IN_ROOM_MODAL_ROUTER_PATHS = ["/media"];
const IN_ROOM_MODAL_QUERY_VARS = ["media_source"];

const LOBBY_MODAL_ROUTER_PATHS = ["/media/scenes", "/media/avatars", "/media/favorites"];
const LOBBY_MODAL_QUERY_VARS = ["media_source"];
const LOBBY_MODAL_QUERY_VALUES = ["scenes", "avatars", "favorites"];

async function grantedMicLabels() {
  const mediaDevices = await navigator.mediaDevices.enumerateDevices();
  return mediaDevices.filter(d => d.label && d.kind === "audioinput").map(d => d.label);
}

const isSmallScreen = window.innerWidth < 450;
const isMobile = AFRAME.utils.device.isMobile();
const isMobileVR = AFRAME.utils.device.isMobileVR();
const AUTO_EXIT_TIMER_SECONDS = 10;

class UIRoot extends Component {
  willCompileAndUploadMaterials = false;

  static propTypes = {
    enterScene: PropTypes.func,
    exitScene: PropTypes.func,
    onSendMessage: PropTypes.func,
    disableAutoExitOnIdle: PropTypes.bool,
    forcedVREntryType: PropTypes.string,
    isBotMode: PropTypes.bool,
    store: PropTypes.object,
    mediaSearchStore: PropTypes.object,
    avnMediaSearchStore: PropTypes.object,
    scene: PropTypes.object,
    authChannel: PropTypes.object,
    hubChannel: PropTypes.object,
    linkChannel: PropTypes.object,
    hub: PropTypes.object,
    availableVREntryTypes: PropTypes.object,
    checkingForDeviceAvailability: PropTypes.bool,
    environmentSceneLoaded: PropTypes.bool,
    entryDisallowed: PropTypes.bool,
    roomUnavailableReason: PropTypes.string,
    hubIsBound: PropTypes.bool,
    isSupportAvailable: PropTypes.bool,
    presenceLogEntries: PropTypes.array,
    presences: PropTypes.object,
    sessionId: PropTypes.string,
    subscriptions: PropTypes.object,
    initialIsFavorited: PropTypes.bool,
    showSignInDialog: PropTypes.bool,
    signInMessage: PropTypes.object,
    onContinueAfterSignIn: PropTypes.func,
    showSafariMicDialog: PropTypes.bool,
    onMediaSearchResultEntrySelected: PropTypes.func,
    onAvatarSaved: PropTypes.func,
    location: PropTypes.object,
    history: PropTypes.object,
    showInterstitialPrompt: PropTypes.bool,
    onInterstitialPromptClicked: PropTypes.func,
    performConditionalSignIn: PropTypes.func,
    hide: PropTypes.bool,
    showPreload: PropTypes.bool,
    onPreloadLoadClicked: PropTypes.func,
    embed: PropTypes.bool,
    onLoaded: PropTypes.func,
    activeObject: PropTypes.object,
    selectedObject: PropTypes.object,
    breakpoint: PropTypes.string,
    // AVN Properties
    avnRoomInfo: PropTypes.object,
    avnDimensionInfo: PropTypes.object,
    avnDimensionConnection: PropTypes.object,
    avnDimensionStatus: PropTypes.object,
    avnAllowNavigation: PropTypes.bool,
    canVoiceChat: PropTypes.bool
  };

  state = {
    enterInVR: false,
    entered: false,
    entering: false,
    dialog: null,
    showShareDialog: false,
    avnShowMediaBrowser: false,
    linkCode: null,
    linkCodeCancel: null,
    miniInviteActivated: false,

    didConnectToNetworkedScene: false,
    noMoreLoadingUpdates: false,
    hideLoader: false,
    showPrefs: false,
    watching: false,
    isStreaming: false,
    isRecordingMode: false,

    waitingOnAudio: false,
    audioTrackClone: null,

    autoExitTimerStartedAt: null,
    autoExitTimerInterval: null,
    autoExitReason: null,
    secondsRemainingBeforeAutoExit: Infinity,

    signedIn: false,
    videoShareMediaSource: null,
    showVideoShareFailed: false,

    objectInfo: null,
    objectSrc: "",
    sidebarId: null,
    presenceCount: 0,
    chatInputEffect: () => {}
  };

  constructor(props) {
    super(props);

    props.mediaSearchStore.setHistory(props.history);

    // An exit handler that discards event arguments and can be cleaned up.
    this.exitEventHandler = () => this.props.exitScene();
    this.mediaDevicesManager = APP.mediaDevicesManager;
  }

  componentDidUpdate(prevProps) {
    const { hubChannel, showSignInDialog } = this.props;
    if (hubChannel) {
      const { signedIn } = hubChannel;
      if (signedIn !== this.state.signedIn) {
        this.setState({ signedIn });
      }
    }
    if (prevProps.showSignInDialog !== showSignInDialog) {
      if (showSignInDialog) {
        this.showContextualSignInDialog();
      } else {
        this.closeDialog();
      }
    }
    if (!this.willCompileAndUploadMaterials && this.state.noMoreLoadingUpdates) {
      this.willCompileAndUploadMaterials = true;
      // We want to ensure that react and the browser have had the chance to render / update.
      // See https://stackoverflow.com/a/34999925 , although our solution flipped setTimeout and requestAnimationFrame
      window.requestAnimationFrame(() => {
        window.setTimeout(() => {
          if (!this.props.isBotMode) {
            try {
              this.props.scene.renderer.compile(this.props.scene.object3D, this.props.scene.camera);
              this.props.scene.object3D.traverse(obj => {
                if (!obj.material) {
                  return;
                }
                const materials = Array.isArray(obj.material) ? obj.material : [obj.material];
                for (const material of materials) {
                  for (const prop in material) {
                    if (material[prop] && material[prop].isTexture) {
                      this.props.scene.renderer.initTexture(material[prop]);
                    }
                  }
                }
              });
            } catch (e) {
              console.error(e);
              this.props.exitScene(ExitReason.sceneError); // https://github.com/mozilla/hubs/issues/1950
            }
          }

          if (!this.state.hideLoader) {
            this.setState({ hideLoader: true });
          }
        }, 0);
      });
    }

    if (!this.props.selectedObject || !prevProps.selectedObject) {
      const sceneEl = this.props.scene;

      if (this.props.selectedObject) {
        sceneEl.classList.add(roomLayoutStyles.sceneSmFullScreen);
      } else {
        sceneEl.classList.remove(roomLayoutStyles.sceneSmFullScreen);
      }
    }

    if (this.state.presenceCount != this.occupantCount()) {
      this.setState({ presenceCount: this.occupantCount() });
    }
  }

  onConcurrentLoad = () => {
    if (qsTruthy("allow_multi") || this.props.store.state.preferences.allowMultipleHubsInstances) return;
    this.startAutoExitTimer(AutoExitReason.concurrentSession);
  };

  onIdleDetected = () => {
    if (
      this.props.disableAutoExitOnIdle ||
      this.state.isStreaming ||
      this.props.store.state.preferences.disableIdleDetection
    )
      return;
    this.startAutoExitTimer(AutoExitReason.idle);
  };

  onActivityDetected = () => {
    if (this.state.autoExitTimerInterval) {
      this.endAutoExitTimer();
    }
  };

  onAvnMediaStoreStateChanged = () => {
    this.setState({ avnShowMediaBrowser: this.props.avnMediaSearchStore.active });
  };

  componentDidMount() {
    window.addEventListener("concurrentload", this.onConcurrentLoad);
    window.addEventListener("idle_detected", this.onIdleDetected);
    window.addEventListener("activity_detected", this.onActivityDetected);
    window.addEventListener("focus_chat", this.onFocusChat);
    document.querySelector(".a-canvas").addEventListener("mouseup", () => {
      if (this.state.showShareDialog) {
        this.setState({ showShareDialog: false });
      }
    });
    this.props.scene.addEventListener("loaded", this.onSceneLoaded);
    this.props.scene.addEventListener("share_video_enabled", this.onShareVideoEnabled);
    this.props.scene.addEventListener("share_video_disabled", this.onShareVideoDisabled);
    this.props.scene.addEventListener("share_video_failed", this.onShareVideoFailed);
    this.props.scene.addEventListener("exit", this.exitEventHandler);
    this.props.scene.addEventListener("action_exit_watch", () => {
      if (this.state.hide) {
        this.setState({ hide: false, hideUITip: false });
      } else {
        this.setState({ watching: false });
      }
    });
    this.props.scene.addEventListener("action_toggle_ui", () =>
      this.setState({ hide: !this.state.hide, hideUITip: false })
    );
    this.props.scene.addEventListener("action_toggle_record", () => {
      console.debug("AVN: Record is disabled");
      return;
      const cursor = document.querySelector("#right-cursor");
      if (this.state.isRecordingMode) {
        // If isRecordingMode is true then toggle it off.
        cursor.object3D.children[1].material.visible = true;
        this.setState({ hide: false, hideUITip: false, isRecordingMode: false });
        document.querySelector(".rs-fps-counter").style.visibility = "visible";
        document.querySelector(".rs-base").style.visibility = "visible";
      } else {
        cursor.object3D.children[1].material.visible = false;
        this.setState({ hide: true, hideUITip: true, isRecordingMode: true });
        document.querySelector(".rs-fps-counter").style.visibility = "hidden";
        document.querySelector(".rs-base").style.visibility = "hidden";
      }
    });
    this.props.scene.addEventListener("devicechange", () => {
      this.forceUpdate();
    });

    // AVN
    this.props.avnMediaSearchStore.addEventListener("statechanged", this.onAvnMediaStoreStateChanged);

    const scene = this.props.scene;

    const unsubscribe = this.props.history.listen((location, action) => {
      const state = location.state;

      // If we just hit back into the entry flow, just go back to the page before the room landing page.
      if (action === "POP" && state && state.entry_step && this.state.entered) {
        unsubscribe();
        navigateToPriorPage(this.props.history);
        return;
      }
    });

    // If we refreshed the page with any state history (eg if we were in the entry flow
    // or had a modal/overlay open) just reset everything to the beginning of the flow by
    // erasing all history that was accumulated for this room (including across refreshes.)
    //
    // We don't do this for the media browser case, since we want to be able to share
    // links to the browser pages
    if (this.props.history.location.state && !sluglessPath(this.props.history.location).startsWith("/media")) {
      popToBeginningOfHubHistory(this.props.history);
    }

    this.setState({
      audioContext: {
        playSound: sound => {
          scene.emit(sound);
        },
        onMouseLeave: () => {
          //          scene.emit("play_sound-hud_mouse_leave");
        }
      }
    });

    if (this.props.forcedVREntryType && this.props.forcedVREntryType.endsWith("_now")) {
      this.props.scene.addEventListener(
        "loading_finished",
        () => {
          console.log("Loading has finished. Checking for forced room entry");
          setTimeout(() => this.handleForceEntry(), 1000);
        },
        { once: true }
      );
    }

    // AVN: If all the entry flow has been skipped then room entry must be forced now
      this.props.scene.addEventListener(
        "loading_finished",
        () => {
          if(!this.props.avnDimensionConnection?.features?.showRoomEntryFlow) {
            // If VOIP is expected there should be some entry interaction to grant permissions
            if(this.props.avnDimensionConnection?.features?.showVoip) {
              console.error("AVN: 'showVoip = true' is incompatible with 'showRoomEntryFlow = false'")
            }
            console.log("AVN: Room entry flow was skipped, so forcing room entry");
            this.beginOrSkipAudioSetup();
          }
        },
        { once: true }
      );
    
    this.playerRig = scene.querySelector("#avatar-rig");

    scene.addEventListener("action_media_tweet", this.onTweet);
  }

  UNSAFE_componentWillMount() {
    this.props.store.addEventListener("statechanged", this.storeUpdated);
  }

  componentWillUnmount() {
    this.props.scene.removeEventListener("loaded", this.onSceneLoaded);
    this.props.scene.removeEventListener("exit", this.exitEventHandler);
    this.props.scene.removeEventListener("share_video_enabled", this.onShareVideoEnabled);
    this.props.scene.removeEventListener("share_video_disabled", this.onShareVideoDisabled);
    this.props.scene.removeEventListener("share_video_failed", this.onShareVideoFailed);
    this.props.scene.removeEventListener("action_media_tweet", this.onTweet);
    this.props.store.removeEventListener("statechanged", this.storeUpdated);
    window.removeEventListener("concurrentload", this.onConcurrentLoad);
    window.removeEventListener("idle_detected", this.onIdleDetected);
    window.removeEventListener("activity_detected", this.onActivityDetected);
    window.removeEventListener("focus_chat", this.onFocusChat);
    // AVN
    this.props.avnMediaSearchStore.removeEventListener("statechanged", this.onAvnMediaStoreStateChanged);
  }

  storeUpdated = () => {
    this.forceUpdate();
  };

  // AVN: Streamlined version of sign-in dialog flow
  avnShowContextualSignInDialog = async () => {
    const { authChannel, onContinueAfterSignIn } = this.props;
    this.showNonHistoriedDialog(RoomSignInModalContainer, {
      step: SignInStep.waitForVerification,
      onClose: onContinueAfterSignIn || this.closeDialog
    });
    const { authComplete } = await authChannel.startOIDCAuthentication(this.props.hubChannel);
    await authComplete;
    this.setState({ signedIn: true });
    (onContinueAfterSignIn || this.closeDialog)();
  };

  showContextualSignInDialog = () => {
    const { signInMessage, authChannel, onContinueAfterSignIn } = this.props;
    this.showNonHistoriedDialog(RoomSignInModalContainer, {
      step: SignInStep.submit,
      message: signInMessage,
      onSignIn: async authPayload => {
        const { authComplete } = await (authPayload == "oidc"
          ? authChannel.startOIDCAuthentication(this.props.hubChannel)
          : authChannel.startAuthentication(authPayload, this.props.hubChannel));

        this.showNonHistoriedDialog(RoomSignInModalContainer, {
          step: SignInStep.waitForVerification,
          onClose: onContinueAfterSignIn || this.closeDialog
        });

        await authComplete;

        this.setState({ signedIn: true });
        this.showNonHistoriedDialog(RoomSignInModalContainer, {
          step: SignInStep.complete,
          onClose: onContinueAfterSignIn || this.closeDialog,
          onContinue: onContinueAfterSignIn || this.closeDialog
        });
      },
      onClose: onContinueAfterSignIn || this.closeDialog
    });
  };

  updateSubscribedState = () => {
    const isSubscribed = this.props.subscriptions && this.props.subscriptions.isSubscribed();
    this.setState({ isSubscribed });
  };

  toggleFavorited = () => {
    this.props.performConditionalSignIn(
      () => this.props.hubChannel.signedIn,
      () => {
        const isFavorited = this.isFavorited();

        this.props.hubChannel[isFavorited ? "unfavorite" : "favorite"]();
        this.setState({ isFavorited: !isFavorited });
      },
      SignInMessages.favoriteRoom
    );
  };

  isFavorited = () => {
    return this.state.isFavorited !== undefined ? this.state.isFavorited : this.props.initialIsFavorited;
  };

  onLoadingFinished = () => {
    console.log("UI root loading has finished");
    this.setState({ noMoreLoadingUpdates: true });
    this.props.scene.emit("loading_finished");

    if (this.props.onLoaded) {
      this.props.onLoaded();
    }
  };

  onSceneLoaded = () => {
    console.log("UI root scene has loaded");
    this.setState({ sceneLoaded: true });
  };

  onShareVideoEnabled = e => {
    this.setState({ videoShareMediaSource: e.detail.source });
  };

  onShareVideoDisabled = () => {
    this.setState({ videoShareMediaSource: null });
  };

  onShareVideoFailed = () => {
    this.setState({ showVideoShareFailed: true });
  };

  shareVideo = mediaSource => {
    this.props.scene.emit(`action_share_${mediaSource}`);
  };

  endShareVideo = () => {
    this.props.scene.emit(MediaDevicesEvents.VIDEO_SHARE_ENDED);
  };

  spawnPen = () => {
    this.props.scene.emit("penButtonPressed");
  };

  onSubscribeChanged = async () => {
    if (!this.props.subscriptions) return;

    await this.props.subscriptions.toggle();
    this.updateSubscribedState();
  };

  handleForceEntry = () => {    
    console.log("Forced entry type: " + this.props.forcedVREntryType);

    if (!this.props.forcedVREntryType) return;

    if (this.props.forcedVREntryType.startsWith("daydream")) {
      this.enterDaydream();
    } else if (this.props.forcedVREntryType.startsWith("vr")) {
      this.enterVR();
    } else if (this.props.forcedVREntryType.startsWith("2d")) {
      this.enter2D();
    }
  };

  startAutoExitTimer = autoExitReason => {
    if (this.state.autoExitTimerInterval) return;

    const autoExitTimerInterval = setInterval(() => {
      let secondsRemainingBeforeAutoExit = Infinity;

      if (this.state.autoExitTimerStartedAt) {
        const secondsSinceStart = (new Date() - this.state.autoExitTimerStartedAt) / 1000;
        secondsRemainingBeforeAutoExit = Math.max(0, Math.floor(AUTO_EXIT_TIMER_SECONDS - secondsSinceStart));
      }

      this.setState({ secondsRemainingBeforeAutoExit });
      this.checkForAutoExit();
    }, 500);

    this.setState({ autoExitTimerStartedAt: new Date(), autoExitTimerInterval, autoExitReason });
  };

  checkForAutoExit = () => {
    if (this.state.secondsRemainingBeforeAutoExit !== 0) return;
    this.endAutoExitTimer();
    this.props.exitScene();
  };

  isWaitingForAutoExit = () => {
    return this.state.secondsRemainingBeforeAutoExit <= AUTO_EXIT_TIMER_SECONDS;
  };

  endAutoExitTimer = () => {
    clearInterval(this.state.autoExitTimerInterval);
    this.setState({
      autoExitTimerStartedAt: null,
      autoExitTimerInterval: null,
      autoExitReason: null,
      secondsRemainingBeforeAutoExit: Infinity
    });
  };

  performDirectEntryFlow = async enterInVR => {
    // AVN: don't show audio dialog if VOIP has been hidden
    if(!this.props.avnDimensionConnection?.features?.showVoip) {
      console.log("AVN: Audio is disabled so audio dialog will be skipped");
      this.beginOrSkipAudioSetup();
      return;
    }

    this.setState({ enterInVR, waitingOnAudio: true });

    const hasGrantedMic = (await grantedMicLabels()).length > 0;

    if (hasGrantedMic) {
      if (!this.mediaDevicesManager.isMicShared) {
        await this.mediaDevicesManager.startMicShare({});
      }
      this.beginOrSkipAudioSetup();
    } else {
      this.onRequestMicPermission();
      this.pushHistoryState("entry_step", "audio");
    }

    this.setState({ waitingOnAudio: false });
  };

  enter2D = async () => {
    console.log("Entering in 2D mode");
    await this.performDirectEntryFlow(false);
  };

  enterVR = async () => {
    console.log("Entering in VR mode");
    if (this.props.forcedVREntryType || this.props.availableVREntryTypes.generic !== VR_DEVICE_AVAILABILITY.maybe) {
      await this.performDirectEntryFlow(true);
    } else {
      this.showNonHistoriedDialog(WebVRUnsupportedModal);
    }
  };

  enterDaydream = async () => {
    console.log("Entering in Daydream mode");
    await this.performDirectEntryFlow(true);
  };

  onRequestMicPermission = async () => {
    if (this.props.canVoiceChat) {
      await this.mediaDevicesManager.startMicShare({});
    }
  };

  beginOrSkipAudioSetup = () => {
    // AVN: Skip the audio setup dialog in favour of being muted by default
    const skipAudioSetup = true || this.props.forcedVREntryType && this.props.forcedVREntryType.endsWith("_now");
    if (skipAudioSetup) {
      console.log(`Skipping audio setup (forcedVREntryType = ${this.props.forcedVREntryType})`);
      this.onAudioReadyButton();
    } else {
      console.log(`Starting audio setup`);
      this.pushHistoryState("entry_step", "audio");
    }
  };

  shouldShowFullScreen = () => {
    // Disable full screen on iOS, since Safari's fullscreen mode does not let you prevent native pinch-to-zoom gestures.
    return (isMobile || AFRAME.utils.device.isMobileVR()) && !isIOS() && !this.state.enterInVR && screenfull.enabled;
  };

  onAudioReadyButton = async () => {
    if (!this.state.enterInVR) {
      await showFullScreenIfAvailable();
    }

    // Push the new history state before going into VR, otherwise menu button will take us back
    clearHistoryState(this.props.history);

    const muteOnEntry = this.props.store.state.preferences.muteMicOnEntry;
    await this.props.enterScene(this.state.enterInVR, muteOnEntry);

    this.setState({ entered: true, entering: false, showShareDialog: false });

    if (this.mediaDevicesManager.isMicShared) {
      console.log(`Using microphone: ${this.mediaDevicesManager.selectedMicLabel}`);
    }

    if (this.mediaDevicesManager.isVideoShared) {
      console.log("Screen sharing enabled.");
    }
  };

  attemptLink = async () => {
    this.pushHistoryState("entry_step", "device");
    const { code, cancel, onFinished } = await this.props.linkChannel.generateCode();
    this.setState({ linkCode: code, linkCodeCancel: cancel });
    onFinished.then(() => {
      this.setState({ log: false, linkCode: null, linkCodeCancel: null });
      this.props.exitScene();
    });
  };

  toggleShareDialog = async () => {
    this.props.store.update({ activity: { hasOpenedShare: true } });
    this.setState({ showShareDialog: !this.state.showShareDialog });
  };

  closeDialog = () => {
    if (this.state.dialog) {
      this.setState({ dialog: null });
    }

    if (isIn2DInterstitial()) {
      exit2DInterstitialAndEnterVR();
    } else {
      showFullScreenIfWasFullScreen();
    }
  };

  showNonHistoriedDialog = (DialogClass, props = {}) => {
    this.setState({
      dialog: <DialogClass {...{ onClose: this.closeDialog, ...props }} />
    });
  };

  toggleStreamerMode = () => {
    const isStreaming = !this.state.isStreaming;
    this.props.scene.systems["hubs-systems"].characterController.fly = isStreaming;

    if (isStreaming) {
      this.props.hubChannel.beginStreaming();
    } else {
      this.props.hubChannel.endStreaming();
    }

    this.setState({ isStreaming });
  };

  renderDialog = (DialogClass, props = {}) => <DialogClass {...{ onClose: this.closeDialog, ...props }} />;

  signOut = async () => {
    await this.props.authChannel.signOut(this.props.hubChannel);
    this.setState({ signedIn: false });
  };

  onMiniInviteClicked = () => {
    const link = `https://${configs.SHORTLINK_DOMAIN}/${this.props.hub.hub_id}`;

    this.setState({ miniInviteActivated: true });
    setTimeout(() => {
      this.setState({ miniInviteActivated: false });
    }, 5000);

    if (canShare()) {
      navigator.share({ title: document.title, url: link });
    } else {
      copy(link);
    }
  };

  sendMessage = msg => {
    this.props.onSendMessage(msg);
  };

  occupantCount = () => {
    return this.props.presences ? Object.entries(this.props.presences).length : 0;
  };

  hasEmbedPresence = () => {
    if (!this.props.presences) {
      return false;
    } else {
      for (const p of Object.values(this.props.presences)) {
        for (const m of p.metas) {
          if (m.context && m.context.embed) {
            return true;
          }
        }
      }
    }

    return false;
  };

  onTweet = ({ detail }) => {
    handleExitTo2DInterstitial(true, () => {}).then(() => {
      this.props.performConditionalSignIn(
        () => this.props.hubChannel.signedIn,
        () => {
          this.showNonHistoriedDialog(TweetModalContainer, {
            hubChannel: this.props.hubChannel,
            isAdmin: configs.isAdmin(),
            ...detail
          });
        },
        SignInMessages.tweet
      );
    });
  };

  onChangeScene = () => {
    this.props.performConditionalSignIn(
      () => this.props.hubChannel.can("update_hub"),
      () => {
        showFullScreenIfAvailable();
        this.props.mediaSearchStore.sourceNavigateWithNoNav("scenes", "use");
      },
      SignInMessages.changeScene
    );
  };

  pushHistoryState = (k, v) => pushHistoryState(this.props.history, k, v);

  setSidebar(sidebarId, otherState) {
    if(sidebarId === "chat" && !this.props.avnDimensionConnection?.permissions?.allowText) {
      console.debug("AVN: Chat is disabled");
      return;  
    }
    this.setState({ sidebarId, chatInputEffect: () => {}, selectedUserId: null, ...otherState });
  }

  toggleSidebar(sidebarId, otherState) {
    if(sidebarId === "chat" && !this.props.avnDimensionConnection?.permissions?.allowText) {
      console.debug("AVN: Chat is disabled");
      return;  
    }
    this.setState(({ sidebarId: curSidebarId }) => {
      const nextSidebarId = curSidebarId === sidebarId ? null : sidebarId;

      return {
        sidebarId: nextSidebarId,
        selectedUserId: null,
        ...otherState
      };
    });
  }

  onFocusChat = e => {
    if(!this.props.avnDimensionConnection?.permissions?.allowText) {
      console.debug("AVN: Chat is disabled");
      return;
    }
    this.setSidebar("chat", {
      chatInputEffect: input => {
        input.focus();
        input.value = e.detail.prefix;
      }
    });
  };

  renderInterstitialPrompt = () => {
    return (
      <div className={styles.interstitial} onClick={() => this.props.onInterstitialPromptClicked()}>
        <div>
          <FormattedMessage id="ui-root.interstitial-prompt" defaultMessage="Continue" />
        </div>
      </div>
    );
  };

  renderBotMode = () => {
    return (
      <div className="loading-panel">
        <img className="loading-panel__logo" src={configs.image("logo")} />
        <input type="file" id="bot-audio-input" accept="audio/*" />
        <input type="file" id="bot-data-input" accept="application/json" />
      </div>
    );
  };

  onEnteringCanceled = () => {
    this.props.hubChannel.sendEnteringCancelledEvent();
    this.setState({ entering: false });
  };

  renderEntryStartPanel = () => {
    const { hasAcceptedProfile, hasChangedName } = this.props.store.state.activity;
    const promptForNameAndAvatarBeforeEntry = this.props.hubIsBound ? !hasAcceptedProfile : !hasChangedName;

    // TODO: What does onEnteringCanceled do?
    return (
      <>
        {/* AVN: Room linking and VR mode have been separated */}
        <RoomEntryModal
          roomName={this.props.hub.name}
          showRoomFull={this.props.entryDisallowed && !this.state.entered}
          showJoinRoom={!this.state.waitingOnAudio && !this.props.entryDisallowed}
          onJoinRoom={() => {
            // AVN: Skip avatar setting and audio dialog (all users are muted by default)
            this.performDirectEntryFlow(false);
            return;
            if (promptForNameAndAvatarBeforeEntry || !this.props.forcedVREntryType) {
              this.setState({ entering: true });
              this.props.hubChannel.sendEnteringEvent();

              if (promptForNameAndAvatarBeforeEntry) {
                this.pushHistoryState("entry_step", "profile");
              } else {
                this.onRequestMicPermission();
                this.pushHistoryState("entry_step", "audio");
              }
            } else {
              this.handleForceEntry();
            }
          }}
          showEnterOnDevice={!this.state.waitingOnAudio && !this.props.entryDisallowed && !isMobileVR}
          onEnterOnDevice={() => this.attemptLink()}
          showSpectate={!this.state.waitingOnAudio}
          onSpectate={() => this.setState({ watching: true })}
          showOptions={false && this.props.hubChannel.canOrWillIfCreator("update_hub") /* AVN: Temporary disabled */}
          onOptions={() => {
            this.props.performConditionalSignIn(
              () => this.props.hubChannel.can("update_hub"),
              () => this.setSidebar("room-settings"),
              SignInMessages.roomSettings
            );
          }}
          headsetConnected={
            isMobile && (
              this.props.availableVREntryTypes.generic !== VR_DEVICE_AVAILABILITY.no || 
              this.props.availableVREntryTypes.cardboard !== VR_DEVICE_AVAILABILITY.no
            )
          }
          onEnterOnConnectedHeadset={() => this.enterVR()}
          avnEntryMessage={this.props.avnDimensionInfo?.entryMessage}
        />
        {!this.state.waitingOnAudio && (
          <EntryStartPanel
            hubChannel={this.props.hubChannel}
            entering={this.state.entering}
            onEnteringCanceled={this.onEnteringCanceled}
          />
        )}
      </>
    );
  };

  renderDevicePanel = () => {
    return (
      <EnterOnDeviceModal
        shortUrl={configs.SHORTLINK_DOMAIN}
        loadingCode={!this.state.linkCode}
        code={this.state.linkCode}
        headsetConnected={
          this.props.availableVREntryTypes.generic !== VR_DEVICE_AVAILABILITY.no ||
          this.props.availableVREntryTypes.cardboard !== VR_DEVICE_AVAILABILITY.no
        }
        unsupportedBrowser={this.props.availableVREntryTypes.generic === VR_DEVICE_AVAILABILITY.maybe}
        onEnterOnConnectedHeadset={() => {
          // TODO: This is bad. linkCodeCancel should be tied to component lifecycle not these callback methods.
          this.state.linkCodeCancel();
          this.setState({ linkCode: null, linkCodeCancel: null });
          this.enterVR();
        }}
        onBack={() => {
          if (this.state.linkCodeCancel) {
            // If the back button is pressed rapidly
            // (before link code generation finishes),
            // linkCodeCancel will not be a function
            // and attempting to call it will throw.
            // TODO: If that happens it may be ideal to
            // interrupt and cancel link code generation.
            this.state.linkCodeCancel();
          }
          this.setState({ linkCode: null, linkCodeCancel: null });
          this.props.history.goBack();
        }}
      />
    );
  };

  renderAudioSetupPanel = () => {
    // TODO: Show HMD mic not chosen warning
    return (
      <MicSetupModalContainer
        scene={this.props.scene}
        onEnterRoom={this.onAudioReadyButton}
        onBack={() => this.props.history.goBack()}
      />
    );
  };

  isInModalOrOverlay = () => {
    if (
      this.state.entered &&
      (IN_ROOM_MODAL_ROUTER_PATHS.find(x => sluglessPath(this.props.history.location).startsWith(x)) ||
        IN_ROOM_MODAL_QUERY_VARS.find(x => new URLSearchParams(this.props.history.location.search).get(x)))
    ) {
      return true;
    }

    if (
      !this.state.entered &&
      (LOBBY_MODAL_ROUTER_PATHS.find(x => sluglessPath(this.props.history.location).startsWith(x)) ||
        LOBBY_MODAL_QUERY_VARS.find(
          (x, i) => new URLSearchParams(this.props.history.location.search).get(x) === LOBBY_MODAL_QUERY_VALUES[i]
        ))
    ) {
      return true;
    }

    if (this.state.objectInfo && this.state.objectInfo.object3D) {
      return true; // TODO: Get object info dialog to use history
    }
    if (this.state.sidebarId !== null) {
      return true;
    }

    return !!(
      (this.props.history &&
        this.props.history.location.state &&
        (this.props.history.location.state.modal || this.props.history.location.state.overlay)) ||
      this.state.dialog
    );
  };

  getSelectedUser() {
    const selectedUserId = this.state.selectedUserId;
    const presence = this.props.presences[selectedUserId];
    const micPresences = getMicrophonePresences();
    return userFromPresence(selectedUserId, presence, micPresences, this.props.sessionId);
  }

  render() {
    const isGhost =
      configs.feature("enable_lobby_ghosts") && (this.state.watching || this.state.hide || this.props.hide);
    const hide = this.state.hide || this.props.hide;

    const rootStyles = {
      [styles.ui]: true,
      "ui-root": true,
      "in-modal-or-overlay": this.isInModalOrOverlay(),
      isGhost,
      hide
    };
    if (this.state.isRecordingMode) {
      return (
        <div className={classNames(rootStyles)}>
          <RoomLayoutContainer scene={this.props.scene} store={this.props.store} viewport={<RecordModeTip />} />
        </div>
      );
    }
    if (this.props.hide || this.state.hide) {
      return (
        <div className={classNames(rootStyles)}>
          <RoomLayoutContainer
            scene={this.props.scene}
            store={this.props.store}
            viewport={!this.state.hideUITip && <FullscreenTip onDismiss={() => this.setState({ hideUITip: true })} />}
          />
        </div>
      );
    }

    if (this.props.showSafariMicDialog) {
      return (
        <div className={classNames(rootStyles)}>
          <RoomLayoutContainer scene={this.props.scene} store={this.props.store} modal={<SafariMicModal />} />
        </div>
      );
    }

    const preload = this.props.showPreload;

    const isLoading = !preload && !this.state.hideLoader;

    if (isLoading && this.state.showPrefs) {
      return (
        <div>
          <LoadingScreenContainer scene={this.props.scene} onLoaded={this.onLoadingFinished} />
          <PreferencesScreen
            onClose={() => {
              this.setState({ showPrefs: false });
            }}
            store={this.props.store}
            scene={this.props.scene}
          />
        </div>
      );
    }
    if (this.props.isBotMode) return this.renderBotMode();
    if (isLoading) {
      return <LoadingScreenContainer scene={this.props.scene} onLoaded={this.onLoadingFinished} />;
    }
    if (this.state.showPrefs) {
      return (
        <PreferencesScreen
          onClose={() => {
            this.setState({ showPrefs: false });
          }}
          store={this.props.store}
          scene={this.props.scene}
        />
      );
    }

    if (this.props.showInterstitialPrompt) return this.renderInterstitialPrompt();

    const entered = this.state.entered;
    const watching = this.state.watching;
    const enteredOrWatching = entered || watching;
    const showRtcDebugPanel = this.props.store.state.preferences.showRtcDebugPanel;
    const showAudioDebugPanel = this.props.store.state.preferences.showAudioDebugPanel;
    const displayNameOverride = this.props.hubIsBound
      ? getPresenceProfileForSession(this.props.presences, this.props.sessionId).displayName
      : null;

    const enableSpectateVRButton =
      configs.feature("enable_lobby_ghosts") &&
      isGhost &&
      !hide &&
      this.props.availableVREntryTypes.generic !== VR_DEVICE_AVAILABILITY.no;

      // AVN Report dimension closure
      const dimensionClosedDialog = this.props.avnDimensionStatus?.state === OperationState.CLOSED 
        ? <AvnDimensionStatusModal detail={this.props.avnDimensionStatus?.detail} /> 
        : undefined

    const entryDialog =
      this.props.availableVREntryTypes &&
      !preload &&
      (this.isWaitingForAutoExit() ? (
        <AutoExitWarningModal
          reason={this.state.autoExitReason}
          secondsRemaining={this.state.secondsRemainingBeforeAutoExit}
          onCancel={this.endAutoExitTimer}
        />
      ) : (
        <>
          <StateRoute stateKey="entry_step" stateValue="device" history={this.props.history}>
            {this.renderDevicePanel()}
          </StateRoute>
          <StateRoute stateKey="entry_step" stateValue="audio" history={this.props.history}>
            {this.renderAudioSetupPanel()}
          </StateRoute>
          <StateRoute
            stateKey="entry_step"
            stateValue="profile"
            history={this.props.history}
            render={props => (
              <ProfileEntryPanel
                {...props}
                containerType="modal"
                displayNameOverride={displayNameOverride}
                finished={() => {
                  if (this.props.forcedVREntryType) {
                    this.pushHistoryState();
                    this.handleForceEntry();
                  } else {
                    this.onRequestMicPermission();
                    this.pushHistoryState("entry_step", "audio");
                  }
                }}
                showBackButton
                onBack={() => this.pushHistoryState()}
                store={this.props.store}
                mediaSearchStore={this.props.mediaSearchStore}
                avatarId={props.location.state.detail && props.location.state.detail.avatarId}
                avnDimensionConnection={this.props.avnDimensionConnection}
                avnShowInformationDialog={informationType => 
                  this.showNonHistoriedDialog(AvnInformationModal, {
                    closeable: true,
                    informationType,
                    onClick: this.avnShowContextualSignInDialog,
                    onClose: this.closeDialog,
                  })}
                />
            )}
          />
          <StateRoute stateKey="entry_step" stateValue="" history={this.props.history}>
            {this.renderEntryStartPanel()}
          </StateRoute>
        </>
      ));

    const presenceLogEntries = this.props.presenceLogEntries || [];

    const mediaSource = this.props.mediaSearchStore.getUrlMediaSource(this.props.history.location);

    // Allow scene picker pre-entry, otherwise wait until entry
    const showMediaBrowser =
      mediaSource && (["scenes", "avatars", "favorites"].includes(mediaSource) || this.state.entered);


    const streaming = this.state.isStreaming;

    const showObjectList = enteredOrWatching && this.props.avnDimensionConnection?.features?.showObjectList;
    const showECSObjectsMenuButton = qsTruthy("ecsDebug");

    const streamer = getCurrentStreamer();
    const streamerName = streamer && streamer.displayName;

    const renderEntryFlow = (this.props.entryDisallowed && !enteredOrWatching)
      || (this.props.avnDimensionConnection?.features?.showRoomEntryFlow && ((!enteredOrWatching && this.props.hub) || this.isWaitingForAutoExit()));

    const canCreateRoom = !configs.feature("disable_room_creation") || configs.isAdmin();
    const canCloseRoom = this.props.hubChannel && !!this.props.hubChannel.canOrWillIfCreator("close_hub");
    const isModerator = this.props.hubChannel && this.props.hubChannel.canOrWillIfCreator("kick_users") && !isMobileVR;

    const avnShowPlaceMenu = true || this.props.avnDimensionConnection?.permissions?.allowShareMedia 
    || this.props.avnDimensionConnection?.permissions?.allowPen
    || this.props.avnDimensionConnection?.permissions?.allowCamera

    const moreMenu = [
      {
        id: "user",
        label: !this.props.avnDimensionConnection?.features?.showSignIn ? "" : !this.state.signedIn ? (
          <FormattedMessage id="more-menu.not-signed-in" defaultMessage="You are not signed in" />
        ) : (
          <FormattedMessage
            id="more-menu.you-signed-in-as"
            defaultMessage="Signed in as: {email}"
            values={{ email: maskEmail(this.props.store.state.credentials.email) }}
          />
        ),
        items: [
          this.state.signedIn
            ? this.props.avnDimensionConnection?.features?.showSignIn && 
              {
                id: "sign-out",
                label: <FormattedMessage id="more-menu.sign-out" defaultMessage="Sign Out" />,
                icon: LeaveIcon,
                onClick: async () => {
                  await this.props.authChannel.signOut(this.props.hubChannel);
                  this.setState({ signedIn: false });
                }
              }
            : this.props.avnDimensionConnection?.features?.showSignIn && {
                id: "sign-in",
                label: <FormattedMessage id="more-menu.sign-in" defaultMessage="Sign In" />,
                icon: EnterIcon,
                onClick: async () => await this.avnShowContextualSignInDialog()
              },
          // AVN: Feature is incompatible with eduverse
          avnShowHiddenFeatures && canCreateRoom && {
            id: "create-room",
            label: <FormattedMessage id="more-menu.create-room" defaultMessage="Create Room" />,
            icon: AddIcon,
            onClick: () =>
              this.showNonHistoriedDialog(LeaveRoomModal, {
                destinationUrl: "/",
                reason: LeaveReason.createRoom
              })
          },
          this.props.avnDimensionConnection?.features?.showAccountInfo && {
            id: "user-profile",
            // AVN: Profile sidebar is more generic
            label: <FormattedMessage id="more-menu.my-account" defaultMessage="Account" />,
            icon: AvatarIcon,
            onClick: () => this.setSidebar("profile")
          },
          // AVN: Feature is incompatible with eduverse
          avnShowHiddenFeatures && {
            id: "favorite-rooms",
            label: <FormattedMessage id="more-menu.favorite-rooms" defaultMessage="Favorite Rooms" />,
            icon: FavoritesIcon,
            onClick: () =>
              this.props.performConditionalSignIn(
                () => this.props.hubChannel.signedIn,
                () => {
                  showFullScreenIfAvailable();
                  this.props.mediaSearchStore.sourceNavigateWithNoNav("favorites", "use");
                },
                SignInMessages.favoriteRooms
              )
          },
          // AVN: Feature not exposed to simplify UX
          avnShowHiddenFeatures && {
            id: "preferences",
            label: <FormattedMessage id="more-menu.preferences" defaultMessage="Preferences" />,
            icon: SettingsIcon,
            onClick: () => this.setState({ showPrefs: true })
          }
        ].filter(item => item)
      },
      // AVN: Features are incompatible with eduverse
      avnShowHiddenFeatures && {
        id: "room",
        label: <FormattedMessage id="more-menu.room" defaultMessage="Room" />,
        items: [
          {
            id: "room-info",
            label: <FormattedMessage id="more-menu.room-info" defaultMessage="Room Info and Settings" />,
            icon: HomeIcon,
            onClick: () => this.setSidebar("room-info")
          },
          (this.props.breakpoint === "sm" || this.props.breakpoint === "md") &&
            (this.props.hub.entry_mode !== "invite" || this.props.hubChannel.can("update_hub")) && {
              id: "invite",
              label: <FormattedMessage id="more-menu.invite" defaultMessage="Invite" />,
              icon: InviteIcon,
              onClick: () => this.props.scene.emit("action_invite")
            },
          this.isFavorited()
            ? {
                id: "unfavorite-room",
                label: <FormattedMessage id="more-menu.unfavorite-room" defaultMessage="Unfavorite Room" />,
                icon: StarIcon,
                onClick: () => this.toggleFavorited()
              }
            : {
                id: "favorite-room",
                label: <FormattedMessage id="more-menu.favorite-room" defaultMessage="Favorite Room" />,
                icon: StarOutlineIcon,
                onClick: () => this.toggleFavorited()
              },
          isModerator &&
            entered && {
              id: "streamer-mode",
              label: streaming ? (
                <FormattedMessage id="more-menu.exit-streamer-mode" defaultMessage="Exit Streamer Mode" />
              ) : (
                <FormattedMessage id="more-menu.enter-streamer-mode" defaultMessage="Enter Streamer Mode" />
              ),
              icon: CameraIcon,
              onClick: () => this.toggleStreamerMode()
            },
          (this.props.breakpoint === "sm" || this.props.breakpoint === "md") &&
            entered && {
              id: "leave-room",
              label: <FormattedMessage id="more-menu.enter-leave-room" defaultMessage="Leave Room" />,
              icon: LeaveIcon,
              onClick: () => {
                this.showNonHistoriedDialog(LeaveRoomModal, {
                  destinationUrl: "/",
                  reason: LeaveReason.leaveRoom
                });
              }
            },
          // AVN: Feature is incompatible with eduverse
          avnShowHiddenFeatures && canCloseRoom && {
            id: "close-room",
            label: <FormattedMessage id="more-menu.close-room" defaultMessage="Close Room" />,
            icon: DeleteIcon,
            onClick: () =>
              this.props.performConditionalSignIn(
                () => this.props.hubChannel.can("update_hub"),
                () => {
                  this.showNonHistoriedDialog(CloseRoomModal, {
                    roomName: this.props.hub.name,
                    onConfirm: () => {
                      this.props.hubChannel.closeHub();
                    }
                  });
                },
                SignInMessages.closeRoom
              )
          }
        ].filter(item => item)
      },
      {
        id: "support",
        label: <FormattedMessage id="more-menu.support" defaultMessage="Support" />,
        items: [
          configs.feature("show_community_link") && {
            id: "community",
            label: <FormattedMessage id="more-menu.community" defaultMessage="Community" />,
            icon: DiscordIcon,
            href: configs.link("community", "https://discord.gg/dFJncWwHun")
          },
          configs.feature("show_issue_report_link") && {
            id: "report-issue",
            label: <FormattedMessage id="more-menu.report-issue" defaultMessage="Report Issue" />,
            icon: WarningCircleIcon,
            href: configs.link("issue_report", "https://hubs.mozilla.com/docs/help.html")
          },
          // AVN: UX clutter
          this.props.avnDimensionConnection?.features?.showStartTour && entered && {
            id: "start-tour",
            label: <FormattedMessage id="more-menu.start-tour" defaultMessage="Start Tour" />,
            icon: SupportIcon,
            onClick: () => this.props.scene.systems.tips.resetTips()
          },
          configs.feature("show_docs_link") && {
            id: "help",
            label: <FormattedMessage id="more-menu.help" defaultMessage="Help" />,
            icon: SupportIcon,
            // AVN: Alt help link
            href: configs.link("docs", "https://support.avantiseducation.com")
          },
          // AVN: Expose log saving support feature
          {
            id: "save-console-logs",
            label: <FormattedMessage id="more-menu.save-console-logs" defaultMessage="Save Logs" />,
            icon: SaveIcon,
            onClick: () => SaveConsoleLog()
          },
          configs.feature("show_controls_link") && {
            id: "controls",
            label: <FormattedMessage id="more-menu.controls" defaultMessage="Controls" />,
            icon: SupportIcon,
            href: configs.link("controls", "https://hubs.mozilla.com/docs/hubs-controls.html")
          },
          configs.feature("show_whats_new_link") && {
            id: "whats-new",
            label: <FormattedMessage id="more-menu.whats-new" defaultMessage="What's New" />,
            icon: SupportIcon,
            href: "/whats-new"
          },
          configs.feature("show_terms") && {
            id: "tos",
            label: <FormattedMessage id="more-menu.tos" defaultMessage="Terms of Service" />,
            icon: TextDocumentIcon,
            href: configs.link("terms_of_use", TERMS)
          },
          configs.feature("show_privacy") && {
            id: "privacy",
            label: <FormattedMessage id="more-menu.privacy" defaultMessage="Privacy Notice" />,
            icon: ShieldIcon,
            href: configs.link("privacy_notice", PRIVACY)
          }
        ].filter(item => item)
      }
      // AVN: Allow whole groups to be filtered out
    ].filter(group => group);

    return (
      <MoreMenuContextProvider>
        <ReactAudioContext.Provider value={this.state.audioContext}>
          <div className={classNames(rootStyles)}>
            {preload && this.props.hub && (
              <PreloadOverlay
                hubName={this.props.hub.name}
                hubScene={this.props.hub.scene}
                baseUrl={hubUrl(this.props.hub.hub_id).href}
                onLoadClicked={this.props.onPreloadLoadClicked}
              />
            )}
            {!this.state.dialog && (
              <StateRoute
                stateKey="overlay"
                stateValue="avatar-editor"
                history={this.props.history}
                render={props => (
                  <AvatarEditor
                    className={styles.avatarEditor}
                    signedIn={this.state.signedIn}
                    onSignIn={this.showContextualSignInDialog}
                    onSave={() => {
                      if (props.location.state.detail && props.location.state.detail.returnToProfile) {
                        this.props.history.goBack();
                      } else {
                        this.props.history.goBack();
                        // We are returning to the media browser. Trigger an update so that the filter switches to
                        // my-avatars, now that we've saved an avatar.
                        this.props.mediaSearchStore.sourceNavigateWithNoNav("avatars", "use");
                      }
                      this.props.onAvatarSaved();
                    }}
                    onClose={() => this.props.history.goBack()}
                    store={this.props.store}
                    debug={avatarEditorDebug}
                    avatarId={props.location.state.detail && props.location.state.detail.avatarId}
                    hideDelete={props.location.state.detail && props.location.state.detail.hideDelete}
                  />
                )}
              />
            )}
            {!this.state.dialog && showMediaBrowser && (
              <MediaBrowserContainer
                history={this.props.history}
                mediaSearchStore={this.props.mediaSearchStore}
                hubChannel={this.props.hubChannel}
                onMediaSearchResultEntrySelected={(entry, selectAction) => {
                  if (entry.type === "room") {
                    this.showNonHistoriedDialog(LeaveRoomModal, {
                      destinationUrl: entry.url,
                      reason: LeaveReason.joinRoom
                    });
                  } else {
                    this.props.onMediaSearchResultEntrySelected(entry, selectAction);
                  }
                }}
                performConditionalSignIn={this.props.performConditionalSignIn}
                showNonHistoriedDialog={this.showNonHistoriedDialog}
                store={this.props.store}
                scene={this.props.scene}
              />
            )}
            {!this.state.dialog && this.state.avnShowMediaBrowser && (
              <AvnMediaBrowserContainer
                history={this.props.history}
                avnMediaSearchStore={this.props.avnMediaSearchStore}
                hubChannel={this.props.hubChannel}
                onActivitySelected={activity => {
                  const assetId = activity?.assetId
                  if(assetId) {
                    AVN.tryChangeScene(assetId);
                  } else {
                    console.error(`Unexpected blank asset ID for selected activity ${activity}`)
                  }
                }}
                performConditionalSignIn={this.props.performConditionalSignIn}
                showNonHistoriedDialog={this.showNonHistoriedDialog}
                store={this.props.store}
                scene={this.props.scene}
              />
            )}
            {this.props.hub && (
              <RoomLayoutContainer
                scene={this.props.scene}
                store={this.props.store}
                objectFocused={!!this.props.selectedObject}
                streaming={streaming}
                avnDimensionConnection={this.props.avnDimensionConnection}
                viewport={
                  <>
                    {dimensionClosedDialog}
                    {!this.state.dialog && renderEntryFlow ? entryDialog : undefined}
                    {/* AVN: Hide "More" button on mobile */}
                    {avnShowHiddenFeatures && !this.props.selectedObject && <CompactMoreMenuButton />}
                    {this.props.avnDimensionConnection?.features?.showSidebar && (!this.props.selectedObject ||
                      (this.props.breakpoint !== "sm" && this.props.breakpoint !== "md")) && (
                      <ContentMenu>
                        {this.props.avnDimensionConnection?.features?.showPeopleMenu && (
                        <PeopleMenuButton
                          active={this.state.sidebarId === "people"}
                          onClick={() => {
                            if(this.props.avnDimensionConnection?.permissions?.allowPeopleMenu) {
                              this.toggleSidebar("people")
                            } else {
                              this.showNonHistoriedDialog(AvnInformationModal, {
                                closeable: true,
                                informationType: "signin",
                                onClick: this.avnShowContextualSignInDialog,
                                onClose: this.closeDialog,
                              })  
                            }
                          }}
                          presencecount={this.state.presenceCount}
                        />
                        )}
                        {showObjectList && (
                          <ObjectsMenuButton
                            active={this.state.sidebarId === "objects"}
                            onClick={() => this.toggleSidebar("objects")}
                          />
                        )}
                        {this.props.avnDimensionConnection?.features?.showStudentNotes && this.props.avnDimensionConnection?.permissions?.allowStudentNotes && (
                        <EduverseStudentMenuButton
                          active={this.state.sidebarId === "eduverse-student"}
                          onClick={() => this.toggleSidebar("eduverse-student")}
                        />)}
                        {this.props.avnDimensionConnection?.features?.showTeacherNotes && (
                        <EduverseTeacherMenuButton
                          active={this.state.sidebarId === "eduverse-teacher"}
                          onClick={() => {
                            if(this.props.avnDimensionConnection?.permissions?.allowTeacherNotes) {
                              this.toggleSidebar("eduverse-teacher")
                            } else {
                              this.showNonHistoriedDialog(AvnInformationModal, {
                                closeable: true,
                                informationType: "subscribe",
                                onClose: this.closeDialog,
                              });
                            }    
                          }}
                        />)}
                        {showECSObjectsMenuButton && (
                          <ECSDebugMenuButton
                            active={this.state.sidebarId === "ecs-debug"}
                            onClick={() => this.toggleSidebar("ecs-debug")}
                          />
                        )}
                      </ContentMenu>
                    )}
                    {!entered && !streaming && !isMobile && streamerName && <SpectatingLabel name={streamerName} />}
                    {this.props.activeObject && (
                      <ObjectMenuContainer
                        hubChannel={this.props.hubChannel}
                        scene={this.props.scene}
                        onOpenProfile={() => this.setSidebar("profile")}
                        onGoToObject={() => {
                          if (this.props.breakpoint === "sm") {
                            this.setSidebar(null);
                          }
                        }}
                      />
                    )}
                    {this.state.sidebarId !== "chat" && this.props.hub && (
                      <PresenceLog
                        preset={"InRoom"}
                        exclude={isSmallScreen ? [] : ["permission"]}
                        presences={this.props.presences}
                        entries={presenceLogEntries}
                        hubId={this.props.hub.hub_id}
                        history={this.props.history}
                        onViewProfile={sessionId => this.setSidebar("user", { selectedUserId: sessionId })}
                      />
                    )}
                    <NotificationsContainer>
                      <TipContainer
                        hide={this.props.activeObject}
                        inLobby={watching}
                        inRoom={entered}
                        isEmbedded={this.props.embed}
                        isStreaming={streaming}
                        hubId={this.props.hub.hub_id}
                        presences={this.props.presences}
                        scene={this.props.scene}
                        store={this.props.store}
                      />
                      {!isSmallScreen && (
                        <PresenceLog
                          preset={"Notifications"}
                          include={["permission"]}
                          presences={this.props.presences}
                          entries={presenceLogEntries}
                          hubId={this.props.hub.hub_id}
                          history={this.props.history}
                          onViewProfile={sessionId => this.setSidebar("user", { selectedUserId: sessionId })}
                        />
                      )}
                    </NotificationsContainer>
                    {(showRtcDebugPanel || showAudioDebugPanel) && (
                      <RTCDebugPanel
                        history={this.props.history}
                        store={window.APP.store}
                        scene={this.props.scene}
                        presences={this.props.presences}
                        sessionId={this.props.sessionId}
                        showRtcDebug={showRtcDebugPanel}
                        showAudioDebug={showAudioDebugPanel}
                      />
                    )}
                  </>
                }
                sidebar={
                  this.state.sidebarId ? (
                    <>
                      {this.props.avnDimensionConnection?.permissions?.allowText && this.state.sidebarId === "chat" && (
                        <ChatSidebarContainer
                          presences={this.props.presences}
                          occupantCount={this.occupantCount()}
                          canSpawnMessages={entered && this.props.hubChannel.can("spawn_and_move_media")}
                          scene={this.props.scene}
                          onClose={() => this.setSidebar(null)}
                          inputEffect={this.state.chatInputEffect}
                        />
                      )}
                      {/* AVN: Object menu is disabled */}
                      {false && this.state.sidebarId === "objects" && (
                        <ObjectsSidebarContainer
                          hubChannel={this.props.hubChannel}
                          onClose={() => this.setSidebar(null)}
                        />
                      )}
                      {this.state.sidebarId === "people" && (
                        <PeopleSidebarContainer
                          displayNameOverride={displayNameOverride}
                          store={this.props.store}
                          mediaSearchStore={this.props.mediaSearchStore}
                          hubChannel={this.props.hubChannel}
                          history={this.props.history}
                          mySessionId={this.props.sessionId}
                          presences={this.props.presences}
                          onClose={() => this.setSidebar(null)}
                          onCloseDialog={() => this.closeDialog()}
                          showNonHistoriedDialog={this.showNonHistoriedDialog}
                          performConditionalSignIn={this.props.performConditionalSignIn}
                          avnShowInformationDialog={informationType => 
                            this.showNonHistoriedDialog(AvnInformationModal, {
                              closeable: true,
                              informationType,
                              onClick: this.avnShowContextualSignInDialog,
                              onClose: this.closeDialog,
                            })}
                          avnDimensionConnection={this.props.avnDimensionConnection}
                        />
                      )}
                      {this.state.sidebarId === "eduverse-teacher" && (
                        <EduverseTeacherSidebarContainer
                          roomInfo={this.props.avnRoomInfo}
                          onClose={() => this.setSidebar(null)}
                        />
                      )}
                      {this.state.sidebarId === "eduverse-student" && (
                        <EduverseStudentSidebarContainer
                          roomInfo={this.props.avnRoomInfo}
                          onClose={() => this.setSidebar(null)}
                        />
                      )}
                      {this.state.sidebarId === "profile" && (
                        <ProfileEntryPanel
                          history={this.props.history}
                          containerType="sidebar"
                          displayNameOverride={displayNameOverride}
                          finished={() => this.setSidebar(null)}
                          onClose={() => this.setSidebar(null)}
                          store={this.props.store}
                          mediaSearchStore={this.props.mediaSearchStore}
                          avnShowInformationDialog={informationType => 
                            this.showNonHistoriedDialog(AvnInformationModal, {
                              closeable: true,
                              informationType,
                              onClick: this.avnShowContextualSignInDialog,
                              onClose: this.closeDialog,
                            })}
                          avnDimensionConnection={this.props.avnDimensionConnection}
                        />
                      )}
                      {this.state.sidebarId === "user" && (
                        <UserProfileSidebarContainer
                          user={this.getSelectedUser()}
                          hubChannel={this.props.hubChannel}
                          performConditionalSignIn={this.props.performConditionalSignIn}
                          onClose={() => this.setSidebar(null)}
                          onCloseDialog={() => this.closeDialog()}
                          showNonHistoriedDialog={this.showNonHistoriedDialog}
                        />
                      )}
                      {this.state.sidebarId === "room-info" && (
                        <RoomSidebar
                          accountId={this.props.sessionId}
                          room={this.props.hub}
                          canEdit={this.props.hubChannel.canOrWillIfCreator("update_hub")}
                          onEdit={() => {
                            this.props.performConditionalSignIn(
                              () => this.props.hubChannel.can("update_hub"),
                              () => this.setSidebar("room-info-settings"),
                              SignInMessages.roomSettings
                            );
                          }}
                          onClose={() => this.setSidebar(null)}
                          onChangeScene={this.onChangeScene}
                        />
                      )}
                      {this.state.sidebarId === "room-info-settings" && (
                        <RoomSettingsSidebarContainer
                          room={this.props.hub}
                          hubChannel={this.props.hubChannel}
                          showBackButton
                          onClose={() => this.setSidebar("room-info")}
                          onChangeScene={this.onChangeScene}
                        />
                      )}
                      {this.state.sidebarId === "room-settings" && (
                        <RoomSettingsSidebarContainer
                          room={this.props.hub}
                          accountId={this.props.sessionId}
                          hubChannel={this.props.hubChannel}
                          onClose={() => this.setSidebar(null)}
                          onChangeScene={this.onChangeScene}
                        />
                      )}
                      {this.state.sidebarId === "ecs-debug" && (
                        <ECSDebugSidebarContainer onClose={() => this.setSidebar(null)} />
                      )}
                    </>
                  ) : undefined
                }
                modal={this.state.dialog}                
                toolbarLeft={
                  <>
                    { // AVN: Back button (useful for mobile fullscreen)
                    this.props.avnDimensionConnection?.permissions?.allowBack &&
                    <ToolbarButton
                      disabled={!entered || !this.props.avnAllowNavigation}
                      title={this.props.avnAllowNavigation ? "" : "The teacher has control" }
                      icon={<ArrowBackIcon />}
                      label={<FormattedMessage id="toolbar.back-button" defaultMessage="Back" />}
                      onClick={() => {
                        window.history.back();
                      }}
                    />
                    }
                    { // AVN: Scene selection
                    this.props.avnDimensionConnection?.permissions?.allowExplore &&
                    <ToolbarButton
                      disabled={!this.props.avnAllowNavigation}
                      title={this.props.avnAllowNavigation ? "" : "The teacher has control" }
                      icon={<ExploreIcon />}
                      label={<FormattedMessage id="toolbar.home-button" defaultMessage="Explore" />}
                      onClick={() => {
                        this.props.avnMediaSearchStore.active = true;
                      }}
                    />
                    }
                    { 
                      // AVN: Hall Pass button
                      this.props.avnDimensionConnection?.features?.showPass &&
                      (this.props.avnDimensionConnection?.permissions?.allowPass                    
                      ? <AvnHallPassPopoverContainer/>                 
                      : <ToolbarButton
                        label={<FormattedMessage id="avn-hall-pass-popover.button-label" defaultMessage="Hall Pass" />}
                        icon={<PassIcon />}
                        onClick={() => 
                          this.showNonHistoriedDialog(AvnInformationModal, {
                            closeable: true,
                            informationType: "signin",
                            onClick: this.avnShowContextualSignInDialog,
                            onClose: this.closeDialog,
                          })}
                        />
                      )
                    }
                  </>
                }
                toolbarCenter={
                  <>
                    {watching && (
                      <>
                        <ToolbarButton
                          icon={<EnterIcon />}
                          label={<FormattedMessage id="toolbar.join-room-button" defaultMessage="Join Room" />}
                          preset="accept"
                          onClick={() => this.setState({ watching: false })}
                        />
                        {enableSpectateVRButton && (
                          <ToolbarButton
                            icon={<VRIcon />}
                            preset="accent5"
                            label={
                              <FormattedMessage id="toolbar.spectate-in-vr-button" defaultMessage="Spectate in VR" />
                            }
                            onClick={() => this.props.scene.enterVR()}
                          />
                        )}
                      </>
                    )}
                    {entered && (
                      <>
                        { 
                        this.props.avnDimensionConnection?.features?.showVoip && 
                        <AudioPopoverContainer scene={this.props.scene} />
                        }
                        { 
                        this.props.avnDimensionConnection?.permissions?.allowShareScreen && 
                        <SharePopoverContainer scene={this.props.scene} hubChannel={this.props.hubChannel} />
                        } 
                        { // AVN: Place menu not required
                        avnShowPlaceMenu && 
                        <PlacePopoverContainer
                          scene={this.props.scene}
                          hubChannel={this.props.hubChannel}
                          mediaSearchStore={this.props.mediaSearchStore}
                          showNonHistoriedDialog={this.showNonHistoriedDialog}
                          avnDimensionConnection={this.props.avnDimensionConnection}
                        />
                        }
                        { // AVN: React menu not required
                          this.props.avnDimensionConnection?.permissions?.allowReact && this.props.hubChannel.can("spawn_emoji") && (
                          <ReactionPopoverContainer
                            scene={this.props.scene}
                            initialPresence={getPresenceProfileForSession(this.props.presences, this.props.sessionId)}
                          />
                        )}

                        { // AVN: Full screen button for mobile 
                        this.shouldShowFullScreen() && (
                          <ToolbarButton
                            icon={<FullScreenIcon />}
                            label={<FormattedMessage id="toolbar.fullscreen-button" defaultMessage="Fullscreen" />}
                            onClick={async () => {
                              if(isFullScreen()) {
                                await exitFullScreen();
                              } else {
                                await showFullScreenIfAvailable();
                              }
                            }}
                          />
                        )
                        }
                      </>
                    )}
                    {
                      // AVN: Chat is not currently enabled
                      this.props.avnDimensionConnection?.permissions?.allowText &&
                      <ChatToolbarButtonContainer onClick={() => this.toggleSidebar("chat")} />
                    }
                    { // AVN: Photo / screenshot button 
                      this.props.avnDimensionConnection?.features?.showPhoto && 
                      <ToolbarButton
                      icon={<CameraIcon />}
                      label={<FormattedMessage id="toolbar.photo-button" defaultMessage="Photo" />}
                      onClick={() => {
                        saveScreenshot(this.props.scene, "jpeg");
                      }}
                    />
                    }
                    {entered && isMobileVR && (
                      <ToolbarButton
                        className={styleUtils.hideLg}
                        icon={<VRIcon />}
                        preset="accept"
                        label={<FormattedMessage id="toolbar.enter-vr-button" defaultMessage="Enter VR" />}
                        onClick={() => exit2DInterstitialAndEnterVR(true)}
                      />
                    )}
                  </>
                }
                toolbarRight={
                  <>
                    {this.props.avnDimensionConnection?.features?.showFocus && (<ToolbarButton
                      icon={<GatherIcon />}
                      label={<FormattedMessage id="toolbar.gather-button" defaultMessage="Gather" />}
                      preset={ AVN.isGuiding ? "primary" : "basic" }
                      onClick={ async () => {
                        if(this.props.avnDimensionConnection?.permissions?.allowFocus) {
                          if(AVN.isGuiding) {
                            await AVN.resetLessonFocus()
                          } else {
                            // Get current position if set
                            const position = document.getElementById("avatar-rig").object3D.getWorldPosition(new THREE.Vector3())
                            await AVN.setLessonFocus(position)
                          }
                          this.forceUpdate();
  
                        } else {
                          this.showNonHistoriedDialog(AvnInformationModal, {
                            closeable: true,
                            informationType: "subscribe",
                            onClose: this.closeDialog,
                          });
                        }
                      }}
                    />)}
                    {
                      this.props.avnDimensionConnection?.features?.showInvite &&                         
                      (
                      this.props.avnDimensionConnection?.permissions?.allowInvite                    
                      ? <InvitePopoverContainer
                        hub={this.props.hub}
                        hubChannel={this.props.hubChannel}
                        scene={this.props.scene}
                        store={this.props.store}
                      />              
                      : <ToolbarButton
                        label={<FormattedMessage id="invite-popover.title" defaultMessage="Invite" />}
                        icon={<InviteIcon />}
                        onClick={() => 
                          this.showNonHistoriedDialog(AvnInformationModal, {
                            closeable: true,
                            informationType: "signin",
                            onClick: this.avnShowContextualSignInDialog,
                            onClose: this.closeDialog,
                          })}
                        />
                      )
                    }
                    { // AVN: Device invitation QR code
                      this.props.avnDimensionConnection?.features?.showDeviceQrInvite && (
                      <AvnDeviceInvitePopoverContainer
                        hub={this.props.hub}
                        hubChannel={this.props.hubChannel}
                        scene={this.props.scene}
                        store={this.props.store}
                      />)
                    }
                    {entered &&
                      isMobileVR && (
                        <ToolbarButton
                          icon={<VRIcon />}
                          preset="accept"
                          label={<FormattedMessage id="toolbar.enter-vr-button" defaultMessage="Enter VR" />}
                          onClick={() => exit2DInterstitialAndEnterVR(true)}
                        />
                      )
                    }
                    { /* AVN: "Leave" menu not currently required */ }                       
                    {avnShowHiddenFeatures && entered && (
                      <ToolbarButton
                        icon={<LeaveIcon />}
                        label={<FormattedMessage id="toolbar.leave-room-button" defaultMessage="Leave" />}
                        preset="cancel"
                        onClick={() => {
                          this.showNonHistoriedDialog(LeaveRoomModal, {
                            destinationUrl: "/",
                            reason: LeaveReason.leaveRoom
                          });
                        }}
                      />
                    )}
                    <MoreMenuPopoverButton menu={moreMenu} />
                  </>
                }
              />
            )}
          </div>
        </ReactAudioContext.Provider>
      </MoreMenuContextProvider>
    );
  }
}

function UIRootHooksWrapper(props) {
  useAccessibleOutlineStyle();
  const breakpoint = useCssBreakpoints();
  const { voice_chat: canVoiceChat } = usePermissions();

  useEffect(() => {
    const el = document.getElementById("preload-overlay");
    el.classList.add("loaded");

    const sceneEl = props.scene;

    sceneEl.classList.add(roomLayoutStyles.scene);

    // Remove the preload overlay after the animation has finished.
    const timeout = setTimeout(() => {
      el.remove();
    }, 500);

    return () => {
      clearTimeout(timeout);
      sceneEl.classList.remove(roomLayoutStyles.scene);
    };
  }, [props.scene]);

  return (
    <ChatContextProvider messageDispatch={props.messageDispatch}>
      <ObjectListProvider scene={props.scene}>
        <UIRoot breakpoint={breakpoint} {...props} canVoiceChat={canVoiceChat} />
      </ObjectListProvider>
    </ChatContextProvider>
  );
}

UIRootHooksWrapper.propTypes = {
  scene: PropTypes.object.isRequired,
  messageDispatch: PropTypes.object,
  store: PropTypes.object.isRequired
};

export default UIRootHooksWrapper;
