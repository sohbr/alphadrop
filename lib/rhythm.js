const Block = require("./block");
const Game = require("./game");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  canvas.width = 840;
  canvas.height = 700;

  const context = canvas.getContext("2d");

  const startButton = document.getElementById("startButton");
  startButton.onclick = () => {
    document.getElementById("gamestartmenu").style.visibility = "hidden";
    const game = new Game(context, "alive");
    game.draw();
  };
});
