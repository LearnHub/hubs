const colliderWorldPositionVec = new THREE.Vector3();
import { SOUND_CHAT_MESSAGE, SOUND_MEDIA_LOADED } from "../systems/sound-effects-system";

AFRAME.registerComponent("action-trigger-volume", {
  schema: {
    colliders: { type: "selectorAll" },
    src: { type: "string" },
    isAvatar: { type: "boolean" },
  },
  init() {
    // Bounding box is defined so that one face is aligned with the XY plane for compatability with the default Hubs link system
    this.boundingBox = new THREE.Box3(new THREE.Vector3(-0.5, -0.5, -1), new THREE.Vector3(+0.5, +0.5, 0));
    this.boundingBoxInverseWorldMatrix = new THREE.Matrix4();
    this.collidingLastFrame = {};
  },
  update() {
    this.el.object3D.updateMatrixWorld(true, false);
    this.boundingBoxInverseWorldMatrix.getInverse(this.el.object3D.matrixWorld);
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
        this.el.sceneEl.systems["hubs-systems"].soundEffectsSystem.playSoundOneShot(SOUND_MEDIA_LOADED);
        if(this.data.isAvatar) {
          const avatarId = this.data.src ?? new URL(this.data.src).pathname.split("/").pop();
          console.log("Setting avatar to ", avatarId);
          window.APP.store.update({ profile: { avatarId } });
          this.el.sceneEl.emit("avatar_updated");
        } else {
          console.log("Navigating to ", this.data.src);
          window.location.assign(this.data.src);
        }
      } else if (!isColliding && collidingLastFrame) {
        //this.el.sceneEl.systems["hubs-systems"].soundEffectsSystem.playSoundOneShot(SOUND_CHAT_MESSAGE);
      }

      this.collidingLastFrame[object3D.id] = isColliding;
    }
  }
});
