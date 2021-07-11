var astitwo,astitwo_img,astitwo2;
var bg2;
var PLAY = 1;
var END = 0;
var gameState = PLAY;


var ratha,ratha_img
var mock,mock1
function preload(){
  ratha_img=loadImage("Ratha.jpg")
  astitwo_img=loadImage("astitwo-removebg-preview.png")
  astitwo2=loadImage("astitwo3.jpg")
  mock=loadImage("ratha6.png")
   bg2=loadImage("jagnath5.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  astitwo=createSprite(windowWidth/2,windowHeight/2,10,10)
  astitwo.addImage(astitwo_img)
  astitwo.scale=0.1
  astitwo.velocityX=5
   astitwo.velocityY=-5
  astitwo.scale=0.20
  
  
  edges=createEdgeSprites()
}

function draw() {
  background(ratha_img);
  astitwo.bounceOff(edges)
  if(frameCount<200){
    astitwo.visible=true
  }else{
    background(astitwo2)
    astitwo.visible=false
 //   strokeWeight(8)
 //   fill("white")
 // textSize(50)
  //  text("ASTITWO",231,45)
  //  fill(255)
 // textSize(30)
 // text("Happy Ratha Yatra 2021",170,405)
 //text("wishes you",233,76)
  }
  
drawSprites()
  
  
  textSize(10)
text("x:"+mouseX+",y:"+mouseY,50,50)}
