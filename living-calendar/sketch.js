const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let cells = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(RADIANS);
  textAlign(CENTER, CENTER);
  buildCalendar();
}

function draw() {
  const now = new Date();
  const secPulse = sin((TWO_PI * now.getSeconds()) / 60 + millis() * 0.003);

  drawBackground(now, secPulse);
  drawHeader(now);

  cells.forEach((cell) => {
    drawCell(cell, now, secPulse);
  });
}

function buildCalendar() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cols = 7;
  const rows = Math.ceil((firstDay + daysInMonth) / cols);
  const marginX = width * 0.07;
  const marginY = height * 0.16;
  const gridW = width - marginX * 2;
  const gridH = height - marginY - height * 0.08;
  const cellW = gridW / cols;
  const cellH = gridH / rows;

  cells = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const index = firstDay + d - 1;
    const col = index % cols;
    const row = floor(index / cols);
    cells.push({
      day: d,
      col,
      row,
      x: marginX + col * cellW,
      y: marginY + row * cellH,
      w: cellW,
      h: cellH,
      seed: random(1000),
    });
  }
}

function drawBackground(now, pulse) {
  noStroke();
  for (let i = 0; i < 8; i++) {
    const a = map(i, 0, 7, 30, 140);
    fill(20 + i * 5, 40 + i * 6, 95 + i * 7, a);
    const r = width * (0.2 + i * 0.12 + pulse * 0.01);
    circle(width * 0.2 + sin(frameCount * 0.005 + i) * 60, height * 0.1, r);
    circle(width * 0.82 + cos(frameCount * 0.004 + i) * 70, height * 0.88, r * 0.9);
  }

  fill(255, 18);
  rect(0, 0, width, height);

  stroke(130, 170, 255, 40);
  strokeWeight(1);
  for (let y = 0; y < height; y += 26) line(0, y + sin(frameCount * 0.01 + y) * 1.5, width, y);
}

function drawHeader(now) {
  const monthLabel = now.toLocaleString("en-US", { month: "long", year: "numeric" });
  noStroke();
  fill(236, 244, 255);
  textSize(min(width, height) * 0.05);
  text(monthLabel, width / 2, height * 0.07);

  textSize(min(width, height) * 0.018);
  fill(171, 198, 255);
  for (let i = 0; i < 7; i++) {
    const cx = width * 0.07 + (width * 0.86 * (i + 0.5)) / 7;
    text(weekDays[i], cx, height * 0.125);
  }
}

function drawCell(cell, now, secPulse) {
  const today = now.getDate();
  const isToday = cell.day === today;
  const cx = cell.x + cell.w / 2;
  const cy = cell.y + cell.h / 2;
  const t = frameCount * 0.02 + cell.seed;

  stroke(isToday ? color(255, 228, 147, 180) : color(130, 170, 255, 95));
  strokeWeight(isToday ? 2.4 : 1.2);
  fill(isToday ? color(255, 222, 130, 24) : color(84, 116, 209, 20));
  rect(cell.x + 4, cell.y + 4, cell.w - 8, cell.h - 8, 14);

  push();
  translate(cx, cy);
  noFill();

  const base = min(cell.w, cell.h) * 0.27;
  const orbit = base * 0.45;
  stroke(isToday ? color(255, 234, 173, 220) : color(173, 207, 255, 180));

  for (let i = 0; i < 3; i++) {
    const ang = t * (1 + i * 0.17) + i * TWO_PI / 3;
    const px = cos(ang) * orbit;
    const py = sin(ang * 1.4) * orbit;
    ellipse(px, py, base * (0.7 + 0.15 * i + 0.08 * secPulse));
  }

  if (isToday) {
    drawClockShape(base * 1.1, now);
  }
  pop();

  noStroke();
  fill(isToday ? color(255, 245, 214) : color(210, 225, 255));
  textSize(min(cell.w, cell.h) * 0.18);
  text(cell.day, cx, cell.y + cell.h * 0.82);
}

function drawClockShape(radius, now) {
  const hr = now.getHours() % 12;
  const mn = now.getMinutes();
  const sc = now.getSeconds() + now.getMilliseconds() / 1000;

  stroke(255, 236, 182);
  strokeWeight(1.6);
  circle(0, 0, radius * 2.05);

  for (let i = 0; i < 60; i++) {
    const a = (TWO_PI * i) / 60 - HALF_PI;
    const r1 = i % 5 === 0 ? radius * 0.82 : radius * 0.9;
    const r2 = radius * 0.98;
    stroke(255, 234, 168, i % 5 === 0 ? 180 : 100);
    line(cos(a) * r1, sin(a) * r1, cos(a) * r2, sin(a) * r2);
  }

  const sA = (TWO_PI * sc) / 60 - HALF_PI;
  const mA = (TWO_PI * (mn + sc / 60)) / 60 - HALF_PI;
  const hA = (TWO_PI * (hr + mn / 60)) / 12 - HALF_PI;

  stroke(255, 122, 122);
  strokeWeight(1.3);
  line(0, 0, cos(sA) * radius * 0.9, sin(sA) * radius * 0.9);

  stroke(230, 243, 255);
  strokeWeight(2.6);
  line(0, 0, cos(mA) * radius * 0.68, sin(mA) * radius * 0.68);

  stroke(255, 250, 233);
  strokeWeight(3.8);
  line(0, 0, cos(hA) * radius * 0.48, sin(hA) * radius * 0.48);

  noStroke();
  fill(255, 232, 163);
  circle(0, 0, 7);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  buildCalendar();
}
