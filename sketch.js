
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4;
var world,boy;
var stone;
var slingshot

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2=new Mango(1200,130,30);
	mango3=new Mango(1000,130,30);
	mango4=new Mango(1100,140,30);

	stone=new Stone(235, 420, 30);

	slingshot=new Slingshot(stone.body,{x:235, y:420}) 

	treeObj=new Tree(1050,580);
	groundObject=new Ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  
  stone.display();

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();


  groundObject.display();
}

function mouseDragged(){
Matter.Body.setPosition (stone.body,{x:mouseX, y:mouseY})
}

function mouseReleased(){
slingshot.fly()
}


