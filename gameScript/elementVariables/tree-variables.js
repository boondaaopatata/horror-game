import allTreeLocations from "../location/all-tree-locations.js";

const treeHeight = 500;
const treeWidth = treeHeight * 0.6;
const treeImagePath = "../images/tree.png";
const treeImageName = "tree";
const numOfTrees = Object.keys(allTreeLocations).length;
const treeHealth = 100;
let mouseOverTree;

const treeVariables = {
    treeHeight: treeHeight,
    treeWidth: treeWidth,
    treeImagePath: treeImagePath,
    treeImageName: treeImageName,
    numOfTrees: numOfTrees,
    treeHealth: treeHealth,
    mouseOverTree: mouseOverTree,
}

export default treeVariables;