var tries = 0;
var timerVar = setInterval(countTimer, 1000);
var totalSeconds = 0;

function clickTry(){
  tries += 0.5;
  document.getElementById("attempts").innerHTML =  Math.ceil(tries);
};

function clearGame(){
  tries = 0;
  document.getElementById("attempts").innerHTML = tries;
  totalSeconds = 0;
};

function countTimer() {
   ++totalSeconds;
   var hour = Math.floor(totalSeconds /3600);
   var minute = Math.floor((totalSeconds - hour*3600)/60);
   var seconds = totalSeconds - (hour*3600 + minute*60);

   document.getElementById("timer").innerHTML = hour + ":" + minute + ":" + seconds;
}

function newGame(){
  clearGame();
};

document.getElementById("new-game").addEventListener("click", newGame);
document.getElementById("btn1").addEventListener("click", clickTry);
document.getElementById("btn2").addEventListener("click", clickTry);
document.getElementById("btn3").addEventListener("click", clickTry);
document.getElementById("btn4").addEventListener("click", clickTry);
document.getElementById("btn5").addEventListener("click", clickTry);
document.getElementById("btn6").addEventListener("click", clickTry);
document.getElementById("btn7").addEventListener("click", clickTry);
document.getElementById("btn8").addEventListener("click", clickTry);
document.getElementById("btn9").addEventListener("click", clickTry);
document.getElementById("btn10").addEventListener("click", clickTry);
document.getElementById("btn11").addEventListener("click", clickTry);
document.getElementById("btn12").addEventListener("click", clickTry);
document.getElementById("btn13").addEventListener("click", clickTry);
document.getElementById("btn14").addEventListener("click", clickTry);
document.getElementById("btn15").addEventListener("click", clickTry);
document.getElementById("btn16").addEventListener("click", clickTry);
document.getElementById("btn17").addEventListener("click", clickTry);
document.getElementById("btn18").addEventListener("click", clickTry);
document.getElementById("btn19").addEventListener("click", clickTry);
document.getElementById("btn20").addEventListener("click", clickTry);
