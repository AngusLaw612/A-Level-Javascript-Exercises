let road , ball, ground ;

async function pauseLoop() {
  let waitTime = 100000;
  for (let i = 0; i < 5; i++) {
    console.log(i);
    await new Promise(resolve => setTimeout(resolve, waitTime)); // Pause for 1 second
    waitTime = waitTime - 10
  }
}
 

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
   
    camera.x = ball.x 
    camera.y = ball.y 


    if (ball.colliding(ground))	{
      if (kb.presses(' ')) {
        ball.vel.y = 20;
      }
    }

    if (kb.pressing('d')) {
      j = 0
      ball.vel.x = 0
      for (let j = 0;  j < 100;  j = j + 0.05){
        pauseLoop();
        ball.vel.x = 3 + j;
        
    }
   
    }else if (kb.pressing('a')) {
      ball.vel.x = -3;
    }
  }

  
  

