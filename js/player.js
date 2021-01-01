class Player {
    constructor(){
        this.name = "";
        this.x = 0;
        this.y = 0;
        this.index = null;
    }
    getCount(){
         database.ref("playerCount").on("value",function(data){
             playerCount = data.val()
         })
    }
    updateCount(value){
        database.ref("/").update({
            playerCount:value

        })
    }
    
    update(index){
        database.ref("player"+index).update({
            name:this.name,
            x:this.x,
            y:this.y
            
        })
    }
}