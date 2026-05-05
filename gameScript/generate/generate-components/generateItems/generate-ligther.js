import generateImageElement from "../../generate-elements/generate-image-element.js";
import ligtherVariables from "../../../elementVariables/game-items/ligther-variables.js";

function generateLigther() {
    generateImageElement(
        ligtherVariables.ligtherElementID,
        ligtherVariables.ligtherImagePath,
        ligtherVariables.ligtherHeight,
        ligtherVariables.ligtherWidth,
        ligtherVariables.ligtherCoords,
        ligtherVariables.zPosition
    )
    
}



export default generateLigther;
