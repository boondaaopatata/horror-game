import generateImageElement from "../../generate-elements/generate-image-element.js";
import stickVariables from "../../../elementVariables/game-items/stick-variables.js";

function generateStick() {
    generateImageElement(
        stickVariables.stickElementID,
        stickVariables.stickImagePath,
        stickVariables.stickHeight,
        stickVariables.stickWidth,
        stickVariables.stickCoords,
        stickVariables.zPosition
    )
    
}



export default generateStick;
