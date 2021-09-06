import waterNormalsUrl from "../assets/waternormals.jpg";
import HubsTextureLoader from "../loaders/HubsTextureLoader";

/**
 * Creates a box around the element (assumed to be the camera's PoV) which can be used for fade-to-black.
 */

const FADE_DURATION_MS = 250;

AFRAME.registerComponent("fader", {
  schema: {
    direction: { type: "string", default: "none" } // "in", "out", or "none"
  },

  init() {
    const material = new THREE.MeshBasicMaterial({ color: 0x111111, side: THREE.BackSide, opacity: 0, transparent: true, fog: false, depthTest: false, depthWrite: false });
    const geometry = new THREE.IcosahedronGeometry(100, 4);
    const mesh = new THREE.Mesh(geometry, material);
    //mesh.scale.x = mesh.scale.y = mesh.scale.z = 10;
    mesh.renderOrder = window.APP.RENDER_ORDER.CAMERA_FADER;

    const wireframeGeometry = new THREE.WireframeGeometry( geometry );
		const wireframeMaterial = new THREE.LineBasicMaterial( { color: 0x080808, depthTest: false, depthWrite: false, transparent: true } );
		const wireframe = new THREE.LineSegments( wireframeGeometry, wireframeMaterial );
    wireframe.renderOrder = window.APP.RENDER_ORDER.CAMERA_FADER + 0.1;
		mesh.add( wireframe );

    mesh.matrixNeedsUpdate = true;
    this.el.object3D.add(mesh);
    this.mesh = mesh;
    this.wire = wireframe;
  },

  fadeOut() {
    return this.beginTransition("out");
  },

  fadeIn() {
    return this.beginTransition("in");
  },

  async beginTransition(direction) {
    if (this._resolveFinish) {
      throw new Error("Cannot fade while a fade is happening.");
    }

    this.el.setAttribute("fader", { direction });

    return new Promise(res => {
      if (this.mesh.material.opacity === (direction == "in" ? 0 : 1)) {
        res();
      } else {
        this._resolveFinish = res;
      }
    });
  },

  tick(t, dt) {
    const mat = this.mesh.material;
    const wir = this.wire.material;
    this.mesh.visible = this.data.direction === "out" || mat.opacity !== 0;
    if (!this.mesh.visible) return;

    if (this.data.direction === "in") {
      mat.opacity = Math.max(0, mat.opacity - (1.0 / FADE_DURATION_MS) * Math.min(dt, 50));
    } else if (this.data.direction === "out") {
      mat.opacity = Math.min(1, mat.opacity + (1.0 / FADE_DURATION_MS) * Math.min(dt, 50));
    }
    wir.opacity = mat.opacity;

    if (mat.opacity === 0 || mat.opacity === 1) {
      if (this.data.direction !== "none") {
        if (this._resolveFinish) {
          this._resolveFinish();
          this._resolveFinish = null;
        }
      }

      this.el.setAttribute("fader", { direction: "none" });
    }
  }
});
