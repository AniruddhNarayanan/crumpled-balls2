
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
	paper = new Paper(100,100,60);
	side1= new Dustbin(670,140,100,100,180);
	
	groundBody=Bodies.rectangle(400,195,800,10,{isStatic:true});
	World.add(world,groundBody);

	side2=Bodies.rectangle(630,175,100,80,90,{isStatic:true});
	World.add(world,side2);
	
	


	Engine.run(engine);

}
function draw() {
 
  background(180);
  side1.display();
 paper.display();	
  
 
 rectMode(CENTER)
 rect(groundBody.position.x,groundBody.position.y,800,10);
}

function keyPressed(){
    if(keyCode === 38){
		Matter.Body.applyForce(paper.body,paper.body.position, {x: 600, y: -600});
		// var string = "hi";
		// console.log(string);
		// console.log(paper.position.x);

		}
    }












