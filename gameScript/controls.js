import renderElements from "./rendering.js";

function loader(numOfElements, allElementLocations, elementImageName, elementHeight, elementWidth, elementImagePath, zPosition = 0) {
  renderElements(
    numOfElements, 
    allElementLocations, 
    elementImageName, 
    elementHeight, 
    elementWidth, 
    elementImagePath,
    zPosition
  );
}

function controls(speed, keyDown, allElementLocations, numOfElements, elementImageName, elementHeight, elementWidth, elementImagePath, zPosition = 0) {
  for (let i = 0; i < numOfElements; i++) {
    let numOfKeyDown = 0;
    const keysList = Object.keys(keyDown);
    for (let j = 0; j < 4; j++) {
      if(keyDown[`${keysList[j]}`]) {
        numOfKeyDown++;
      }
    }

    let newSpeed = speed;

    if (numOfKeyDown > 1) {
      newSpeed *= 0.7;
    }  

    if (keyDown.a) {
      allElementLocations[`${i}`].x += newSpeed;
    } else if (keyDown.d) {
      allElementLocations[`${i}`].x -= newSpeed;
    } 
    
    if (keyDown.w) {
      allElementLocations[`${i}`].y += newSpeed;
    } else if (keyDown.s) {
      allElementLocations[`${i}`].y -= newSpeed;
    }
    
  }
  loader(numOfElements, allElementLocations, elementImageName, elementHeight, elementWidth, elementImagePath, zPosition);
}

export default controls;