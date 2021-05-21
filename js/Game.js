class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
       
        form = new Form()
        form.display();
      
    }
    car1 = createSprite(100,200);
    car2 = createSprite(200,300);
    car3 = createSprite(300,400);
    car4 = createSprite(400,500);
    cars = [car1,car2,car3,car4];
  }

  play(){
    form.hide_details();
    textSize(35);
    text("Game begin",200,30);
    Player.getPlayerInfo();

    if(allPlayers!==undefined){
      //var positionplayery = 50
      var index=0;
      var x=0;
      var y;
      for(var p in allPlayers){

        index=index+1;

        x=x+100;
        //if(p==="player"+player.index){
         // fill("red");
        //}
        //else{
        //  fill("black");
        //}

        y=displayHeight-allPlayers[p].distance;
        cars[index-1].x=x;
        cars[index-1].y=y;
        //positionplayery=positionplayery+30;
        //text(allPlayers[p].name+":"+allPlayers[p].distance,100,positionplayery);
        if(index===player.index){
          cars[index-1].shapeColor="red";
          
        }
      
      }

    }
    if(keyDown(UP_ARROW)&&player.index!==null){
      player.distance = player.distance+50;
      player.update();
    }
    drawSprites();
  }
}
