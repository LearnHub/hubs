import WebXRPolyfill from "webxr-polyfill";

// WebXR Polyfill for platforms only supporting WebVR API. e.g. Desktop Firefox
// WebVR API is deprecated. We may drop such platforms support at some point.
if (!("xr" in navigator) && "getVRDisplays" in navigator) {
  // AVN: Warning for clarity on when polyfill is used
  console.warn("Using WebXRPolyfill");
  new WebXRPolyfill({
    cardboard: false
  });
}
