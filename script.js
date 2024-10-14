console.log("Script loaded")
board = document.querySelector('.board');
divs = document.querySelectorAll('.board div');
div = document.querySelector('.board div');
displayCurrentPlayer = document.querySelector('#current_player');
whoWon = document.querySelector('#whoWon');
redCounter = document.querySelector('#redCounter');
blueCounter = document.querySelector('#blueCounter');
refreshButton = document.querySelector('#btn');
let currentPlayer = "Red Player"; //Inner HTML variables
let whoWonInitial = "No winner!";
let redCount = 0; //Counters for red and blue
let blueCount = 0;
//Adding event listeners for the board divs
function listen() {
  divs.forEach(function (element) {
    element.addEventListener('click', divsArray, {once: true})
  })
}
//Removing event listeners after a win condition is met
function removeEventListeners()
{
  divs.forEach(function(element) {
    element.removeEventListener('click', divsArray)
  })
}
//Call event listeners and start the game logic
listen();

function divsArray(e) {

  let divsArray = Array.from(divs);
  let index = divsArray.indexOf(e.target);

  displayCurrentPlayer.innerHTML = currentPlayer;
//This adds the css style to the click event plus updating current player
  if (currentPlayer === "Red Player") {
    divs[index].classList.add("player1")
    currentPlayer = "Blue Player"
  }
  else if (currentPlayer === "Blue Player") {
    divs[index].classList.add("player2")
    currentPlayer = "Red Player"
  }
  else {
    console.log("Player error");
  }
//Win conditions
  whoWon.innerHTML = whoWonInitial;
  //Index 0 Row
  if (divs[0].classList.contains("player1") && divs[1].classList.contains("player1") && divs[2].classList.contains("player1")) {
    whoWon.innerHTML = "Red Won!"
  }
  else if(divs[0].classList.contains("player2") && divs[1].classList.contains("player2") && divs[2].classList.contains("player2")){
    whoWon.innerHTML = "Blue Won!"
  }
  //Index 0-8 Vertical
  else if(divs[0].classList.contains("player1") && divs[4].classList.contains("player1") && divs[8].classList.contains("player1")){
  whoWon.innerHTML = "Red Won!"
  }
  else if(divs[0].classList.contains("player2") && divs[4].classList.contains("player2") && divs[8].classList.contains("player2")){
    whoWon.innerHTML = "Blue Won!"
  }
  //Index 0 Column
  else if(divs[0].classList.contains("player1") && divs[3].classList.contains("player1") && divs[6].classList.contains("player1")){
    whoWon.innerHTML = "Red Won!"
  }
  else if(divs[0].classList.contains("player2") && divs[3].classList.contains("player2") && divs[6].classList.contains("player2")){
    whoWon.innerHTML = "Blue Won!"
  }
  //Index 1 Column
  else if(divs[1].classList.contains("player1") && divs[4].classList.contains("player1") && divs[7].classList.contains("player1")){
    whoWon.innerHTML = "Red Won!"
  }
  else if(divs[1].classList.contains("player2") && divs[4].classList.contains("player2") && divs[7].classList.contains("player2")){
    whoWon.innerHTML = "Blue Won!"
  }
  //Index 2-6 Vertical
  else if(divs[2].classList.contains("player1") && divs[4].classList.contains("player1") && divs[6].classList.contains("player1")){
    whoWon.innerHTML = "Red Won!"
  }
  else if(divs[2].classList.contains("player2") && divs[4].classList.contains("player2") && divs[6].classList.contains("player2")){
    whoWon.innerHTML = "Blue Won!"
  }
  //Index 2 Column
  else if(divs[2].classList.contains("player1") && divs[5].classList.contains("player1") && divs[8].classList.contains("player1")){
    whoWon.innerHTML = "Red Won!"
  }
  else if(divs[2].classList.contains("player2") && divs[5].classList.contains("player2") && divs[8].classList.contains("player2")){
    whoWon.innerHTML = "Blue Won!"
  }
  //Index 3 Row
  else if(divs[3].classList.contains("player1") && divs[4].classList.contains("player1") && divs[5].classList.contains("player1")){
    whoWon.innerHTML = "Red Won!"
  }
  else if(divs[3].classList.contains("player2") && divs[4].classList.contains("player2") && divs[5].classList.contains("player2")){
    whoWon.innerHTML = "Blue Won!"
  }
  //Index 6 Row
  else if(divs[6].classList.contains("player1") && divs[7].classList.contains("player1") && divs[8].classList.contains("player1")){
    whoWon.innerHTML = "Red Won!"
  }
  else if(divs[6].classList.contains("player2") && divs[7].classList.contains("player2") && divs[8].classList.contains("player2")){
    whoWon.innerHTML = "Blue Won!"
  }
  //If a winner is decided increment the red/blue counters
  if (whoWon.innerText === "Red Won!"){
    redCount += 1;
    redCounter.innerText = redCount;
    removeEventListeners()

  }
  else if(whoWon.innerText === "Blue Won!"){
    blueCount += 1;
    blueCounter.innerText = blueCount;
    removeEventListeners()
  }
//function end
}
//Button event listener and reset function which reinit event listeners and reset
//div classes
document.querySelector("#btn").addEventListener("click", reset);
function reset() {
  listen()
  {
    for (let i = 0; i < divs.length; i++) {
      divs[i].className = "";
    }}}
