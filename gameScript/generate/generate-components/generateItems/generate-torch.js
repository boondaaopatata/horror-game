import generateImageElement from "../../generate-elements/generate-image-element.js";
import torchVariables from "../../../elementVariables/game-items/torch-variables.js";

function generateTorch() {
    generateImageElement(
        torchVariables.torchElementID,
        torchVariables.torchImagePath,
        torchVariables.torchHeight,
        torchVariables.torchWidth,
        torchVariables.torchCoords,
        torchVariables.zPosition
    )
    
}



export default generateTorch;
