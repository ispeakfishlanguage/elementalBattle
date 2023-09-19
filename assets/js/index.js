//Wait for the DOM to finish loading before running the game
//Get the button elements from start screen and add event listeners to them
//When button clicked, hide start screen
//Show game screen
//Run the game
let playerScore = 0;
let computerScore = 0;
let rounds;

const elements = {
    fire: ["earth", "air"],
    water: ["fire", "lightning"],
    earth: ["water", "air"],
    air: ["earth", "lightning"],
    lightning: ["water", "air"]
};

const startScreen = document.getElementById("start-screen");
const startButtons = startScreen.getElementsByTagName("button");
const gameScreen = document.getElementById("game-area");
const rulesScreen = document.getElementById("rules");
const choices = gameScreen.getElementsByTagName("button");

document.addEventListener("DOMContentLoaded", function () {
    for (let button of startButtons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "show-rules") {
                showRules();
            } else {
                rounds = this.getAttribute("data-type");
                startGame(rounds);
            }
        })
    }

    showStartScreen();
})

function startGame(rounds) {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    if (rounds === "start-3") {
        document.getElementById("rounds").innerHTML = 3;
    } else if (rounds === "start-5") {
        document.getElementById("rounds").innerHTML = 5;
    } else {
        document.getElementById("rounds").innerHTML = 1;
    }
    playGame(rounds);
}
function playGame(rounds) {
    let playerChoice = determinePlayerChoice();
    let computerChoice = determineComputerChoice();
    let winner = determineWinner(playerChoice, computerChoice);
    updateScore(winner);
    showResult(winner);
    updateRound(round);
}

function determinePlayerChoice() {
    let playerChoice = "";
    for (let choice of choices) {
        choice.addEventListener("click", function () {
            return playerChoice = this.getAttribute("data-type");
        });
    }
}
function determineComputerChoice() {
    return computerChoice = elements[Math.floor(Math.random() * 5)];
}
function determineWinner(playerChoice, computerChoice) {
    let winner = "";
    if (playerChoice === computerChoice) {
        winner = "tie";
    }
    playerChoice in elements[computerChoice] ? winner = "computer" : winner = "player";
    
    return winner;
}


function updateScore(winner) {
    if (winner === "player") {
        playerScore++;
    } else if (winner === "computer") {
        computerScore++;
    }
    document.getElementById("player").innerHTML = playerScore;
    document.getElementById("computer").innerHTML = computerScore;
}


function updateRound(round) {
    round++;
    document.getElementById("round").innerHTML = round;
    if (round === rounds) {
        endGame();
    }
}


function showResult(winner) {
    let result = document.getElementById("result");
    if (winner === "player") {
        result.innerHTML = "You win!";
    } else if (winner === "computer") {
        result.innerHTML = "You lose!";
    } else {
        result.innerHTML = "It's a tie!";
    }
}

function showRules() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-area").style.display = "none";
    document.getElementById("rules").style.display = "block";
}

function hideRules() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    document.getElementById("rules").style.display = "none";
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    document.getElementById("player").innerHTML = playerScore;
    document.getElementById("computer").innerHTML = computerScore;
    document.getElementById("round").innerHTML = round;
    showStartScreen();
}

function endGame() {
    if (playerScore > computerScore) {
        alert("You win!");
    } else if (computerScore > playerScore) {
        alert("You lose!");
    } else {
        alert("It's a tie!");
    }
    resetGame();
}
function showStartScreen() {
    document.getElementById("start-screen").style.display = "block";
    document.getElementById("game-area").style.display = "none";
    document.getElementById("rules").style.display = "none";
}