export function addAnimationComponents(modelEl) {
  if (!modelEl.components["animation-mixer"]) {
    return;
  }

  if (!modelEl.querySelector("[loop-animation]")) {
    // AVN: Force complete refresh of loop-animation component 
    // because blank clip attribute implies all animations should
    // be used, but this list is dyamically built from the model
    modelEl.removeAttribute("loop-animation");
    modelEl.setAttribute("loop-animation", "");
  }
}
