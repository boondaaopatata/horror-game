import globalVariables from "../global-variables.js";

const fireElementID = "fire";
const fireImagePath = "../../../../images/fire.png";
const fireHeight = globalVariables.windowHeight / 14;
const fireWidth = fireHeight / 2;
const fireCoords = {x: 1000, y: 200};
const zPosition = 10001;

const fireVariables = {
    fireElementID: fireElementID,
    fireImagePath: fireImagePath,
    fireHeight: fireHeight,
    fireWidth: fireWidth,
    fireCoords: fireCoords,
    zPosition: zPosition,
};

export default fireVariables;