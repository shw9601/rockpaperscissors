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

// Scores initiated to 0
let humanScore = 0;
let computerScore = 0;

const whoWon = document.querySelector("#whoWon");
const scoreboard = document.querySelector("#scoreboard");
scoreboard.textContent = "Human score: " + humanScore + "  -  Computer Score: " + computerScore;



function updateScore() {
    scoreboard.textContent = "Human score: " + humanScore + "  -  Computer Score: " + computerScore;
}

function lose(human, computer) {
    computerScore += 1;
    whoWon.textContent = "You lose, " + computer + " beats " + human + ".";
    updateScore();
}

function win(human, computer) {
    humanScore += 1;
    whoWon.textContent = "You win, " + human + " beats " + computer + ".";
    updateScore();
}

function tie(human) {
    whoWon.textContent = "Tie game: both you and the computer chose " + human + ".";
}


function playRound(humanChoice) {

    let computerChoice = getComputerChoice();

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

    if (humanScore == 5) {

    }
    if (computerScore == 5) {

    }
}


const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock");
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("paper");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playRound("scissors");
})