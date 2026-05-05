import globalVariables from "../../../elementVariables/global-variables.js";
import movementVariables from "../../../elementVariables/movement-variables.js";
import characterVariablies from "../../../elementVariables/character-variables.js";
import innerCabinVariables from "../../../elementVariables/inner-cabin-variables.js";
import hotbarVariables from "../../../elementVariables/hootbar-variables.js";
import itemsVariables from "../../../elementVariables/game-items/items-variables.js";

function insideChracterMovementFunctionality () {  
  const validKeyList = Object.keys(movementVariables.keyDown);
  
  globalVariables.bodyElement.addEventListener('keydown', (event) => {
    const key = (event.key).toLowerCase();
    
    if (validKeyList.includes(key)) {
      movementVariables.keyDown[`${key}`] = true;
    }
  });
  
  globalVariables.bodyElement.addEventListener('keyup', (event) => {
    const key = (event.key).toLowerCase();
    
    if (validKeyList.includes(key)) {
      movementVariables.keyDown[`${key}`] = false;
    }
  });
  
}

function insideCharacterControlsFunctionality () {
  const characterElement = document.getElementById(characterVariablies.characterElementID);
  let itemInHand;
  if (!!hotbarVariables.itemInHand) {
    itemInHand = document.getElementById(hotbarVariables.itemInHand);
  }
  
  const {w, a, s, d} = movementVariables.keyDown;
  
  let numOfKeyDown = 0;
  const keysList = Object.keys(movementVariables.keyDown);
  const keysListLength = keysList.length;
  
  for (let i = 0; i < keysListLength; i++) {
    if (movementVariables.keyDown[`${keysList[i]}`]) {
      numOfKeyDown++;
    }
  }
  
  let newSpeed = innerCabinVariables.innerCabinSpeed;
  
  if (numOfKeyDown > 1) {
    newSpeed = innerCabinVariables.innerCabinSpeed * 0.7;
  }
  
  if (w && characterVariablies.insideCabinCoords.y > 0) {
    characterVariablies.insideCabinCoords.y += -newSpeed;
    characterElement.style.top = `${characterVariablies.insideCabinCoords.y}px`;
    if (!!itemInHand) {
      itemsVariables.itemInnerCabinCoords.y += -newSpeed;
      itemInHand.style.top = `${itemsVariables.itemInnerCabinCoords.y}px`;
    }
  }
  if (a && characterVariablies.insideCabinCoords.x > 0) {
    characterVariablies.insideCabinCoords.x += -newSpeed;
    characterElement.style.left = `${characterVariablies.insideCabinCoords.x}px`;
    if (!!itemInHand) {
      itemsVariables.itemInnerCabinCoords.x += -newSpeed;
      itemInHand.style.left = `${itemsVariables.itemInnerCabinCoords.x}px`;
    }
  }
  if (s && characterVariablies.insideCabinCoords.y + characterVariablies.characterHeight < globalVariables.windowHeight) {
    characterVariablies.insideCabinCoords.y += newSpeed;
    characterElement.style.top = `${characterVariablies.insideCabinCoords.y}px`;
    if (!!itemInHand) {
      itemsVariables.itemInnerCabinCoords.y += newSpeed;
      itemInHand.style.top = `${itemsVariables.itemInnerCabinCoords.y}px`;
    }
  }
  if (d && characterVariablies.insideCabinCoords.x + characterVariablies.characterWidth < globalVariables.windowWidth) {
    characterVariablies.insideCabinCoords.x += newSpeed;
    characterElement.style.left = `${characterVariablies.insideCabinCoords.x}px`;
    if (!!itemInHand) {
      itemsVariables.itemInnerCabinCoords.x += newSpeed;
      itemInHand.style.left = `${itemsVariables.itemInnerCabinCoords.x}px`;
    }
  }
}

const innerCabinFunctionality = {
    insideChracterMovementFunctionality: insideChracterMovementFunctionality,
    insideCharacterControlsFunctionality: insideCharacterControlsFunctionality,
}

export default innerCabinFunctionality;