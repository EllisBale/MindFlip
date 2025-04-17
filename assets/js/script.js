const images = ["3","4","5","6","7","8","8","","","","","" ]; 
let level = 1;
let flippedCards = [];
let matchedPairs = 0;

// DOM elements

const gameBoard = document.querySelector(".game-board"); // Game board
const result = document.getElementById("result"); // Result text 
const resetButton = document.getElementById("reset-level"); // Resets current level
const nextLevelButton = document.getElementById("next-level"); // Next level button


// start level function 

function startLevel() {

    gameBoard.innerHTML = "";
    resultText.innerText = "";
    nextLevel.classList.add("hidden");

};

nextLevelButton.addEventListener("click", startNextLevel);

// Fisher-Yates algorithm
// Shuffle cards function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--){
        let random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
       
    }
}

// Board size on what level you are on

let gridSize = Math.min(level + 1, 6); // Grid goes up to 6x6 max


// Creates the game board

cards.forEach((img, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.index = index;
    card.dataset.img = img;
    card.innerHTML = "?";
})

// Next level function
function nextLevel() {

};


// Reset level function
function resetLevel() {

};


