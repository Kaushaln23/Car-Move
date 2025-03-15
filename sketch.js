const emojis = ['😂','😡','😅','🥹','😇','🤩'];
const numbers = [1,2,3,4,5,6]

function setup() {
  createCanvas(400, 400);
}

function draw() {
  const bgColor = random(['yellow','blue','red'])
  background(bgColor);
  frameRate(10)
  for(number of numbers){
  const emoji = random(emojis)
  textSize(40)
  xValue = random(50,350)
  yValue = random(50,350)
  text(emoji,xValue,yValue);
  }
}
let carX = 100;
let carY = 150;
let roadY = 175;
let carSpeed = 4;
let hgX = 90;
let hgY = 120;
let quotes = [
  "Your too dumb",
  "Go cry about everything",
  "U will never succeed",
  "Mama boy/girl",
  "Ur too ugly",
  "U built like a hotdog water",
  "Ur built like an insult"
];

function setup() {
  createCanvas(400, 400);
}
let carWidth = 50;
let lastChangeTime = 0;
let quoteIndex = 0;
let billboardOffsets = [];

function setup() {
  createCanvas(600, 400);
  frameRate(30);
  let startX = width + 220;
  for (let i = 0; i < quotes.length; i++) {
    billboardOffsets.push(startX + i * 250);
     song = loadSound('sigma.mp3');
  }
}

function draw() {
  const bgColor = random(['yellow','blue','red'])
  background(bgColor);
  frameRate()
  fill(100, 100, 100);
  rect(0, roadY, width, 50);
  drawCar(carX, carY);
  carX += carSpeed;
  image(img1,175,250,200,100)
  
  for (let i = 0; i < quotes.length; i++) {
    drawBillboard(billboardOffsets[i], quotes[i]);
    billboardOffsets[i] -= carSpeed;
    if (billboardOffsets[i] < -200) {
      billboardOffsets[i] = width + 220 + (quotes.length - 1) * 250; 
    }
  }

  if (carX > width) {
    carX = -100;
  }

  if (millis() - lastChangeTime > 3000) {
    lastChangeTime = millis();
    quoteIndex = (quoteIndex + 1) % quotes.length;
  }
}

function drawCar(x, y) {
  fill(255, 0, 0);   
  rect(x, y, carWidth, 20);
  fill(0);
  ellipse(x + 10, y + 20, 20, 20);
  ellipse(x + 40, y + 20, 20, 20);
}

function drawhg(x, y) {
  fill(255, 255, 255);
  rect(x, y, hgWidth, 20);
  fill(0);
  
  
  
}

function drawBillboard(x, quote) {
  fill(255);
  rect(x, 50, 200, 100);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(quote, x + 100, 100);
}

function preload(){
  img1 =loadImage("group.jpg")
}

let song;


function mousePressed() {
  if (song.isPlaying()) {
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}


