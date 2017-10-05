const Block = require("./block");

let blocks = [],
  boxSpot = [0, 70, 140, 210, 280, 340, 410, 490, 560, 630, 700, 770],
  lastTime = Number(new Date());

class Game {
  constructor(context) {
    this.context = context;
    this.speed = 5;
    this.waitTime = 2000;
    this.lives = 3;
    this.score = 0;

    document.addEventListener("keydown", e => {
      e.preventDefault();
      console.log(e.keyCode); //
      let index = blocks.findIndex(b => {
        return b.id === e.keyCode;
      });

      if (index >= 0) {
        blocks = [...blocks.slice(0, index), ...blocks.slice(index + 1)];
        this.speed += 0.1;
        this.waitTime -= 20;
        this.score += 1;
      } else {
        this.lives -= 1;
        console.log(this.lives);
      }
    });
  }

  draw() {
    if (Number(new Date()) > lastTime + 500 + Math.random() * this.waitTime) {
      lastTime = Number(new Date());
      blocks.push(
        new Block(
          boxSpot[Math.floor(Math.random() * boxSpot.length)],
          this.speed,
          this.context
        )
      );
      // if (blocks.length > 9) {
      //   blocks.shift();
      // }
    }

    this.context.clearRect(0, 0, 840, 700);

    blocks.forEach(block => {
      block.update();
      block.render();
      if (block.y === 700) {
        blocks.shift();
        this.lives -= 1;
      }
    });

    requestAnimationFrame(this.draw.bind(this));
  }
}

module.exports = Game;
