class Character{
    constructor(x,y){
        this.width=50;
        this.height=50;
        this.body=Matter.Bodies.rectangle(x,y,this.width,this.height);
        Matter.World.add(world,this.body) ;   
    }
    
    display(){
        rectMode (CENTER);
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}