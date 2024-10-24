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

let humanChoice = prompt("Rock, paper, or scissors? ").toLowerCase();

function getHumanChoice(){
    let answer = "";

    if (humanChoice === "rock") {
        answer = "Rock";
    } else if (humanChoice === "paper"){
        answer = "Paper";
    } else if (humanChoice === "scissors"){
        answer = "Scissors";
    } else {
        answer = "You did not enter in a proper choice!";
    }

    return answer;
};