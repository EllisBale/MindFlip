const emojis = ["","","","","","","","","","","","" ]; // Emojis from https://getemoji.com/
let level = 1;
let flippedCards = [];
let matchedPairs = 0;

// DOM elements

const gameBoard = document.getElementsByClassName(".game-board"); // Game board
const result = document.getElementById("result"); // Result text 
const resetButton = document.getElementById("reset-level"); // Resets current level
const nextLevelButton = document.getElementById("next-level"); // Next level button


// start level function 

function startLevel() {

    gameBoard.innerHTML = "";
    resultText.innerText = "";
    nextLevel.classList.add("hidden");

};



// Board size on what level you are on

let gridSize = Math.min(level + 1, 6); // Grid goes up to 6x6 max



// Next level function
function nextLevel() {

};


// Reset level function
function resetLevel() {

};

