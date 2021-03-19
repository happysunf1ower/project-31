class Droplet
{
  constructor(x, y, radius) 
  {
    var options = 
    {
      'restitution':0.8,
      'friction':0.1,
      'density':1.0
    }

    this.body = Bodies.circle(x, y, 10, options);
    this.width = width;
    this.height = height;
    this.radius = radius;
    World.add(world, this.body);
  }
  updateY ()
{
  if(this.body.position.y > height)
  {
    Matter.Body.setPosition(this.rain, {x: random (0, 400), y: random (0,400)})
  }
}

  display()
  {
    var angle = this.body.angle;
    
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    ellipseMode(RADIUS);
    fill("blue");
    ellipse(0, 0, 3);
    pop();
  }
}