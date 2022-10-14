var colors=["green","red","yellow","blue"];
var game=[];
var user=[];
// const user=[]; is wrong

//You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
var started = false;
var level = 0;
var currentLevel;

$("body").keypress(function(){
   if(!started)
   $("#level-title").text("Level " + level);
   nextSequence();
   //CALLING THE FUNCTIO W/O THIS IT WONT RUN!!
   started = true;
 }
);
 
 $(".btn").click(function(){
        //putting color patterns in user[]
        user.push(this.id);
        var uv =this.id;
        
     //ADDING N REMOVING BTN CLASS TO ANIMATE
      $("#"+uv).addClass("pressed");
      setTimeout(function() {
      $("#"+uv).removeClass("pressed");
      }, 50);
     //AUDIO
      var b= new Audio("sounds/"+uv+".mp3");
      b.play();
    
      //CHECKING EACH CLICK
       //to start checking from 0th index of element
      check(user.length-1);
      //check(this.id); == will give color not index!
     
});
 
 function check(currentLevel) {

      if (game[currentLevel] === user[currentLevel]) {

      //console.log("success");

      if (user.length === game.length){

        // Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

    } else {
        nextGame();
        $("h1").text("Game Over. Press Any Key TO Start");
      //AUDIO N BG COLOR
        var w=new Audio("sounds/wrong.mp3");
       w.play();
        $("body").addClass("game-over");
       setTimeout(function(){
        $("body").removeClass("game-over");
        },200);
          

       
      
        //console.log("wrong");
  
    }

}

function nextGame(){
    game=[];
    level=0;
    started=false;
}

function nextSequence(){
    //why not const user=[] ?????????
    user=[];

    level++;
    $("#level-title").text("Level " + level);
    
var randomNumber=(Math.floor(Math.random()*4));
var value=colors[randomNumber];
game.push(value);

//can't work with switch cases

// one step ANIMATE----->
$("#" + value).fadeIn(100).fadeOut(100).fadeIn(100);

//ADDING AND PLAYING SOUND----------->
var a= new Audio("sounds/"+value+".mp3");
a.play();
}
 

// function check(currentLevel){
//     for (var i=0; i<=level;i++){
//    if (game[i] != user [i]){
//     $("h1").text("Game Over. Press Any Key TO Start");
//     }
// }
//     if(count==level){
//     level++;
//     $("#level-title").text("Level " + level);
//     nextSequence();
//     }
// }


   
   
    