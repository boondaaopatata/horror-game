import keyEventListenerFunctions from "./generate/generate-components/key-functions.js";
import mapMovementFunctionality from "./generate/generate-components/generate-map.js";
import treeMovementFunctionality from "./generate/generate-components/generate-trees.js";
import cabinMovementFunctionality from "./generate/generate-components/cabin/generate-cabin.js";
import characterVariablies from "./elementVariables/character-variables.js";
import globalVariables from "./elementVariables/global-variables.js";
import movementVariables from "./elementVariables/movement-variables.js";
import innerCabinVariables from "./elementVariables/inner-cabin-variables.js";
import generateButtons from "./generate/generate-components/generate-button.js";
import generatePlayer from "./generate/generate-components/generate-character.js";
import innerCabinFunctionality from "./generate/generate-components/cabin/inner-cabin-movements.js";
import removeImageElement from "./generate/generate-elements/remove-image-element.js";
import mapVariables from "./elementVariables/map-variables.js";



const movementDetectionEventListener = () => {
  globalVariables.bodyElement.addEventListener('keydown', (event) => {
    keyEventListenerFunctions.keyDownFunction(event, movementVariables.keyDown)
  });

  globalVariables.bodyElement.addEventListener('keyup', (event) => {
    keyEventListenerFunctions.keyUpFuntion(event, movementVariables.keyDown)
  });
};

function allMovementFunctionality() {
  const {x, y} = characterVariablies.characterCoordinates;   

  const characterRightSide = x + characterVariablies.characterWidth;
  const characterBottomSide = y + characterVariablies.characterHeight;

  const mapLeftBorder = mapVariables.mapCoordinates.x;
  const mapRightBorder = mapLeftBorder + mapVariables.mapWidth;
  
  const mapTopBorder = mapVariables.mapCoordinates.y;
  const mapBottomBorder = mapTopBorder + mapVariables.mapHeight;

  if (!innerCabinVariables.isInsideCabin) {
    if ((x > mapLeftBorder && characterRightSide < mapRightBorder) && (y > mapTopBorder && characterBottomSide < mapBottomBorder)) {
        mapMovementFunctionality();
        treeMovementFunctionality();
        cabinMovementFunctionality();
    } 
    globalVariables.deRenderedOutside = false;
    innerCabinVariables.renderedInsideCabin = false;
  } else {
    if (!innerCabinVariables.renderedInsideCabin) {
      innerCabinFunctionality.insideChracterMovementFunctionality();
      mapMovementFunctionality();
      treeMovementFunctionality();
      cabinMovementFunctionality();
      removeImageElement(characterVariablies.characterElementID);
      generatePlayer(characterVariablies.insideCabinCoords);
      innerCabinVariables.renderedInsideCabin;
    }
    innerCabinFunctionality.insideCharacterControlsFunctionality();
  }
  generateButtons();

  if (!movementVariables.isoutsideMovementThere) {
    movementDetectionEventListener();
    movementVariables.isoutsideMovementThere = true;
  }
  requestAnimationFrame(allMovementFunctionality);
}


export default allMovementFunctionality;