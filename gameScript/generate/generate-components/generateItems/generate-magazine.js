import generateImageElement from "../../generate-elements/generate-image-element.js";
import magazineVariables from "../../../elementVariables/game-items/magazine-variables.js";

function generateMagazine() {
    generateImageElement(
        magazineVariables.magazineElementID,
        magazineVariables.magazineImagePath,
        magazineVariables.magazineHeight,
        magazineVariables.magazineWidth,
        magazineVariables.magazineCoords,
        magazineVariables.zPosition
    )
    
}



export default generateMagazine;
