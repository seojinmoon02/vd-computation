function setup() {
  
  createCanvas(600, 800);
  background('#90c1c4ff');
  
  
}

function draw() {

  // background(mouseX/2.35);

  
  
  noStroke();

  //face
  fill('black');
  circle(341,230,194);
  circle(423,245,80);
  fill('#F4E2C2');
  circle(348,235,170);
  circle(430,245,65);

   // ears
  fill('black');
  circle(295,80,130);
  circle(190,220,130);

  //eyes
  fill('black');
  circle(366,197,23);
  circle(366,200,25);
  circle(366,205,28);
  circle(366,210,28);
  circle(366,215,25);
  circle(366,217,23);

  circle(405,197,23);
  circle(405,200,25);
  circle(405,205,28);
  circle(405,210,28);
  circle(405,215,25);
  circle(405,217,23);

  fill('#F4E2C2');
  triangle(350,195,366,200,350,205)
  triangle(390,195,405,200,390,205)

   //nose
  fill('black');
  circle(461,245,20);
  circle(462,242,21);
  circle(465,240,22);
  circle(467,235,25);
  circle(469,232,25);

  //mouth
  fill('black');
  circle(332,300,70); 
  fill('#da2e2e');
  circle(334,295,66); 
  fill('#F4E2C2');
  circle(344,275,54);  

  //tail
  fill('black');
  triangle(260,460,80,300,250,470)

  //body
  fill('black');
  circle(380,447,200); 
  fill('#da2e2e');
  circle(384,443,194);    

  //buttons
  fill('#faefddff');

  circle(453,397,23);
  circle(453,400,25);
  circle(453,405,28);
  circle(453,410,28);
  circle(453,415,25);
  circle(453,417,23);

  circle(413,397,23);
  circle(413,400,25);
  circle(413,405,28);
  circle(413,410,28);
  circle(413,415,25);
  circle(413,417,23);

  //leftfeet
  fill('black');
  circle(169,620,170);
  circle(220,660,100);

  fill('#f3b440ff');
  circle(169,610,170);
  circle(220,650,100);

  //rightfeet
  fill('black');
  circle(450,680,170);
  circle(340,689,100);
  rect(340,639,100,100)

  fill('#f3b440ff');
  circle(450,669,170);
  circle(340,679,100);
  rect(340,629,100,100)
}