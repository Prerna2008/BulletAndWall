var bullet,wall;
var speed,weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83)
  bullet=createSprite(0,200,50,50);
  bullet.velocityX=speed;
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80)
}
function draw() {
  background(255,255,255); 
  if(hasCollide(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
        wall.shapeColor= color(255,0,0);
    }
    if(damage<10){
        wall.shapeColor= color(0,255,0);
    }
  }
  drawSprites();
}
function hasCollide(){
  bulletRightEdge=bullet.x+bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRightEdge>=wallLeftEdge){
      bullet.velocityX=0;
      return true;
    }
    return false;
}
