import generateImageElement from "../../generate-elements/generate-image-element.js";
import gunVariables from "../../../elementVariables/game-items/gun-variables.js";

function generateGun() {
    generateImageElement(
        gunVariables.gunElementID,
        gunVariables.gunImagePath,
        gunVariables.gunHeight,
        gunVariables.gunWidth,
        gunVariables.gunCoords,
        gunVariables.zPosition
    )
    
}



export default generateGun;
