// Define global variables
let playerScore = 0;
let computerScore = 0;
let rounds;
let currentRound = 1;

// Define choice elements and which elements they beat
const elements = {
    fire: ["earth", "air"],
    water: ["fire", "lightning"],
    earth: ["water", "air"],
    air: ["earth", "lightning"],
    lightning: ["earth", "water"]
};

// Define different screens
const startScreen = document.getElementById("start-screen");
const rulesScreen = document.getElementById("rules-screen");
const gameScreen = document.getElementById("game-area");

// Define choice buttons
const choices = gameScreen.getElementsByClassName("choice");

// Get the restart button and add an event listener to it
document.getElementById("reset-game").addEventListener("click", resetGame);

// Get the rules button and add an event listener to it
document.getElementById("show-rules").addEventListener("click", function () {
    rulesScreen.classList.contains("hidden") ? rulesScreen.classList.remove("hidden") : rulesScreen.classList.add("hidden");
});

// Wait for the DOM to finish loading before running the game
document.addEventListener("DOMContentLoaded", function () {
    // Get the start buttons and add event listeners to them
    const startButtons = startScreen.getElementsByTagName("button");
    for (let button of startButtons) {
        button.addEventListener("click", function () {
            rounds = parseInt(button.getAttribute("value"));
            const playerChoice = ""; // You need to set the player's choice here
            startGame(playerChoice);
        });
    }

    for (let choice of choices) {
        choice.addEventListener("click", function () {
            const playerChoice = this.getAttribute("value");
            playRound(playerChoice);
        });
    }
});


/**
 * Function to start the game
 */
function startGame() {
    playerScore = 0;
    computerScore = 0;
    currentRound = 1;
    document.getElementById("player").innerHTML = playerScore;
    document.getElementById("computer").innerHTML = computerScore;
    document.getElementById("round").innerHTML = currentRound;
    document.getElementById("result").innerHTML = "";
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-area").style.display = "block";
}

/**
 * Function to play a round
 */
function playRound(playerChoice) {
    // Determine the computer's choice
    const elementKeys = Object.keys(elements);
    const randomIndex = Math.floor(Math.random() * elementKeys.length);
    let computerChoice = elementKeys[randomIndex];

    //Determine the winner of the round
    let winner;
    if (elements[playerChoice].includes(computerChoice)) {
        winner = "player";
    } else if (elements[computerChoice].includes(playerChoice)) {
        winner = "computer";
    } else {
        winner = "tie";
    }

    // Update the score
    winner === "tie" ? null : winner === "player" ? playerScore++ : computerScore++;
    document.getElementById("player").innerHTML = playerScore;
    document.getElementById("computer").innerHTML = computerScore;
    //Show the result of the round
    let result = document.getElementById("result");
    if (winner === "player") {
        result.innerHTML = `Computer chose ${computerChoice}. You win!`;
    } else if (winner === "computer") {
        result.innerHTML = `Computer chose ${computerChoice}. You lose!`;
    } else {
        result.innerHTML = `Computer chose ${computerChoice}. It's a tie!`;
    }
    // Check if the game is over
    if (currentRound >= rounds) {
        if (playerScore === computerScore) {
            result.innerHTML += `It's a tie!`;
        } else {
            playerScore > computerScore ? result.innerHTML += `<p>You win the game!</p>` : result.innerHTML += `<p>You lost the game!</p>`;
        }
        toggleButtons(true);
    } else {
        // Update the round
        currentRound++;
        document.getElementById("round").innerHTML = currentRound;
    }


}

/**
 * Function to reset the game
 */
function resetGame() {
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("game-area").style.display = "none";
    toggleButtons(false);
}

/**
 * Function to toggle the choice buttons on and off
 */
function toggleButtons(bool) {
    for (let choice of choices) {
        choice.disabled = bool;
    }
}