import generateImageElement from "../../generate-elements/generate-image-element.js";
import bulletVariables from "../../../elementVariables/game-items/bullet-variables.js";

function generateBullet() {
    generateImageElement(
        bulletVariables.bulletElementID,
        bulletVariables.bulletImagePath,
        bulletVariables.bulletHeight,
        bulletVariables.bulletWidth,
        bulletVariables.bulletCoords,
        bulletVariables.zPosition
    )
    
}



export default generateBullet;
