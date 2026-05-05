import hotbarVariables from "./elementVariables/hootbar-variables.js";
import styleVariables from "./elementVariables/style-variables.js";
import removeImageElement from "./generate/generate-elements/remove-image-element.js";
import generateImageElement from "./generate/generate-elements/generate-image-element.js";
import axeVariables from "./elementVariables/game-items/axe-variables.js";
import bulletVariables from "./elementVariables/game-items/bullet-variables.js";
import fireVariables from "./elementVariables/game-items/fire-variables.js";
import gunVariables from "./elementVariables/game-items/gun-variables.js";
import ligtherVariables from "./elementVariables/game-items/ligther-variables.js";
import magazineVariables from "./elementVariables/game-items/magazine-variables.js";
import stickVariables from "./elementVariables/game-items/stick-variables.js";
import torchVariables from "./elementVariables/game-items/torch-variables.js";
import characterVariablies from "./elementVariables/character-variables.js";
import itemsVariables from "./elementVariables/game-items/items-variables.js";
import innerCabinVariables from "./elementVariables/inner-cabin-variables.js";

function removeContextMenu() {
    document.addEventListener('contextmenu', (event) => {
        event.preventDefault();
    }); 
};

function getSelectedItemVariables(elementName) {
    let itemVariables;
    switch(elementName) {
        case 'axe':
            itemVariables = {
                itemImagePAth: axeVariables.axeImagePath,
                itemHeight: axeVariables.axeHeight,
                itemWidth: axeVariables.axeWidth,
            }
        break;
        case 'bullet':
            itemVariables = {
                itemImagePAth: bulletVariables.bulletImagePath,
                itemHeight: bulletVariables.bulletHeight,
                itemWidth: bulletVariables.bulletWidth,
            }
        break;
        case 'fire':
            itemVariables = {
                itemImagePAth: fireVariables.fireImagePath,
                itemHeight: fireVariables.fireHeight,
                itemWidth: fireVariables.fireWidth,
            }
        break;
        case 'gun':
            itemVariables = {
                itemImagePAth: gunVariables.gunImagePath,
                itemHeight: gunVariables.gunHeight,
                itemWidth: gunVariables.gunWidth,
            }
        break;
        case 'ligther':
            itemVariables = {
                itemImagePAth: ligtherVariables.ligtherImagePath,
                itemHeight: ligtherVariables.ligtherHeight,
                itemWidth: ligtherVariables.ligtherWidth,
            }
        break;
        case 'magazine':
            itemVariables = {
                itemImagePAth: magazineVariables.magazineImagePath,
                itemHeight: magazineVariables.magazineHeight,
                itemWidth: magazineVariables.magazineWidth,
            }
        break;
        case 'stick':
            itemVariables = {
                itemImagePAth: stickVariables.stickImagePath,
                itemHeight: stickVariables.stickHeight,
                itemWidth: stickVariables.stickWidth,
            }
        break;
        case 'torch':
            itemVariables = {
                itemImagePAth: torchVariables.torchImagePath,
                itemHeight: torchVariables.torchHeight,
                itemWidth: torchVariables.torchWidth,
            }
        break;
    }
    return itemVariables;
}

function selectedHotbarSlot(elementID, similarElementsName, isKeyPressed = true) {
    if (isKeyPressed) {
        for (let i = 1; i <= hotbarVariables.numOfHotbars; i++) {
            const selectedElement = document.getElementById(`${similarElementsName}${i}`);
            selectedElement.classList.remove(styleVariables.selectedEffect);
            removeImageElement(`${itemsVariables.allInGameItems[i - 1]}InHand`);
            hotbarVariables.iselementSelectedGenerated = false;
        }
    }

    const selectedElement = document.getElementById(elementID);
    selectedElement.classList.add(styleVariables.selectedEffect);

    const selectedItemName = hotbarVariables.itemsInHotbar[Number(elementID.slice(6))]['ID'];
    if (selectedItemName !== "") {

        hotbarVariables.itemInHand = `${selectedItemName}InHand`;
        hotbarVariables.iselementSelectedGenerated = !!document.getElementById(hotbarVariables.itemInHand);

        
        if(!hotbarVariables.iselementSelectedGenerated) {
            if (innerCabinVariables.isInsideCabin) {
                itemsVariables.itemInnerCabinCoords = {x: characterVariablies.insideCabinCoords.x + characterVariablies.characterWidth * 0.75, y: characterVariablies.insideCabinCoords.y + characterVariablies.characterHeight * 0.1}
                generateImageElement(
                    hotbarVariables.itemInHand,
                    getSelectedItemVariables(selectedItemName).itemImagePAth,
                    getSelectedItemVariables(selectedItemName).itemHeight,
                    getSelectedItemVariables(selectedItemName).itemWidth,
                    itemsVariables.itemInnerCabinCoords,
                    itemsVariables.zPosition
                );
            } else {
                generateImageElement(
                    hotbarVariables.itemInHand,
                    getSelectedItemVariables(selectedItemName).itemImagePAth,
                    getSelectedItemVariables(selectedItemName).itemHeight,
                    getSelectedItemVariables(selectedItemName).itemWidth,
                    itemsVariables.itemOutsideCabinCoords,
                    itemsVariables.zPosition
                );
            }
            hotbarVariables.iselementSelectedGenerated = true;
        }
    } else {
        hotbarVariables.itemInHand = "";
    }
    
}

function insertPickedUpItemIntoHotbarSlot() {
    for (let i = 1; i <= 10; i++) {
        if (hotbarVariables.itemsInHotbar[i]['ID'] == "") {
            
            hotbarVariables.itemsInHotbar[i]['ID'] = hotbarVariables.elementPickedUp.ID;
            
            hotbarVariables.firstEmptySlot = i;
            removeImageElement(hotbarVariables.elementPickedUp.ID)
            generateImageElement(hotbarVariables.elementPickedUp.ID, hotbarVariables.elementPickedUp.Image, hotbarVariables.hotbarHeight / 2, hotbarVariables.hotbarWidth / 2, {x: hotbarVariables.hotToCalculateSlotPosition, y: hotbarVariables.hotbarCoords.y + (hotbarVariables.hotbarHeight * 0.25)}, hotbarVariables.zPosition + 1);
            hotbarVariables.itemsInHotbar[i]['inInventory'] = true;
            itemsVariables.itemsGeneratedInsideCabin.shift();

            return;
        }
    }
}

const gameImprovementsFunctions = {
    removeContextMenu: removeContextMenu,
    selectedHotbarSlot: selectedHotbarSlot,
    insertPickedUpItemIntoHotbarSlot: insertPickedUpItemIntoHotbarSlot,
}

export default gameImprovementsFunctions;   