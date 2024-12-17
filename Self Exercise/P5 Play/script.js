let ball, floors = [], tubes = [], bars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  world.gravity.y = 2;

  ball = new Sprite();
  ball.diameter = 10;
  ball.x = 474;
  ball.y = 160;

  // Define floor properties
  let floorProperties = [
    { x: 650, y: 350, w: 512.5, h: 2, rotation: 53.13 },
    { x: 300, y: 350, w: 512.5, h: 2, rotation: -53.13 },
    { x: 475, y: 566.5063509, w: 650, h: 2, rotation: 0 }
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
    { x: 500, y: 108.49364905, w: 60, h: 2, rotation: 90 },
    { x: 450, y: 108.49364905, w: 60, h: 2, rotation: 90 }
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

    { x: 418.75, y: (185+4*12.5), diameter: 12.5 },
    { x: 418.75, y: (185+2*4*12.5), diameter: 12.5 },
    { x: 418.75, y: (185+3*4*12.5), diameter: 12.5 },
    { x: 418.75, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 418.75, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 418.75, y: (185+5*4*12.5), diameter: 12.5 },
    { x: 418.75, y: (185+6*4*12.5), diameter: 12.5 },
    { x: 418.75, y: (185+7*4*12.5), diameter: 12.5 },
    
    { x: 550, y: (160+2*4*12.5), diameter: 12.5 },
    { x: 550, y: (160+3*4*12.5), diameter: 12.5 },
    { x: 550, y: (160+4*4*12.5), diameter: 12.5 },
    { x: 550, y: (160+5*4*12.5), diameter: 12.5 },
    { x: 550, y: (160+6*4*12.5), diameter: 12.5 },
    { x: 550, y: (160+7*4*12.5), diameter: 12.5 },
    { x: 550, y: (160+8*4*12.5), diameter: 12.5 },

    { x: 400, y: (160+2*4*12.5), diameter: 12.5 },
    { x: 400, y: (160+3*4*12.5), diameter: 12.5 },
    { x: 400, y: (160+4*4*12.5), diameter: 12.5 },
    { x: 400, y: (160+5*4*12.5), diameter: 12.5 },
    { x: 400, y: (160+6*4*12.5), diameter: 12.5 },
    { x: 400, y: (160+7*4*12.5), diameter: 12.5 },
    { x: 400, y: (160+8*4*12.5), diameter: 12.5 },

    { x: 381.25, y: (185+2*4*12.5), diameter: 12.5 },
    { x: 381.25, y: (185+3*4*12.5), diameter: 12.5 },
    { x: 381.25, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 381.25, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 381.25, y: (185+5*4*12.5), diameter: 12.5 },
    { x: 381.25, y: (185+6*4*12.5), diameter: 12.5 },
    { x: 381.25, y: (185+7*4*12.5), diameter: 12.5 },

    { x: 568.75, y: (185+2*4*12.5), diameter: 12.5 },
    { x: 568.75, y: (185+3*4*12.5), diameter: 12.5 },
    { x: 568.75, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 568.75, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 568.75, y: (185+5*4*12.5), diameter: 12.5 },
    { x: 568.75, y: (185+6*4*12.5), diameter: 12.5 },
    { x: 568.75, y: (185+7*4*12.5), diameter: 12.5 },

    { x: 362.5, y: (160+3*4*12.5), diameter: 12.5 },
    { x: 362.5, y: (160+4*4*12.5), diameter: 12.5 },
    { x: 362.5, y: (160+5*4*12.5), diameter: 12.5 },
    { x: 362.5, y: (160+6*4*12.5), diameter: 12.5 },
    { x: 362.5, y: (160+7*4*12.5), diameter: 12.5 },
    { x: 362.5, y: (160+8*4*12.5), diameter: 12.5 },

    { x: 587.5, y: (160+3*4*12.5), diameter: 12.5 },
    { x: 587.5, y: (160+4*4*12.5), diameter: 12.5 },
    { x: 587.5, y: (160+5*4*12.5), diameter: 12.5 },
    { x: 587.5, y: (160+6*4*12.5), diameter: 12.5 },
    { x: 587.5, y: (160+7*4*12.5), diameter: 12.5 },
    { x: 587.5, y: (160+8*4*12.5), diameter: 12.5 },

    { x: 343.75, y: (185+3*4*12.5), diameter: 12.5 },
    { x: 343.75, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 343.75, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 343.75, y: (185+5*4*12.5), diameter: 12.5 },
    { x: 343.75, y: (185+6*4*12.5), diameter: 12.5 },
    { x: 343.75, y: (185+7*4*12.5), diameter: 12.5 },

    { x: 606.25, y: (185+3*4*12.5), diameter: 12.5 },
    { x: 606.25, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 606.25, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 606.25, y: (185+5*4*12.5), diameter: 12.5 },
    { x: 606.25, y: (185+6*4*12.5), diameter: 12.5 },
    { x: 606.25, y: (185+7*4*12.5), diameter: 12.5 },

    { x: 625, y: (160+4*4*12.5), diameter: 12.5 },
    { x: 625, y: (160+5*4*12.5), diameter: 12.5 },
    { x: 625, y: (160+6*4*12.5), diameter: 12.5 },
    { x: 625, y: (160+7*4*12.5), diameter: 12.5 },
    { x: 625, y: (160+8*4*12.5), diameter: 12.5 },

    { x: 325, y: (160+4*4*12.5), diameter: 12.5 },
    { x: 325, y: (160+5*4*12.5), diameter: 12.5 },
    { x: 325, y: (160+6*4*12.5), diameter: 12.5 },
    { x: 325, y: (160+7*4*12.5), diameter: 12.5 },
    { x: 325, y: (160+8*4*12.5), diameter: 12.5 },

    { x: 643.75, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 643.75, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 643.75, y: (185+5*4*12.5), diameter: 12.5 },
    { x: 643.75, y: (185+6*4*12.5), diameter: 12.5 },
    { x: 643.75, y: (185+7*4*12.5), diameter: 12.5 },

    { x: 306.35, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 306.35, y: (185+4*4*12.5), diameter: 12.5 },
    { x: 306.35, y: (185+5*4*12.5), diameter: 12.5 },
    { x: 306.35, y: (185+6*4*12.5), diameter: 12.5 },
    { x: 306.35, y: (185+7*4*12.5), diameter: 12.5 },

    { x: (475-10*(18.75)), y: (160+5*4*12.5), diameter: 12.5 },
    { x: (475-10*(18.75)), y: (160+6*4*12.5), diameter: 12.5 },
    { x: (475-10*(18.75)), y: (160+7*4*12.5), diameter: 12.5 },
    { x: (475-10*(18.75)), y: (160+8*4*12.5), diameter: 12.5 },

    { x: (475+10*(18.75)), y: (160+5*4*12.5), diameter: 12.5 },
    { x: (475+10*(18.75)), y: (160+6*4*12.5), diameter: 12.5 },
    { x: (475+10*(18.75)), y: (160+7*4*12.5), diameter: 12.5 },
    { x: (475+10*(18.75)), y: (160+8*4*12.5), diameter: 12.5 },

    { x: (475-11*(18.75)), y: (185+5*4*12.5), diameter: 12.5 },
    { x: (475-11*(18.75)), y: (185+6*4*12.5), diameter: 12.5 },
    { x: (475-11*(18.75)), y: (185+7*4*12.5), diameter: 12.5 },

    { x: (475+11*(18.75)), y: (185+5*4*12.5), diameter: 12.5 },
    { x: (475+11*(18.75)), y: (185+6*4*12.5), diameter: 12.5 },
    { x: (475+11*(18.75)), y: (185+7*4*12.5), diameter: 12.5 },


    { x: (475-12*(18.75)), y: (160+6*4*12.5), diameter: 12.5 },
    { x: (475-12*(18.75)), y: (160+7*4*12.5), diameter: 12.5 },
    { x: (475-12*(18.75)), y: (160+8*4*12.5), diameter: 12.5 },

    { x: (475+12*(18.75)), y: (160+6*4*12.5), diameter: 12.5 },
    { x: (475+12*(18.75)), y: (160+7*4*12.5), diameter: 12.5 },
    { x: (475+12*(18.75)), y: (160+8*4*12.5), diameter: 12.5 },

    { x: (475-13*(18.75)), y: (185+6*4*12.5), diameter: 12.5 },
    { x: (475-13*(18.75)), y: (185+7*4*12.5), diameter: 12.5 },

    { x: (475+13*(18.75)), y: (185+6*4*12.5), diameter: 12.5 },
    { x: (475+13*(18.75)), y: (185+7*4*12.5), diameter: 12.5 },


    { x: (475-14*(18.75)), y: (160+7*4*12.5), diameter: 12.5 },
    { x: (475-14*(18.75)), y: (160+8*4*12.5), diameter: 12.5 },


    { x: (475+14*(18.75)), y: (160+7*4*12.5), diameter: 12.5 },
    { x: (475+14*(18.75)), y: (160+8*4*12.5), diameter: 12.5 },


    { x: (475-15*(18.75)), y: (185+7*4*12.5), diameter: 12.5 },


    { x: (475+15*(18.75)), y: (185+7*4*12.5), diameter: 12.5 },

    
    { x: (475-16*(18.75)), y: (160+8*4*12.5), diameter: 12.5 },


    { x: (475+16*(18.75)), y: (160+8*4*12.5), diameter: 12.5 },
    
    









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