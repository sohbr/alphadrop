const Block = require("./block");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementsByTagName("canvas")[0];
  canvas.width = 840;
  canvas.height = 700;

  const context = canvas.getContext("2d");
  const game = new Game(context);

  game.draw();
});
