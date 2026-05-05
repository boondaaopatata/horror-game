import generateImageElement from "../generate-elements/generate-image-element.js";
import characterVariablies from "../../elementVariables/character-variables.js";
import hotbarFunctions from "./generate-hotbar.js";
import hotbarVariables from "../../elementVariables/hootbar-variables.js";

function generatePlayer(insideCabinCoords = false) {
  generateImageElement(
    characterVariablies.characterElementID, 
    characterVariablies.characterImagePath, 
    characterVariablies.characterHeight, 
    characterVariablies.characterWidth, 
    insideCabinCoords || characterVariablies.characterCoordinates, 
    characterVariablies.zPosition
  );

  if (!hotbarVariables.isHotbarGenerated) {
    hotbarFunctions.generateHotbar();
    hotbarVariables.isHotbarGenerated = true;
  }

  characterVariablies.isPlayerRendered = true;
}


export default generatePlayer;