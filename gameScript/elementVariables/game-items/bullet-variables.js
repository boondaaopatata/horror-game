import globalVariables from "../global-variables.js";

const bulletElementID = "bullet";
const bulletImagePath = "../../../../images/bullet.png";
const bulletHeight = globalVariables.windowHeight / 14;
const bulletWidth = bulletHeight / 2;
const bulletCoords = {x: 1000, y: 200};
const zPosition = 10001;

const bulletVariables = {
    bulletElementID: bulletElementID,
    bulletImagePath: bulletImagePath,
    bulletHeight: bulletHeight,
    bulletWidth: bulletWidth,
    bulletCoords: bulletCoords,
    zPosition: zPosition,
};

export default bulletVariables;