import globalVariables from "./global-variables.js";

const enterButtonElementID = "enterButton";
const enterButtonImagePath = "../../../../images/enter-button.png";
const exitButtonElementID = "exitButton";
const exitButtonImagePath = "../../../../images/exit-button.png";
const pickUpButtonElementID = "pickUpButton";
const pickUpButtonImagePath = "../../../../images/pick-up-button.png";

const buttonHeight = globalVariables.windowHeight / 9;
const buttonWidth = buttonHeight * 4;
const buttonXCoords = globalVariables.windowWidth - globalVariables.windowWidth * 0.3;
const buttonYCoords = (globalVariables.windowHeight / 2) - (buttonHeight / 2)
const buttonCoords = {x: buttonXCoords, y: buttonYCoords};
const zPosition = 10001;
let isEnterButtonGenerated = false;
let isExitButtonGenerated = false;
let isItemPickUpButtonGenerated = false;
let isEnterButtonEventListenerGenerated = false;
let isExitButtonEventListenerGenerated = false;
let isItemPickUpEventListenerGenerated = false;


const buttonVariables = {
    enterButtonElementID: enterButtonElementID,
    enterButtonImagePath: enterButtonImagePath,
    exitButtonElementID: exitButtonElementID,
    exitButtonImagePath: exitButtonImagePath,
    pickUpButtonElementID: pickUpButtonElementID,
    pickUpButtonImagePath: pickUpButtonImagePath,
    buttonHeight: buttonHeight,
    buttonWidth: buttonWidth,
    buttonCoords: buttonCoords,
    zPosition: zPosition,
    isEnterButtonGenerated: isEnterButtonGenerated,
    isExitButtonGenerated: isExitButtonGenerated,
    isItemPickUpButtonGenerated: isItemPickUpButtonGenerated,
    isEnterButtonEventListenerGenerated: isEnterButtonEventListenerGenerated,
    isExitButtonEventListenerGenerated: isExitButtonEventListenerGenerated,
    isItemPickUpEventListenerGenerated: isItemPickUpEventListenerGenerated,
}

export default buttonVariables;