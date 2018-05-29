var buses;

function setup() {
  var canvas = createCanvas(1200, 360);
  buses = new Array(new Bus(loadImage("https://i.imgur.com/kC2OZ2t.png"), 0, 0, 150, 95, true), 
    new Bus(loadImage("https://i.imgur.com/BOebGkB.png"), width, 125, 150, 95, false), 
    new Bus(loadImage("https://i.imgur.com/FT3njHY.png"), 0, 250, 150, 95, true));
  // Move the canvas so it's inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
}

function draw() {
  background(125, 90, 165);
  for (var i = 0; i < buses.length; i ++) {
    buses[i].render();
    buses[i].move();
  }
}

function mouseMoved() {
    for (var i = 0; i < buses.length; i++) {
        if (mouseX > buses[i].x && mouseX < buses[i].x + buses[i].w && mouseY > buses[i].y && mouseY < buses[i].y + buses[i].h) {
            cursor(HAND);
            break;
        } else {
            cursor(ARROW);
        }
    }
}

function mouseReleased() {

  for (var i = 0; i < buses.length; i ++) {
    if (mouseX > buses[i].x && mouseX < buses[i].x + buses[i].w
      && mouseY > buses[i].y && mouseY < buses[i].y + buses[i].h) {
      if (i === 0) {
        nextFive();
      } else if (i === 1) {
        nextTen();
      } else {
        nextTwenty();
      }
      break;
    }
  }
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

function nextFive() {
  var page;
  var pageNumber = Math.floor(Math.random() * 7);
  console.log(pageNumber);
  if (pageNumber == 0) {
    page = "bucket.html";
  } else if (pageNumber == 1) {
    page = "greetLanguage.html";
  } else if (pageNumber == 2) {
    page = "trash.html";
  } else if (pageNumber == 3) {
    page = "goals.html";
  } else if (pageNumber == 4) {
    page = "photo.html";
  } else if (pageNumber == 5) {
    page = "mindful.html";
  } else {
    page = "rock.html";
  }

  window.open(page, "_self");
}

function nextTen() {
  var page;
  var pageNumber = Math.floor(Math.random() * 6);
  console.log(pageNumber);
  if (pageNumber == 0) {
    page = "frost.html";
  } else if (pageNumber == 1) {
    page = "limerick.html";
  } else if (pageNumber == 2) {
    page = "browsePhone.html";
  } else if (pageNumber == 3) {
    page = "representative.html";
  } else  if (pageNumber == 4) {
    page = "petDog.html";
  } else {
    page = "favoriteRecipe.html";
  }

  window.open(page, "_self");
}

function nextTwenty() {
  var page;
  var pageNumber = Math.floor(Math.random() * 6);
  console.log(pageNumber);
  if (pageNumber == 0) {
    page = "pacerTest.html";
  } else if (pageNumber == 1) {
    page = "barbershop.html";
  } else if (pageNumber == 2) {
    page = "makeWebsite.html";
  } else if (pageNumber == 3) {
    page = "manuscript.html";
  } else if (pageNumber == 4) {
    page = "foreignSong.html";
  } else {
    page = "shortStory.html";
  }

  window.open(page, "_self");
}