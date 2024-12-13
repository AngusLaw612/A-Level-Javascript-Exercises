let ball, floors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  world.gravity.y = 10;

  ball = new Sprite();
  ball.diameter = 25;
  ball.x = 80;
  ball.y = 30;

  // Define floor properties
  let floorProperties = [
    { x: 70, y: 80, w: 90, h: 2, rotation: 9 },
    { x: 150, y: 115, w: 90, h: 2, rotation: -9 },
    { x: 70, y: 150, w: 90, h: 2, rotation: 9 },
    { x: 150, y: 185, w: 90, h: 2, rotation: -9 }
  ];

  // Create floor sprites based on properties
  for (let props of floorProperties) {
    let floor = new Sprite();
    floor.x = props.x;
    floor.y = props.y;
    floor.w = props.w;
    floor.h = props.h;
    floor.collider = 'static';
    floor.rotation = props.rotation;
    floors.push(floor);
  }
}

function draw() {
  clear();
}