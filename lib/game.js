const Block = require("./block");

let dy = 10,
  blocks = [],
  variableWait = [500, 1000, 1500, 2000, 2500],
  lastTime = Number(new Date()),
  boxSpot = [1, 51, 101, 151, 201, 251, 301, 351, 401, 451, 501, 551];

class Game {
  constructor(context) {
    this.context = context;

    document.addEventListener("keydown", e => {
      e.preventDefault();

      let index = blocks.findIndex(b => {
        return b.id === e.keyCode;
      });

      if (index >= 0) {
        blocks = [...blocks.slice(0, index), ...blocks.slice(index + 1)];
      }
    });
  }

  draw() {
    if (
      Number(new Date()) >
      lastTime + variableWait[Math.floor(Math.random() * variableWait.length)]
    ) {
      lastTime = Number(new Date());
      blocks.push(
        new Block(
          boxSpot[Math.floor(Math.random() * boxSpot.length)],
          this.context
        )
      );
      if (blocks.length > 9) {
        blocks.shift();
      }
    }

    this.context.clearRect(0, 0, 600, 600);

    blocks.forEach(block => {
      block.update();
      block.render();
    });

    requestAnimationFrame(this.draw.bind(this));
  }
}

module.exports = Game;
