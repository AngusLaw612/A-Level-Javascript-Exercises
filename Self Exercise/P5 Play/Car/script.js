let car, wheelsFront, wheelsRear, axleFront, axleRear , ground, tube;

function setup() {
    createCanvas(windowWidth, windowHeight);
  
    world.gravity.y = 9.81;

}  

let tubeProperties = [
    { x: 562.5, y: 90.49364905, w: 200, h: 2, rotation: -40 },
    { x: 385.5, y: 90.49364905, w: 200, h: 2, rotation: 40 }
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
