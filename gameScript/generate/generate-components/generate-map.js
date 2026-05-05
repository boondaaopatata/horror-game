import allFloorLocations from "../../location/all-floor-locations.js";
import controls from "../../controls.js";
import movementVariables from "../../elementVariables/movement-variables.js";

const floorHeight = 1000;
const floorWidth = floorHeight * 2;
const mapImagePath = "../images/floor.jpg";
const mapID = "floor";
const numOfFloors = (Object.keys(allFloorLocations)).length;
const zPosition = -2;

function mapMovementFunctionality() {
  controls(
    movementVariables.speed, 
    movementVariables.keyDown, 
    allFloorLocations, 
    numOfFloors,
    mapID, 
    floorHeight, 
    floorWidth, 
    mapImagePath,
    zPosition
  );
}

export default mapMovementFunctionality;