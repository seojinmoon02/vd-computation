const GRID = 8;
const CELL = 1080 / GRID;

let czCurrent, czTarget;
let szCurrent, szTarget;
let tzCurrent, tzTarget;

function setup() {
  createCanvas(1080, 1080);
  noStroke();
  frameRate(30);
  czCurrent = random(10, CELL);
  czTarget = random(10, CELL);
  szCurrent = random(40, CELL);
  szTarget = random(40, CELL);
  tzCurrent = random(40, CELL);
  tzTarget = random(40, CELL);
}

function draw() {
  background(255, 255, 220);

  // const cz = random(40, CELL/2);
  // const sz = random(30, CELL/2);
  // const tz = random(40, CELL);

  czCurrent = lerp(czCurrent, czTarget, 0.05);
  szCurrent = lerp(szCurrent, szTarget, 0.05);
  tzCurrent = lerp(tzCurrent, tzTarget, 0.05);

  // every ~2 seconds pick new targets
  if (frameCount % 20 === 0) {
    czTarget = random(10, CELL);
    szTarget = random(40, CELL);
    tzTarget = random(40, CELL);
  }


    for (let gy = 0; gy < GRID; gy++) {

      for (let gx = 0; gx < GRID; gx++) {
        const cx = gx * CELL + CELL / 2;
        const cy = gy * CELL + CELL / 2;
        const tx = gx * CELL + CELL / 1;
        const ty = gy * CELL + CELL / 1;

        push();
        blendMode(MULTIPLY);
        fill('pink');
        circle(cx, cy, czCurrent * 0.6);
        pop();

        push();
        blendMode(MULTIPLY);
        fill('pink');
        circle(cx, 540, czCurrent * 0.6);
        pop();

        push();
        blendMode(MULTIPLY);
        fill('orange');
        circle(tx, ty, tzCurrent * 0.6);
        pop();

        push();
        blendMode(MULTIPLY);
        translate(cx, cy);
        fill('cyan');
        rectMode(CENTER);
        rect(0, 0, szCurrent * 0.6, szCurrent * 0.6, 40, 5, 40, 40);
        rotate(random)
        pop();

        push();
        blendMode(MULTIPLY);
        translate(tx, ty);
        fill('cyan');
        rectMode(CENTER);
        rect(0, 0, szCurrent * 0.6, szCurrent * 0.6, 20);
        pop();
      }
    }
  }

   function keyPressed() {
     if (key === 's') {
       saveGif('mySketch', 5);
     }
   }

