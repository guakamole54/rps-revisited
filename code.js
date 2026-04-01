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

function getHumanChoice() {
    let humanChoice = prompt("Enter one of: rock, paper, scissors!");

    return humanChoice.toLowerCase();
}

function playGame(rounds = 5) {


    function playRound(humanChoice, computerChoice) {
        // tie breaker - check for tie, then human's victory, the rest is computer's victory
        if (humanChoice == computerChoice) {
            console.log(`It is a tie! ${humanChoice} ties with ${computerChoice}`);
        } else if (
            humanChoice == "rock" && computerChoice == "scissors" ||
            humanChoice == "scissors" && computerChoice == "paper" ||
            humanChoice == "paper" && computerChoice == "rock"
        ) {
            console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You LOSE! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    let humanScore = 0;
    let computerScore = 0;

    let counter = 0
    while (counter < rounds) {
        counter++;

        console.log(`Round number ${counter}`);
        console.log(`Score COMPUTER: ${computerScore} - YOU: ${humanScore}`);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);

        console.log(computerScore);
        console.log(humanScore);


    }

    console.log(`Game ended, the final score is COMPUTER: ${computerScore} - YOU: ${humanScore}`);

}

playGame();





