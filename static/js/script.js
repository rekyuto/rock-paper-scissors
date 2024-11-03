// Gets the computer's choice randomly

function getComputerChoice(){
    let result = "";
    let n = Math.floor(Math.random() * (3)) + 1;
    
    if (n === 1) {
        result = "Rock";
    } else if (n === 2) {
        result = "Paper";
    } else if (n === 3) {
        result = "Scissors";
    }

    return result;
};

// Initializes human, computer, tied, and max scores

let humanScore = 0;
let computerScore = 0;
let tiedScore = 0;

const maxScore = 5;

const humanScoreValue = document.querySelector("#humanScoreValue");
const computerScoreValue = document.querySelector("#computerScoreValue");
const tiedScoreValue = document.querySelector("#tiedScoreValue");

// Plays a round of rock, paper, scissors

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        tiedScore++
        tiedScoreValue.textContent = tiedScore;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        computerScoreValue.textContent = computerScore;
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        humanScoreValue.textContent = humanScore;
    } else if (humanChoice === "Paper" && computerChoice === "Rock"){
        humanScore++;
        humanScoreValue.textContent = humanScore;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        computerScoreValue.textContent = computerScore;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++;
        computerScoreValue.textContent = computerScore;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        humanScoreValue.textContent = humanScore;
    }

    declareWinner();
};

// Declares a winner

function declareWinner(){
    const winnerReset = document.querySelector("#winnerReset");
    const winner = document.createElement("h3");
    const resetButton = document.createElement("button");

    resetButton.textContent = "Reset Scores";

    // Disables buttons when maxScore is achieved

    if ((humanScore === maxScore) || (computerScore === maxScore)){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

    // Appends winner and resetButton to #winnerReser

    if (computerScore === maxScore){
        winner.textContent = "Computer Wins!";
        winnerReset.appendChild(winner);
        winnerReset.appendChild(resetButton);
    } else if (humanScore === maxScore){
        winner.textContent = "You Win!"
        winnerReset.appendChild(winner);
        winnerReset.appendChild(resetButton);
    }   

    // Removes everything in #winnerReset, resets scores to 0, and reenables buttons when resetButton is clicked

    resetButton.addEventListener("click", () => {
        humanScore = 0;
        humanScoreValue.textContent = humanScore;
        computerScore = 0;
        computerScoreValue.textContent = computerScore;
        tiedScore = 0;
        tiedScoreValue.textContent = tiedScore;

        rock.disabled = false;
        paper.disabled = false;
        scissors.disabled = false;

        winnerReset.removeChild(winner);
        winnerReset.removeChild(resetButton);
    });
};

// Gets the user choice by clicking the corresponding button

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () => {
    const humanSelection = "Rock"
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});

paper.addEventListener("click", () => {
    const humanSelection = "Paper"
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});

scissors.addEventListener("click", () => {
    const humanSelection = "Scissors"
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
});