import movementVariables from "./movement-variables.js";

const pushBackLength = movementVariables.speed;
const mapHeight = 40000;
const mapWidth = mapHeight;
let mapCoordinates = {x: -20000, y: -20000};
const isBorder = true;

const mapVariables = {
    pushBackLength: pushBackLength,
    mapHeight: mapHeight,
    mapWidth: mapWidth,
    mapCoordinates: mapCoordinates,
    isBorder: isBorder,
}

export default mapVariables;