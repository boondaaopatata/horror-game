import axeVariables from "./elementVariables/game-items/axe-variables.js";
import globalVariables from "./elementVariables/global-variables.js";
import hotbarVariables from "./elementVariables/hootbar-variables.js";
import styleVariables from "./elementVariables/style-variables.js";
import treeVariables from "./elementVariables/tree-variables.js";
import removeImageElement from "./generate/generate-elements/remove-image-element.js";
import allTreeLocations from "./location/all-tree-locations.js";

function clicked() {
    globalVariables.clicked = true;

    setInterval(() => {
        globalVariables.clicked = false;
    }, 100)
}



function hitTree() {
    const treeElement = document.getElementById(`${treeVariables.treeImageName}${treeVariables.mouseOverTree}`);
    if ((hotbarVariables.itemInHand).slice(0, -6) == axeVariables.axeElementID  && !!treeElement) {
        allTreeLocations[treeVariables.mouseOverTree].health -= 20;
        if (allTreeLocations[treeVariables.mouseOverTree].health > 0) {
            treeElement.classList.add(styleVariables.treeChoped);
            console.log(treeVariables.mouseOverTree)
            setTimeout(() => {
            treeElement.classList.remove(styleVariables.treeChoped);
            }, 200)
        } else {
            removeImageElement(treeVariables.mouseOverTree);
        }

    }
}

const itemFunctions = {
    hitTree: hitTree,
}

export default itemFunctions;