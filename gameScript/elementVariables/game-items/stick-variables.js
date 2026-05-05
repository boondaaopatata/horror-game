import globalVariables from "../global-variables.js";

const stickElementID = "stick";
const stickImagePath = "../../../../images/stick.png";
const stickHeight = globalVariables.windowHeight / 14;
const stickWidth = stickHeight / 2;
const stickCoords = {x: 1000, y: 200};
const zPosition = 10001;

const stickVariables = {
    stickElementID: stickElementID,
    stickImagePath: stickImagePath,
    stickHeight: stickHeight,
    stickWidth: stickWidth,
    stickCoords: stickCoords,
    zPosition: zPosition,
};

export default stickVariables;