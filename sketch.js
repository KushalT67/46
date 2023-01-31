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
  playrocket.scale=0.2
  stargroup=createGroup()
  restart=createSprite(width/2,height/2,10,10)
  restart.addImage(restartima)
  restart.scale=0.1
  moon=createSprite(width,height/2,10,10)
  moon.addImage(moon1)
  moon.scale=0.3
 
}
function draw() {
  background("black")
  image(space,0,0,width,height)
  if (gamestate=="play") {
    restart.visible=false
    playrocket.y=World.mouseY
    infinatestar() 
  if(playrocket.isTouching(stargroup)){
    gamestate="end"
   
    }
    if (frameCount>=1000) {
      moon.velocityX=-4
      if (playrocket.isTouching(moon)) {
        gamestate="Win" 
      }
    }
  }

  if (gamestate="Win") {
    text("Well Played :)",width/2,height/2)
  }
  if (mousePressedOver(restart)) {
    gamestate="play"
    console.log("working")
  }
  


if (gamestate=="end") {
  fill("yellow")
      text("GAMEOVER:(",200,200)
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
  star.scale=random(0.05,0.09)
  stargroup.add(star)
}

}
