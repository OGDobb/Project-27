
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

// function preload()
// {
	
// }

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject = new Roof(400,650,400,50);
	
	bobObject1 = new BobObject(280,450,50);
	bobObject2 = new BobObject(340,450,50);
	bobObject3 = new BobObject(400,450,50);
	bobObject4 = new BobObject(460,450,50);
	bobObject5 = new BobObject(520,450,50);

	rope1=new Rope(bobOblect1.body,roofObject.body,-bobDiamater*2,0);
	rope2=new Rope(bobOblect2.body,roofObject.body,-bobDiamater*2,0);
	rope3=new Rope(bobOblect3.body,roofObject.body,-bobDiamater*2,0);
	rope4=new Rope(bobOblect4.body,roofObject.body,-bobDiamater*2,0);
	rope5=new Rope(bobOblect5.body,roofObject.body,-bobDiamater*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,0);
   
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  console.log(roof);
  drawSprites();
 
}



