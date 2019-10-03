let w = 400;
let h = 600;

let mic;

function setup(){
    createCanvas(windowWidth, windowHeight);
    background('red');

    mic = new p5.AudioIn();
    mic.start();
}

function draw(){

    micLevel = mic.getLevel();
    mov = map(micLevel, 0, 1, 10, 300);

    //background(150);
    strokeWeight(40);
    stroke('blue');
    //noStroke();
    fill('yellow');
    //rect(0,0,100,100);
    strokeWeight(1);
    ellipse(width/2,height/2,100+mov);
    strokeWeight(1);
    noFill();
    ellipse(mouseX,mouseY,100);
   noFill()
   //stroke('chartreuse'); 
    stroke(20,mouseX,mouseY);
    strokeWeight(1);
    triangle(mouseX,mouseY,300,300,100,300);
    fill('brown');
    //rectMode(CENTER);
    rect(0+mov*2.5,0+mov*2.5,200,200);
}

function touchStarted() {
    getAudioContext().resume();
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}











