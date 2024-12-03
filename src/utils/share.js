const isMobileVR = AFRAME.utils.device.isMobileVR();

export function canShare() {
  // TODO, fix up when OB/FxR support sharing
  return navigator.share && !isMobileVR;
}

export function share(opts) {
  if (canShare()) {
    return navigator.share(opts);
  } else {
  }
}
