import globalVariables from "./global-variables.js";

const characterElementID = "characterID";
const characterImagePath = "../images/character.png";
const characterHeight = globalVariables.windowHeight / 10;
const characterWidth = characterHeight * 0.6;
const characterCoordinates = {x: globalVariables.windowWidth * 0.5 - characterWidth, y: globalVariables.windowHeight * 0.5 - characterHeight};
const insideCabinCoords = {x: globalVariables.windowWidth * 0.5, y: globalVariables.windowHeight * 0.8};
const zPosition = -1;
let isPlayerRendered = false;

const characterVariablies = {
    characterElementID: characterElementID,
    characterImagePath: characterImagePath,
    characterHeight: characterHeight,
    characterWidth: characterWidth,
    characterCoordinates: characterCoordinates,
    insideCabinCoords: insideCabinCoords,
    zPosition: zPosition,
    isPlayerRendered: isPlayerRendered,
}

export default characterVariablies;