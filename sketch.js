
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Const = Matter.Constraint;

var ball,ball2,ball3,ball4,ball5
var rope1,rope2,rope3,rope4,rope5
var ground


function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

	ball = new Ball(90,300,120)
	ball2 = new Ball(240,360,120)
	ball3 = new Ball(400,360,120)
	ball4 = new Ball(560,360,120)
	ball5 = new Ball(720,360,120)
    ground = new Ground(400,160,800,30)
	rope1 = new Rope(ball.body,ground.body,80,1)
	rope2 = new Rope(ball2.body,ground.body,40,1)
	rope3 = new Rope(ball3.body,ground.body,0,1)
	rope4 = new Rope(ball4.body,ground.body,100,1)
	rope5 = new Rope(ball.body,ground.body,100,1)
	Engine.run(engine);
  
}


function draw() {
  background("grey");
 Engine.update(engine)
  rectMode(CENTER);
 ellipseMode(CENTER)
 
  rope1.display()
 rope2.display()
 rope3.display()
 rope4.display()
 rope5.display() 
  ball.display()
  ball2.display()
 ball3.display()
 ball4.display()
 ball5.display() 
 ground.display()

 drawSprites()

 
}



