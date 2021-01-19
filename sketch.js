var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  car = createSprite(400,100,70,70);
  car.shapeColor = "cyan";
  wall = createSprite(1000,100,30,80);
 wall.shapeColor = "pink";

 car.velocityX = 3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(car,wall)){
 car.shapeColor = "yellow";
 textSize(50);
 fill("white");
 text("HELLO",200,200);
  };
  collide(car,wall);
  drawSprites();
}
