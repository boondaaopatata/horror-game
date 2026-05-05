import generateImageElement from "../../generate-elements/generate-image-element.js";
import axeVariables from "../../../elementVariables/game-items/axe-variables.js";


function generateAxe() {
    generateImageElement(
        axeVariables.axeElementID,
        axeVariables.axeImagePath,
        axeVariables.axeHeight,
        axeVariables.axeWidth,
        axeVariables.axeCoords,
        axeVariables.zPosition
    );
}

export default generateAxe;
