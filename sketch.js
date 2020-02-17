function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  fill(0);
}

function mouseDragged() {
  ellipse(mouseX, mouseY, 5, 5);
  return false;
}
