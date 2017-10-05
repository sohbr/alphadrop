const Block = require("./block");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementsByTagName("canvas")[0];
  canvas.width = 600;
  canvas.height = 600;

  const context = canvas.getContext("2d");
  const game = new Game(context);

  //update and animate the screen
  let FPS = 200;
  setInterval(function() {
    game.draw();
  }, 5000 / FPS);

  // let dy = 10,
  //   blocks = [],
  //   variableWait = [500, 1000, 1500, 2000, 2500],
  //   lastTime = Number(new Date()),
  //   boxSpot = [1, 51, 101, 151, 201, 251, 301, 351, 401, 451, 501, 551];

  //draw the screen
  // function draw() {
  //   if (
  //     Number(new Date()) >
  //     lastTime + variableWait[Math.floor(Math.random() * variableWait.length)]
  //   ) {
  //     lastTime = Number(new Date());
  //     blocks.push(
  //       new Block(boxSpot[Math.floor(Math.random() * boxSpot.length)], context)
  //     );
  //     if (blocks.length > 9) {
  //       blocks.shift();
  //     }
  //   }
  //
  //   context.clearRect(0, 0, canvas.width, canvas.height);
  //
  //   blocks.forEach(block => {
  //     block.update();
  //     block.render();
  //   });
  // }

  // document.addEventListener("keydown", e => {
  //   e.preventDefault();
  //
  //   let index = blocks.findIndex(b => {
  //     return b.id === e.keyCode;
  //   });
  //
  //   if (index >= 0) {
  //     blocks = [...blocks.slice(0, index), ...blocks.slice(index + 1)];
  //   }
  // });
});
