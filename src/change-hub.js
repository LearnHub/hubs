/* global APP*/
import { getReticulumFetchUrl, hubUrl } from "./utils/phoenix-utils";
import { updateEnvironmentForHub, getSceneUrlForHub, updateUIForHub, remountUI } from "./hub";

import { avnBridge } from "./avn-bridge"

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
  const newAssetId = new URL(hubUrl).pathname.split("/").pop();
  const roomData = await avnBridge.fetchRoomData(newAssetId);
  console.log("Resolved Hub room from AVN server");
  const nextState = { hubId: roomData.hubid, newAssetId: newAssetId, oldAssetId: avnBridge.assetId, name: roomData.name, icon: roomData.icon };
  await changeHub(nextState, true);
}

// AVN: Psudeo-mutex to prevent overlapping calls to changeHub
var isChanging = false

export async function changeHub(nextState, addToHistory = true) {
  while(isChanging) {
    await new Promise(r => setTimeout(r, 100));
  }
  isChanging = true;
  try {
  if (nextState.hubId === APP.hub.hub_id) {
    console.log("Change hub called with the current hub id. This is a noop.");
    return;
  }
  // Suppress on-screen join and leave messages until we receive a sync.
  APP.hideHubPresenceEvents = true;
  const scene = AFRAME.scenes[0];

  let data;
  try {
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
  await APP.dialog.disconnect();
  unloadRoomObjects();
  NAF.connection.connectedClients = {};
  NAF.connection.activeDataChannels = {};

  NAF.room = hub.hub_id;

  if (
    document.querySelector("#environment-scene").childNodes[0].components["gltf-model-plus"].data.src !==
    (await getSceneUrlForHub(hub))
  ) {
    const fader = document.getElementById("viewing-rig").components["fader"];
    fader.fadeOut().then(() => {
      scene.emit("reset_scene");
      updateEnvironmentForHub(hub, APP.entryManager);
    });
  }

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

  loadRoomObjects(nextState.hubId);

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
