const leftClickFunction = (useFunction = false, elementID = null, similarElementsName = null, numOfElements = 0) => {
  if (useFunction) {
    useFunction(elementID, similarElementsName, numOfElements);
  }
};

const keyPressedFunction = (event, activationKey, useFunction = false, elementID = null, similarElementsName = null, numOfElements = 0) => {
  const key = (event.key).toLowerCase();
  if (key == activationKey && useFunction) {
    useFunction(elementID, similarElementsName, numOfElements);
  }
};

const keyDownFunction = (event, keyDown) => {
  const key = (event.key).toLowerCase();
  const keysList = Object.keys(keyDown);
  if (keysList.includes(key)) {
    keyDown[`${key}`] = true;
  };
};

const keyUpFuntion = (event, keyDown) => {
  const key = (event.key).toLowerCase();
  const keysList = Object.keys(keyDown);
  if (keysList.includes(key)) {
    keyDown[`${key}`] = false;
  }; 
};

const keyEventListenerFunctions = {
  leftClickFunction: leftClickFunction,
  keyPressedFunction: keyPressedFunction,
  keyDownFunction: keyDownFunction,
  keyUpFuntion: keyUpFuntion,
}

export default keyEventListenerFunctions;