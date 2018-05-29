var bus;
function setup() {
  var canvas = createCanvas(1200, 150);
  canvas.parent('sketch-holder');
  bus = new Bus(loadImage("https://i.imgur.com/I7En2nX.png"), 0, 35, 150, 95, true);
}

function draw() {
  background(125, 90, 165);
  bus.render();
  bus.move();
}

class Bus {
  constructor(img, x, y, w, h, right, func) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.right = right;
    this.speed = random(1, 3);
    this.func = func;
  }

  render() {
    push();
    image(this.img, this.x, this.y, this.w, this.h);
    pop();
  }

  move() {
    if (this.right) {
      if (this.x < width) {
        this.x += this.speed;
      } else {
        this.x = 0;
      }
    } else {
      if (this.x > 0 - this.w) {
        this.x -= this.speed;
      } else {
        this.x = width;
      }
    }
  }
}