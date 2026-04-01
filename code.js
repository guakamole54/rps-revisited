function getComputerChoice() {
    // returns pseudo randomly 1, 2 or 3
    let randomNum = Math.floor((Math.random() * 3) + 1);

    // returns one of rock, paper, scissors based on the randomNum
    switch (randomNum) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            return "I don't know this number"
    }
}


function playRound(humanChoice, computerChoice, playUntil = 5) {
    playUntilInput.remove();
    // tie breaker - check for tie, then human's victory, the rest is computer's victory
    if (humanChoice == computerChoice) {
        resultsBox.textContent = `It is a tie! ${humanChoice} ties with ${computerChoice}`;
    } else if (
        humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "scissors" && computerChoice == "paper" ||
        humanChoice == "paper" && computerChoice == "rock"
    ) {
        resultsBox.textContent = `You WIN! ${humanChoice} beats ${computerChoice}`
        humanScore++;
    } else {
        resultsBox.textContent = `You LOSE! ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }

    if (humanScore == playUntil || computerScore == playUntil) {
        let winner = humanScore > computerScore ? 'YOU WIN' : 'MACHINE WINS';

        gameOverDiv.textContent = `GAME OVER ${winner}!!!`;
        body.appendChild(gameOverDiv);

        choices.forEach((choice) => choice.disabled = true);

        playAgainBtn.textContent = 'Play Again!';
        playAgainBtn.addEventListener(
            'click',
            () => reset()
        )

        body.appendChild(playAgainBtn);
    }
}

function reset() {
    humanScore = 0;
    computerScore = 0;

    gameOverDiv.textContent = "";
    resultsBox.textContent = "";
    score.textContent = `HUMAN ${humanScore} : ${computerScore} MACHINE`;
    resultsBox.textContent = "Play until:";

    playUntilInput.type = 'number';
    playUntilInput.min = 1;
    playUntilInput.max = 10;
    playUntilInput.value = 5;

    body.appendChild(playUntilInput);

    resultsBox.parentNode.insertBefore(playUntilInput, resultsBox.nextSibling);

    playAgainBtn.remove();
    choices.forEach((choice) => choice.disabled = false);
}

const choices = document.querySelectorAll('button');
const score = document.querySelector('.score');
const resultsBox = document.querySelector('.results');
const playAgainBtn = document.createElement('button');
const gameOverDiv = document.createElement('div');
const body = document.querySelector('body');
const playUntilInput = document.createElement('input');

reset();

choices.forEach(
    (choice) => choice.addEventListener('click',
        function (e) {
            const userChoice = e.target.className;
            const computerChoice = getComputerChoice();
            playRound(userChoice, computerChoice, playUntil = playUntilInput.value);
            score.textContent = `HUMAN ${humanScore} : ${computerScore} MACHINE`;
        }
    )
)




