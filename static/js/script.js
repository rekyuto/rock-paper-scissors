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

// Gets the user's choice

function getHumanChoice(){
    let choice = prompt("Rock, paper, or scissors? ").toLowerCase();
    let answer = "";

    if (choice === "rock") {
        answer = "Rock";
    } else if (choice === "paper"){
        answer = "Paper";
    } else if (choice === "scissors"){
        answer = "Scissors";
    }

    return answer;
};

// Iniitalize human and computer scores
 
let humanScore = 0;
let computerScore = 0;

// Plays a game of rock, paper, scissors

function playGame(){

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log("Tie! You chose the same!");
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        computerScore++;
        console.log("Computer wins! Paper beats rock!");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        humanScore++;
        console.log("You win! Rock beats scissors!");
    } else if (humanChoice === "Paper" && computerChoice === "Rock"){
        humanScore++;
        console.log("You win! Paper beats rock!");
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        computerScore++;
        console.log("Computer wins! Scissors beats paper!");
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        computerScore++;
        console.log("Computer wins! Rock beats scissors!");
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        humanScore++;
        console.log("You win! Scissors beats paper!");
    }
};

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

};

// Plays five rounds of rock, paper, scissors

playGame();
playGame();
playGame();
playGame();
playGame();
