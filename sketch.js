const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engineObj, world;
var ground;
var player;
var invisibleGround;
var playerWalkImg;
function preload(){
  playerStandImg=loadAnimation("images/boy3_standing.png");
  playerWalkImg=loadAnimation("images/boyWalk1.png","images/boyWalk2.png","images/boy3_standing.png","images/boyWalk4.png","images/boyWalk5.png");
 
}
function setup() 
{
  createCanvas(displayWidth, displayHeight-120);
  engineObj = Engine.create();
  world = engineObj.world;

  //ground = new Ground(0,displayHeight/2+200,displayWidth, 80);
  ground = new Ground(displayWidth/2-700,displayHeight/2+220,displayWidth*9,100);
  player  = createSprite(displayWidth/2-700, displayHeight-250, 100,100);
  //player  = createSprite(0,0, 100,100);
  
  player.addAnimation("standing",playerStandImg);
  player.addAnimation("walking",playerWalkImg);
  //player.scale=0.5;
 invisibleGround = createSprite(displayWidth/2-20,displayHeight-200, displayWidth*20,10);
 invisibleGround.visible=false;
}

function draw() 
{
  background("tan");  

  Engine.update(engineObj);

  ground.display();
  camera.debug=true;
  camera.position.x =player.x +700;
  //camera.position.y =  displayHeight-250;
  playerMovement();
  player.velocityY=player.velocityY+0.5
  player.collide(invisibleGround);

  drawSprites();
}

function playerMovement()
{
  if(keyWentDown(RIGHT_ARROW))
  {
    player.velocityX = 20;
    player.changeAnimation("walking",playerWalkImg);
  }

  if(keyWentUp(RIGHT_ARROW))
  {
    player.velocityX = 0;
    player.changeAnimation("standing",playerStandImg);
  }
  if(keyWentDown("space")){
    player.velocityY=-10;
  }
}