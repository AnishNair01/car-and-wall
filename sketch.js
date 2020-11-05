var car,wall,speed,weight;

function preload(){

 
 
}


function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);

  wall = createSprite(1200,200,60,height/2);

  car = createSprite(50,200,30,30);
  car.velocityX = speed;
  car.shapeColor = ("white");

  

}

function draw() {
  background(0);  
  
  if(wall.x - car.x < (car.width +wall.width) / 2 ){
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed / 22509;

    if(deformation > 180){
      car.shapeColor = ("red");
    }

    if(deformation < 180 && deformation > 100 ){
      car.shapeColor = color(230,230,0);
    }

    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}