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
  [90, "./keyboard_images/Z.png"],
  [186, "./keyboard_images/;.png"],
  [219, "./keyboard_images/[.png"],
  [221, "./keyboard_images/].png"],
  [187, "./keyboard_images/=.png"],
  [48, "./keyboard_images/0.png"],
  [49, "./keyboard_images/1.png"],
  [50, "./keyboard_images/2.png"],
  [51, "./keyboard_images/3.png"],
  [52, "./keyboard_images/4.png"],
  [53, "./keyboard_images/5.png"],
  [54, "./keyboard_images/6.png"],
  [55, "./keyboard_images/7.png"],
  [56, "./keyboard_images/8.png"],
  [57, "./keyboard_images/9.png"],
  [191, "./keyboard_images/rightslash.png"],
  [17, "./keyboard_images/control.png"],
  [16, "./keyboard_images/shift.png"]
];

class Block {
  constructor(x, speed, context) {
    this.x = x;
    this.y = 0;
    this.width = 70;
    this.height = 70;
    var img = new Image();
    [this.id, img.src] = keyBank[Math.floor(Math.random() * keyBank.length)];
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
