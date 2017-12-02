//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates

function setup() {
  var text = createDiv('GAD405 - Colour Coordinates')
  text.position(50, 50);

  var canvas = createCanvas(594, 841);
  stroke(0);
  canvas.parent("myContainer");
  //canvas.position(300, 50);
  canvas.class("myCanvas");
}

function draw() {
  background(0); //Set your background color to black (0)

//Top-left square
  fill(mouseX, mouseY, 255, 155, 100)
  rect(0, 0, 400, 400)
  noFill()

//Bottom-Left square
  fill(mouseX, mouseY, 175, 100, 55)
  rect(0, 200, 400, 400)
  noFill()

//Top-Right square
  fill(mouseX, mouseY, 125, 155, 175)
  rect(200, 0, 400, 400)
  noFill()

//Bottom-Right square
  fill(mouseX, mouseY, 50, 85, 125)
  rect(200, 200, 400, 400)
  noFill()

}
