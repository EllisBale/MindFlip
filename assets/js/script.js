
const images = ["images\fox.jpg","images\fox.jpg","images\fox.jpg","images\fox.jpg","images\fox.jpg","","","","","","","" ]; 
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

    // This makes it reset back to 1 when 6 is completed
    if (level > 6) {
        level = 1;
    }

    // Set's the grid size depending on what level it is on
    let gridSize = Math.min(level + 1, 6); // Math.min returns the smallest of the numbers
    gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 100px)`;

    
}

nextLevelButton.addEventListener("click", startNextLevel);

// Fisher-Yates algorithm
// Shuffle cards function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--){
        let random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
       
    }
}


// Next level function
function nextLevel() {

};


// Reset level function
function resetLevel() {

};


function startNextLevel() {
    
}


startLevel();
