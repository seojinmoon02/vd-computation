let arrow;
let r;
let g;
let b;

function preload() {
  // select a random image
  arrow = loadImage(int(random(1, 8)) + ".png");  
}

function setup() {
  
r = Math.floor(Math.random() * 256);
g = Math.floor(Math.random() * 256);
b = Math.floor(Math.random() * 256);
//  return `rgb(${r}, ${g}, ${b})`;

}

function draw() {
  createCanvas(350, 350);
  background(r,g,b);
  //image(body, 0, 0);
  image(arrow, -20, -20);
}