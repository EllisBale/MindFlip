
const images = ["assets/images/fox.jpg","assets/images/bear.jpg","assets/images/bird.jpg","assets/images/cat.jpg","assets/images/dog.jpg","assets/images/elephant.jpg",
"assets/images/giraffe.jpg","assets/images/gorilla.jpg", "assets/images/penguin.jpg","assets/images/rabbit.jpg","assets/images/tiger.jpg", "assets/images/monkey.jpg", "assets/images/cow.jpg"]; 
let level = 1;
let flippedCards = [];
let matchedPairs = 0;
let moves = 0;

// Game levels

const levels = [ // Grid size for each level
    [2,2], //2x2   // Level 1
    [3,2],  //3x3  // Level 2 
    [4,3],  //4x3  // Level 3
    [4,4],  //4x4  // Level 4
    [5,4],  //5x4  // Level 5
    [6,4],  //6x4  // Level 6 
];

// DOM elements

const gameBoard = document.querySelector(".game-board");// Game board
const result = document.getElementById("result");// Result text 
const resetButton = document.getElementById("reset-level"); // Resets current level
const nextLevelButton = document.getElementById("next-level");// Next level button
const gameLevelText = document.getElementById("game-level-text")// Game level text
const levelSelect = document.getElementById("level-select")// Level Select 
const movesText = document.getElementById("moves")// Moves text

// How to play DOM elements 
const modal = document.getElementById("myModal");
const trigger = document.getElementById("howtoplay");
const span = document.getElementsByClassName("close")[0];

trigger.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target ==  modal) {
        modal.style.display = "none";
    }
}

movesText.style.color = "green";


// Functions


// start level function 

function startLevel() {

    gameBoard.innerHTML = "";
    result.innerText = "";
    nextLevelButton.classList.add("hidden"); 

    // This makes it reset back to 1 when 6 is completed
    if (level > 6) {
        level = 1;
    }

    // Colours for level 5 and above
    if(level > 4) {
        gameLevelText.style.color = "#d6345c";
    } else { // Makes sure the number colour goes back to white if below level 5
        gameLevelText.style.color ="white";
    }



    // Colours for level 2 and below
    if(level < 3) {
        gameLevelText.style.color = "green"; 
    }

    // Colours that = level 3 and 4 will have yellow text
    if(level === 3 || level === 4) {
        gameLevelText.style.color = "#e8cf37";
    }
    

    // Set's the grid size depending on what level it is on
   const [cols, rows] = levels[level - 1];
   const totalCards = cols * rows;
   const numPair = totalCards / 2;
   gameBoard.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
   let selectedImages = images.slice(0, numPair);
   let cards = [...selectedImages, ...selectedImages];

    shuffle(cards);
    flippedCards = [];
    matchedPairs = 0;


    moves = 0;
    updateMoves(); // Moves reset after each level

    
    // Creates the game board

    cards.forEach((imagePath, index) => { // Calls a function for each item
        const card = document.createElement("div");
        card.classList.add("card");
       if(level === 1) { // This adds a class to gameboard level 1
            gameBoard.classList.add("small");
        } else {
            gameBoard.classList.remove("small");
        } 

        card.innerHTML = `<i class="fa-solid fa-question fa-lg bounce-on-hover"></i>`;
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
        card.innerHTML = `<img src="${card.dataset.imagePath}" alt="card-image" style="height: 100%; width: 100%;  object-fit: cover;  border-radius: 5px;">`;
        flippedCards.push(card); // Adds new item to the end of the array

        if (flippedCards.length === 2) {
            moves ++;
            updateMoves();
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
                nextLevelButton.classList.remove("hidden");

            }
        }

    } else {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1.innerHTML = `<i class="fa-solid fa-question fa-lg bounce-on-hover"></i>`;
        card2.innerHTML = `<i class="fa-solid fa-question fa-lg bounce-on-hover "></i>`;
        
    }

    flippedCards = [];
}

nextLevelButton.addEventListener("click", startNextLevel); //starts next level


// Next level function
function nextLevel() {
    level ++;
    startLevel();
};

// Function to select levels
function levelSelector () {
    levelSelect.addEventListener("change", (e) => {
        level = parseInt(e.target.value);
        startLevel()
    });
}


// Tracks moves for each pair of cards flipped
function updateMoves() {
    movesText.innerText = ` ${moves}`;
    
}


// Reset level function
function resetLevel() {
    startLevel();
};

resetButton.addEventListener("click", resetLevel);


function startNextLevel() {   
}

levelSelector();

startLevel();


