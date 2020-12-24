
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,650,400,50);
	
	BobObject1 = new BobObject(280,450,50);
	BobObject2 = new BobObject(340,450,50);
	BobObject3 = new BobObject(400,450,50);
	BobObject4 = new BobObject(460,450,50);
	BobObject5 = new BobObject(520,450,50);

	rope1=new rope(BobOblect1.body,roofObject.body,-bobDiamater*2,0);
	rope2=new rope(BobOblect2.body,roofObject.body,-bobDiamater*2,0);
	rope3=new rope(BobOblect3.body,roofObject.body,-bobDiamater*2,0);
	rope4=new rope(BobOblect4.body,roofObject.body,-bobDiamater*2,0);
	rope5=new rope(BobOblect5.body,roofObject.body,-bobDiamater*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,0);
   
  roof.display();

  BobObject1.display();
  BobObject2.display();
  BobObject3.display();
  BobObject4.display();
  BobObject5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  console.log(roof);
  drawSprites();
 
}



