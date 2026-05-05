import globalVariables from "../global-variables.js";

const gunElementID = "gun";
const gunImagePath = "../../../../images/gun.png";
const gunHeight = globalVariables.windowHeight / 14;
const gunWidth = gunHeight / 2;
const gunCoords = {x: 1000, y: 200};
const zPosition = 10001;

const gunVariables = {
    gunElementID: gunElementID,
    gunImagePath: gunImagePath,
    gunHeight: gunHeight,
    gunWidth: gunWidth,
    gunCoords: gunCoords,
    zPosition: zPosition,
};

export default gunVariables;