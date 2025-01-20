let acceleration = 0.5; // Adjust this value to control the acceleration rate
let maxSpeed = 18; // Maximum speed the ball can reach
let friction = 0.01 / 60; // Friction decrease per frame
let currentAcceleration = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);

    world.gravity.y = 9;

    road = new Sprite();
    road.h = 10;
    road.w = 1000;
    road.x = 450;
    road.y = 450;
    road.color = "pink";
    road.stroke = "red";
    road.collider = 'static';
    

    ball = new Sprite();
    ball.d = 50;
    ball.x = 450;
    ball.y = 60;
    ball.drag = 1

   let grade = [[400, 0]];
    for (let i = 0; i < 100; i++) {
      grade.push([random(50, 200), random(-30, 30)]);
    }
    ground = new Sprite(450, 450, grade, 's');
    
   
    


}

function update() {
	clear();

}

function draw() {
  clear();
  
  camera.x = ball.x;
  camera.y = ball.y;
  
  if (ball.colliding(ground)) {
    if (kb.presses(' ')) {
      ball.vel.y = 20;
    }
  }
  
  if (kb.pressing('d')) {
    currentAcceleration = acceleration;
    ball.vel.x += currentAcceleration;
    if (ball.vel.x > maxSpeed) {
      ball.vel.x = maxSpeed;
    }
  } else if (kb.pressing('a')) {
    currentAcceleration = -acceleration;
    ball.vel.x += currentAcceleration;
    if (ball.vel.x < -maxSpeed) {
      ball.vel.x = -maxSpeed;
    }
  } else {
    // Apply friction to gradually slow down the ball when no key is pressed
    if (ball.vel.x > 0) {
      ball.vel.x -= friction;
      if (ball.vel.x < 0) {
        ball.vel.x = 0;
      }
    } else if (ball.vel.x < 0) {
      ball.vel.x += friction;
      if (ball.vel.x > 0) {
        ball.vel.x = 0;
      }
    }
  }
  
  // Display the current speed on the screen
  fill(0); // Set text color to black
  textSize(16); // Set text size
  text("Speed: " + abs(ball.vel.x).toFixed(2), 10, 30); // Display the speed at the top-left corner
}
