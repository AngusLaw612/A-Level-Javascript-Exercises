let road , ball;

function setup() {
	createCanvas(windowWidth, windowHeight);

    world.gravity.y = 9.81;

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
    ball.y = 60;;


}

function update() {
	clear();

	ball.speed = 3;
	
	if (kb.pressing('w')) {
		ball.direction = -90;
	} else if (kb.pressing('s')) {
		ball.direction = 90;
	} else if (kb.pressing('a')) {
		ball.direction = 180;
	} else if (kb.pressing('d')) {
		ball.direction = 0;
	} else {
	  ball.speed = 0;
	}
}

function draw() {
    clear();
  
    road.draw();
    ball.draw();
}