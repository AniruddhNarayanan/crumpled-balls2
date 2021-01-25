var paperSprite,paperBody,paperImage;
var groundSprite,groundBody;
var side1Sprite,side2Sprite,side3Sprite,dustbinImg;
var side1Body,side2Body,side3Body;
var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:1.2
}
//let c = color(255,204,0);
//fill(c);

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	paperImage=loadImage("circle.png");
	dustbinImg=loadImage("dustbin.png");
	
}

function setup() {
	createCanvas(800, 200);
	

	engine = Engine.create();
	world = engine.world;
	//making the sprites
    //creating the paper sprite
    //aperSprite=circle(110,185,30);
	paperSprite=createSprite(110,185,10,10);
	//adding the image to the sprite
	paperSprite.addImage(paperImage);
	// creating the ground
	groundSprite=createSprite(400,195,800,10);
	//adding color to the ground
	groundSprite.shapeColor=color("yellow");
	//creating the side1 sprite
	side1Sprite=createSprite(700,185,100,10);
	//adding color to the side 1
	side1Sprite.addImage();
	//creating the side2 sprite
	side2Sprite=createSprite(750,155,10,70);
	//adding color to the side 2
	side2Sprite.shapeColor=color("pink");
	//creating the side3 sprite
	side3Sprite=createSprite(650,155,10,70);
	//adding color to the side 3
	side3Sprite.shapeColor=color("pink");
	
	//making the bodies for the sprites
	//creating the paper body
	paperBody=Bodies.circle(110,185,20,options);
	World.add(world,paperBody);
	
	groundBody=Bodies.rectangle(400,195,800,10,{isStatic:true});
	World.add(world,groundBody);
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  fill("red");
  
  groundSprite.x=groundBody.position.x;
  groundSprite.y=groundBody.position.y;	

  paper.x=paperBody.position.x
  paper.y=paperBody.position.y;

  
//	paper
  drawSprites();

 
}



function keyPressed(){
	if(keyCode===UP_ARROW){
		paper.velocityX=6;
		paper.velocityY=-4;
	}
}

