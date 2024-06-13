// Rock paper scissors js doc

function getComputerChoice() {
    let value = Math.random();
    if (value >= 0.67) {
        return "rock";
    }
    else if (value >= 0.34 && value <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function getHumanChoice() {
    let choice = prompt("Enter rock, paper or scissors: ").toLowerCase();
    return choice;
}


// Scores initiated to 0
let humanScore = 0;
let computerScore = 0;


function lose(human, computer) {
    computerScore += 1;
    console.log("You lose, " + computer + " beats " + human + ".");
}

function win(human, computer) {
    humanScore += 1;
    console.log("You win, " + human + " beats " + computer + ".");
}

function tie(human) {
    console.log("Tie game: both you and the computer chose " + human + ".");
}


function playRound() {
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    if (computerChoice == "rock") {
        if (humanChoice == "scissors") {
            lose(humanChoice, computerChoice);
        }
        else if (humanChoice == "paper") {
            win(humanChoice, computerChoice);
        }
        else {
            tie(humanChoice);
        }
    }
    else if (computerChoice == "scissors") {
        if(humanChoice == "paper") {
            lose(humanChoice, computerChoice);
        }
        else if (humanChoice == "rock") {
            win(humanChoice, computerChoice);
        }
        else {
            tie(humanChoice);
        }
    }
    else {
        if (humanChoice == "rock") {
            lose(humanChoice, computerChoice);
        }
        else if (humanChoice == "scissors") {
            win(humanChoice, computerChoice);
        }
        else {
            tie(humanChoice);
        }
    }
}



function playGame() {
    humanScore = 0;
    computerScore = 0;

    let gameCounter = 1;

    while (gameCounter <= 5) {
        playRound();
        gameCounter++;
    }

    console.log("The score is....");
    console.log("Human: " + humanScore);
    console.log("Computer: " + computerScore);

    if (humanScore > computerScore) {
        console.log("You win");
    }
    else if (computerScore > humanScore) {
        console.log("The computer wins");
    }
    else {
        console.log("Tie score");
    }
}