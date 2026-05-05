import generateImageElement from "../generate-elements/generate-image-element.js";
import removeImageElement from "../generate-elements/remove-image-element.js";
import characterVariablies from "../../elementVariables/character-variables.js";
import cabinVariables from "../../elementVariables/cabin-variables.js";
import buttonVariables from "../../elementVariables/button-variables.js";
import allCabinLocation from "../../location/all-cabin-locations.js";
import globalVariables from "../../elementVariables/global-variables.js";
import innerCabinVariables from "../../elementVariables/inner-cabin-variables.js";
import generateInnerCabin from "./cabin/generate-inside-cabin.js";
import generatePlayer from "./generate-character.js";
import itemsVariables from "../../elementVariables/game-items/items-variables.js";
import gameImprovementsFunctions from "../../game-improvements-functions.js";
import axeVariables from "../../elementVariables/game-items/axe-variables.js";
import bulletVariables from "../../elementVariables/game-items/bullet-variables.js";
import fireVariables from "../../elementVariables/game-items/fire-variables.js";
import gunVariables from "../../elementVariables/game-items/gun-variables.js";
import ligtherVariables from "../../elementVariables/game-items/ligther-variables.js";
import magazineVariables from "../../elementVariables/game-items/magazine-variables.js";
import stickVariables from "../../elementVariables/game-items/stick-variables.js";
import torchVariables from "../../elementVariables/game-items/torch-variables.js";
import hotbarVariables from "../../elementVariables/hootbar-variables.js";
import styleVariables from "../../elementVariables/style-variables.js";


const characterButtomBorder = characterVariablies.characterCoordinates.y + characterVariablies.characterHeight;
const characterTopBorder = characterVariablies.characterCoordinates.y;
const characterLeftBorder = characterVariablies.characterCoordinates.x;
const characterRightBorder = characterVariablies.characterCoordinates.x + characterVariablies.characterWidth;

let enterButtonHandler = null;
let exitButtonHandler = null;
let pickUpButtonHandler = null;

const buttonPressedFunction = (activationKey, useFunction = false, elementID = null, similarElementsName = null, numOfElements = 0) => {
  return (event) => {
    const key = (event.key).toLowerCase();
    if (key == activationKey && useFunction) {
      useFunction(elementID, similarElementsName, numOfElements);
    }
  };
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function generateEnterButtonEventListener() {
  enterButtonHandler = buttonPressedFunction(innerCabinVariables.Activationkey, generateInnerCabin);
  globalVariables.bodyElement.addEventListener('keypress', enterButtonHandler);
}

function generateExitButtonEventListener() {
  exitButtonHandler = buttonPressedFunction(innerCabinVariables.Activationkey, () => {
    if (!!hotbarVariables.itemInHand) {
      changeItemPosition(hotbarVariables.itemInHand);
    }
    innerCabinVariables.isInsideCabin = false;
    removeImageElement(characterVariablies.characterElementID);
    removeImageElement(innerCabinVariables.innerCabinElementID);
    generatePlayer();
    for (let i = 0; i < (itemsVariables.itemsGeneratedInsideCabin).length; i++) {
      removeImageElement(itemsVariables.itemsGeneratedInsideCabin[i]);
      itemsVariables.itemsGeneratedInsideCabin.shift();
    }
  });
  globalVariables.bodyElement.addEventListener('keypress', exitButtonHandler);

};

function generatePickUpButtonEventListener() {
  pickUpButtonHandler = buttonPressedFunction(innerCabinVariables.Activationkey, gameImprovementsFunctions.insertPickedUpItemIntoHotbarSlot);
  globalVariables.bodyElement.addEventListener('keypress', pickUpButtonHandler);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function removeEnterButton() {
  if (buttonVariables.isEnterButtonGenerated) {
    removeImageElement(buttonVariables.enterButtonElementID);
    buttonVariables.isEnterButtonGenerated = false;
    
    removeButtonEventListener(enterButtonHandler);
    buttonVariables.isEnterButtonEventListenerGenerated = false;
  }
}

function removeExitButton() {
  if (buttonVariables.isExitButtonGenerated) {
    removeImageElement(buttonVariables.exitButtonElementID);
    buttonVariables.isExitButtonGenerated = false;
    
    removeButtonEventListener(exitButtonHandler);
    buttonVariables.isExitButtonEventListenerGenerated = false;
  }
}

function removePickUpButton() {
  if (buttonVariables.isItemPickUpButtonGenerated) {
    removeImageElement(buttonVariables.pickUpButtonElementID);
    buttonVariables.isItemPickUpButtonGenerated = false;
    
    removeButtonEventListener(pickUpButtonHandler);
    buttonVariables.isItemPickUpEventListenerGenerated = false;
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function removeButtonEventListener(functionUsed) {
  globalVariables.bodyElement.removeEventListener('keypress', functionUsed);
} 

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkIfNearItem(itemCoords, itemHeight, itemWidth, elementName) {

  let isTaken = false;

  for (let i = 1; i <= 10; i++) {
    if (hotbarVariables.itemsInHotbar[i]["ID"] == elementName) {
      isTaken = true;
    }
  }

  if (characterVariablies.insideCabinCoords.x > itemCoords.x - (characterVariablies.characterWidth * 2) && 
  characterVariablies.insideCabinCoords.x + characterVariablies.characterWidth < itemCoords.x + itemWidth + (characterVariablies.characterWidth * 2) && 
  characterVariablies.insideCabinCoords.y > itemCoords.y - (characterVariablies.characterWidth * 2) && 
  characterVariablies.insideCabinCoords.y + characterVariablies.characterHeight < itemCoords.y + itemHeight + (characterVariablies.characterWidth * 2) &&
  !isTaken) {

      if (!buttonVariables.isItemPickUpButtonGenerated) {
        generateImageElement(
          buttonVariables.pickUpButtonElementID, 
          buttonVariables.pickUpButtonImagePath, 
          buttonVariables.buttonHeight, 
          buttonVariables.buttonWidth, 
          buttonVariables.buttonCoords, 
          buttonVariables.zPosition
        );
        
        buttonVariables.isItemPickUpButtonGenerated = true;
        
        generatePickUpButtonEventListener();
        buttonVariables.isItemPickUpEventListenerGenerated = true;
    }
  } else {
    removePickUpButton();
  }
}

function generateItemPickerButton() {

  let elementID;

  for (let i = 1; i <= hotbarVariables.numOfHotbars; i++) {
    const hotbar = document.getElementById(`${hotbarVariables.hotbarElementID}${i}`);

    if (!!hotbar.classList.contains(styleVariables.selectedEffect)) {
      elementID = `${hotbarVariables.hotbarElementID}${i}`;
    }
  }

  for (let i = 0; i <= 10; i++) {
    const elementName = itemsVariables.allInGameItems[i];
    const element = document.getElementById(elementName);

    if (element) {
      switch(elementName) {
        case 'axe':
          hotbarVariables.elementPickedUp.ID = axeVariables.axeElementID;
          hotbarVariables.elementPickedUp.Image = axeVariables.axeImagePath;
          buttonPressedFunction(
            innerCabinVariables.Activationkey, 
            checkIfNearItem(
              axeVariables.axeCoords, 
              axeVariables.axeHeight, 
              axeVariables.axeWidth,
              elementName
            )
          );
          gameImprovementsFunctions.selectedHotbarSlot(elementID, elementID.slice(0, 6), false);
        break;
        case 'bullet':
          if (!hotbarVariables.itemsInHotbar[10]["ID"]) {
            hotbarVariables.elementPickedUp.ID = bulletVariables.bulletElementID;
            hotbarVariables.elementPickedUp.Image = bulletVariables.bulletImagePath;
            buttonPressedFunction(
              innerCabinVariables.Activationkey, 
              checkIfNearItem(
                bulletVariables.bulletCoords, 
                bulletVariables.bulletHeight, 
                bulletVariables.bulletWidth,
                elementName
              )
            );
          }
        break;
        case 'fire':
          if (!hotbarVariables.itemsInHotbar[10]["ID"]) {
            hotbarVariables.elementPickedUp.ID = fireVariables.fireElementID;
            hotbarVariables.elementPickedUp.Image = fireVariables.fireImagePath;
            buttonPressedFunction(
              innerCabinVariables.Activationkey, 
              checkIfNearItem(
                fireVariables.fireCoords, 
                fireVariables.fireHeight, 
                fireVariables.fireWidth,
                elementName
              )
            );
          }
        break;
        case 'gun':
          if (!hotbarVariables.itemsInHotbar[10]["ID"]) {
            hotbarVariables.elementPickedUp.ID = gunVariables.gunElementID;
            hotbarVariables.elementPickedUp.Image = gunVariables.gunImagePath;
            buttonPressedFunction(
              innerCabinVariables.Activationkey, 
              checkIfNearItem(
                gunVariables.gunCoords, 
                gunVariables.gunHeight, 
                gunVariables.gunWidth,
                elementName
              )
            );
          }
        break;
        case 'ligther':
          if (!hotbarVariables.itemsInHotbar[10]["ID"]) {
            hotbarVariables.elementPickedUp.ID = ligtherVariables.ligtherElementID;
            hotbarVariables.elementPickedUp.Image = ligtherVariables.ligtherImagePath;
            buttonPressedFunction(
              innerCabinVariables.Activationkey, 
              checkIfNearItem(
                ligtherVariables.ligtherCoords, 
                ligtherVariables.ligtherHeight, 
                ligtherVariables.ligtherWidth,
                elementName
              )
            );
          }
        break;
        case 'magazine':
          if (!hotbarVariables.itemsInHotbar[10]["ID"]) {
            hotbarVariables.elementPickedUp.ID = magazineVariables.magazineElementID;
            hotbarVariables.elementPickedUp.Image = magazineVariables.magazineImagePath;
            buttonPressedFunction(
              innerCabinVariables.Activationkey, 
              checkIfNearItem(
                magazineVariables.magazineCoords, 
                magazineVariables.magazineHeight, 
                magazineVariables.magazineWidth,
                elementName
              )
            );
          }
        break;
        case 'stick':
          if (!hotbarVariables.itemsInHotbar[10]["ID"]) {
            hotbarVariables.elementPickedUp.ID = stickVariables.stickElementID;
            hotbarVariables.elementPickedUp.Image = stickVariables.stickImagePath;
            buttonPressedFunction(
              innerCabinVariables.Activationkey, 
              checkIfNearItem(
                stickVariables.stickCoords, 
                stickVariables.stickHeight, 
                stickVariables.stickWidth,
                elementName
              )
            );
          }
        break;
        case 'torch':
          if (!hotbarVariables.itemsInHotbar[10]["ID"]) {
            hotbarVariables.elementPickedUp.ID = torchVariables.torchElementID;
            hotbarVariables.elementPickedUp.Image = torchVariables.torchImagePath;
            buttonPressedFunction(
              innerCabinVariables.Activationkey, 
              checkIfNearItem(
                torchVariables.torchCoords, 
                torchVariables.torchHeight, 
                torchVariables.torchWidth,
                elementName
              )
            );
          }
        break;

      }
    } else {
      return
    }
  }
}

function generateEnterButton() {

  innerCabinVariables.cabinNumber = -1;

  let nearAnyCabin = 0;

  removeExitButton();

  for (let i = 0; i < cabinVariables.numOfcabins; i++) {

    const {x, y} = allCabinLocation[i];

    const cabinButtonBorder = y + cabinVariables.cabinHeight;
    const cabinTopBorder = y;
    const cabinLeftBorder = x;
    const cabinRightBorder = x + cabinVariables.cabinWidth;

    if ((cabinButtonBorder >= characterButtomBorder && cabinTopBorder <= characterTopBorder) && 
        (cabinLeftBorder <= characterLeftBorder && cabinRightBorder >= characterRightBorder)) {

      nearAnyCabin++;

      if (!buttonVariables.isEnterButtonGenerated && !innerCabinVariables.isInsideCabin) {
        generateImageElement(
          buttonVariables.enterButtonElementID, 
          buttonVariables.enterButtonImagePath, 
          buttonVariables.buttonHeight, 
          buttonVariables.buttonWidth, 
          buttonVariables.buttonCoords, 
          buttonVariables.zPosition
        );
        buttonVariables.isEnterButtonGenerated = true;

        
        generateEnterButtonEventListener();
        buttonVariables.isEnterButtonEventListenerGenerated = true;
      }
    } 
    if (nearAnyCabin == 0) {
      removeEnterButton();
    }
    innerCabinVariables.cabinNumber++;
  }
}


function changeItemPosition() {
  const itemElement = document.getElementById(hotbarVariables.itemInHand);
  
  itemElement.style.top = `${itemsVariables.itemOutsideCabinCoords.y}px`;
  itemElement.style.left = `${itemsVariables.itemOutsideCabinCoords.x}px`;
}

function generateExitButton() {
  
  if (characterVariablies.insideCabinCoords.x >= globalVariables.windowWidth * 0.4 &&
    characterVariablies.insideCabinCoords.x + characterVariablies.characterWidth <= globalVariables.windowWidth * 0.6 &&
    characterVariablies.insideCabinCoords.y >= globalVariables.windowHeight * 0.8 &&
    innerCabinVariables.isInsideCabin) {
      
      removeEnterButton();
      
      if (!buttonVariables.isExitButtonGenerated) { 
        generateImageElement(
          buttonVariables.exitButtonElementID, 
          buttonVariables.exitButtonImagePath, 
          buttonVariables.buttonHeight, 
          buttonVariables.buttonWidth, 
          buttonVariables.buttonCoords, 
          buttonVariables.zPosition
        );
        
        buttonVariables.isExitButtonGenerated = true;
        
        generateExitButtonEventListener();
        buttonVariables.isExitButtonEventListenerGenerated = true;
      }
    } else if (buttonVariables.isExitButtonGenerated ) {
    removeExitButton();
    
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function generateButtons() {
  if (!innerCabinVariables.isInsideCabin) {
    generateEnterButton();
  } else {
    generateExitButton();
    generateItemPickerButton();
  }
};

export default generateButtons;