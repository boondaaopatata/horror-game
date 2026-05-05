import globalVariables from "../global-variables.js";

const torchElementID = "torch";
const torchImagePath = "../../../../images/torch.png";
const torchHeight = globalVariables.windowHeight / 14;
const torchWidth = torchHeight / 2;
const torchCoords = {x: 1000, y: 200};
const zPosition = 10001;

const torchVariables = {
    torchElementID: torchElementID,
    torchImagePath: torchImagePath,
    torchHeight: torchHeight,
    torchWidth: torchWidth,
    torchCoords: torchCoords,
    zPosition: zPosition,
};

export default torchVariables;