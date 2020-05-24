class Paddle {
  
  constructor(){
    this.width = 10;
    this.height = 70;
    this.xPosition = 0;
    this.yPosition= 0;
  }
  
  
  display(){
    rect(this.xPosition, this.yPosition, this.width, this.height);
  };
}

function setup(){
  createCanvas(400,400);
}

function draw() {
  //set background to white
  background("white");
  
  //player Paddle
  var playerPaddle = new Paddle();
  playerPaddle.xPosition = 390;
  playerPaddle.yPosition = mouseY;
  //computer paddle
  var p1=new Paddle;
  p1.yPosition= 160;
  p1.display();
  var p2 = new Paddle;
  p2.yPostion=160;
  p2.display();
  
  
  playerPaddle.display();
  
  //draw the ball
  rect(200,200,10,10);
}