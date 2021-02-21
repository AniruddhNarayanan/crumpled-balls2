class Paper{
    constructor(x, y, radius,) {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x, y,radius, options);          
        this.radius = radius;
        this.image = loadImage("paper.png");
        // this.image.scale = 0.2;
        // this.body.force.x = 0;
        // this.body.force.y = 0;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 6, 6, this.radius, this.radius);
        pop()
      }
}