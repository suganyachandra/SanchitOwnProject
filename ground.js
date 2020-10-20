class Ground
{
    constructor(x,y,width,height)
    {
       var options=
        {
            isStatic:true,
            friction:5
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("images/ground.png");
        World.add(world,this.body);
    }

    display()
    {
        var position = this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        //rect(position.x , position.y , this.width , this.height);
        image(this.image,position.x , position.y , this.width , this.height)
        pop();
    }
}