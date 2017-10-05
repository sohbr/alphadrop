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
