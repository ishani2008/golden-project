var water,waterImage;
var fisherman,fishermanImage;

function preload(){
 waterImage=loadImage("water.jpg"); 
 fishermanImage=loadImage("fisherman.png");
  
 
}



function setup() {
  createCanvas(1250,500);
 water=createSprite(625,250);
 water.addImage(waterImage);
 water.scale=1.2;
 fisherman=createSprite(500,250);
 fisherman.addImage(fishermanImage);
 
 

}


function draw() {
  background("black");
  if (water.y>300){
    water.y=200;
  }
 drawSprites();
 
}




