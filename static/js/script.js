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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());