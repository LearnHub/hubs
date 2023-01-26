const colliderWorldPositionVec = new THREE.Vector3();
import { SOUND_CHAT_MESSAGE, SOUND_MEDIA_LOADED, SOUND_FREEZE } from "../systems/sound-effects-system";
import { changeHubAvn } from "../change-hub";
import { AVN } from "../avn-bridge";

AFRAME.registerComponent("action-trigger-volume", {
  schema: {
    colliders: { type: "selectorAll" },
    src: { type: "string" },
    isSceneLink:  { type: "boolean" },
    isAvatarLink: { type: "boolean" },
  },
  init() {
    // Bounding box is defined so that one face is aligned with the XY plane for compatability with the default Hubs link system
    this.boundingBox = new THREE.Box3(new THREE.Vector3(-0.5, -0.5, -1), new THREE.Vector3(+0.5, +0.5, 0));
    this.boundingBoxInverseWorldMatrix = new THREE.Matrix4();
    this.collidingLastFrame = {};
  },
  update() {
    this.el.object3D.updateMatrixWorld(true, false);
    this.boundingBoxInverseWorldMatrix.copy(this.el.object3D.matrixWorld).invert();
  },
  tick() {

    const colliders = this.data.colliders;

    for (let i = 0; i < colliders.length; i++) {
      const collider = colliders[i];
      const object3D = collider.object3D;

      object3D.getWorldPosition(colliderWorldPositionVec);
      colliderWorldPositionVec.applyMatrix4(this.boundingBoxInverseWorldMatrix);

      const isColliding = this.boundingBox.containsPoint(colliderWorldPositionVec);
      const collidingLastFrame = this.collidingLastFrame[object3D.id];

      if (isColliding && !collidingLastFrame) {
        if(this.data.isAvatarLink) {
          if(AVN.isAuthenticated) {
            this.el.sceneEl.systems["hubs-systems"].soundEffectsSystem.playSoundOneShot(SOUND_MEDIA_LOADED);
            const avatarId = this.data.src || new URL(this.data.src).pathname.split("/").pop();
            console.log("AVN: Setting avatar to ", avatarId);
            window.APP.store.update({ profile: { avatarId } });
            this.el.sceneEl.emit("avatar_updated");
          } else {
            this.el.sceneEl.systems["hubs-systems"].soundEffectsSystem.playSoundOneShot(SOUND_FREEZE);
            console.log(`AVN: Avatar change denied because user is not authenticated`);
          }
        } else {
          if(AVN.allowNavigation) {
            this.el.sceneEl.systems["hubs-systems"].soundEffectsSystem.playSoundOneShot(SOUND_MEDIA_LOADED);
            if(this.data.isSceneLink) {
              console.log("AVN: Navigating to scene link", this.data.src);
              changeHubAvn(this.data.src);
            } else {
              console.log("AVN: Navigating to generic link", this.data.src);
              // Mark the exit point in case the user returns with the back button
              const sceneId = new URL(this.data.src).pathname.split("/").pop();
              document.location.hash = sceneId;
              document.location = this.data.src;
            }
          } else {
            this.el.sceneEl.systems["hubs-systems"].soundEffectsSystem.playSoundOneShot(SOUND_FREEZE);
            console.log(`AVN: Navigation denied because room is not explorable`);
          }
        }
      } else if (!isColliding && collidingLastFrame) {
        //this.el.sceneEl.systems["hubs-systems"].soundEffectsSystem.playSoundOneShot(SOUND_CHAT_MESSAGE);
      }

      this.collidingLastFrame[object3D.id] = isColliding;
    }

  }
});
