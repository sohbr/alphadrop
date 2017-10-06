const Block = require("./block");

let blocks = [],
  boxSpot = [0, 70, 140, 210, 280, 340, 410, 490, 560, 630, 700, 770],
  lastTime = Number(new Date()),
  gameOverMenu = document.getElementById("gameovermenu"),
  img = new Image();
img.src = "./keyboard_images/pointer2.png";

class Game {
  constructor(context, gameState) {
    this.context = context;
    this.speed = 3;
    this.waitTime = 2000;
    this.minWait = 500;
    this.lives = 5;
    this.score = 0;
    this.gameState = gameState;

    document.getElementById("score").innerHTML = `score: ${this.score}`;
    document.getElementById("lives").style.color = "#78a5a3";
    document.getElementById("lives").innerHTML =
      "&#9679; &#9679; &#9679; &#9679; &#9679;";

    document.addEventListener("keydown", e => {
      e.preventDefault();

      let index = blocks.findIndex(b => {
        return b.id === e.keyCode;
      });

      if (index >= 0) {
        setInterval(
          this.context.drawImage(
            img,
            blocks[index].x + 10,
            blocks[index].y + 30,
            70,
            70
          ),
          40
        );
        blocks = [...blocks.slice(0, index), ...blocks.slice(index + 1)];
        this.speed += 0.1;
        this.minWait -= 3;
        this.waitTime -= 25;
        this.score += 1;
        document.getElementById("score").innerHTML = `score: ${this.score}`;
      } else {
        this.reduceLife();
      }
    });

    const restartButton = document.getElementById("restartButton");

    restartButton.onclick = () => {
      this.setState("alive");
      gameOverMenu.style.visibility = "hidden";
      this.speed = 3;
      this.waitTime = 2000;
      this.minWait = 500;
      this.lives = 5;
      this.score = 0;
      this.draw();
      document.getElementById("lives").style.color = "#78a5a3";
      document.getElementById("lives").innerHTML =
        "&#9679; &#9679; &#9679; &#9679; &#9679;";
      document.getElementById("score").innerHTML = `score: ${this.score}`;
    };
  }

  draw() {
    if (
      Number(new Date()) >
      lastTime + Math.max(200, this.minWait + Math.random() * this.waitTime)
    ) {
      lastTime = Number(new Date());

      blocks.push(
        new Block(
          boxSpot[Math.floor(Math.random() * boxSpot.length)],
          this.speed,
          this.context
        )
      );
    }

    this.context.clearRect(0, 0, 840, 700);

    blocks.forEach(block => {
      block.update();
      block.render();
      if (block.y >= 700) {
        blocks.shift();
        this.reduceLife();
      }
    });

    if (this.gameState === "gameover") {
      this.context.clearRect(0, 0, 840, 700);
      blocks = [];
      return;
    }
    requestAnimationFrame(this.draw.bind(this));
  }

  reduceLife() {
    this.lives -= 1;

    let numberOfLives = "";
    for (let i = 0; i < this.lives; i++) {
      numberOfLives += "&#9679; ";
    }
    let lifeColor = ["#ce5a57", "#e1b16a", "#e1b16a", "#78a5a3", "#78a5a3"];
    document.getElementById("lives").style.color = lifeColor[this.lives - 1];
    document.getElementById("lives").innerHTML = `${numberOfLives}`;
    if (this.lives < 1) {
      this.setState("gameover");
    }
  }

  setState(state) {
    this.gameState = state;
    this.showMenu(state);
  }

  showMenu(state) {
    if (state === "gameover") {
      gameOverMenu.style.visibility = "visible";
    }
  }
}

module.exports = Game;
