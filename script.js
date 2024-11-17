console.log("Script loaded")
board = document.querySelector('.board');
divs = document.querySelectorAll('.board div');
div = document.querySelector('.board div');
displayCurrentPlayer = document.querySelector('#current_player');
whoWon = document.querySelector('#whoWon');
redCounter = document.querySelector('#redCounter');
blueCounter = document.querySelector('#blueCounter');
refreshButton = document.querySelector('#refreshBtn');
let currentPlayer = "Red Player"; //Inner HTML variables
let whoWonInitial = "No winner!";
// let redCount = 0; //Counters for red and blue
// let blueCount = 0;
let redCount = localStorage.getItem('redWins') ? parseInt(localStorage.getItem('redWins')) : 0;
let blueCount = localStorage.getItem('blueWins') ? parseInt(localStorage.getItem('blueWins')) : 0;

// Display the initial counts
redCounter.innerText = redCount;
blueCounter.innerText = blueCount;

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

function highlightWinner(winner) {
  whoWon.classList.add('highlight');
  setTimeout(() => {
    whoWon.classList.remove('highlight');
  }, 7500); // Duration matches 3 cycles of 0.8s animation
}

function divsArray(e) {
  let divsArray = Array.from(divs);
  let index = divsArray.indexOf(e.target);

  displayCurrentPlayer.innerHTML = currentPlayer;

  // Add the class based on the current player
  if (currentPlayer === "Red Player") {
    divs[index].classList.add("player1");
    currentPlayer = "Blue Player";
  } else {
    divs[index].classList.add("player2");
    currentPlayer = "Red Player";
  }

  whoWon.innerHTML = whoWonInitial;

  // Check win conditions and highlight the winner
  if (
    (divs[0].classList.contains("player1") && divs[1].classList.contains("player1") && divs[2].classList.contains("player1")) ||
    (divs[0].classList.contains("player1") && divs[4].classList.contains("player1") && divs[8].classList.contains("player1")) ||
    (divs[0].classList.contains("player1") && divs[3].classList.contains("player1") && divs[6].classList.contains("player1")) ||
    (divs[1].classList.contains("player1") && divs[4].classList.contains("player1") && divs[7].classList.contains("player1")) ||
    (divs[2].classList.contains("player1") && divs[4].classList.contains("player1") && divs[6].classList.contains("player1")) ||
    (divs[2].classList.contains("player1") && divs[5].classList.contains("player1") && divs[8].classList.contains("player1")) ||
    (divs[3].classList.contains("player1") && divs[4].classList.contains("player1") && divs[5].classList.contains("player1")) ||
    (divs[6].classList.contains("player1") && divs[7].classList.contains("player1") && divs[8].classList.contains("player1"))
  ) {
    whoWon.innerHTML = "Red Won!";
    highlightWinner("Red");
    redCount += 1;
    redCounter.innerText = redCount;
    localStorage.setItem('redWins', redCount);
    removeEventListeners();
  } else if (
    (divs[0].classList.contains("player2") && divs[1].classList.contains("player2") && divs[2].classList.contains("player2")) ||
    (divs[0].classList.contains("player2") && divs[4].classList.contains("player2") && divs[8].classList.contains("player2")) ||
    (divs[0].classList.contains("player2") && divs[3].classList.contains("player2") && divs[6].classList.contains("player2")) ||
    (divs[1].classList.contains("player2") && divs[4].classList.contains("player2") && divs[7].classList.contains("player2")) ||
    (divs[2].classList.contains("player2") && divs[4].classList.contains("player2") && divs[6].classList.contains("player2")) ||
    (divs[2].classList.contains("player2") && divs[5].classList.contains("player2") && divs[8].classList.contains("player2")) ||
    (divs[3].classList.contains("player2") && divs[4].classList.contains("player2") && divs[5].classList.contains("player2")) ||
    (divs[6].classList.contains("player2") && divs[7].classList.contains("player2") && divs[8].classList.contains("player2"))
  ) {
    whoWon.innerHTML = "Blue Won!";
    highlightWinner("Blue");
    blueCount += 1;
    blueCounter.innerText = blueCount;
    localStorage.setItem('blueWins', blueCount);
    removeEventListeners();
  }
}
//Button event listener and reset function which reinit event listeners and reset
//div classes
document.querySelector("#refreshBtn").addEventListener("click", reset);
function reset() {
  listen();
  for (let i = 0; i < divs.length; i++) {
      divs[i].className = "";
  }
  whoWon.innerHTML = whoWonInitial;
  currentPlayer = "Red Player";
  displayCurrentPlayer.innerHTML = currentPlayer;
}

// Select the clear storage button
const clearStorageButton = document.querySelector('#clearStorageBtn');
// Add event listener to clear local storage
clearStorageButton.addEventListener('click', function () {
    // Clear local storage
    localStorage.removeItem('redWins');
    localStorage.removeItem('blueWins');
    // Reset counters to zero
    redCount = 0;
    blueCount = 0;
    redCounter.innerText = redCount;
    blueCounter.innerText = blueCount;

});

    