import errorImageSrc from "../assets/images/media-error-avn.png?inline";

const errorImage = new Image();
errorImage.src = errorImageSrc;
export const errorTexture = new THREE.Texture(errorImage);
errorImage.onload = () => {
  errorTexture.needsUpdate = true;
};
