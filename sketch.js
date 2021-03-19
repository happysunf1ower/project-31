const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var droplets;
var maxDrops = 100;
var drops = []
function preload()
{
    
}

function setup()
{
    var canvas = createCanvas(500,900);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(500, height, 1200, 50);
    //droplets = new Droplet(10, 10, 2);
    if(frameCount % 150 === 0)
    {
        for(var i = 0; i < maxDrops; i++)
        {
           // push();
            drops.push(new Droplet(random(0, 400), random(0, 400)));
        }
    }
    
}

function draw()
{
    background("black");
    Engine.update(engine);
    ground.display();

   
    for(var i = 0; i < maxDrops; i++)
    {
        drops[i].display();
        drops[i].updateY();
    }
    //pop();
    //droplet1.display();
}   

