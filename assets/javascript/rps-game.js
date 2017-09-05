// Rock Paper Scissor Game javascript sheet
// Bo Slott
// Septemeber 2017

var userAnswer;
var availableAnswers = ["r", "p", "s"];
var winTotal = 0;
var loseTotal = 0;
var tieTotal = 0;
var output = "";

document.getElementById("rock").onclick = function (event) {
  
  this.style.borderBottom = "solid 2px #efefef";  /* underlines the user choice */

  document.getElementById("paper").style.border = "none";     /* Removes any underline from the paper choice */
  document.getElementById("scissors").style.border = "none";  /* Removes any underline from the scissors choice */

  userAnswer = "r";       /* change value of userAnswer */

  gamePlay ();

}

document.getElementById("paper").onclick = function (event) {
  
  this.style.borderBottom = "solid 2px #efefef";  /* underlines the user choice */

  document.getElementById("rock").style.border = "none";     /* Removes any underline from the paper choice */
  document.getElementById("scissors").style.border = "none";  /* Removes any underline from the scissors choice */

  userAnswer = "p";       /* change value of userAnswer */

  gamePlay ();

}

document.getElementById("scissors").onclick = function (event) {
  
  this.style.borderBottom = "solid 2px #efefef";  /* underlines the user choice */

  document.getElementById("rock").style.border = "none";     /* Removes any underline from the paper choice */
  document.getElementById("paper").style.border = "none";  /* Removes any underline from the scissors choice */

  userAnswer = "s";       /* change value of userAnswer */

  gamePlay ();

}






function gamePlay () {

  var computerAnswer = availableAnswers[Math.floor(Math.random() * availableAnswers.length)];

  output = "Your Answer is " + userAnswer + " and the computer is " + computerAnswer;

  var outcome = getWinner(userAnswer, computerAnswer);

  switch(outcome) {
    case "w":
      winTotal++;
      break;
    case "l":
      loseTotal++;
      break;
    case "t":
      tieTotal++;
      break;
    default:
      break;
  }

  document.getElementById("user-play").style.opacity = "0.4";
  document.getElementById("gamePlay-display").style.display = "block";

  presentGamePlay (userAnswer, computerAnswer, outcome);

  scoreboard ();

  }


function getWinner(val1, val2) {
  if (val1 === val2) {
    return "t";
  }
  if (val1 === "r") {
    if (val2 === "s") {
      return "w";
    }
    else {
      return "l";
    }
  }
  if (val1 === "p") {
    if (val2 === "r") {
      return "w";
    }
    else {
      return "l";
    }
  }
  if (val1 === "s") {
    if (val2 === "p") {
      return "w";
    }
    else {
        return "l";
    }
  }
}


function presentGamePlay (val1, val2, val3) {



  switch(val1) {
    case "r":
      document.getElementById("rock-choice-user").style.display = "inline";
      document.getElementById("paper-choice-user").style.display = "none";
      document.getElementById("scissors-choice-user").style.display = "none";
      break;
    case "p":
      document.getElementById("paper-choice-user").style.display = "inline";
      document.getElementById("rock-choice-user").style.display = "none";
      document.getElementById("scissors-choice-user").style.display = "none";
      break;
    case "s":      
      document.getElementById("scissors-choice-user").style.display = "inline";
      document.getElementById("rock-choice-user").style.display = "none";
      document.getElementById("paper-choice-user").style.display = "none";
      break;
    default:
      break;
  }

  switch(val2) {
    case "r":
      document.getElementById("rock-choice-comp").style.display = "inline";
      document.getElementById("paper-choice-comp").style.display = "none";
      document.getElementById("scissors-choice-comp").style.display = "none";
      break;
    case "p":
      document.getElementById("paper-choice-comp").style.display = "inline";
      document.getElementById("rock-choice-comp").style.display = "none";
      document.getElementById("scissors-choice-comp").style.display = "none";
      break;
    case "s":
      document.getElementById("scissors-choice-comp").style.display = "inline";
      document.getElementById("rock-choice-comp").style.display = "none";
      document.getElementById("paper-choice-comp").style.display = "none";
      break;
    default:
      break;
  }

  document.getElementById("gp-display-results").style.display = "block";

  if (val3 === "w") {
    document.getElementById("gp-results").textContent = "You Win!";
  }
  else if (val3 === "l") {
    document.getElementById("gp-results").textContent = "You Lose :(";
  }
  else {
    document.getElementById("gp-results").textContent = "You Tie";
  }

}

function scoreboard () {
  document.getElementById("scoreboard-display").style.display = "block";
  document.getElementById("win").textContent = winTotal;
  document.getElementById("lose").textContent = loseTotal;
  document.getElementById("tie").textContent = tieTotal;
}


