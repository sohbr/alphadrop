/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Block = __webpack_require__(1);
const Game = __webpack_require__(2);

document.addEventListener("DOMContentLoaded", function() {
  const canvas = document.getElementsByTagName("canvas")[0];
  canvas.width = 770;
  canvas.height = 700;

  const context = canvas.getContext("2d");
  const game = new Game(context);

  game.draw();
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const keyBank = [
  [65, "./keyboard_images/A.png"],
  [66, "./keyboard_images/B.png"],
  [67, "./keyboard_images/C.png"],
  [68, "./keyboard_images/D.png"],
  [69, "./keyboard_images/E.png"],
  [70, "./keyboard_images/F.png"],
  [71, "./keyboard_images/G.png"],
  [72, "./keyboard_images/H.png"],
  [73, "./keyboard_images/I.png"],
  [74, "./keyboard_images/J.png"],
  [75, "./keyboard_images/K.png"],
  [76, "./keyboard_images/L.png"],
  [77, "./keyboard_images/M.png"],
  [78, "./keyboard_images/N.png"],
  [79, "./keyboard_images/O.png"],
  [80, "./keyboard_images/P.png"],
  [81, "./keyboard_images/Q.png"],
  [82, "./keyboard_images/R.png"],
  [83, "./keyboard_images/S.png"],
  [84, "./keyboard_images/T.png"],
  [85, "./keyboard_images/U.png"],
  [86, "./keyboard_images/V.png"],
  [87, "./keyboard_images/W.png"],
  [88, "./keyboard_images/X.png"],
  [89, "./keyboard_images/Y.png"],
  [90, "./keyboard_images/Z.png"]
];

class Block {
  constructor(x, speed, context) {
    this.x = x;
    this.y = 0;
    this.width = 70;
    this.height = 70;
    var img = new Image();
    [this.id, img.src] = keyBank[Math.floor(Math.random() * 25)];
    this.img = img;
    this.context = context;
    this.speed = speed;
  }

  update() {
    if (this.y < 700) {
      this.y += this.speed;
    }
  }

  render() {
    this.context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

module.exports = Block;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const Block = __webpack_require__(1);

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map