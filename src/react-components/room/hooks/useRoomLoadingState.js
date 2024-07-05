import { useEffect, useReducer, useRef, useCallback } from "react";
import { useIntl, defineMessages } from "react-intl";
import { waitForPreloads } from "../../../utils/preload";
import { shouldUseNewLoader } from "../../../utils/bit-utils";

function reducer(state, action) {
  // AVN: Diagnostic tracking
  console.log(`AVN: Load event '${action.type}'`)
  switch (action.type) {
    case "loading-error":
      return { ...state, loadingError: action.errorMessage };
    case "eduverse-connected":
      return { ...state, eduverseConnected: true };
    case "dimension-joined":
      return { ...state, dimensionJoined: true };
    case "done-preloading":
      return { ...state, donePreloading: true };
    case "object-loading":
      return { ...state, objectCount: state.objectCount + 1 };
    case "object-loaded":
      return { ...state, loadedCount: state.loadedCount + 1 };
    case "all-objects-loaded":
      return {
        ...state,
        allObjectsLoaded: true
      };
    case "environment-loaded": {
      return {
        ...state,
        environmentLoaded: true
      };
    }
    case "network-connected":
      return {
        ...state,
        networkConnected: true
      };
    case "dialog-connected":
      return {
        ...state,
        dialogConnected: true
      };
  }
}

// defineMessages informs babel-plugin-react-intl what i18n data can be stripped/embedded when bundling.
const messages = defineMessages({
  loadingError: {
    id: "loading-screen.loading-error",
    description: "An error occured loading the room.",
    defaultMessage: "Unable to load room"
  },
  connectingEduverse: {
    id: "loading-screen.connecting-eduverse",
    description: "Waiting to connect to Eduverse.",
    defaultMessage: "Connecting to Edvuerse..."
  },
  joiningDimension: {
    id: "loading-screen.joining-dimension",
    description: "Waiting to join the session.",
    defaultMessage: "Joining session..."
  },
  loadingScene: {
    id: "loading-screen.loading-scene",
    description: "The scene has started loading.",
    defaultMessage: "Loading scene..."
  },
  loadingObjects: {
    id: "loading-screen.loading-objects",
    description: "The loading progress. How many objects have finished loading?",
    defaultMessage: "Loading objects {loadedCount}/{objectCount}"
  },
  connectingScene: {
    id: "loading-screen.connecting",
    description: "The scene is loaded, we are waiting for the networked scene to be connected to enter.",
    defaultMessage: "Connecting to the scene..."
  },
  enteringRoom: {
    id: "loading-screen.entering-room",
    description:
      "Once the scene has finished loading, this message tells users that they will be entering the room shortly.",
    defaultMessage: "Entering room..."
  }
});

export function useRoomLoadingState(sceneEl) {
  // Holds the id of the current
  const loadingTimeoutRef = useRef();
  const lazyLoadMedia = APP.store.state.preferences.lazyLoadSceneMedia;

  const [
    {
      eduverseConnected,
      dimensionJoined,
      environmentLoaded,
      networkConnected,
      dialogConnected,
      allObjectsLoaded,
      donePreloading,
      objectCount,
      loadedCount,
      loadingError
    },
    dispatch
  ] = useReducer(reducer, {
    objectCount: 0,
    loadedCount: 0,
    allObjectsLoaded: false,
    environmentLoaded: false,
    networkConnected: false,
    dialogConnected: false,
    donePreloading: false,
    eduverseConnected: false,
    dimensionJoined: false,
    loadingError: "",
    lazyLoadMedia
  });
  // Skip object loading callbacks for the newLoader, since they don't yet fire events we can listen to.
  const doneLoadingObjects = lazyLoadMedia || shouldUseNewLoader() || allObjectsLoaded;
  const done =
    sceneEl.is("loaded") ||
    (environmentLoaded && networkConnected && dialogConnected && doneLoadingObjects && donePreloading);

  // AVN: Useful diagnostics when taking time to load
  console.log("AVN: Load state", { done, sceneIsLoaded: sceneEl.is("loaded"), environmentLoaded, networkConnected, dialogConnected, doneLoadingObjects, donePreloading })

  let messageKey = "";

  if (loadingError) {
    messageKey = "loadingError";
  } else if (!eduverseConnected) {
    messageKey = "connectingEduverse";
  } else if (!dimensionJoined) {
    messageKey = "joiningDimension";
  } else if (!environmentLoaded) {
    messageKey = "loadingScene";
  } else if (!networkConnected || !dialogConnected) {
    messageKey = "connectingScene";
  } else if (!doneLoadingObjects) {
    messageKey = "loadingObjects";
  } else {
    messageKey = "enteringRoom";
  }

  const onObjectLoading = useCallback(() => {
    clearTimeout(loadingTimeoutRef.current);
    dispatch({ type: "object-loading" });
  }, [dispatch]);

  const onObjectLoaded = useCallback(() => {
    clearTimeout(loadingTimeoutRef.current);

    dispatch({ type: "object-loaded" });

    // Objects can start loading as a result of loading another object. Wait 1.5 seconds before calling
    // all-objects-loaded to try to catch loading all objects.
    // TODO: Determine a better way to ensure the object dependency chain has resolved, or switch to a
    // progressive loading model where all objects don't have to be loaded to enter the room.
    loadingTimeoutRef.current = setTimeout(() => {
      dispatch({ type: "all-objects-loaded" });
    }, 1500);
  }, [dispatch]);

  const onEnvironmentLoaded = useCallback(() => {
    dispatch({ type: "environment-loaded" });
  }, [dispatch]);

  const onNetworkConnected = useCallback(() => {
    dispatch({ type: "network-connected" });
  }, [dispatch]);

  const onDialogConnected = useCallback(() => {
    dispatch({ type: "dialog-connected" });
  }, [dispatch]);

  const onEduverseConnected = useCallback(() => {
    dispatch({ type: "eduverse-connected" });
  }, [dispatch]);

  const onDimensionJoined = useCallback(() => {
    dispatch({ type: "dimension-joined" });
  }, [dispatch]);

  const onLoadingError = useCallback((errorMessage) => {
    dispatch({ type: "loading-error", errorMessage: errorMessage.detail });
  }, [dispatch]);

  useEffect(() => {
    waitForPreloads().then(() => {
      // TODO: Is this OK to do? Seems bad to be async here somehow
      dispatch({ type: "done-preloading" });
    });
    return () => {};
  }, []);

  useEffect(() => {
    // Once the scene has loaded the dependencies to this hook will change,
    // the event listeners will be removed, and we can prevent adding them again.
    if (!done) {
      if (!lazyLoadMedia) {
        sceneEl.addEventListener("model-loading", onObjectLoading);
        sceneEl.addEventListener("image-loading", onObjectLoading);
        sceneEl.addEventListener("pdf-loading", onObjectLoading);
        sceneEl.addEventListener("video-loading", onObjectLoading);
        sceneEl.addEventListener("model-loaded", onObjectLoaded);
        sceneEl.addEventListener("image-loaded", onObjectLoaded);
        sceneEl.addEventListener("pdf-loaded", onObjectLoaded);
        sceneEl.addEventListener("video-loaded", onObjectLoaded);
        sceneEl.addEventListener("model-error", onObjectLoaded);
      }
      sceneEl.addEventListener("environment-scene-loaded", onEnvironmentLoaded);
      sceneEl.addEventListener("didConnectToNetworkedScene", onNetworkConnected);
      sceneEl.addEventListener("didConnectToDialog", onDialogConnected);
      sceneEl.addEventListener("didConnectToEduverse", onEduverseConnected);
      sceneEl.addEventListener("didJoinDimension", onDimensionJoined);
      sceneEl.addEventListener("errorLoadingRoom", onLoadingError);
    }

    return () => {
      if (!lazyLoadMedia) {
        sceneEl.removeEventListener("model-loading", onObjectLoading);
        sceneEl.removeEventListener("image-loading", onObjectLoading);
        sceneEl.removeEventListener("pdf-loading", onObjectLoading);
        sceneEl.removeEventListener("video-loading", onObjectLoading);
        sceneEl.removeEventListener("model-loaded", onObjectLoaded);
        sceneEl.removeEventListener("image-loaded", onObjectLoaded);
        sceneEl.removeEventListener("pdf-loaded", onObjectLoaded);
        sceneEl.removeEventListener("video-loaded", onObjectLoaded);
        sceneEl.removeEventListener("model-error", onObjectLoaded);
      }
      sceneEl.removeEventListener("environment-scene-loaded", onEnvironmentLoaded);
      sceneEl.removeEventListener("didConnectToNetworkedScene", onNetworkConnected);
      sceneEl.removeEventListener("didConnectToDialog", onDialogConnected);
      sceneEl.removeEventListener("didConnectToEduverse", onEduverseConnected);
      sceneEl.removeEventListener("didJoinDimension", onDimensionJoined);
      sceneEl.removeEventListener("errorLoadingRoom", onLoadingError);
    };
  }, [
    sceneEl,
    done,
    onObjectLoaded,
    onObjectLoading,
    onEnvironmentLoaded,
    onNetworkConnected,
    onDialogConnected,
    lazyLoadMedia
  ]);

  const intl = useIntl();

  const message = intl.formatMessage(messages[messageKey], {
    // Never show a loaded count that's greater than the object count
    loadedCount: Math.min(loadedCount, objectCount),
    objectCount
  });

  useEffect(() => {
    if (done) {
      // The loaded state on the scene signifies that the loading screen is no longer visible,
      // the initial scene was loaded, and the network connection is established.
      sceneEl.addState("loaded");
    }
  }, [sceneEl, done]);

  // Ensure timeout is cleared on unmount.
  useEffect(() => {
    () => {
      clearTimeout(loadingTimeoutRef.current);
    };
  }, []);

  return { loading: !done, message, errorMessage: loadingError };
}
