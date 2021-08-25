var pathImage,runner1Image
function preload(){
  //pre-load images
   pathImage=loadImage("path.png")
   runner1Image=loadImage("Runner-1.png")
  
}

function setup(){
  createCanvas(400,400);
  //create sprites here
path=createSprite(100,100)
path.addImage(pathImage)
runner1=createSprite(100,100)
runner1.addImage(runner1Image)
runner1.scale=0.10

}

function draw() {
  
drawSprites()
}
