var road,roadImg; 
var road1,road1Img;
var boy,boyImg;
var obstacle,obstacleImg;
var obgroup;

function preload(){

    roadImg = loadImage("picture-highway-that-passing-through-260nw-1837837225 (6).jpg");

    road1Img = loadImage("bg.jpg")

    boyImg = loadAnimation("boy1.png","boy2.png","boy3.png")

    obstacleImg = loadImage("obstacle.jpg");

    obgroup = new Group();

}

function setup() {

    createCanvas(1200,600);
    
    road = createSprite(600,295);
    road.addImage("road",roadImg);
    road.scale = 2.43
    road.velocityX = -3;

   /* road1 = createSprite(600,300);
    road1.addImage("road1",road1Img);
    road1.velocityX = 3;
    road1.scale = 1.6*/

    boy = createSprite(200,400);
    boy.addAnimation("boy",boyImg);
   

}

function draw() {

    background(roadImg);

   if (road.x<0) {
road.x = 200;

   }
   console.log(boy.x);
    
    drawSprites();
    spawnObstacles();

    
}

function spawnObstacles() {

    if (frameCount%200===0) {
  obstacle=createSprite(1000,350,80,30)
  obstacle.y=Math.round(random(300,400))
  obstacle.addImage(obstacleImg);
obstacle.velocityX = -3
  obstacle.scale = 0.3;
  obstacle.depth = boy.depth-1;
obgroup.add(obstacle)

}
}
