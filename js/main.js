var tries = 0;
var timerVar
var totalSeconds = 0;
var card;
var cardNum
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
  //  var hour = Math.floor(totalSeconds /3600);
  //  var minute = Math.floor((totalSeconds - hour*3600)/60);
   var seconds = totalSeconds //- (hour*3600 + minute*60);
   document.getElementById("timer").innerHTML = seconds;
  //  document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}

function newGame(){
  clearGame();
  //add array randomizer
  var timerVar = setInterval(countTimer, 1000);
};

function matchClick(){
  cardNum = document.getElementById(this.id).innerHTML;
  document.getElementById(this.id).classList.remove("btn-primary");
  document.getElementById(this.id).classList.add("btn-info");
  document.getElementById(this.id).innerHTML = answers[cardNum - 1]
  document.getElementById(this.id).element.disabled = true;

  // //if 
  // clickTry();
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
