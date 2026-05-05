import generateCanvas from "../generate-elements/generate-canvas.js";

const canvas = generateCanvas('rain-canvas');
const ctx = canvas.getContext("2d");

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

canvas.height = windowHeight;
canvas.width = windowWidth;

class rainParticle {
  constructor(xpos, ypos, height, width, color, speed, windSpeed) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.color = color;
    this.height = height;
    this.width = width;
    this.speed = speed;
    this.windSpeed = windSpeed;

    this.dx = windSpeed;
    this.dy = speed;
  }

  makeParticle(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.xpos, this.ypos, this.width, this.height);
  }

  moveParticle() {
    this.makeParticle(ctx);

    this.xpos += this.dx;
    this.ypos += this.dy;

    if (this.xpos < 0 || this.xpos > windowWidth) {
      this.xpos = Math.random() * windowWidth;
      this.ypos = 0;
    }
    if (this.ypos > windowHeight ) {
      this.ypos = 0;
      this.xpos = Math.random() * windowWidth;
    }
  }
}

let rainParticles = [];
const rainAmount = 500;
const color = 'blue';

function startRain() {

  
  for(let i = 0; i < rainAmount; i++) {
    let speed = 10;
    let windSpeed = -5;
    const y = Math.random() * 1000;
    const startPosition = y - windowHeight;
    const x = Math.random() * windowWidth;
    const height = Math.random() * 20;
    const width = Math.random() * 5;
    if((height * width) > 80) {
      speed *= speed/3;
      windSpeed *=  (Math.abs(windSpeed)/3);
    } else if((height * width) > 60) {
      speed *= speed/4;
      windSpeed *=  (Math.abs(windSpeed)/4);
    } else if((height * width) > 40) {
      speed *= speed/5;
      windSpeed *=  (Math.abs(windSpeed)/5);
    } else if((height * width) > 20) {
      speed *= speed/6;
      windSpeed *=  (Math.abs(windSpeed)/6);
    } else if((height * width) > 0) {
      speed *= speed/7;
      windSpeed *=  (Math.abs(windSpeed)/7);
    }
  
    const particle = new rainParticle(x, startPosition, height, width, color, speed, windSpeed);
    rainParticles.push(particle);
  }
}

const animation = () => {
  ctx.clearRect(0, 0, windowWidth, windowHeight);

  rainParticles.forEach((particle) => {
    particle.moveParticle();
  });

  requestAnimationFrame(animation);
}
animation();

export default startRain;