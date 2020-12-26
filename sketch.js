const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world
var object
var ground
function setup() {
  createCanvas(800,400);
engine=Engine.create()
world=engine.world
var options={
  isStatic:true
}
var options1={
  restitution:0.8
}
object=Bodies.rectangle(240,20,10,10,options1)
World.add(world,object)
ground=Bodies.rectangle(400,380,800,20,options)
World.add(world,ground)
}
function draw() {
  background(255,255,255);
  Engine.update(engine)
  rectMode(CENTER)
  rect(object.position.x,object.position.y,10,10)
rect(ground.position.x,ground.position.y,800,20)
  drawSprites();
}