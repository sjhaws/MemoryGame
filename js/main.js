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
var modulatedAnswers

function shuffle(myArray) {
  var ctr = myArray.length, temp, index;

  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = myArray[ctr];
      myArray[ctr] = myArray[index];
      myArray[index] = temp;
  }
  return myArray;
}

function clickTry(){
  tries += 1;
  document.getElementById("attempts").innerHTML =  tries;
};

function clearGame(){
  tries = 0;
  document.getElementById("attempts").innerHTML = tries;
  totalSeconds = 0;
  document.getElementById("timer").innerHTML = totalSeconds;
  document.getElementById("btn1").innerHTML = 1;
  document.getElementById("btn2").innerHTML = 2;
  document.getElementById("btn3").innerHTML = 3;
  document.getElementById("btn4").innerHTML = 4;
  document.getElementById("btn5").innerHTML = 5;
  document.getElementById("btn6").innerHTML = 6;
  document.getElementById("btn7").innerHTML = 7;
  document.getElementById("btn8").innerHTML = 8;
  document.getElementById("btn9").innerHTML = 9;
  document.getElementById("btn10").innerHTML = 10;
  document.getElementById("btn11").innerHTML = 11;
  document.getElementById("btn12").innerHTML = 12;
  document.getElementById("btn13").innerHTML = 13;
  document.getElementById("btn14").innerHTML = 14;
  document.getElementById("btn15").innerHTML = 15;
  document.getElementById("btn16").innerHTML = 16;
  document.getElementById("btn17").innerHTML = 17;
  document.getElementById("btn18").innerHTML = 18;
  document.getElementById("btn19").innerHTML = 19;
  document.getElementById("btn20").innerHTML = 20;
  document.getElementById("btn1").classList.remove("btn-primary");
  document.getElementById("btn2").classList.remove("btn-primary");
  document.getElementById("btn3").classList.remove("btn-primary");
  document.getElementById("btn4").classList.remove("btn-primary");
  document.getElementById("btn5").classList.remove("btn-primary");
  document.getElementById("btn6").classList.remove("btn-primary");
  document.getElementById("btn7").classList.remove("btn-primary");
  document.getElementById("btn8").classList.remove("btn-primary");
  document.getElementById("btn9").classList.remove("btn-primary");
  document.getElementById("btn10").classList.remove("btn-primary");
  document.getElementById("btn11").classList.remove("btn-primary");
  document.getElementById("btn12").classList.remove("btn-primary");
  document.getElementById("btn13").classList.remove("btn-primary");
  document.getElementById("btn14").classList.remove("btn-primary");
  document.getElementById("btn15").classList.remove("btn-primary");
  document.getElementById("btn16").classList.remove("btn-primary");
  document.getElementById("btn17").classList.remove("btn-primary");
  document.getElementById("btn18").classList.remove("btn-primary");
  document.getElementById("btn19").classList.remove("btn-primary");
  document.getElementById("btn20").classList.remove("btn-primary");
  document.getElementById("btn1").classList.remove("btn-info");
  document.getElementById("btn2").classList.remove("btn-info");
  document.getElementById("btn3").classList.remove("btn-info");
  document.getElementById("btn4").classList.remove("btn-info");
  document.getElementById("btn5").classList.remove("btn-info");
  document.getElementById("btn6").classList.remove("btn-info");
  document.getElementById("btn7").classList.remove("btn-info");
  document.getElementById("btn8").classList.remove("btn-info");
  document.getElementById("btn9").classList.remove("btn-info");
  document.getElementById("btn10").classList.remove("btn-info");
  document.getElementById("btn11").classList.remove("btn-info");
  document.getElementById("btn12").classList.remove("btn-info");
  document.getElementById("btn13").classList.remove("btn-info");
  document.getElementById("btn14").classList.remove("btn-info");
  document.getElementById("btn15").classList.remove("btn-info");
  document.getElementById("btn16").classList.remove("btn-info");
  document.getElementById("btn17").classList.remove("btn-info");
  document.getElementById("btn18").classList.remove("btn-info");
  document.getElementById("btn19").classList.remove("btn-info");
  document.getElementById("btn20").classList.remove("btn-info");
  document.getElementById("btn1").classList.remove("btn-warning");
  document.getElementById("btn2").classList.remove("btn-warning");
  document.getElementById("btn3").classList.remove("btn-warning");
  document.getElementById("btn4").classList.remove("btn-warning");
  document.getElementById("btn5").classList.remove("btn-warning");
  document.getElementById("btn6").classList.remove("btn-warning");
  document.getElementById("btn7").classList.remove("btn-warning");
  document.getElementById("btn8").classList.remove("btn-warning");
  document.getElementById("btn9").classList.remove("btn-warning");
  document.getElementById("btn10").classList.remove("btn-warning");
  document.getElementById("btn11").classList.remove("btn-warning");
  document.getElementById("btn12").classList.remove("btn-warning");
  document.getElementById("btn13").classList.remove("btn-warning");
  document.getElementById("btn14").classList.remove("btn-warning");
  document.getElementById("btn15").classList.remove("btn-warning");
  document.getElementById("btn16").classList.remove("btn-warning");
  document.getElementById("btn17").classList.remove("btn-warning");
  document.getElementById("btn18").classList.remove("btn-warning");
  document.getElementById("btn19").classList.remove("btn-warning");
  document.getElementById("btn20").classList.remove("btn-warning");
  document.getElementById("btn1").classList.add("btn-primary");
  document.getElementById("btn2").classList.add("btn-primary");
  document.getElementById("btn3").classList.add("btn-primary");
  document.getElementById("btn4").classList.add("btn-primary");
  document.getElementById("btn5").classList.add("btn-primary");
  document.getElementById("btn6").classList.add("btn-primary");
  document.getElementById("btn7").classList.add("btn-primary");
  document.getElementById("btn8").classList.add("btn-primary");
  document.getElementById("btn9").classList.add("btn-primary");
  document.getElementById("btn10").classList.add("btn-primary");
  document.getElementById("btn11").classList.add("btn-primary");
  document.getElementById("btn12").classList.add("btn-primary");
  document.getElementById("btn13").classList.add("btn-primary");
  document.getElementById("btn14").classList.add("btn-primary");
  document.getElementById("btn15").classList.add("btn-primary");
  document.getElementById("btn16").classList.add("btn-primary");
  document.getElementById("btn17").classList.add("btn-primary");
  document.getElementById("btn18").classList.add("btn-primary");
  document.getElementById("btn19").classList.add("btn-primary");
  document.getElementById("btn20").classList.add("btn-primary");
  modulatedAnswers = shuffle(answers);
  buttonUnDisableAll();
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
  document.getElementById("game-board").style = "display: block";
  var timerVar = setInterval(countTimer, 1000);
};

function buttonDisableAll(){
  document.getElementById("btn1").disabled = true;
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn3").disabled = true;
  document.getElementById("btn4").disabled = true;
  document.getElementById("btn5").disabled = true;
  document.getElementById("btn6").disabled = true;
  document.getElementById("btn7").disabled = true;
  document.getElementById("btn8").disabled = true;
  document.getElementById("btn9").disabled = true;
  document.getElementById("btn10").disabled = true;
  document.getElementById("btn11").disabled = true;
  document.getElementById("btn12").disabled = true;
  document.getElementById("btn13").disabled = true;
  document.getElementById("btn14").disabled = true;
  document.getElementById("btn15").disabled = true;
  document.getElementById("btn16").disabled = true;
  document.getElementById("btn17").disabled = true;
  document.getElementById("btn18").disabled = true;
  document.getElementById("btn19").disabled = true;
  document.getElementById("btn20").disabled = true;
};

function buttonUnDisableAll(){
  document.getElementById("btn1").disabled = false;
  document.getElementById("btn2").disabled = false;
  document.getElementById("btn3").disabled = false;
  document.getElementById("btn4").disabled = false;
  document.getElementById("btn5").disabled = false;
  document.getElementById("btn6").disabled = false;
  document.getElementById("btn7").disabled = false;
  document.getElementById("btn8").disabled = false;
  document.getElementById("btn9").disabled = false;
  document.getElementById("btn10").disabled = false;
  document.getElementById("btn11").disabled = false;
  document.getElementById("btn12").disabled = false;
  document.getElementById("btn13").disabled = false;
  document.getElementById("btn14").disabled = false;
  document.getElementById("btn15").disabled = false;
  document.getElementById("btn16").disabled = false;
  document.getElementById("btn17").disabled = false;
  document.getElementById("btn18").disabled = false;
  document.getElementById("btn19").disabled = false;
  document.getElementById("btn20").disabled = false;
};

function matchClick(){
  if (firstCardNum === null){
    firstId = this.id
    firstCardNum = document.getElementById(firstId).innerHTML;
    document.getElementById(firstId).classList.remove("btn-primary");
    document.getElementById(firstId).classList.add("btn-warning");
    document.getElementById(firstId).innerHTML = answers[firstCardNum - 1]
    firstAnswer = document.getElementById(firstId).innerHTML
    document.getElementById(firstId).disabled = true;
  }
  else if(firstCardNum != null && secondCardNum === null){
    secondId = this.id
    secondCardNum = document.getElementById(secondId).innerHTML;
    document.getElementById(secondId).classList.remove("btn-primary");
    document.getElementById(secondId).classList.add("btn-warning");
    document.getElementById(secondId).innerHTML = answers[secondCardNum - 1]
    secondAnswer = document.getElementById(secondId).innerHTML
    document.getElementById(secondId).disabled = true;
    // buttonDisableAll();
    
    if (firstAnswer != secondAnswer){
      setTimeout(function(){
      document.getElementById(firstId).classList.remove("btn-warning");
      document.getElementById(firstId).classList.add("btn-primary");
      document.getElementById(firstId).innerHTML = firstCardNum
      document.getElementById(secondId).classList.remove("btn-warning");
      document.getElementById(secondId).classList.add("btn-primary");
      document.getElementById(secondId).innerHTML = secondCardNum;
      // buttonUnDisableAll();
      document.getElementById(firstId).disabled = false;
      document.getElementById(secondId).disabled = false;
      clickTry();
      firstChoice = null;
      secondChoice = null;
      firstCardNum = null;
      secondCardNum = null;
      }, 1000)
    }
    else {
      document.getElementById(firstId).classList.remove("btn-warning");
      document.getElementById(firstId).classList.add("btn-info");
      document.getElementById(secondId).classList.remove("btn-warning");
      document.getElementById(secondId).classList.add("btn-info");
      // buttonUnDisableAll()
      clickTry();
      setTimeout(function(){
      firstChoice = null;
      secondChoice = null;
      firstCardNum = null;
      secondCardNum = null;
      rightAnswers += 1
      if (rightAnswers === 10){
        alert("You Win!!")
      }
     }, 1000)
    }

  }
  else {
    alert("You can only select two options at a time. Please try again.")
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
buttonDisableAll()