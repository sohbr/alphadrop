# Alpha Drop - Touch-typing Game

### Background and Overview




Alpha Drop is a touch-typing game designed to help players develop their typing speed and efficiency.


[Live Link](https://sohbr.github.io/alphadrop/)

Players must attempt to press each falling character as quickly and accurately as possible before the character falls off the bottom of the screen. Each game begins with 5 lives. As the game progresses, the pieces will fall faster and more often.

![game demo](http://res.cloudinary.com/sohnbrian/image/upload/v1507309784/alpha_drop_demo_nun84u.gif)

This project uses vanilla JavaScript for overall structure and game logic. `HTML5 Canvas` for DOM manipulation and rendering.

```  
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
```  

### Improvements

  1. Add a visual feedback for when players press the correct key.  
  2. Add a backend to keep a high scores list.
  3. Feed in text from an outside source. 
