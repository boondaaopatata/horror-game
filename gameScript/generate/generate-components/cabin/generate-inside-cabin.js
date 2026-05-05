import axeVariables from "../../../elementVariables/game-items/axe-variables.js";
import itemsVariables from "../../../elementVariables/game-items/items-variables.js";
import innerCabinVariables from "../../../elementVariables/inner-cabin-variables.js";
import generateImageElement from "../../generate-elements/generate-image-element.js";
import generateAxe from "../generateItems/generate-axe.js";
import hotbarVariables from "../../../elementVariables/hootbar-variables.js";

function checkIfItemInInventory(itemID) {
    for (let i = 1; i <= itemsVariables.numOfInGameItems; i++) {
        if (hotbarVariables.itemsInHotbar[i]["ID"] == itemID) {
            return true;
        }
    }
    return false;
}

function generateInnerCabin() {
    innerCabinVariables.isInsideCabin = true;
    generateImageElement(
        innerCabinVariables.innerCabinElementID,
        innerCabinVariables.innerCabinImagePath,
        innerCabinVariables.innerCabinHeight,
        innerCabinVariables.innerCabinWidth,
        {x: 0, y: 0},
        innerCabinVariables.innerCabinZPosition,
    );
    switch (innerCabinVariables.cabinNumber) {
        case 0:
            
        break;
        case 1:

        break;
        case 2:

        break;
        case 3:

        break;
        case 4:

        break;
        case 5:

        break;
        case 6:

        break;
        case 7:

        break;
        case 8:

        break;
        case 9:

        break;
        case 10:
            const isInInventory = checkIfItemInInventory(axeVariables.axeElementID);
            if (!isInInventory){
                generateAxe();
                itemsVariables.itemsGeneratedInsideCabin.push(axeVariables.axeElementID);
            }
        break;
    }
    
}



export default generateInnerCabin;
