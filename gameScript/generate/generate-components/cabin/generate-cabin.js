import controls from "../../../controls.js";
import cabinVariables from "../../../elementVariables/cabin-variables.js";
import allCabinLocation from "../../../location/all-cabin-locations.js";
import movementVariables from "../../../elementVariables/movement-variables.js";


function cabinMovementFunctionality() {
  controls(
    movementVariables.speed, 
    movementVariables.keyDown, 
    allCabinLocation, 
    cabinVariables.numOfcabins, 
    cabinVariables.cabinElementID, 
    cabinVariables.cabinHeight, 
    cabinVariables.cabinWidth, 
    cabinVariables.cabinImagePath
  );
};



export default cabinMovementFunctionality;