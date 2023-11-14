import { getReticulumFetchUrl, hubUrl } from "./utils/phoenix-utils";
import { updateEnvironmentForHub, getSceneUrlForHub, updateUIForHub, remountUI } from "./hub";
import { SOUND_MEDIA_LOADED } from "./systems/sound-effects-system";

import { AVN } from "./avn-bridge";
import { loadLegacyRoomObjects } from "./utils/load-legacy-room-objects";
import { loadSavedEntityStates } from "./utils/entity-state-utils";
import { localClientID, pendingMessages, pendingParts } from "./bit-systems/networking";
import { storedUpdates } from "./bit-systems/network-receive-system";
import { shouldUseNewLoader } from "./utils/bit-utils";

function unloadRoomObjects() {
  document.querySelectorAll("[pinnable]").forEach(el => {
    if (el.components.pinnable.data.pinned) {
      el.parentNode.removeChild(el);
    }
  });

  // Clean up empty object.gltf nodes
  document.querySelectorAll("#objects-scene .Room_Objects").forEach(el => {
    if (!el.children.length) {
      el.parentNode.parentNode.removeChild(el.parentNode);
    }
  });
}

function loadRoomObjects(hubId) {
  const objectsScene = document.querySelector("#objects-scene");
  const objectsUrl = getReticulumFetchUrl(`/${hubId}/objects.gltf`);
  const objectsEl = document.createElement("a-entity");
  objectsEl.setAttribute("gltf-model-plus", { src: objectsUrl, useCache: false, inflate: true });
  objectsScene.appendChild(objectsEl);
}

// AVN: Scene links need a level of redirection before resolving to a hub ID
export async function changeHubAvn(hubUrl) {
  console.log("Fast switching to room " + hubUrl);
  const roomInfo = await AVN.fetchRoomInfoForUrl(hubUrl);
  if(roomInfo) {
    console.log("Resolved Hub room from AVN server");
    const nextState = { hubId: roomInfo.roomId, newAssetId: roomInfo.assetId, oldAssetId: AVN.assetId, name: roomInfo.name, icon: roomInfo.iconUrl };
    await changeHub(nextState, true);
  } else {
    console.error("Failed to change hub room");
  }
}

// AVN: Psudeo-mutex to prevent overlapping calls to changeHub
var isChanging = false

export async function changeHub(nextState, addToHistory = true, waypoint = "") {
  while(isChanging) {
    await new Promise(r => setTimeout(r, 100));
  }
  isChanging = true;
  try {
  if (!APP.hub) {
    console.warn("AVN: changeHub called before hub has been initialized");
    return;
  }
  if (nextState.hubId === APP.hub.hub_id) {
    console.log(`Change hub called with '${nextState.hubId}' when the current hub id is '${APP.hub.hub_id}'. This is a noop.`);
    return;
  }

  // Suppress on-screen join and leave messages until we receive a sync.
  APP.hideHubPresenceEvents = true;
  const scene = AFRAME.scenes[0];
  
  // AVN: navigation sound
  scene.systems["hubs-systems"].soundEffectsSystem.playSoundOneShot(SOUND_MEDIA_LOADED);

  // Generate leave events for everyone in the room.
  Object.keys(APP.hubChannel.presence.state).forEach(key => {
    const clientId = APP.getSid(key);
    if (clientId !== localClientID) {
      pendingParts.push(clientId);
    }
  });
  // Reticulum "leaving" causes pinned objects to get cleaned up.
  pendingParts.push(APP.getSid("reticulum"));

  let data;
  try {
    // TODO Migrating to a new hub in one step makes state cleanup suspicious.
    //      Would prefer to disconnect, cleanup state, then connect to the new hub.
    data = await APP.hubChannel.migrateToHub(nextState.hubId);
  } catch (e) {
    console.warn(`Failed to join hub ${nextState.hubId}: ${e.reason}|${e.message}`);
    APP.messageDispatch.log("joinFailed", { message: e.message });
    return;
  }

  const hub = data.hubs[0];

  const favicon = document.getElementById("favicon");

  if (addToHistory) {
    const prevState = { hubId: APP.hub.hub_id, newAssetId: nextState.oldAssetId, oldAssetId: nextState.newAssetId, name: document.title, icon: favicon.getAttribute("href") };
    // Replace current state so the fragment/waypoint will be set when using the BACK button
    window.history.replaceState(prevState, null, hubUrl(prevState.hubId, { }, nextState.oldAssetId, nextState.newAssetId));
    window.history.pushState   (nextState, null, hubUrl(nextState.hubId, { }, nextState.newAssetId, nextState.oldAssetId));
  }

  // Page title and icon
  document.title = nextState.name;
  if(nextState.icon) {
    favicon.setAttribute("href", nextState.icon);
  }

  APP.hub = hub;
  updateUIForHub(hub, APP.hubChannel);
  scene.emit("hub_updated", { hub });

  APP.subscriptions.setSubscribed(data.subscriptions.web_push);

  remountUI({
    hubIsBound: data.hub_requires_oauth,
    initialIsFavorited: data.subscriptions.favorites
  });

  NAF.entities.removeRemoteEntities();
  await NAF.connection.adapter.disconnect();
  APP.dialog.disconnect();
  if (!shouldUseNewLoader()) {
    unloadRoomObjects();
  }
  NAF.connection.connectedClients = {};
  NAF.connection.activeDataChannels = {};
  if (pendingMessages.length || storedUpdates.size) {
    console.log(
      `Deleting ${pendingMessages.length + storedUpdates.size} unapplied network messages from previous hub.`
    );
    pendingMessages.length = 0;
    storedUpdates.clear();
  }

  NAF.room = hub.hub_id;

  if (
    // TODO: With newLoader (and new net code), we need to clear any network state
    // that we applied to scene-owned entities before transitioning to the new room.
    // For now, just unload scene even if the room we're going to has the same scene.
    shouldUseNewLoader() ||
    document.querySelector("#environment-scene").childNodes[0].components["gltf-model-plus"].data.src !==
      (await getSceneUrlForHub(hub))
  ) {
    const fader = document.getElementById("viewing-camera").components["fader"];
    fader.fadeOut().then(() => {
      scene.emit("reset_scene");
      updateEnvironmentForHub(hub, APP.entryManager);
    });
  }

  // AVN: Update Eduverse presence
  await AVN.enterRoom(hub.hub_id, NAF.clientId)

  APP.retChannel.push("change_hub", { hub_id: hub.hub_id });

  await Promise.all([
    APP.dialog.connect({
      serverUrl: `wss://${hub.host}:${hub.port}`,
      roomId: hub.hub_id,
      serverParams: { host: hub.host, port: hub.port, turn: hub.turn },
      scene,
      clientId: APP.dialog._clientId,
      forceTcp: APP.dialog._forceTcp,
      forceTurn: APP.dialog._forceTurn,
      iceTransportPolicy: APP.dialog._iceTransportPolicy
    }),

    NAF.connection.adapter.connect()
  ]);

  if (shouldUseNewLoader()) {
    loadSavedEntityStates(APP.hubChannel);
    loadLegacyRoomObjects(nextState.hubId);
  } else {
    loadRoomObjects(nextState.hubId);
  }

  APP.hubChannel.sendEnteredEvent();

  APP.messageDispatch.receive({
    type: "hub_changed",
    hubName: hub.name,
    showLineBreak: true
  });

  } finally {
    isChanging = false;
  }

}
window.changeHub = changeHub;

// TODO see if there is a better way to do this with react router
window.addEventListener("popstate", function(event) {
  console.log("Processing popstate event", event.state);
  if(event.state) {
    changeHub(event.state, false);
  }
});
