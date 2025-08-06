function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);

    if (num === 0) {
        return 'rock';
    }
    else if (num === 1) {
        return 'paper';
    }
    else {
        return 'scissor';
    }

}

function getHumanChoice() {
    let choice = prompt("Choose between: rock, paper and scissor");
    return choice;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase().trim();

    if (humanChoice === computerChoice) {
        console.log("Draw! Both choose " + humanChoice);
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissor') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissor' && computerChoice === 'paper')) {
        console.log("You win! " + humanChoice + " beats " + computerChoice);
        humanScore++;
    }
    else {
        console.log("You lose! " + computerChoice + " beats " + humanChoice);
        computerScore++;
    }

}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }


    if (humanScore === computerScore) {
        console.log("Draw! The score was: " + humanScore + "x" + computerScore);
    }
    else if (humanScore > computerScore) {
        console.log("You win! The score was: " + humanScore + "x" + computerScore);
    }
    else {
        console.log("You lose! The score was: " + humanScore + "x" + computerScore);
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();