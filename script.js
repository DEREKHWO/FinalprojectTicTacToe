let square0 = document.getElementById("square-0");
let square1 = document.getElementById("square-1");
let square2 = document.getElementById("square-2");
let square3 = document.getElementById("square-3");
let square4 = document.getElementById("square-4");
let square5 = document.getElementById("square-5");
let square6 = document.getElementById("square-6");
let square7 = document.getElementById("square-7");
let square8 = document.getElementById("square-8");
let playButton = document.getElementById("play-again");
let gameBoard = document.getElementById("game-board");
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

function gameSetUp() {
  for (i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", clickListener);
  }
}
gameSetUp();
let currentTurn = "X";

function clickListener() {
  if (currentTurn == "X") {
    this.innerText = "X";
    currentTurn = "O";
    this.removeEventListener("click", clickListener);
  } else {
    this.innerText = "O";
    currentTurn = "X";
    this.removeEventListener("click", clickListener);
  }

  if (isGameOver()) {
  }
}

function isGameOver() {}
