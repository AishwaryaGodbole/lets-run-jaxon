var runnerImg, pathImg , path, runner , runner_running, invisibleGround2, wall1, wall2, invisibleGround1
function preload(){
  //pre-load images
pathImg=loadImage("path.png")
runnerImg=loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(200,200);
path.addImage(pathImg)
path.y = path.width /2;
  path.velocityY = -4;

 runner=createSprite(259, 340)
 runner.addAnimation("runnerImg", runnerImg);
 runner.scale=0.09;


invisibleGround1 = createSprite(380,200, 60, 700);
  invisibleGround1.visible = false;
  


invisibleGround2 = createSprite(30,200, 60, 700);
  invisibleGround2.visible = false;
  

}




function draw() {
  background(0);
  
  if (path.y < 0){
    path.y = path.height/2;
  }

  runner.x = World.mouseX; 

  if(keyDown("left")) {
    runner.x =runner.x -4;
  }
  
  if(keyDown("right")) {
    runner.x =runner.x +4;
  }

  runner.collide(invisibleGround2);
 runner.collide(invisibleGround1);

  drawSprites();
}
















































