import globalVariables from "../global-variables.js";

const axeElementID = "axe";
const axeImagePath = "../../../../images/axe.png";
const axeHeight = globalVariables.windowHeight / 14;
const axeWidth = axeHeight / 1.5;
const axeCoords = {x: globalVariables.windowWidth / 10, y: globalVariables.windowHeight * 0.8};
const zPosition = 10;

const axeVariables = {
    axeElementID: axeElementID,
    axeImagePath: axeImagePath,
    axeHeight: axeHeight,
    axeWidth: axeWidth,
    axeCoords: axeCoords,
    zPosition: zPosition,
};

export default axeVariables;