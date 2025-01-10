let snake;
let fruits = [];
let gridSize = 20;
let started = false;
let gameOver = false;
let score = 0;
let gameMode = 'menu';
let speed = 10;

function setup() {
  createCanvas(400, 400);
  frameRate(speed);
  snake = new Snake();
}

function draw() {
  if (gameMode === 'menu') {
    drawMenu();
  } else if (gameMode === 'classic' || gameMode === 'speed' || gameMode === 'multiFruit') {
    if (gameOver) {
      background(255, 0, 0);
      textSize(32);
      fill(255);
      textAlign(CENTER, CENTER);
      text('Game Over', width / 2, height / 2);
      textSize(24);
      text('Score: ' + score, width / 2, height / 2 + 40);
      noLoop();
      return;
    }

    drawGradientBackground();
    drawGrid();
    if (started) {
      snake.update();
    }
    snake.show();

    for (let i = fruits.length - 1; i >= 0; i--) {
      drawFruit(fruits[i]);
      if (snake.eat(fruits[i].pos)) {
        score += fruits[i].score;
        fruits[i] = createFruit();
      }
    }

    if (gameMode === 'multiFruit' && snake.body.length === (width / gridSize) * (height / gridSize)) {
      textSize(32);
      fill(0, 255, 0);
      textAlign(CENTER, CENTER);
      text('You Win!', width / 2, height / 2);
      noLoop();
      return;
    }

    drawScore();
  }
}

function drawMenu() {
  background(220);
  textSize(32);
  fill(0);
  textAlign(CENTER, CENTER);
  text('Snake Game', width / 2, height / 2 - 60);
  textSize(24);
  text('1. Classic Snake', width / 2, height / 2 - 20);
  text('2. Speed Snake', width / 2, height / 2 + 20);
  text('3. Multi-Fruit Mode', width / 2, height / 2 + 60);
}

function drawGradientBackground() {
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(255, 204, 0), color(0, 102, 204), inter);
    stroke(c);
    line(0, y, width, y);
  }
}

function drawGrid() {
  stroke(200);
  for (let x = 0; width > x; x += gridSize) {
    for (let y = 0; height > y; y += gridSize) {
      line(x, 0, x, height);
      line(0, y, width, y);
    }
  }
}

function drawFruit(fruit) {
  if (fruit.type === 'apple') {
    fill(255, 0, 0);
    ellipse(fruit.pos.x + gridSize / 2, fruit.pos.y + gridSize / 2, gridSize, gridSize);
    fill(0, 255, 0);
    rect(fruit.pos.x + gridSize / 2 - 2, fruit.pos.y + gridSize / 2 - 10, 4, 10);
  } else if (fruit.type === 'banana') {
    fill(255, 255, 0);
    ellipse(fruit.pos.x + gridSize / 2, fruit.pos.y + gridSize / 2, gridSize, gridSize);
    fill(255, 204, 0);
    rect(fruit.pos.x + gridSize / 2 - 2, fruit.pos.y + gridSize / 2 - 10, 4, 10);
  } else if (fruit.type === 'cherry') {
    fill(255, 0, 0);
    ellipse(fruit.pos.x + gridSize / 2, fruit.pos.y + gridSize / 2, gridSize / 2, gridSize / 2);
    fill(255, 0, 0);
    ellipse(fruit.pos.x + gridSize / 2 + gridSize / 2, fruit.pos.y + gridSize / 2, gridSize / 2, gridSize / 2);
    fill(0, 255, 0);
    rect(fruit.pos.x + gridSize / 2 - 2, fruit.pos.y + gridSize / 2 - 10, 4, 10);
  }
}

function drawScore() {
  textSize(24);
  fill(0);
  textAlign(LEFT, TOP);
  text('Score: ' + score, 10, 10);
}

function createFruit() {
  let cols = floor(width / gridSize);
  let rows = floor(height / gridSize);
  let pos = createVector(floor(random(cols)), floor(random(rows)));
  pos.mult(gridSize);

  let type = random(['apple', 'banana', 'cherry']);
  let score = type === 'apple' ? 1 : type === 'banana' ? 2 : 3;

  return { pos, type, score };
}

function keyPressed() {
  if (gameMode === 'menu') {
    if (key === '1') {
      gameMode = 'classic';
      speed = 10;
      frameRate(speed);
      resetGame();
    } else if (key === '2') {
      gameMode = 'speed';
      speed = 20;
      frameRate(speed);
      resetGame();
    } else if (key === '3') {
      gameMode = 'multiFruit';
      speed = 10;
      frameRate(speed);
      resetGame();
      for (let i = 0; i < 10; i++) {
        fruits.push(createFruit());
      }
    }
  } else {
    if (keyCode === UP_ARROW && snake.ydir !== 1) {
      snake.setDir(0, -1);
      started = true;
    } else if (keyCode === DOWN_ARROW && snake.ydir !== -1) {
      snake.setDir(0, 1);
      started = true;
    } else if (keyCode === LEFT_ARROW && snake.xdir !== 1) {
      snake.setDir(-1, 0);
      started = true;
    } else if (keyCode === RIGHT_ARROW && snake.xdir !== -1) {
      snake.setDir(1, 0);
      started = true;
    }
  }
}

function resetGame() {
  snake = new Snake();
  fruits = [];
  score = 0;
  gameOver = false;
  started = false;
  loop();
}

class Snake {
  constructor() {
    this.body = [];
    this.body[0] = createVector(floor(width / 2), floor(height / 2));
    this.xdir = 0;
    this.ydir = 0;
    this.len = 0;
  }

  setDir(x, y) {
    this.xdir = x;
    this.ydir = y;
  }

  update() {
    let head = this.body[this.body.length - 1].copy();
    this.body.shift();
    head.x += this.xdir * gridSize;
    head.y += this.ydir * gridSize;

    // Boundary checks
    if (head.x >= width || head.x < 0 || head.y >= height || head.y < 0) {
      gameOver = true;
    }

    // Self-collision check
    for (let i = 0; i < this.body.length; i++) {
      if (head.x === this.body[i].x && head.y === this.body[i].y) {
        gameOver = true;
      }
    }

    this.body.push(head);
  }

  grow() {
    let head = this.body[this.body.length - 1].copy();
    this.len++;
    this.body.push(head);
  }

  eat(pos) {
    let head = this.body[this.body.length - 1];
    if (head.x === pos.x && head.y === pos.y) {
      this.grow();
      return true;
    }
    return false;
  }

  show() {
    for (let i = 0; i < this.body.length; i++) {
      fill(0, 255, 0);
      stroke(0);
      strokeWeight(2);
      rect(this.body[i].x, this.body[i].y, gridSize, gridSize, 5);
    }
  }
}