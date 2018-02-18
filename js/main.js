var tries = 0;
var timerVar
var totalSeconds = 0;
var card;
var firstId;
var secondId;
var firstCardNum = null;
var secondCardNum = null;
var firstAnswer = null;
var secondAnswer = null;
var rightAnswers = 0;
var answers = [
  "Dog",
  "Cat",
  "Bird",
  "Elephant",
  "Whale",
  "Shark",
  "Bear",
  "Lion",
  "Horse",
  "Cow",
  "Dog",
  "Cat",
  "Bird",
  "Elephant",
  "Whale",
  "Shark",
  "Bear",
  "Lion",
  "Horse",
  "Cow"
];

function clickTry(){
  tries += 1;
  document.getElementById("attempts").innerHTML =  tries;
};

function clearGame(){
  tries = 0;
  document.getElementById("attempts").innerHTML = tries;
  totalSeconds = 0;
};

function countTimer() {
   ++totalSeconds;
   var minute = Math.floor((totalSeconds)/60);
   var seconds = totalSeconds;
   var seconds = totalSeconds - (minute*60);
   document.getElementById("timer").innerHTML = minute + ":" + seconds;
};

function newGame(){
  clearGame();
  //add array randomizer
  var timerVar = setInterval(countTimer, 1000);
};

function matchClick(){
  if (firstCardNum === null){
    firstId = this.id
    firstCardNum = document.getElementById(firstId).innerHTML;
    document.getElementById(firstId).classList.remove("btn-primary");
    document.getElementById(firstId).classList.add("btn-info");
    document.getElementById(firstId).innerHTML = answers[firstCardNum - 1]
    firstAnswer = document.getElementById(firstId).innerHTML
  }
  else {
    secondId = this.id
    secondCardNum = document.getElementById(secondId).innerHTML;
    document.getElementById(secondId).classList.remove("btn-primary");
    document.getElementById(secondId).classList.add("btn-info");
    document.getElementById(secondId).innerHTML = answers[secondCardNum - 1]
    secondAnswer = document.getElementById(secondId).innerHTML
    
    if (firstAnswer != secondAnswer){
      setTimeout(function(){
      document.getElementById(firstId).classList.remove("btn-info");
      document.getElementById(firstId).classList.add("btn-primary");
      document.getElementById(firstId).innerHTML = firstCardNum
      document.getElementById(secondId).classList.remove("btn-info");
      document.getElementById(secondId).classList.add("btn-primary");
      document.getElementById(secondId).innerHTML = secondCardNum
      clickTry();
      firstChoice = null;
      secondChoice = null;
      firstCardNum = null;
      secondCardNum = null;
      }, 3000)
    }
    else {
      //disable winning pair
      clickTry();
      firstChoice = null;
      secondChoice = null;
      firstCardNum = null;
      secondCardNum = null;
      rightAnswers += 1
      if (rightAnswers === 10){
        alert("You Win!!")
      }

    }

  }
};

document.getElementById("new-game").addEventListener("click", newGame);
document.getElementById("btn1").addEventListener("click", matchClick);
document.getElementById("btn2").addEventListener("click", matchClick);
document.getElementById("btn3").addEventListener("click", matchClick);
document.getElementById("btn4").addEventListener("click", matchClick);
document.getElementById("btn5").addEventListener("click", matchClick);
document.getElementById("btn6").addEventListener("click", matchClick);
document.getElementById("btn7").addEventListener("click", matchClick);
document.getElementById("btn8").addEventListener("click", matchClick);
document.getElementById("btn9").addEventListener("click", matchClick);
document.getElementById("btn10").addEventListener("click", matchClick);
document.getElementById("btn11").addEventListener("click", matchClick);
document.getElementById("btn12").addEventListener("click", matchClick);
document.getElementById("btn13").addEventListener("click", matchClick);
document.getElementById("btn14").addEventListener("click", matchClick);
document.getElementById("btn15").addEventListener("click", matchClick);
document.getElementById("btn16").addEventListener("click", matchClick);
document.getElementById("btn17").addEventListener("click", matchClick);
document.getElementById("btn18").addEventListener("click", matchClick);
document.getElementById("btn19").addEventListener("click", matchClick);
document.getElementById("btn20").addEventListener("click", matchClick);
