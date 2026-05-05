const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;
const bodyElement = document.body;
let deRenderedOutside = false;
let clicked = false;

const globalVariables = {
    windowHeight: windowHeight,
    windowWidth: windowWidth,
    bodyElement: bodyElement,
    deRenderedOutside: deRenderedOutside,
    clicked: clicked,
}

export default globalVariables;