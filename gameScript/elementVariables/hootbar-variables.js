import globalVariables from "./global-variables.js";

const numOfHotbars = 10;
const hotbarElementID = "hotbar";
const hotbarImagePath = "../../../../images/hot-bar.png";
const hotbarWidth = globalVariables.windowWidth * 0.05;
const hotbarHeight = hotbarWidth;
const hotbarCoords = {x: globalVariables.windowWidth * 0.2, y: globalVariables.windowHeight * 0.9};
const margins = hotbarWidth * 0.1;
const firstEmptySlot = 0;
const hotToCalculateSlotPosition = hotbarCoords.x + ((hotbarWidth + margins) * (firstEmptySlot + 1)) + hotbarWidth * 0.25;
const zPosition = 10010;
let isHotbarGenerated = false;
let itemsInHotbar = {
    1: {ID: "", inInventory: false}, 
    2: {ID: "", inInventory: false}, 
    3: {ID: "", inInventory: false}, 
    4: {ID: "", inInventory: false}, 
    5: {ID: "", inInventory: false}, 
    6: {ID: "", inInventory: false}, 
    7: {ID: "", inInventory: false}, 
    8: {ID: "", inInventory: false}, 
    9: {ID: "", inInventory: false}, 
    10: {ID: "", inInventory: false}
};
let isHotbarEventListenerGenerated = false;
let elementPickedUp = {ID: "", Image: ""};
let iselementSelectedGenerated = false;
let itemInHand = "";

const hotbarVariables = {
    numOfHotbars: numOfHotbars,
    hotbarElementID: hotbarElementID,
    hotbarImagePath: hotbarImagePath,
    hotbarHeight: hotbarHeight,
    hotbarWidth: hotbarWidth,
    hotbarCoords: hotbarCoords,
    firstEmptySlot: firstEmptySlot,
    hotToCalculateSlotPosition: hotToCalculateSlotPosition,
    zPosition: zPosition,
    margins: margins,
    isHotbarGenerated: isHotbarGenerated,
    itemsInHotbar: itemsInHotbar,
    isHotbarEventListenerGenerated: isHotbarEventListenerGenerated,
    elementPickedUp: elementPickedUp,
    iselementSelectedGenerated: iselementSelectedGenerated,
    itemInHand: itemInHand,
}

export default hotbarVariables;