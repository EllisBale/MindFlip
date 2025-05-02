
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
const levelNumber = document.getElementById("level-number"); // Level colour
const levelSelect = document.getElementById("level-select")// Level Select 
const movesText = document.getElementById("moves")// Moves text

// Game music
const backgroundMusic = new Audio("assets/music/gamemusic.mp3");
backgroundMusic.loop = true;
let musicStart = false;


// Mute/unmute button
const muteButton = document.getElementById("mute-button");
let isMuted = false;
let wasMutedTabbedOut = false;

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

    nextLevelButton.classList.remove("ready");
    nextLevelButton.disabled = true;

    gameBoard.innerHTML = "";
    result.innerText = "";
    

    // This makes it reset back to 1 when 6 is completed
    if (level > 6) {
        level = 1;
    }

    
    if(level > 4) { // Colours for level 5 and above
        levelNumber.style.color = "#d6345c";
    } else { // Makes sure the number colour goes back to white if below level 5
        levelNumber.style.color ="white";
    }

    if(level < 3) { // Colours for level 2 and belows
        levelNumber.style.color = "green"; 
    }

    if(level === 3 || level === 4) { // Colours that = level 3 and 4 will have yellow text
        levelNumber.style.color = "#e8cf37";
    }
    

    // Set's the grid size depending on what level it is on
   const [cols, rows] = levels[level - 1];
   const totalCards = cols * rows;
   const numPair = totalCards / 2;
   gameBoard.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;

   let shuffleImages = [...images]; //Shuffles the images from the array
   shuffle(shuffleImages);
   let selectedImages = shuffleImages.slice(0, numPair);
   let cards = [...selectedImages, ...selectedImages]; //Creates a new array

    shuffle(cards);
    flippedCards = [];
    matchedPairs = 0;


    moves = 0;
    updateMoves(); // Moves reset after each level


    // Creates the game board

    cards.forEach((imagePath, index) => { // Calls a function for each item
        const card = document.createElement("div");
        card.classList.add("card");
       if(level === 1) { // This adds a class to make max grid size smaller for level 1
            gameBoard.classList.add("small");
        } else {
            gameBoard.classList.remove("small");
        } 

        if(level === 3 || level === 4) { // Changes max grid width to level 3 and 4
            gameBoard.classList.add("mid-grid");
        } else {
            gameBoard.classList.remove("mid-grid");
        }

        if(level === 5 || level === 6) { // 
            gameBoard.classList.add("late-grid"); // Changes max grid width to level 5 and 6
        } else {
            gameBoard.classList.remove("late-grid");
        }

        card.innerHTML = `<i class="fa-solid fa-question fa-lg bounce-on-hover"></i>`;
        card.dataset.index = index;
        card.dataset.imagePath = imagePath;
        card.addEventListener("click", () => flipCard(card));
        gameBoard.appendChild(card);
    })

    document.getElementById("level-number").innerText = level;  // Changes level number text based on what level
     
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
    
    if(!musicStart) { // Music starts when user flips card
        backgroundMusic.play().catch(err => {
            console.log("Unable to play music", err);
        });
        musicStart = true;
    }


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

// Music volume control
const volumeControl = document.getElementById("volume-control");

volumeControl.addEventListener("input", function() {
    backgroundMusic.volume = volumeControl.value;
});


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
                nextLevelButton.classList.remove("hidden"); // Removes hidden class
                nextLevelButton.classList.add("ready"); // Gives function to the next level button
                nextLevelButton.disabled = false;
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


// Mute button function
function toggleMute() {
    isMuted = !isMuted;
    backgroundMusic.muted = isMuted;

    if (isMuted) {
        muteButton.innerHTML = `<i class="fa-solid fa-volume-xmark fa-lg"></i>`;
    } else {
        muteButton.innerHTML = `<i class="fa-solid fa-volume-high fa-lg"></i>`;
    }
    
    if(!isMuted && backgroundMusic.paused) { // Allows music to resume if the user had muted it, then tabbed out.
        backgroundMusic.play().catch(err => {
            console.warn("Playback blocked on unmute:", err);
        });
    }
};


muteButton.addEventListener("click", toggleMute);

// Function to pause music from playing when not in tab
document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
        backgroundMusic.pause();
        
    } else {
       if (!isMuted &&  backgroundMusic.paused) { // Play music again when in tab
        backgroundMusic.play().catch(err => {
            console.warn("Autoplay failed on return:", err);
        });
       }
    }

});


window.addEventListener("pagehide", () => { // Fixes issue for background music playing when tabbed out on mobile
    backgroundMusic.pause();
});


function startNextLevel() {   
}

levelSelector();

startLevel();


