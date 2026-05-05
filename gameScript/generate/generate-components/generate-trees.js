import allTreeLocations from "../../location/all-tree-locations.js";
import controls from "../../controls.js";
import movementVariables from "../../elementVariables/movement-variables.js";
import treeVariables from "../../elementVariables/tree-variables.js";


function treeMovementFunctionality() {
  controls(
    movementVariables.speed, 
    movementVariables.keyDown, 
    allTreeLocations, 
    treeVariables.numOfTrees, 
    treeVariables.treeImageName, 
    treeVariables.treeHeight, 
    treeVariables.treeWidth, 
    treeVariables.treeImagePath
  );
  
};

export default treeMovementFunctionality;