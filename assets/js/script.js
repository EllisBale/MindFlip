
const images = ["assets/images/fox.jpg","assets/images/bear.jpg","assets/images/bird.jpg","assets/images/cat.jpg","assets/images/dog.jpg","assets/images/elephant.jpg",
"assets/images/giraffe.jpg","assets/images/gorilla.jpg", "assets/images/penguin.jpg","assets/images/rabbit.jpg","assets/images/tiger.jpg"]; 
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
    result.innerText = "";
    nextLevelButton.classList.add("hidden");

    // This makes it reset back to 1 when 6 is completed
    if (level > 6) {
        level = 1;
    }

    // Set's the grid size depending on what level it is on
    let gridSize = Math.min(level + 1, 6); // Math.min returns the smallest of the numbers
    gameBoard.style.gridTemplateColumns = `repeat(${gridSize}, 100px)`;

    let numPair = (gridSize * gridSize) / 2;
    let selectedImages = images.slice(0, numPair);
    let cards = [...selectedImages, ...selectedImages];

    shuffle(cards);
    flippedCards = [];
    matchedPairs = 0;




    // Creates the game board

    cards.forEach((imagePath, index) => { // Calls a function for each item
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = "?";
        card.dataset.index = index;
        card.dataset.imagePath = imagePath;
        card.addEventListener("click", () => flipcard(card));
        gameBoard.appendChild(card);
    })


    
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

// Function to flip the cards
function flipcard(card) {
    if(flippedCards.length < 2 && !card.classList.contains("flipped")) {
        card.classList.add("flipped");
        card.innerHTML = `<img src="${card.dataset.imagePath}" alt="card-image" style="height: 100%; width: 100%;  object-fit: cover;">`;
        flippedCards.push(card); // Adds new item to the end of the array

        if (flippedCards.length === 2) {
            setTimeout(checkmatch, 500);
        }
    }
}


function checkMatch() {
    
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
