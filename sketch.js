//DAT405 / GAD405

let x;
let y;
let x2;
let y2;
let x3;
let y3;

let speedX;
let speedY;
let speedX2;
let speedY2;
let speedX3;
let speedY3;

let r = 255;
let g = 255;
let b = 255;
let r2 = 255;
let g2 = 255;
let b2 = 255;
let r3 = 255;
let g3 = 255;
let b3 = 255;

function setup() {
  var canvas = createCanvas(594, 841);
  canvas.parent("myContainer");
  x = width/2;
  y = height/2;
  x2 = width/2
  y2 = height/2
  x3 = width/2
  y3 = height/2
  speedX = random(-5., 5.);
  speedY = random(-5., 5.);
  speedX2 = random(-5., 5.);
  speedY2 = random(-5., 5.);
  speedX3 = random(-5., 5.);
  speedY3 = random(-5., 5.);
}/*This gives the ball a random speed to travel in along the X and Y
axis from the beginning, -5 and other negativenumbers meaning it will
start in a backwards direction */

function draw() {
  fill(random(), r, g, b, 10); /*This allows the background rectangle to start
  as a different colour to the lines so that they will also almost always
  be changing into different colours when the lines hits the canvas*/
  //fill(0)
  rect(0, 0, 594, 891); /*The rectangle used as a background for colour
  changing purposes*/

  x += speedX;
  y += speedY;
  x2 += speedX2;
  y2 += speedY2;
  x3 += speedX3;
  y3 += speedY3;

  if(x>width) {
    r = random(255);
    g = random(255);
    b = random(255);
    //speedX=speedX*-1;
    x=0;
  } /*This means that if the lines go beyond the width of the canvas, they are
  instructed to change position to stay within it*/

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
    //speedY=speedY*-1;
    y=0;
  } /*This means that if the lines go beyond the height of the canvas, they are
  instructed to change position to stay within it*/

  if (y<0) {
    r = random(255);
    g = random(255);
    b = random(255);
    //speedY=abs(speedY);
    y=width;
  }

  if(x2>width) {
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
    //speedX2=speedX2*-1;
    x2=0;
  } /*This means that if the second set of lines go beyond the width of the
  canvas, they are instructed to change position to stay within it*/

  if (x2<0){
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
    //speedX2=abs(speedX2);
    x2=width;
  }

  if(y2>height) {
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
    //speedY2=speedY2*-1;
    y2=0;
  } /*This means that if the second set of lines go beyond the height of the
  canvas, they are instructed to change position to stay within it*/

  if (y2<0) {
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
    //speedY2=abs(speedY2);
    y2=width;
  }

  if(x3>width) {
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
    //speedX3=speedX3*-1;
    x3=0;
  } /*This means that if the second set of lines go beyond the width of the
  canvas, they are instructed to change position to stay within it*/

  if (x3<0){
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
    //speedX3=abs(speedX3);
    x3=width;
  }

  if(y3>height) {
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
    //speedY3=speedY3*-1;
    y3=0;
  } /*This means that if the second set of lines go beyond the height of the
  canvas, they are instructed to change position to stay within it*/

  if (y3<0) {
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
    //speedY3=abs(speedY3);
    y3=width;
  }

  stroke(r,g,b,255);/*This controls the colour of the first set of lines, which
  will change upon repositioning thanks to the for loop which moves them*/
  strokeWeight(2);

  for (let i=0; i<25; i++){
    line(i*(594/25), 0, x, y);
    line(0, i*(841/25), x, y);
    line(width, i*(841/25), x, y);
    line(i*(594/25), height, x, y);
  } /*This for loop creates lines across the X and Y axis positioned across
  them by every tenth*/
  line(width, height, x, y);

  stroke(r2,g2,b2,255);//ensures the second set of lines are a different colour

  for (let i=0; i<25; i++){
    line(i*(594/25), 0, x2, y2);
    line(0, i*(841/25), x2, y2);
    line(width, i*(841/25), x2, y2);
    line(i*(594/25), height, x2, y2);
  } /*This for loop creates another set of lines across the X and Y axis like
  the second one, however they will move at a different speed and direction to
  the other set of lines thanks to the different let names x2 and y2*/
  line(width, height, x2, y2);

  stroke(r3,g3,b3,255);

  for (let i=0; i<25; i++){
    line(i*(594/25), 0, x3, y3);
    line(0, i*(841/25), x3, y3);
    line(width, i*(841/25), x3, y3);
    line(i*(594/25), height, x3, y3);
  }
  line(width, height, x3, y3);

  fill(0, 170);
  stroke(r + r2 + r3 / 100,g + g2 + g3 / 100,b + b2 + b3 / 100,255);
  strokeWeight(5);
  triangle(100,560,280,210,460,560);
}
