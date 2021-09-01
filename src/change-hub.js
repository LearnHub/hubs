/* global APP*/
import { getReticulumFetchUrl, hubUrl } from "./utils/phoenix-utils";
import { updateEnvironmentForHub, getSceneUrlForHub, updateUIForHub, remountUI } from "./hub";

// AVN: Find dimension ID from URL in the form https://<region>.avncloud.com/<hub_id>/<dimension_id>/<asset_id> or as a URL parameter (local development mode)
export var avnDimensionId = new URLSearchParams(document.location.search).get("dimension_id");
export var avnAssetId = new URLSearchParams(document.location.search).get("asset_id");
const pathParts = document.location.pathname.split('/');
if(pathParts.length > 2) {
  avnDimensionId = document.location.pathname.split('/')[2];
}
if(pathParts.length > 3) {
  avnAssetId = document.location.pathname.split('/')[3];
}
if(avnDimensionId) {
  console.log(`AVN: Dimension ID: ${avnDimensionId}`);
} else {
  console.error("AVN: No dimension found");
}
if(avnAssetId) {
  console.log(`AVN: Asset ID: ${avnAssetId}`);
} else {
  console.warn("AVN: No asset ID found so scene links will be disabled");
}


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
  console.log("Fast changing to room " + hubUrl);
  const newAssetId = new URL(hubUrl).pathname.split("/").pop();
  const findRoomUrl = `https://alpha.learnpad.com/com/Dimensions.cfc?method=room&dimensionid=${avnDimensionId}&assetid=${newAssetId}`;
  const findRoomResponse = await fetch(findRoomUrl);
  const roomData = await findRoomResponse.json();
  console.log("Resolved Hub details from AVN server", roomData);
  await changeHub(roomData.hubid, true, newAssetId, avnAssetId);
}

export async function changeHub(hubId, addToHistory = true, newAssetId, oldAssetId) {
  if (hubId === APP.hub.hub_id) {
    console.log("Change hub called with the current hub id. This is a noop.");
    return;
  }
  // Suppress on-screen join and leave messages until we receive a sync.
  APP.hideHubPresenceEvents = true;
  const scene = AFRAME.scenes[0];

  let data;
  try {
    data = await APP.hubChannel.migrateToHub(hubId);
  } catch (e) {
    console.warn(`Failed to join hub ${hubId}: ${e.reason}|${e.message}`);
    APP.messageDispatch.log("joinFailed", { message: e.message });
    return;
  }

  const hub = data.hubs[0];

  if (addToHistory) {
    const extraParams = { "dimension_id": avnDimensionId, "asset_id": newAssetId };
    window.history.pushState(null, null, hubUrl(hubId, extraParams, hub.slug, oldAssetId));
  }

  // Update current asset ID now the room has changed
  avnAssetId = newAssetId;

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
    const fader = document.getElementById("viewing-camera").components["fader"];
    fader.fadeOut().then(() => {
      updateEnvironmentForHub(hub, APP.entryManager);
    });
  }

  APP.retChannel.push("change_hub", { hub_id: hub.hub_id });

  await Promise.all([
    APP.dialog.connect({
      serverUrl: `wss://${hub.host}:${hub.port}`,
      roomId: hub.hub_id,
      joinToken: data.perms_token,
      serverParams: { host: hub.host, port: hub.port, turn: hub.turn },
      scene,
      clientId: APP.dialog._clientId,
      forceTcp: APP.dialog._forceTcp,
      forceTurn: APP.dialog._forceTurn,
      iceTransportPolicy: APP.dialog._iceTransportPolicy
    }),

    NAF.connection.adapter.connect()
  ]);

  loadRoomObjects(hubId);

  APP.hubChannel.sendEnteredEvent();

  APP.messageDispatch.receive({
    type: "hub_changed",
    hubName: hub.name,
    showLineBreak: true
  });
}
window.changeHub = changeHub;

// TODO see if there is a better way to do this with react router
window.addEventListener("popstate", function() {
  // AVN: fastRoomSwitching enabled by default
  //if (!APP.store.state.preferences.fastRoomSwitching) return;
  const qs = new URLSearchParams(location.search);
  const newHubId = qs.get("hub_id") || document.location.pathname.substring(1).split("/")[0];
  if (newHubId !== APP.hub.hub_id) {
    changeHub(newHubId, false);
  }
});
