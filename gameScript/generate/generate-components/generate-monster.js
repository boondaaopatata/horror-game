import generateImageElement from "../generate-elements/generate-image-element.js";

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const monsterHeight = 200;
const monsterWidth = monsterHeight;
const monsterName = "seeker";
const monsterImagePath = "../images/monster.png";
const monsterStartingPlace = {x:windowWidth * 0.5, y:windowHeight * 0.5};


function generateMonster() {
    generateImageElement(monsterName, monsterImagePath, monsterHeight, monsterWidth, monsterStartingPlace);
}

export default generateMonster;