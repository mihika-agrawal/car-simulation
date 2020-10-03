var car,wall;
var speed,weight;


function setup() {
 createCanvas(1600,400);
 speed=random(50,90)
  weight=random(400,1500);
  car= createSprite(50,200,50,50);
  car.shapeColor("grey")
  wall= createSprite(1500,200,60,height/2);
  car.velocityX=speed;
}

function draw() {
  background("black");  
if(wall.x-car-x < wall.x/2+car.x/2){
car.velocityX=0;
var deformation=0.5*speed*weight*speed/22500;
if(deformaton>180){
  car.shapeColor=colorsss(255,0,0);
}
if(deformaton<180 && deformation>100){
  car.shapeColor=color(230,230,0);
}
if(deformaton<100){
  car.shapeColor=color(0,230,0);
}


}
  drawSprites();
}
