import allCabinLocation from "../location/all-cabin-locations.js";

const numOfcabins = Object.keys(allCabinLocation).length;
const cabinWidth = 1000;
const cabinHeight = cabinWidth * 0.8;
const cabinElementID = "cabin";
const cabinImagePath = "../../../images/cabin.png";

const cabinVariables = {
    numOfcabins: numOfcabins,
    cabinWidth: cabinWidth,
    cabinHeight: cabinHeight,
    cabinElementID: cabinElementID,
    cabinImagePath: cabinImagePath,
}

export default cabinVariables;