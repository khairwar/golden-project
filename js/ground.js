class Ground {
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.body=Matter.Bodies.rectangle(x,y,this.width,this.height,{
            isStatic : true
        })
        Matter.World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        rectMode (CENTER);
        rect(pos.x, pos.y, this.width,this.height);
    }
}