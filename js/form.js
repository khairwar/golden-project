class Form {
    constructor(){
     this.greeting = createElement('h3')
     this.input = createInput('enter name')
     this.button= createButton('play')
     this.title = createElement('h1')    
    }
    display(){
        this.title.html('name of the game')
        this.title.position(windowWidth/2,1)
        
        this.input.position(windowWidth/2,windowHeight/2);
        
        this.button.position(windowWidth/2+100,windowHeight/2);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            this.greeting.html("Welcome "+this.input.value());
            this.greeting.position(windowWidth/2,windowHeight/2)
             

            playerCount  +=1
            player.name = this.input.value();

            player.update(playerCount)
            player.updateCount(playerCount);
               
            

        })

        
    }
}