function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
    let playerChoice = prompt("Open the console (F12) to see results! Choose: rock, paper, or scissors.");
    if (playerChoice === null) return ""; 
    
    return playerChoice.toLowerCase();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const validChoices = ["rock", "paper", "scissors"];
        if (!validChoices.includes(humanChoice)) {
            console.log("Invalid input or skipped round.");
            return;
        }

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
            return; 
        } 

        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You won! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lost! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let i = 0; i < 5; i++) {
        console.log(`--- ROUND ${i + 1} ---`);

        const humanSelection = getHumanChoice();
        if (humanSelection === "") {
            console.log("Game cancelled by user.");
            break; 
        }

        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
        console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    }

    console.log("--- FINAL RESULTS ---");
    if (humanScore > computerScore) {
        console.log("Congratulations, you won the game!");
    } else if (humanScore < computerScore) {
        console.log("Game over, the computer won.");
    } else {
        console.log("The game ended in a draw.");
    }
}

playGame();
