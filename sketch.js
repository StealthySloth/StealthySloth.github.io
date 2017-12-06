//DAT405 / GAD405

/*let y;
let speedX;
let speedY;*/

let r = 255;
let g = 255;
let b = 255;

function setup() {
  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");
  x = width/2;
  y = height/2;
  speedX = random(-5., 5.);
  speedY = random(-5., 5.);

}

function draw() {
background(0);
frameRate(1);
/*x++;
y++;
x += speedX;
y += speedY;
*/
  for (let i=0; i<20; i++){
    push();
    stroke(255);
    strokeWeight(3);
    fill(random(255), random(255), random(255));
    translate(0, 50);
    ellipse(random(594), 0, 50, 50);
    pop();
  }
}
