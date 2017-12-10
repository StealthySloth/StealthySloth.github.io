//DAT405 / GAD405

let x;
let y;
let x2;
let y2;
let x3;
let y3;
/*All of these let variables allow me to use these words to control different
aspects of the code, I have used the x and y variables to represent the
positions of different lines and shapes on the canvas across the X and Y axis.*/
let speedX;
let speedY;
let speedX2;
let speedY2;
let speedX3;
let speedY3;
/*I have used the speedX and speedY variables to control the speeds and
directions ofmy lines as they travel across the canvas.*/
let r = 255;
let g = 255;
let b = 255;
let r2 = 255;
let g2 = 255;
let b2 = 255;
let r3 = 255;
let g3 = 255;
let b3 = 255;
/*I have used these r, g and b variables to control what colour my lines,
triangle and background rectangle are according to the RGB colour values when
their positions are changed to stay within the canvas.*/
function setup() {
  var canvas = createCanvas(594, 841); /*This creates the canvas for my project
  using the width and height of the X and Y axis.*/
  canvas.parent("myContainer");/*This allows me to place all of my code for my
  generative art itself under the name "myContainer" within the HTML of the
  page, tidying it up and taking less space.*/
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
}/*Here I am setting values for all of the variables I established at the top
of the code, allowing me to use them within various aspects of my code. The
x and y values allowing me to use x and y in my code to represent the width
and height of the canvas respectively, which has been used to define the
positioning of the lines. The speedX and speedY values on the other hand define
the movement of the lines across the canvas in terms of their speed and
direction, a value that is randomly chosen every time the art is refreshed.*/

function draw() {
  fill(random(), r, g, b, 10); /*This allows the background rectangle to start
  as a different colour to the lines so that they will also almost always
  be changing into different colours when the lines hits the canvas*/
  rect(-1, -1, 595, 891); /*The rectangle used as a background for colour
  changing purposes, placed at -1 on the x and y axis to ensure there are no
  gaps where you can see the black background.*/

  x += speedX;
  y += speedY;
  x2 += speedX2;
  y2 += speedY2;
  x3 += speedX3;
  y3 += speedY3;
  /*These control the way the speed of the lines work with the x and y axis of
  the canvas to allow and control movement.*/

  if(x>width) {
    r = random(255);
    g = random(255);
    b = random(255);
    x=0;
  }

  if (x<0){
    r = random(255);
    g = random(255);
    b = random(255);
    x=width;
  }
  /*These if functions allow my code to control the positions and randomised
  colours of the first set of lines on the canvas if and when attempt to exceed
  the width of the canvas.*/
  if(y>height) {
    r = random(255);
    g = random(255);
    b = random(255);
    y=0;
  }

  if (y<0) {
    r = random(255);
    g = random(255);
    b = random(255);
    y=width;
  }
  /*These if functions allow my code to control the positions and randomised
  colours of the first set of lines on the canvas if and when attempt to
  exceed the height of the canvas.*/
  if(x2>width) {
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
    x2=0;
  }

  if (x2<0){
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
    x2=width;
  }
  /*These if functions allow my code to control the positions and randomised
  colours of the second set of lines on the canvas if and when attempt to
  exceed the width of the canvas.*/
  if(y2>height) {
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
    y2=0;
  }

  if (y2<0) {
    r2 = random(255);
    g2 = random(255);
    b2 = random(255);
    y2=width;
  }
  /*These if functions allow my code to control the positions and randomised
  colours of the second set of lines on the canvas if and when attempt to
  exceed the height of the canvas.*/
  if(x3>width) {
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
    x3=0;
  }

  if (x3<0){
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
    x3=width;
  }
  /*These if functions allow my code to control the positions and randomised
  colours of the third set of lines on the canvas if and when attempt to exceed
  the width of the canvas.*/
  if(y3>height) {
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
    y3=0;
  }

  if (y3<0) {
    r3 = random(255);
    g3 = random(255);
    b3 = random(255);
    y3=width;
  }
  /*These if functions allow my code to control the positions and randomised
  colours of the third set of lines on the canvas if and when attempt to exceed
  the height of the canvas.*/

  stroke(r,g,b,255);/*This controls the colour of the first set of lines, which
  will change upon repositioning thanks to the for loop which moves them*/
  strokeWeight(2);/*This controls how thick the first set of lines are.*/

  for (let i=0; i<25; i++){
    line(i*(594/25), 0, x, y);
    line(0, i*(841/25), x, y);
    line(width, i*(841/25), x, y);
    line(i*(594/25), height, x, y);
  } /*This for loop creates lines across the X and Y axis positioned across
  them by every twenty-fifth*/
  line(width, height, x, y);/*This final line goes into the bottom right
  corner as the for loop does not affect it in accordance to it's placements of
  the lines.*/

  stroke(r2,g2,b2,255);/*ensures the second set of lines are a different
  randomised colour to the other two sets most of the time, which will change
  upon repositioning thanks to the for loop which moves them.*/

  for (let i=0; i<25; i++){
    line(i*(594/25), 0, x2, y2);
    line(0, i*(841/25), x2, y2);
    line(width, i*(841/25), x2, y2);
    line(i*(594/25), height, x2, y2);
  } /*This for loop creates another set of lines across the X and Y axis like
  the first one, however they will move at a different speed and direction to
  the other sets of lines thanks to the different variables x2 and y2*/
  line(width, height, x2, y2);/*This final line goes into the bottom right
  corner as the for loop does not affect it in accordance to it's placements of
  the lines.*/

  stroke(r3,g3,b3,255); /*ensures the third set of lines are a different
  randomised colour to the other two sets most of the time, which will change
  upon repositioning thanks to the for loop which moves them.*/

  for (let i=0; i<25; i++){
    line(i*(594/25), 0, x3, y3);
    line(0, i*(841/25), x3, y3);
    line(width, i*(841/25), x3, y3);
    line(i*(594/25), height, x3, y3);
  }  /*This for loop creates another set of lines across the X and Y axis like
  the other two, however they will move at a different speed and direction to
  the other sets of lines thanks to the different variables x3 and y3*/
  line(width, height, x3, y3);/*This final line goes into the bottom right
  corner as the for loop does not affect it in accordance to it's placements of
  the lines.*/

  fill(0, 140); /*This gives the triangle a black colour with an opacity of 140
  so that the viewer can look through it and still see the lines in a darkened
  form*/
  stroke(r + r2 + r3 / 100,g + g2 + g3 / 100,b + b2 + b3 / 100,255);/*This
  gives the outline of the triangle a random colour that is different to the
  three sets of lines by combining them together and creating a different RGB
  value so that it sticks out as much as possible amongst them*/
  strokeWeight(5);/*This gives the outline a thickness that is noticable
  enough to see the different colour whilst also not being so distracting from
  the lines and the rest of the generative art*/
  triangle(110,560,290,210,470,560); /*This creates a triangle at the x and y
  coordinates for each of the three points in the center of the canvas*/
}
