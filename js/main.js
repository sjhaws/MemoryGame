var tries = 0;
var timerVar
var totalSeconds = 0;
var card;
var firstId;
var secondId;
var finalTime;
var timerVar;
var firstCardNum = null;
var secondCardNum = null;
var firstAnswer = null;
var secondAnswer = null;
var rightAnswers = 0;
var thisButton;
var buttons = [
  "btn1",
  "btn2",
  "btn3",
  "btn4",
  "btn5",
  "btn6",
  "btn7",
  "btn8",
  "btn9",
  "btn10",
  "btn11",
  "btn12",
  "btn13",
  "btn14",
  "btn15",
  "btn16",
  "btn17",
  "btn18",
  "btn19",
  "btn20",
];
var answers = [
  "<img class='col-12' src='./images/dog.png'>",
  "<img class='col-10' src='./images/cat.png'>",
  "<img class='col-10' src='./images/bird.png'>",
  "<img class='col-12' src='./images/elephant.png'>",
  "<img class='col-12' src='./images/whale.png'>",
  "<img class='col-12' src='./images/shark.png'>",
  "<img class='col-12' src='./images/bear.png'>",
  "<img class='col-12' src='./images/lion.png'>",
  "<img class='col-12' src='./images/horse.png'>",
  "<img class='col-12' src='./images/cow.png'>",
  "<img class='col-12' src='./images/dog.png'>",
  "<img class='col-10' src='./images/cat.png'>",
  "<img class='col-10' src='./images/bird.png'>",
  "<img class='col-12' src='./images/elephant.png'>",
  "<img class='col-12' src='./images/whale.png'>",
  "<img class='col-12' src='./images/shark.png'>",
  "<img class='col-12' src='./images/bear.png'>",
  "<img class='col-12' src='./images/lion.png'>",
  "<img class='col-12' src='./images/horse.png'>",
  "<img class='col-12' src='./images/cow.png'>"
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
  rightAnswers = 0;
  tries = 0;
  document.getElementById("attempts").innerHTML = tries;
  totalSeconds = 0;
  document.getElementById("timer").innerHTML = totalSeconds;
  for (i = 0; i < buttons.length; i++) { 
    thisButton = buttons[i];
    document.getElementById(thisButton).innerHTML = (i + 1);
    document.getElementById(thisButton).classList.remove("btn-primary");
    document.getElementById(thisButton).classList.remove("btn-info");
    document.getElementById(thisButton).classList.remove("btn-warning");
    document.getElementById(thisButton).classList.add("btn-primary");
  }
  modulatedAnswers = shuffle(answers);
  buttonUnDisableAll();
};

function countTimer() {
   ++totalSeconds;
   var minute = Math.floor((totalSeconds)/60);
   var seconds = totalSeconds;
   var seconds = totalSeconds - (minute*60);
   document.getElementById("timer").innerHTML = "Min: " + minute + " Sec: " + seconds;
};

function newGame(){
  clearGame();
  document.getElementById("game-board").style = "display: block";
  timerVar = setInterval(countTimer, 1000);
};

function buttonDisableAll(){
  for (i = 0; i < buttons.length; i++) { 
    thisButton = buttons[i];
    document.getElementById(thisButton).disabled = true;
  }
};

function buttonUnDisableAll(){
  for (i = 0; i < buttons.length; i++) { 
    thisButton = buttons[i];
    document.getElementById(thisButton).disabled = false;
  }
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
        
    if (firstAnswer != secondAnswer){
      setTimeout(function(){
      document.getElementById(firstId).classList.remove("btn-warning");
      document.getElementById(firstId).classList.add("btn-primary");
      document.getElementById(firstId).innerHTML = firstCardNum
      document.getElementById(secondId).classList.remove("btn-warning");
      document.getElementById(secondId).classList.add("btn-primary");
      document.getElementById(secondId).innerHTML = secondCardNum;
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
      clickTry();
      setTimeout(function(){
      firstChoice = null;
      secondChoice = null;
      firstCardNum = null;
      secondCardNum = null;
      rightAnswers += 1


      if (rightAnswers === 10){
        alert("You Win!!")
        finalTime = document.getElementById("timer").innerHTML;
        clearInterval(timerVar);
        document.getElementById("timer").innerHTML = "";
        document.getElementById("timer").innerHTML = finalTime;
      }
     }, 500)
    }

  }
  else {
    alert("You can only select two options at a time. Please try again.")
  }
};

document.getElementById("new-game").addEventListener("click", newGame);
for (i = 0; i < buttons.length; i++) { 
  thisButton = buttons[i];
  document.getElementById(thisButton).addEventListener("click", matchClick);
}
buttonDisableAll()