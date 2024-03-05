$(document).ready(function() {
  var startClick = false;
  var lives = 3;
  var liveMoles = 0;
  var deadMoles = 0;
  var time=1000;
  var audio1=$("#audio1")[0]; 
  var audio2=$("#audio2")[0];
  var audio3=$("#audio3")[0];
  var sound=true;
  var difficulty=10;
  var random = Math.floor(Math.random() * 5) + 1;
  var random2= Math.floor(Math.random() * 5) + 1;
  var random3=Math.floor(Math.random() * 5) + 1;
  var random4= Math.floor(Math.random() * 5) + 1
  $("#deadMole5,#deadMole4,#deadMole3,#deadMole2,#deadMole1").hide();
  $("#mole5,#mole4,#mole3,#mole2,#mole1").hide();

  $("#soundButton").on("click",function(){
  if(sound==true){
    /*sound off*/sound=false;
$('#audio1').prop('volume', 0);   // change the volume if neccessary
$('#audio2').prop('volume', 0);
$('#audio3').prop('volume', 0);

   $("#soundButton").text("Sound: off"); 
  }
  
 else if(sound==false){
    /*sound on*/sound=true;
    $('#audioGreen').prop('volume', 1);   // change the volume if neccessary
$('#audio1').prop('volume', 1);
$('#audio2').prop('volume', 1);
$('#audio3').prop('volume', 1);

  $("#soundButton").text("Sound: on");    
  }
})  
  $("#easy").on("click",function(){
    difficulty=10;
    $("h6").text("After 110 points, you win. The amount of lives will be reset to 3 every "+difficulty+" points.");
  });
  $("#medium").on("click",function(){
    difficulty=30;
     $("h6").text("After 110 points, you win. The amount of lives will be reset to 3 every "+difficulty+" points.");
  });
  $("#hard").on("click",function(){
    difficulty=16;
     $("h6").text("After 110 points, you win. The amount of lives will be reset to 3 every "+difficulty+" points.");
  })
  $("#harder").on("click",function(){
    difficulty=100;
     $("h6").text("After 110 points, you win. The amount of lives will be reset to 3 every "+difficulty+" points.");
  })
  
  $("#startButton").on("click", function() {
    console.log(startClick);
    time=1000;
    lives = 3;
    liveMoles = 0;
    deadMoles = 0;
    $("#lives").text("Lives: " + lives);
    $("#score").text("Score: 0");
    startClick = true;
    $("#startButton").hide();
    $("#easy").hide();
    $("#medium").hide();
    $("#hard").hide();
    $("#harder").hide();
    randomMole();
    if(difficulty==16||difficulty==100){secondMole();thirdMole()}
    
  });
// what happens when a mole is clicked
  function clickMole() {
    $("body").on("click", "#mole5", function() {
      $("#mole5").hide();
      $("#deadMole5").show();
      deadMoles++;
       if (audio1.paused) {
        audio1.play();
    }else{
        audio1.currentTime = 0
    }
      setTimeout(function() {
        $("#deadMole5").fadeOut();
      }, 250);
    });
    $("body").on("click", "#mole4", function() {
      moleClick = true;
      $("#mole4").hide();
      $("#deadMole4").show();
      deadMoles++;
      if (audio1.paused) {
        audio1.play();
    }else{
        audio1.currentTime = 0
    }
      setTimeout(function() {
        $("#deadMole4").fadeOut();
      }, 250);
    });
    $("body").on("click", "#mole3", function() {
      deadMoles++;
     if (audio1.paused) {
        audio1.play();
    }else{
        audio1.currentTime = 0
    }
      $("#mole3").hide();
      $("#deadMole3").show();
      setTimeout(function() {
        $("#deadMole3").fadeOut();
      }, 250);
    });
    $("body").on("click", "#mole2", function() {
      deadMoles++;
       if (audio1.paused) {
        audio1.play();
    }else{
        audio1.currentTime = 0
    }
      $("#mole2").hide();
      $("#deadMole2").show();
      setTimeout(function() {
        $("#deadMole2").fadeOut();
      }, 250);
    });
    $("body").on("click", "#mole1", function() {
      deadMoles++;
    if (audio1.paused) {
        audio1.play();
    }else{
        audio1.currentTime = 0
    }
      $("#mole1").hide();
      $("#deadMole1").show();
      setTimeout(function() {
        $("#deadMole1").fadeOut();
      }, 250);
    });
    console.log(deadMoles);
  }
  
  function randomMole() {
    var num=Math.floor(Math.random() * (1000/(10*deadMoles+1)-20)) + 20;
  // this function makes the setTimeout time random 
    function randomNum(num){
 num= Math.floor(Math.random() * (1000/(10*deadMoles+1)-20)) + 20;console.log(num)
return num;
}
    if (liveMoles - deadMoles < 4 && deadMoles<110) {
      var one = setTimeout(function() {
        $("#mole" + random).show(); 
        liveMoles++;console.log(liveMoles)
        setTimeout(function() {
          $("#mole" + random).hide();
          if (lives > -1) {
            $("#lives").text("Lives: " + lives);
          }
          $("#score").text("Score: " + deadMoles);
          random = Math.floor(Math.random() * 5) + 1;  //random numbers 1-5
          if (liveMoles - deadMoles >= 4||deadMoles>=110) {
            $("#startButton").show();
            $("#easy").show();
            $("#medium").show();
            $("#hard").show();
            $("#harder").show();
          }

          randomNum(num)
          // this makes the moles retreat to their holes quicker
          if(deadMoles>=20&& deadMoles<30){time=900}
          if(deadMoles>=30&& deadMoles<40&&difficulty!==100){time=875}
          if(deadMoles>=40 && deadMoles<50&&difficulty!==16&&difficulty!==100){time=850}
          if(deadMoles>=50 && deadMoles<60&&difficulty!==16&&difficulty!==100){time=825}
          if(deadMoles>=60 &&deadMoles<70&&difficulty!==16&&difficulty!==100){time=800}
          if(deadMoles>=70 &&deadMoles<80&&difficulty!==16&&difficulty!==100){time=775}
          if(deadMoles>=80&& deadMoles<90&&difficulty!==16&&difficulty!==100){time=773}
          if(deadMoles>=90&& deadMoles<100&&difficulty!==16&&difficulty!==100){time=771}
          if(deadMoles>=100&&difficulty!==16&&difficulty!==100){time=770}
          if(deadMoles>=30&&difficulty==100){time=600}// for hardest level
          console.log(time)
          randomMole();
        }, time);
      },randomNum(num))
      
    }
if(deadMoles%difficulty==0){lives=3;$("#lives").text("Lives: " + lives);liveMoles=deadMoles} // this resets lives after so many kills
   // this controls the scoreboard
    if (liveMoles - deadMoles == 1) {
      $("#lives").text("Lives: 2");
    }
    if (liveMoles - deadMoles == 2) {
      $("#lives").text("Lives: 1");
    }
    if (liveMoles - deadMoles == 3) {
      $("#lives").text("Lives: 0");
    }
    if (liveMoles - deadMoles >= 4) {
      $("#lives").text("Game Over!");audio2.play();
    }
    if(deadMoles>=110){$("#lives").text("You Win!");audio3.play()}
  }
 function secondMole(){
if($("#lives").text()!=="Game Over!"&&$("#lives").text()!=="You Win!"){setTimeout(function(){$("#mole" + random2).show();setTimeout(function(){$("#mole" + random2).hide();random2= Math.floor(Math.random() * 5) + 1;secondMole()},time)},700)}
   
 } 
   function thirdMole(){
if($("#lives").text()!=="Game Over!"&&$("#lives").text()!=="You Win!"){setTimeout(function(){$("#mole" + random3).show();setTimeout(function(){$("#mole" + random3).hide();random3= Math.floor(Math.random() * 5) + 1;thirdMole()},time)},2000)}
   
 }


  clickMole();
}); //
