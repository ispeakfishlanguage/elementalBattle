//Wait for the DOM to finish loading before running the game
//Get the button elements from start screen and add event listeners to them
//When button clicked, hide start screen
//Show game screen
//Run the game
let playerScore = 0;
let computerScore = 0;
let round = 1;

const elements = {
    fire: ["earth", "air"],
    water: ["fire", "lightning"],
    earth: ["water", "air"],
    air: ["earth", "lightning"],
    lightning: ["water", "air"]
}

document.addEventListener("DOMContentLoaded", function () {

    let startScreen = document.getElementById("start-screen");
    let buttons = startScreen.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "show-rules") {
                showRules();
            } else {
                let rounds = this.getAttribute("data-type");
                startGame(rounds);
            }
        })
    }

    document.getElementById("show-rules").addEventListener("keydown", function (event) {

        if (event.key === "Control") {
            showRules();
        }
    })

    startGame("start-1");
})

function startGame(rounds) {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("game-area").style.display = "block";
    document.getElementById("rounds").innerHTML
    
}
function determinePlayerChoice(choice) {
    let gameScreen = document.getElementById("game-area");
    let choices = gameScreen.getElementsByTagName("button");
    for (let choice of choices) {
        choice.addEventListener("click", function () {
            let playerChoice = element.getAttribute("data-type");
            return playerChoice;
        })
    }
}
function determineComputerChoice() {
    let gameScreen = document.getElementById("game-area");
    let elements = gameScreen.getElementsByTagName("button");
    let computerChoice = elements[Math.floor(Math.random() * elements.length)];
    return computerChoice;
}
function determineWinner(playerChoice, computerChoice) {


}
function updateScore(winner) {

}
function updateRound() {

}
function showRules() {

}
function hideRules() {

}
function resetGame() {

}
