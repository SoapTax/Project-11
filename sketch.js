
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerAnimation = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here\
  path = createSprite(200, 200);
  path.addImage(pathImg);
  path.velocityY = 4;
  runner = createSprite(200, 300);
  runner.addAnimation("Running", runnerAnimation);
  runner.scale = 0.08
  invisWall1 = createSprite(-25, 200, 150, 400);
  invisWall1.visible = false;
  invisWall2 = createSprite(410, 200, 100, 400);
  invisWall2.visible = false;
}

function draw() {
  background(0);
  runner.x = mouseX;
  runner.collide(invisWall1);
  runner.collide(invisWall2);
  if(path.y > 400){
    path.y = path.height/6.7;
    }
drawSprites();
}
