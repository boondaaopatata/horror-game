import globalVariables from "../global-variables.js";

const magazineElementID = "magazine";
const magazineImagePath = "../../../../images/magazine.png";
const magazineHeight = globalVariables.windowHeight / 14;
const magazineWidth = magazineHeight / 2;
const magazineCoords = {x: 1000, y: 200};
const zPosition = 10001;

const magazineVariables = {
    magazineElementID: magazineElementID,
    magazineImagePath: magazineImagePath,
    magazineHeight: magazineHeight,
    magazineWidth: magazineWidth,
    magazineCoords: magazineCoords,
    zPosition: zPosition,
};

export default magazineVariables;