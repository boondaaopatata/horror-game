function generateImageElement(imageID, imagePath, imageHeight, imageWidth, imageCoordinates, zPosition) {
  const body = document.querySelector("body");
  const imageElement = document.createElement("img");
  const imageXAxis = imageCoordinates.x;
  const imageYAxis = imageCoordinates.y;

  imageElement.setAttribute('id', imageID);
  imageElement.setAttribute('height', imageHeight);
  imageElement.setAttribute('width', imageWidth);
  imageElement.setAttribute('src', imagePath);
  
  imageElement.style.top = `${imageYAxis}px`;
  imageElement.style.left = `${imageXAxis}px`;
  imageElement.style.position = 'absolute';
  imageElement.style.zIndex = zPosition;
  
  imageElement.draggable = false;
  imageElement.style.userSelect = "none";
  imageElement.style.webkitUserSelect = "none";
  imageElement.style.mozUserSelect = "none";
  imageElement.style.msUserSelect = "none";
  imageElement.style.webkitUserDrag = "none";

  body.appendChild(imageElement);
}

export default generateImageElement;