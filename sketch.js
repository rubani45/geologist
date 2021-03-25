const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron,stone,rubber;

 function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(450,450);
    stone = new Stone(190,570);
    rubber = new Rubber(300,560,50);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

   console.log(mouseX,mouseY);

    plane.display();
    hammer.display();
    iron.display();
    stone.display();
    rubber.display();
}