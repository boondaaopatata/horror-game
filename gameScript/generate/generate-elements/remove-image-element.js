function removeImageElement(imageID) {
  try {
    const imageElement = document.getElementById(imageID);
    if (imageElement) {
      imageElement.remove();
    }
  } catch (err) {
    console.log(err);
  }
  
}

export default removeImageElement;