
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
var dustbinObj,groundObject,paperobj;

var engine , world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
    //paperobj= new paper(250,250,70);
	paperobj= new paper(200,450,70);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 Engine.update(engine)

  groundObject.display();
  dustbinObj.display();
  paperobj.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperobj.body,paperobj.body.position,{x:130,y:-145})
	}
}

