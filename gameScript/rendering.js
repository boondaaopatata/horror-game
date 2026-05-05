import generateImageElement from "./generate/generate-elements/generate-image-element.js";
import removeImageElement from "./generate/generate-elements/remove-image-element.js";
import innerCabinVariables from "./elementVariables/inner-cabin-variables.js";
import itemFunctions from "./item-functions.js";
import allTreeLocations from "./location/all-tree-locations.js";
import globalVariables from "./elementVariables/global-variables.js";
import characterVariablies from "./elementVariables/character-variables.js";
import treeVariables from "./elementVariables/tree-variables.js";

const mouseOverTree = (event) => {
  const {target} = event;
  treeVariables.mouseOverTree = target.id;
  console.log(treeVariables.mouseOverTree)
  const x = allTreeLocations[treeVariables.mouseOverTree.slice(4)].x;
  const y = allTreeLocations[treeVariables.mouseOverTree.slice(4)].y;
  document.getElementById(treeVariables.mouseOverTree).addEventListener('click', itemFunctions.hitTree);
  allTreeLocations[treeVariables.mouseOverTree.slice(4)].isMousePositionEventListenerLoaded = true;
  console.log('add')
}

const mouseOutTree = () => {
  console.log(treeVariables.mouseOverTree)

  document.getElementById(treeVariables.mouseOverTree).removeEventListener('click', itemFunctions.hitTree);
  //allTreeLocations[treeVariables.mouseOverTree.slice(4)].isMousePositionEventListenerLoaded = false;
  console.log('remove')
}




function renderElements(listLength, allElementLocations, elementName, elementHeight, elementWidth, elementImagePath, zPosition = 0) {
  for (let i = 0; i < listLength; i++) {
    let {x, y} = allElementLocations[`${i}`];

    const element = document.getElementById(`${elementName}${i}`);
    
    if ((x >= -elementWidth && x <= globalVariables.windowWidth) && (y >= -elementHeight && y <= globalVariables.windowHeight + elementHeight) && !innerCabinVariables.isInsideCabin) {
      if (element) {
        element.style.top = `${y}px`;
        element.style.left = `${x}px`;
        if ((elementName).slice(0, 4) == 'tree') {
          if (
            !allTreeLocations[i].isMousePositionEventListenerLoaded && 
            characterVariablies.characterCoordinates.x >= x - characterVariablies.characterWidth &&
            characterVariablies.characterCoordinates.x + characterVariablies.characterWidth <= x + (characterVariablies.characterWidth * 2) &&
            characterVariablies.characterCoordinates.y >= y - characterVariablies.characterHeight &&
            characterVariablies.characterCoordinates.y + characterVariablies.characterHeight <= y + (characterVariablies.characterHeight * 2)) {
            console.log(i)
            element.addEventListener('mouseover', mouseOverTree);
            element.addEventListener('mouseout', mouseOutTree);
          }// else {
           // element.removeEventListener('mouseover', mouseOverTree);
           // element.removeEventListener('mouseout', mouseOutTree);
          //}
        } 
      } else {
        if (zPosition !== -2) {
          zPosition = i;
        }
        generateImageElement(`${elementName}${i}`, elementImagePath, elementHeight, elementWidth, {x, y}, zPosition);
      }
    } else {
      try {
        if (element) {
          removeImageElement(`${elementName}${i}`);
        }
      } catch (err) {
        console.log(err);
      }
    }

  }
}

export default renderElements;