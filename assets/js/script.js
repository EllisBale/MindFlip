
const images = ["assets/images/fox.jpg","assets/images/bear.jpg","assets/images/bird.jpg","assets/images/cat.jpg","assets/images/dog.jpg","assets/images/elephant.jpg",
"assets/images/giraffe.jpg","assets/images/gorilla.jpg", "assets/images/penguin.jpg","assets/images/rabbit.jpg","assets/images/tiger.jpg", "assets/images/monkey.jpg", "assets/images/cow.jpg"]; 
let level = 1;
let flippedCards = [];
let matchedPairs = 0;

const levels = [ //Grid size for each level
    [2,2], //2x2
    [3,2],  //3x3
    [4,3],  //4x3
    [4,4],  //4x4
    [5,4],  //5x4
    [6,4],  //6x4
]

// DOM elements

const gameBoard = document.querySelector(".game-board"); // Game board
const result = document.getElementById("result"); // Result text 
const resetButton = document.getElementById("reset-level"); // Resets current level
const nextLevelButton = document.getElementById("next-level"); // Next level button
const gameLevelText = document.getElementById("game-level-text") // Game level text


// start level function 

function startLevel() {

    gameBoard.innerHTML = "";
    result.innerText = "";
    nextLevelButton.classList.add(null); 

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
        card.addEventListener("click", () => flipCard(card));
        gameBoard.appendChild(card);
    })

    gameLevelText.innerText = `Level: ${level}`; // Changes level number text based on what level
     
}

nextLevelButton.addEventListener("click", nextLevel);

// Fisher-Yates algorithm
// Shuffle cards function
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--){
        let random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
       
    }
}

// Function to flip the cards
function flipCard(card) {
    if(flippedCards.length < 2 && !card.classList.contains("flipped")) {
        card.classList.add("flipped");
        card.innerHTML = `<img src="${card.dataset.imagePath}" alt="card-image" style="height: 100%; width: 100%;  object-fit: cover;">`;
        flippedCards.push(card); // Adds new item to the end of the array

        if (flippedCards.length === 2) {
            setTimeout(checkMatch, 500);
        }
    }
}

// Function to check if cards match
function checkMatch() {
    const [card1, card2] = flippedCards;

    if (card1.dataset.imagePath === card2.dataset.imagePath) {
        card1.classList.add("hidden");
        card2.classList.add("hidden");
        matchedPairs++;

        if (matchedPairs === (gameBoard.children.length / 2)) {
            if (level === 6) {  
                result.innerText = " Well done, you completed all the levels";
                setTimeout(() => {
                    level = 1; //Resets to level 1 when level 6 is completed
                    startLevel(); 
                }, 2000);
            }  else {
                result.innerText = "Level complete!";

            }
        }

    } else {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1.innerHTML = "?";
        card2.innerHTML = "?";
    }

    flippedCards = [];
}

nextLevelButton.addEventListener("click", startNextLevel); //starts next level


// Next level function
function nextLevel() {
    level ++;
    startLevel();
};


// Reset level function
function resetLevel() {

};


function startNextLevel() {
    
}


startLevel();
