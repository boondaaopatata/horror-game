import generateImageElement from "../../generate-elements/generate-image-element.js";
import fireVariables from "../../../elementVariables/game-items/fire-variables.js";

function generateFire() {
    generateImageElement(
        fireVariables.fireElementID,
        fireVariables.fireImagePath,
        fireVariables.fireHeight,
        fireVariables.fireWidth,
        fireVariables.fireCoords,
        fireVariables.zPosition
    )
    
}



export default generateFire;
