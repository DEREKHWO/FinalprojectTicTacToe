let square0 = document.getElementById("square-0");
let square1 = document.getElementById("square-1");
let square2 = document.getElementById("square-2");
let square3 = document.getElementById("square-3");
let square4 = document.getElementById("square-4");
let square5 = document.getElementById("square-5");
let square6 = document.getElementById("square-6");
let square7 = document.getElementById("square-7");
let square8 = document.getElementById("square-8");
let playAgainButton = document.getElementById("play-again");
let xScoreboard = document.getElementById("scoreboard-x");
let oScoreboard = document.getElementById("scoreboard-o");
let squares = [];
squares.push(square0);
squares.push(square1);
squares.push(square2);
squares.push(square3);
squares.push(square4);
squares.push(square5);
squares.push(square6);
squares.push(square7);
squares.push(square8);
gameSetUp();
function gameSetUp() {
  for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", squaresClickListener);
  }
}
let currentTurn = "X";
let turnCounter = 0;
function squaresClickListener() {
  if (currentTurn == "X") {
    this.innerText = "X";
    currentTurn = "O";
    turnCounter++;
    this.removeEventListener("click", squaresClickListener);
  } else {
    this.innerText = "O";
    currentTurn = "X";
    turnCounter++;
    this.removeEventListener("click", squaresClickListener);
  }
  setTimeout(checkIfXWins, 25);
  setTimeout(checkIfOWins, 25);
  setTimeout(checkIfTieGame, 25);
  setTimeout(checkIfGameIsOver, 25);
}
function checkIfXWins() {
  if (
    squares[0].innerText == "X" &&
    squares[1].innerText == "X" &&
    squares[2].innerText == "X"
  ) {
    return true;
  } else if (
    squares[3].innerText == "X" &&
    squares[4].innerText == "X" &&
    squares[5].innerText == "X"
  ) {
    return true;
  } else if (
    squares[6].innerText == "X" &&
    squares[7].innerText == "X" &&
    squares[8].innerText == "X"
  ) {
    return true;
  } else if (
    squares[0].innerText == "X" &&
    squares[3].innerText == "X" &&
    squares[6].innerText == "X"
  ) {
    return true;
  } else if (
    squares[1].innerText == "X" &&
    squares[4].innerText == "X" &&
    squares[7].innerText == "X"
  ) {
    return true;
  } else if (
    squares[2].innerText == "X" &&
    squares[5].innerText == "X" &&
    squares[8].innerText == "X"
  ) {
    return true;
  } else if (
    squares[0].innerText == "X" &&
    squares[4].innerText == "X" &&
    squares[8].innerText == "X"
  ) {
    return true;
  } else if (
    squares[2].innerText == "X" &&
    squares[4].innerText == "X" &&
    squares[6].innerText == "X"
  ) {
    return true;
  }
}

function checkIfOWins() {
  if (
    squares[0].innerText == "O" &&
    squares[1].innerText == "O" &&
    squares[2].innerText == "O"
  ) {
    return true;
  } else if (
    squares[3].innerText == "O" &&
    squares[4].innerText == "O" &&
    squares[5].innerText == "O"
  ) {
    return true;
  } else if (
    squares[6].innerText == "O" &&
    squares[7].innerText == "O" &&
    squares[8].innerText == "O"
  ) {
    return true;
  } else if (
    squares[0].innerText == "O" &&
    squares[3].innerText == "O" &&
    squares[6].innerText == "O"
  ) {
    return true;
  } else if (
    squares[1].innerText == "O" &&
    squares[4].innerText == "O" &&
    squares[7].innerText == "O"
  ) {
    return true;
  } else if (
    squares[2].innerText == "O" &&
    squares[5].innerText == "O" &&
    squares[8].innerText == "O"
  ) {
    return true;
  } else if (
    squares[0].innerText == "O" &&
    squares[4].innerText == "O" &&
    squares[8].innerText == "O"
  ) {
    return true;
  } else if (
    squares[2].innerText == "O" &&
    squares[4].innerText == "O" &&
    squares[6].innerText == "O"
  ) {
    return true;
  }
}

function checkIfTieGame() {
  if (turnCounter == 9 && checkIfXWins() != true && checkIfOWins() != true) {
    return true;
  }
}

let xCurrentScore = 0;
let oCurrentScore = 0;
function scoreCounter() {
  if (checkIfXWins()) {
    xScoreboard.innerText = xCurrentScore += 1;
    localStorage.setItem("X score", xCurrentScore);
  }
  if (checkIfOWins()) {
    oScoreboard.innerText = oCurrentScore += 1;
    localStorage.setItem("X score", oCurrentScore);
  }
}
let xScoreCount = localStorage.getItem("X score");
let oScoreCount = localStorage.getItem("O score");

function whenGameIsOver() {
  if (checkIfXWins()) {
    for (i = 0; i < squares.length; i++) {
      squares[i].removeEventListener("click", squaresClickListener);
    }
    alert("Congrats, X won!! Press play again to play again");
  }
  if (checkIfOWins()) {
    for (i = 0; i < squares.length; i++) {
      squares[i].removeEventListener("click", squaresClickListener);
    }
    alert("Congrats, O won!! Press play again to play again");
  }
  if (checkIfTieGame()) {
    for (i = 0; i < squares.length; i++) {
      squares[i].removeEventListener("click", squaresClickListener);
    }
    alert("Sorry, no one won. Press play again to play again");
  }
}

function checkIfGameIsOver() {
  if (checkIfXWins()) {
    whenGameIsOver();
    scoreCounter();
  } else if (checkIfOWins()) {
    whenGameIsOver();
    scoreCounter();
  } else if (checkIfTieGame()) {
    whenGameIsOver();
  }
}

playAgainButton.addEventListener("click", playAgainButtonClickListener);
function playAgainButtonClickListener(event) {
  event.preventDefault();
  for (i = 0; i < squares.length; i++) {
    squares[i].innerText = null;
  }
  turnCounter = 0;
  currentTurn = "X";
  gameSetUp();
}
function gameDefaultState() {
  if (xScoreCount != null) {
    xScoreboard.innerText = xScoreCount;
  }
  if (oScoreCount != null) {
    oScoreboard.innerText = oScoreCount;
  }
}
gameDefaultState();
