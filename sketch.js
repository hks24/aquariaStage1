var mermaid1,mermaid2;
var spaceCraft;
var Aquaria;

function preload(){

}

function setup(){
createCanvas(1200,800);

Aquaria = createSprite(600,400,200,200);
mermaid1 = createSprite(600,350,50,50);
mermaid1.shapeColor = "red";

mermaid2 = createSprite(600,450,50,50);
mermaid2.shapeColor = "red";
}

function draw(){
background("blue");

if(keyDown(RIGHT_ARROW)){
  mermaid1.x = 650;
  mermaid1.y = 400;
  mermaid2.x = 550;
  mermaid2.y = 400;
}

if(keyDown(UP_ARROW)){
  mermaid1.x = 600;
  mermaid1.y = 350;
  mermaid2.x = 600;
  mermaid2.y = 450;
}

spawnSpaceCrafts();

drawSprites();
}

function spawnSpaceCrafts(){
  if(frameCount%100===0){
    spaceCraft = createSprite(100,100,100,100);

    var position = Math.round(random(1,4));
    if(position === 1){
      spaceCraft.x = 600;
      spaceCraft.y = 0;
      spaceCraft.velocityY = 5;
    }
    if(position ===2){
      spaceCraft.x = 600;
      spaceCraft.y = 800;
      spaceCraft.velocityY = -5;
    }
    if(position === 3){
      spaceCraft.x = 0;
      spaceCraft.y = 400;
      spaceCraft.velocityX = 5;
    }
    if(position === 4){
      spaceCraft.x = 1200;
      spaceCraft.y = 400;
      spaceCraft.velocityX = -5;
    }
  }
}