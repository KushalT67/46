var playrocket
var background
var star
var rocket,space,star1
var gamestate="play"
var restart,restartima
var moon,moon1

function preload(){
rocket=loadImage("Images/rocket1_1.png")
space=loadImage("Images/space.png")
star1=loadImage("Images/star.png")
restartima=loadImage("Images/restart.png")
moon1=loadImage("Images/moon.png")
}
function setup(){
  canvas=createCanvas(1350,625)
  //background=createSprite(width/2,height/2,20,20)
 // background.scale=1
 //background.addImage(space)
  playrocket=createSprite(50,200,15,15)
  playrocket.addImage(rocket)
  playrocket.scale=0.3
  stargroup=createGroup()
  restart=createSprite(width/2,height/2,10,10)
  restart.addImage(restartima)
  restart.scale=0.1
  if(frameCount%1000==0){
    smoon(500)
  }
 

  
 
}
function smoon(a){
  console.log(frameCount,a)
  //if (frameCount%a==0 ) {
    moon=createSprite(width,height/2,10,10)
    moon.addImage(moon1)
    moon.scale=0.3
    moon.debug=true
    moon.velocityX=-4
     
 // }
  
}
function draw() {
  background("black")
  playrocket.debug=true
  image(space,0,0,width,height)
  if (gamestate=="play") {
    restart.visible=false
    playrocket.y=World.mouseY
    infinatestar() 


     
      
  if(playrocket.isTouching(stargroup)){
    gamestate="end"
    }
    if(playrocket.isTouching(moon)){
      moon.destroy()
      gamestate="win"
      }
      }
  

 
  if (mousePressedOver(restart)) {
    gamestate="play"
  }
if (gamestate=="end") {
  background("red")
  fill("white")
  textSize(40)
      text("GAMEOVER:(",width/2-100,height/3)
      restart.visible=true
      playrocket.y=200
      stargroup.setVelocityXEach(0)
      stargroup.destroyEach()
}
if (gamestate=="win") {
background("green")
  fill("white")
  textSize(40)
      text("Smooth Landing:)",width/2-100,height/3)
      restart.visible=true
      playrocket.y=200
      stargroup.setVelocityXEach(0)
      stargroup.destroyEach()
}
drawSprites()
}

function infinatestar(){
if (World.frameCount%40==0)
{
  star=createSprite(1350,random(10,650),20,20)
  star.velocityX=-6
  star.addImage(star1)
  star.scale=random(0.1,0.13
    )
  stargroup.add(star)
}

}
