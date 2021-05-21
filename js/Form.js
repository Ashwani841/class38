class Form {
  constructor() {
    this.input=createInput("Name");
    this.button=createButton("Play");
    this.greeting=createElement('h3');
  }

  hide_details(){

    this.input.hide();
    this.button.hide();
    this.greeting.hide();
  }


  display(){
    var title = createElement('h1')
    textSize(500)
    title.html("Who are you");
    title.position(displayWidth/2, 0);
    
    //var input = createInput("Name");
    //var button = createButton('Play');
    
    this.input.position(displayWidth/2, displayHeight-400);
    this.button.position(displayWidth-620, displayHeight-300);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      title.hide();

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount;
      player.update();
      player.updateCount(playerCount);
      //var greeting = createElement('h3');
      this.greeting.html("Hello " + player.name )
      this.greeting.position(displayWidth/2, displayHeight/2)
    });

  }
}
