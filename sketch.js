
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5
var rope1, rope2, rope3, rope4, rope5 ,rope6
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(400, 200, 80, 80);
	rope1 = new Rope(ball1.body, { x: 400, y: 200 });
	ball2 = new Ball(500, 200, 80, 80);
	rope2 = new Rope(ball2.body, { x: 500, y: 200 });
	ball3 = new Ball(600, 200, 80, 80);
	rope3 = new Rope(ball3.body, { x: 600, y: 200 });
	ball4 = new Ball(700, 200, 80, 80);
	rope4 = new Rope(ball4.body, { x: 700, y: 200 });
	ball5 = new Ball(800, 200, 80, 80);
	ball6 = new Ball(900, 200, 80, 80);
	rope5 = new Rope(ball5.body, { x: 800, y: 200 });
	rope6 = new Rope(ball6.body, { x: 900, y: 200 });
	ground = new Ground(750, 200, 1500, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ball1.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope5.display();
  ball5.display();
  rope4.display();
  ball6.display();
  rope6.display();

  ground.display();
}
function mouseDragged() {
	Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
	
  }
  


