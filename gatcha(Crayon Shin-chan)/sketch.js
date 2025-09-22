let body;
let cha;

function preload() {
  body = loadImage('body.png');

  // select a random image
  cha = loadImage(int(random(1, 7)) + ".png");  
}

function setup() {
  createCanvas(500, 500);

  let button = createButton('⭐️');
  button.position(10, 10);

  button.mousePressed(() => {
    let n = int(random(1, 7));
    let imgName = n + ".png";
    cha = loadImage(imgName);
  });  
}

function draw() {
  background("#F7C94A");
  image(body, 0, 0);
  image(cha, 75, 40);
}