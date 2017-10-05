const Block = require("./block");

let dy = 10,
  blocks = [],
  waitTime = 2000,
  lastTime = Number(new Date()),
  boxSpot = [0, 70, 140, 210, 280, 340, 410, 490, 560, 630, 700, 770];

class Game {
  constructor(context) {
    this.context = context;
    this.speed = 10;

    document.addEventListener("keydown", e => {
      e.preventDefault();
      console.log(e.keyCode);
      let index = blocks.findIndex(b => {
        return b.id === e.keyCode;
      });

      if (index >= 0) {
        blocks = [...blocks.slice(0, index), ...blocks.slice(index + 1)];
        this.speed += 0.1;
      }
    });
  }

  draw() {
    if (Number(new Date()) > lastTime + 500 + Math.random() * waitTime) {
      lastTime = Number(new Date());
      blocks.push(
        new Block(
          boxSpot[Math.floor(Math.random() * boxSpot.length)],
          this.speed,
          this.context
        )
      );
      if (blocks.length > 9) {
        blocks.shift();
      }
    }

    this.context.clearRect(0, 0, 840, 700);

    blocks.forEach(block => {
      block.update();
      block.render();
    });

    requestAnimationFrame(this.draw.bind(this));
  }
}

module.exports = Game;
