

//let c = color(255,204,0);
//fill(c);

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){

}

function setup() {
	createCanvas(800, 200);
	

	engine = Engine.create();
	world = engine.world;
	//making the sprites
    //creating the paper sprite
    //aperSprite=circle(110,185,30);
	paper = new PaperClass(100,100,20,20);
	
	groundBody=Bodies.rectangle(400,195,800,10,{isStatic:true});
	World.add(world,groundBody);
	



	Engine.run(engine);
  
}


function draw() {
 
  background(0);
  
 paper.display();
  
 
}





