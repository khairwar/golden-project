
class Game{
    constructor(){}

    getState(){
        database.ref("gamestate").on("value", function(data){
            gameState = data.val();
        })
    }

    updateState(state){
        database.ref("/").update({
            gamestate : state 
        })
    }
    async start(){
       if(gameState ==0){
           player = new Player();
           var playerCountReference = await database.ref("playerCount").once("value");
           if(playerCountReference.exists()){
               playerCount = playerCountReference.val();
               player.getCount();
           }
           
           form = new Form();
           form.display();
       }
       ground = new Ground(windowWidth/2,windowHeight-20,windowWidth,30)
       char1 = new Character(windowWidth/2 - 100,windowHeight - 40)
       char2 = new Character(windowWidth/2 + 100,windowHeight-40)
    }

    play(){
        form.greeting.hide();
        form.title.hide()
        textSize(30);
        text("Game Start", windowWidth/2, windowHeight/2);
        char1.display();
        char2.display();
        ground.display();
        
    }



}