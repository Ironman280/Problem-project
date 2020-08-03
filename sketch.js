const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

var engine, world;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  createSprite(400, 200, 50, 50);
  ground = new Ground(240,800,480,30);
  plinko1 = new Plinko(240,400);
  particle = new Particle (250,100,10);
  for(var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10,divisionHeight));
  }
}

function draw() {
  background(0);  

Engine.update(engine);

 ground.display();
 plinko1.display();
 particle.display()
 divisions.display();
  drawSprites();
}