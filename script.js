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

square0.addEventListener("click", clickListener);
square1.addEventListener("click", clickListener);
square2.addEventListener("click", clickListener);
square3.addEventListener("click", clickListener);
square4.addEventListener("click", clickListener);
square5.addEventListener("click", clickListener);
square6.addEventListener("click", clickListener);
square7.addEventListener("click", clickListener);
square8.addEventListener("click", clickListener);
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
}
