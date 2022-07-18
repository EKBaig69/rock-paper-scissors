//FUNCTIONS!

//function to get a random choice

function getComputerChoice() {
    let computerChoice;
    switch(generateRandomInteger(3)) {
        case 1:
            computerChoice = "rock"
            break;
        case 2:
            computerChoice = "paper"
            break;
        case 3:
            computerChoice = "scissor"
            break;
    }
    return computerChoice
}

//function to decide who wins

function getWinner(playerChoice, computerChoice) {
    let whoWon;

    if (playerChoice == "rock") {
        switch(computerChoice) {
            case "rock":
                whoWon = "tie"
                break
            case "paper":
                whoWon = "comp"
                break
            case "scissor":
                whoWon = "player"
                break
        }
    }
    else if (playerChoice == "paper") {
        switch(computerChoice) {
            case "rock":
                whoWon = "player"
                break
            case "paper":
                whoWon = "tie"
                break
            case "scissor":
                whoWon = "comp"
                break
        }
    }
    else if (playerChoice == "scissor") {
        switch(computerChoice) {
            case "rock":
                whoWon = "comp"
                break
            case "paper":
                whoWon = "player"
                break
            case "scissor":
                whoWon = "tie"
                break
        }
    }
    return whoWon
}

//function to generate random integer

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

//function to play a round

function playRound(playerSelection, computerSelection) {

    let winStatement;

    playerSelection = playerSelection.toLowerCase()

    results = getWinner(playerSelection, computerSelection)

    if (results == "player") {
        winStatement = `You Won! ${playerSelection} beats ${computerSelection}`
    }
    else if (results == "comp") {
        winStatement = `You Lost! ${computerSelection} beats ${playerSelection}`
    }
    else if (results == "tie") {
        winStatement = `It's a tie! You both chose ${playerSelection}`
    }
    return winStatement
}


//the hardest of them all! the game() function which I just can't figure out!



const pchoice = prompt("What shall you choose?");
const cchoice = getComputerChoice();

console.log(playRound(pchoice , cchoice))