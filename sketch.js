//DAT405 / GAD405

/*let y;
let speedX;
let speedY;*/

/*let r = 255;
let g = 255;
let b = 255;*/

function setup() {
  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");
  /*x = width/2;
  y = height/2;
  speedX = random(-5., 5.);
  speedY = random(-5., 5.);*/

}

function draw() {
background(0);
frameRate(1);

/*x++;
y++;
x += speedX;
y += speedY;*/

  for (let i=0; i<100; i++){
    push();
    stroke(255); //Gives each shape a white outline to it
    strokeWeight(2);
    fill(random(255), random(255), random(255)); //Gives each shape a random colour
    translate(0, 50);
    ellipse(random(594), random(841), 40, 50);
    pop();
  }

  /*if(y>height){
    y = 0
  }*/
}
