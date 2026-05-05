import characterVariablies from "../character-variables.js";
import axeVariables from "./axe-variables.js";
import bulletVariables from "./bullet-variables.js";
import fireVariables from "./fire-variables.js";
import gunVariables from "./gun-variables.js";
import ligtherVariables from "./ligther-variables.js";
import magazineVariables from "./magazine-variables.js";
import stickVariables from "./stick-variables.js";
import torchVariables from "./torch-variables.js";


const allInGameItems = [
    axeVariables.axeElementID, 
    bulletVariables.bulletElementID, 
    fireVariables.fireElementID, 
    gunVariables.gunElementID, 
    ligtherVariables.ligtherElementID, 
    magazineVariables.magazineElementID, 
    stickVariables.stickElementID, 
    torchVariables.torchElementID
];

const numOfInGameItems = (allInGameItems).length;
let itemInnerCabinCoords;
const itemOutsideCabinCoords = {x: characterVariablies.characterCoordinates.x + characterVariablies.characterWidth * 0.75, y: characterVariablies.characterCoordinates.y + characterVariablies.characterHeight * 0.1};
let itemsGeneratedInsideCabin = [];
const zPosition = characterVariablies.zPosition + 1;

const itemsVariables = {
    allInGameItems: allInGameItems,
    numOfInGameItems: numOfInGameItems,
    itemInnerCabinCoords: itemInnerCabinCoords,
    itemOutsideCabinCoords: itemOutsideCabinCoords,
    itemsGeneratedInsideCabin: itemsGeneratedInsideCabin,
    zPosition: zPosition,
}

export default itemsVariables;