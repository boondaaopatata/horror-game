import generateImageElement from "../generate-elements/generate-image-element.js";
import hotbarVariables from "../../elementVariables/hootbar-variables.js";
import globalVariables from "../../elementVariables/global-variables.js";
import keyEventListenerFunctions from "./key-functions.js";
import gameImprovementsFunctions from "../../game-improvements-functions.js";
import styleVariables from "../../elementVariables/style-variables.js";
import removeImageElement from "../generate-elements/remove-image-element.js"

function generateHotbar() {
  for (let i = 1; i <= hotbarVariables.numOfHotbars; i++) {
    const slotID = `${hotbarVariables.hotbarElementID}${i}`;
    let keyForSelection = i;
    if (i == hotbarVariables.numOfHotbars)   
    {
      keyForSelection = 0;
    }
    generateImageElement(
      slotID, 
      hotbarVariables.hotbarImagePath, 
      hotbarVariables.hotbarHeight, 
      hotbarVariables.hotbarWidth, 
      {x: hotbarVariables.hotbarCoords.x + ((hotbarVariables.hotbarWidth + hotbarVariables.margins) * i), y: hotbarVariables.hotbarCoords.y}, 
      hotbarVariables.zPosition
    );

    globalVariables.bodyElement.addEventListener('keypress', (event) => {
      keyEventListenerFunctions.keyPressedFunction(
        event, 
        keyForSelection, 
        gameImprovementsFunctions.selectedHotbarSlot, 
        slotID, 
        hotbarVariables.hotbarElementID,
        hotbarVariables.numOfHotbars
      );
    });

    const slotElement = document.getElementById(slotID);

    slotElement.addEventListener('click', () => {
      keyEventListenerFunctions.leftClickFunction(
        gameImprovementsFunctions.selectedHotbarSlot, 
        slotID, 
        hotbarVariables.hotbarElementID,
        hotbarVariables.numOfHotbars
      );
    });

    const firstElement = document.getElementById(`${hotbarVariables.hotbarElementID}1`);
    firstElement.classList.add(styleVariables.selectedEffect);

    hotbarVariables.isHotbarEventListenerGenerated = true;
  
  }

}

function removeHotbar() {
  for (let i = 1; i <= hotbarVariables.numOfHotbars; i++) {
    removeImageElement(hotbarVariables.hotbarElementID);
  }
}

const hotbarFunctions = {
  generateHotbar: generateHotbar,
  removeHotbar: removeHotbar,
}

export default hotbarFunctions;