import globalVariables from "./global-variables.js";
import movementVariables from "./movement-variables.js";

const innerCabinElementID = "innerCabin";
const innerCabinImagePath = "../../../../images/inside-cabin.png";
const innerCabinHeight = globalVariables.windowHeight;
const innerCabinWidth = globalVariables.windowWidth;
const innerCabinCoords = {x: 0, y: 0};
const innerCabinZPosition = -2;
const Activationkey = 'e';
let isInsideCabin = false;
let renderedInsideCabin = false;
const innerCabinSpeed = movementVariables.speed * 0.6;
let cabinNumber = 0;

const innerCabinVariables = {
    innerCabinElementID: innerCabinElementID,
    innerCabinImagePath: innerCabinImagePath,
    innerCabinHeight: innerCabinHeight,
    innerCabinWidth: innerCabinWidth,
    innerCabinCoords: innerCabinCoords,
    innerCabinZPosition: innerCabinZPosition,
    Activationkey: Activationkey,
    isInsideCabin: isInsideCabin,
    renderedInsideCabin: renderedInsideCabin,
    innerCabinSpeed: innerCabinSpeed,
    cabinNumber: cabinNumber,
}

export default innerCabinVariables;