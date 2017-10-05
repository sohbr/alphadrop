const Block = require("./block");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementsByTagName("canvas")[0];
  canvas.width = 600;
  canvas.height = 600;

  const context = canvas.getContext("2d");
  const game = new Game(context);

  game.draw();
});
