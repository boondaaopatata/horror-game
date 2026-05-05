function generateCanvas(idName) {
  const body = document.querySelector('body');
  const canvas = document.createElement('canvas');
  canvas.setAttribute('id', idName);
  body.appendChild(canvas)
  const canvasMade = document.getElementById(idName);
  return canvasMade;
}

export default generateCanvas;