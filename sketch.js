//DAT405 / GAD405

let x;
let y;
//let x2;
//let y2;
let speedX;
let speedY;

let r = 255;
let g = 255;
let b = 255;

function setup() {
  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");
  x = width/2;
  y = height/2;
  //x2 = width/2
  //y2 = height/2
  speedX = random(-5., 5.);
  speedY = random(-5., 5.);
}/*This gives the ball a random speed to travel in along the X and Y
axis from the beginning, -5 and other negativenumbers meaning it will
start in a backwards direction */

function draw() {
  //background(0);
  fill(random(), r, g, b, 10); /*This allows the background rectangle to start
  as a different colour to the lines so that they will also almost always
  be changing into different colours when the lines hits the canvas*/
  rect(0, 0, 594, 891);

  x += speedX;
  y += speedY;
  //x2 += speedX;
  //y2 += speedY;

  if(x>width) {
    r = random(255);
    g = random(255);
    b = random(255);
    //speedX=speedX*-1;
    x=0;
  } /*This means that if the bouncing ball goes beyond the width of the
  canvas, it is instructed to change direction to stay within it*/

  if (x<0){
    r = random(255);
    g = random(255);
    b = random(255);
    //speedX=abs(speedX);
    x=width;
  }

  if(y>height) {
    r = random(255);
    g = random(255);
    b = random(255);
    y=0;
    //speedY=speedY*-1;
  } /*This means that if the bouncing ball goes beyond the height ofthecanvas,
  it is instructed to change direction to stay within it*/

  if (y<0) {
    r = random(255);
    g = random(255);
    b = random(255);
    //speedY=abs(speedY);
    y=width;
  }

  fill(r,g,b,5);
  //ellipse(x2,y2,50,50);

  stroke(r,g,b,255);
  strokeWeight(2);

  for (let i=0; i<25; i++){
    line(i*(594/25), 0, x, y);
    line(0, i*(841/25), x, y);
    line(width, i*(841/25), x, y);
    line(i*(594/25), height, x, y);
  } /*This for loop creates lines across the X and Y axis positioned across
  them by every tenth*/
  line(width, height, x, y);
}
