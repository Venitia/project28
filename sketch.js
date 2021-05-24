
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj,groundObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var ball, slingshot,stone;



function preload(){
	boy=loadImage("images/boy.png");
  stone  = loadImage("images/stone.png");

  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
  Engine.run(engine);
	

	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
	mango3=new mango(1010,140,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,40);
	mango8=new mango(1140,150,40);
	mango9=new mango(1100,230,40);
	mango10=new mango(1200,200,40);
	mango11=new mango(1120,50,40);
	mango12=new mango(900,160,40);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
  //create launcherObject here
  ball = Bodies.circle(240,400,50);
  World.add(world,ball);
    
  slingshot = new Launcher(this.ball,{x:240,y:400})


	
}

function draw() {

  background("white");
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  

  treeObj.display();
  
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  
  groundObject.display();
  
  imageMode (CENTER);
  image(stone,ball.position.x,ball.position.y,50,50);
   

  detectollision(ball,mango1);
  detectollision(ball,mango2);
  detectollision(ball,mango3);
  detectollision(ball,mango4);
  detectollision(ball,mango5);
  detectollision(ball,mango6);
  detectollision(ball,mango7);
  detectollision(ball,mango8);
  detectollision(ball,mango9);
  detectollision(ball,mango10);
  detectollision(ball,mango11);
  detectollision(ball,mango12);
}


function mouseDragged(){

      Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
  
}

function keyPressed(){
  if(keyCode === 32 ){
    Matter.Body.setPosition(ball.body, {x:240, y:400});
    slingshot.attach(ball.body);
  }
}




  function detectollision(lball,lmango){

  mangoBodyPosition=lmango.body.position;
  ballBodyPosition=lball.body.position;
  
  var distance=dist(ballBodyPosition.x, ballBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  	if(distance<=lmango.r+lball.r);
    {
  	  Matter.Body.setStatic(lmango.body,false);
     
    }

  }