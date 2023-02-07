var background_IMG
var sniper_IMG
var sniper
var enemy1
var enemy1_IMG
var enemy2
var enemy2_IMG
var enemy3
var enemy3_IMG
var scoped
var scoped_IMG
var injured
var injured_IMG
var edges

function preload(){
background_IMG = loadImage("background.jpg")
sniper_IMG = loadImage("sniper.png")
enemy1_IMG = loadImage("enemy1.png")
enemy2_IMG = loadImage("enemy2.png")
enemy3_IMG = loadImage("enemy3.png")
scoped_IMG = loadImage("scoped.png")
injured_IMG = loadImage("injured.png")
}

function setup(){
canvas = createCanvas(1920,937)
sniper = createSprite(1000, 790, 700, 350)
sniper.addImage("sniper", sniper_IMG)
sniper.addImage("scoped", scoped_IMG)
enemy1 = createSprite(575, 600, 50, 50)
enemy1.addImage("enemy1", enemy1_IMG)
enemy1.addImage("injured", injured_IMG)
enemy1.scale = 0.1
enemy2 = createSprite(1500, 550, 100, 100)
enemy2.addImage("enemy2", enemy2_IMG)
enemy2.addImage("injured", injured_IMG)
enemy2.scale = 0.25
enemy3 = createSprite(1025,312,50,50)
enemy3.addImage("enemy3", enemy3_IMG)
enemy3.addImage("injured", injured_IMG)
enemy3.scale = 0.25
enemy1.debug = true
sniper.debug = true
enemy1.setCollider("rectangle", 0,0,40,80)
edges = createEdgeSprites()
}

function draw(){
background(background_IMG)
if(keyWentDown("q")){
sniper.changeImage("scoped")
sniper.y = 535
sniper.scale = 1
enemy1.depth = sniper.depth
enemy2.depth = sniper.depth
enemy3.depth = sniper.depth
sniper.depth = sniper.depth + 1
text(mouseX+20 + "," + mouseY-25, mouseX, mouseY)
console.log(World.mouseX)
if(sniper.y >= 930){
sniper.y = 900
}
sniper.collide(edges[3])
}

if(keyWentUp("q")){
sniper.changeImage("sniper")
sniper.y = 790
sniper.scale = 1
}
if(keyDown(LEFT_ARROW) && sniper.x > width/3-225){
sniper.x -= 3
}
if(keyDown(RIGHT_ARROW) && sniper.x < width/2+600){
sniper.x += 3
}
if(keyDown(DOWN_ARROW) && sniper.y < width/2+600){
sniper.y += 3
}
if(keyDown(UP_ARROW) && sniper.y > width/3-350){
sniper.y -= 3
}
if(sniper.x === enemy1 && sniper.y === enemy1 && mouseIsPressed){
    enemy1.changeImage("injured")
}
drawSprites()
}
