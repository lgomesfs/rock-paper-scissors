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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase().trim();
    let score = 0, scrValue = 0;
    const buttons = document.querySelector('body');
    const paragraph = document.querySelector('#result');
    if (humanChoice === computerChoice) {
        paragraph.textContent = 'Draw! Both choose ' + humanChoice;
    }
    else if ((humanChoice === 'rock' && computerChoice === 'scissor') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissor' && computerChoice === 'paper')) {

        score = document.querySelector("#humanScr");
        scrValue = score.textContent;
        score.textContent = +scrValue + 1;

        paragraph.textContent = "You win! " + humanChoice + " beats " + computerChoice;
    }
    else {
        score = document.querySelector("#computerScr");
        scrValue = score.textContent;
        score.textContent = +scrValue + 1;
        paragraph.textContent = "You lose! " + computerChoice + " beats " + humanChoice;

    }

    if (+score.textContent === 5) {
        endGame();
        playAgain();
    }

}

function playGame() {
    const buttons = document.querySelectorAll('button');
    document.querySelector('#humanScr').textContent = 0;
    document.querySelector('#computerScr').textContent = 0;

    buttons.forEach((button) => {
        button.setAttribute('style', 'pointer-events: auto;')
    })

}

function endGame() {
    const result = document.querySelector('#result');
    if (document.querySelector('#humanScr').textContent == 5) {
        result.textContent = 'You win!';
    }
    else {
        result.textContent = 'You lose!';
    }

}

function playAgain() {
    document.querySelectorAll('button').forEach((button) => {
        button.setAttribute("style", "pointer-events: none; ");
    });

    const game = document.querySelector("#game");

    const reset = document.createElement('button');
    reset.textContent = "Reset";
    reset.setAttribute("style", "padding: 10px 25px; border-radius: 5px; border-style: none; background-color: #778899; color: #FFFFF0; font-size: 25px;");
    game.appendChild(reset);
    reset.addEventListener("click", () => {
        game.removeChild(reset);
        document.querySelector("#result").textContent = '';
        playGame();});
}

function initGame(){
        const buttons = document.querySelectorAll('button');

        buttons.forEach((button) => {
        button.addEventListener("click", () =>
            playRound(button.id, getComputerChoice()));
    })
}

initGame();