let ball, floors = [], tubes = [], bars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  world.gravity.y = 10;

  ball = new Sprite();
  ball.diameter = 25;
  ball.x = 80;
  ball.y = 30;

  // Define floor properties
  let floorProperties = [
    { x: 625, y: 350, w: 500, h: 2, rotation: 60 },
    { x: 325, y: 350, w: 500, h: 2, rotation: -60 },
    { x: 475, y: 566.5063509, w: 550, h: 2, rotation: 0 }
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
  
  let tubeProperties = [
    { x: 500, y: 108.49364905, w: 50, h: 2, rotation: 90 },
    { x: 450, y: 108.49364905, w: 50, h: 2, rotation: 90 }
  ];

  for (let props of tubeProperties) {
    let tube = new Sprite();
    tube.x = props.x;
    tube.y = props.y;
    tube.w = props.w;
    tube.h = props.h;
    tube.collider = 'static';
    tube.rotation = props.rotation;
    tubes.push(tube);
  }

  let barProperties = [
    { x: 475, y: 160, diameter: 12.5 },
    { x: 475, y: (160+4*12.5), diameter: 12.5 },
    { x: 475, y: (160+2*4*12.5), diameter: 12.5 },
    { x: 475, y: (160+3*4*12.5), diameter: 12.5 },
    { x: 475, y: (160+4*4*12.5), diameter: 12.5 },
    { x: 475, y: (160+5*4*12.5), diameter: 12.5 },
    { x: 475, y: (160+6*4*12.5), diameter: 12.5 },
    { x: 475, y: (160+7*4*12.5), diameter: 12.5 },
    { x: 475, y: (160+8*4*12.5), diameter: 12.5 },

    { x: 456.25, y: (185), diameter: 12.5 },
    { x: 456.25, y: (185+4*12.5), diameter: 12.5 },
    { x: 456.25, y: (185+2*4*12.5), diameter: 12.5 },
    { x: 456.25, y: (185+3*4*12.5), diameter: 12.5 },
    { x: 456.25, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 456.25, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 456.25, y: (185+5*4*12.5), diameter: 12.5 },
    { x: 456.25, y: (185+6*4*12.5), diameter: 12.5 },
    { x: 456.25, y: (185+7*4*12.5), diameter: 12.5 },

    { x: 493.75, y: (185), diameter: 12.5 },
    { x: 493.75, y: (185+4*12.5), diameter: 12.5 },
    { x: 493.75, y: (185+2*4*12.5), diameter: 12.5 },
    { x: 493.75, y: (185+3*4*12.5), diameter: 12.5 },
    { x: 493.75, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 493.75, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 493.75, y: (185+5*4*12.5), diameter: 12.5 },
    { x: 493.75, y: (185+6*4*12.5), diameter: 12.5 },
    { x: 493.75, y: (185+7*4*12.5), diameter: 12.5 },

    { x: 437.5, y: (160+4*12.5), diameter: 12.5 },
    { x: 437.5, y: (160+2*4*12.5), diameter: 12.5 },
    { x: 437.5, y: (160+3*4*12.5), diameter: 12.5 },
    { x: 437.5, y: (160+4*4*12.5), diameter: 12.5 },
    { x: 437.5, y: (160+5*4*12.5), diameter: 12.5 },
    { x: 437.5, y: (160+6*4*12.5), diameter: 12.5 },
    { x: 437.5, y: (160+7*4*12.5), diameter: 12.5 },
    { x: 437.5, y: (160+8*4*12.5), diameter: 12.5 },

    { x: 512.5, y: (160+4*12.5), diameter: 12.5 },
    { x: 512.5, y: (160+2*4*12.5), diameter: 12.5 },
    { x: 512.5, y: (160+3*4*12.5), diameter: 12.5 },
    { x: 512.5, y: (160+4*4*12.5), diameter: 12.5 },
    { x: 512.5, y: (160+5*4*12.5), diameter: 12.5 },
    { x: 512.5, y: (160+6*4*12.5), diameter: 12.5 },
    { x: 512.5, y: (160+7*4*12.5), diameter: 12.5 },
    { x: 512.5, y: (160+8*4*12.5), diameter: 12.5 },

    { x: 531.25, y: (185+4*12.5), diameter: 12.5 },
    { x: 531.25, y: (185+2*4*12.5), diameter: 12.5 },
    { x: 531.25, y: (185+3*4*12.5), diameter: 12.5 },
    { x: 531.25, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 531.25, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 531.25, y: (185+5*4*12.5), diameter: 12.5 },
    { x: 531.25, y: (185+6*4*12.5), diameter: 12.5 },
    { x: 531.25, y: (185+7*4*12.5), diameter: 12.5 },
  ];

  for (let props of barProperties) {
    let bar = new Sprite();
    bar.x = props.x;
    bar.y = props.y;
    bar.diameter = props.diameter;
    bar.collider = 'static';
    bars.push(bar);
  }
}

function draw() {
  clear();

  // Draw the ball
  ball.draw();

  // Draw the floors
  for (let floor of floors) {
    floor.draw();
  }

  // Draw the tubes
  for (let tube of tubes) {
    tube.draw();
  }

  // Draw the bars
  for (let bar of bars) {
    bar.draw();
  }
}