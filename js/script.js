const container = document.getElementById('game-container');

const rockBtn = document.createElement('button');
rockBtn.textContent = "Rock";
rockBtn.id = "rock";

const paperBtn = document.createElement('button');
paperBtn.textContent = "Paper";
paperBtn.id = "paper";

const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = "Scissors";
scissorsBtn.id = "scissors";

const resultsDiv = document.createElement('div');
resultsDiv.style.marginTop = '20px';

let humanScore = 0;
let computerScore = 0;

container.appendChild(resultsDiv);
container.appendChild(rockBtn);
container.appendChild(paperBtn);
container.appendChild(scissorsBtn);

const resetBtn = document.createElement('button');
resetBtn.textContent = "New game";
resetBtn.style.display = "none";
resetBtn.style.marginTop = "10px";

container.appendChild(resetBtn);

rockBtn.addEventListener('click', () => playRound('rock'));
paperBtn.addEventListener('click', () => playRound('paper'));
scissorsBtn.addEventListener('click', () => playRound('scissors'));

resetBtn.addEventListener('click', resetGame);

function getComputerChoice() {
    const array = ["rock", "paper", "scissors"];
    return array[Math.floor(Math.random() * 3)];
}

<<<<<<< HEAD
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = "";
=======
function getHumanChoice() {
    let playerChoice = prompt("Open the console (F12) to see results! Choose: rock, paper, or scissors.");
    if (playerChoice === null) return ""; 
    
    return playerChoice.toLowerCase();
}
>>>>>>> 935c24a6a8f5e700b01b0b1ae2ae4b49d2ad9ab6

    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! You both chosed ${humanChoice}`;
    }

    else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        resultMessage = `You won! ${humanChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        resultMessage = `You lost! ${computerChoice} beats ${humanChoice}`;
    }

    resultsDiv.innerHTML = 
    `<p>${resultMessage}</p>
     <p><strong>Score:</strong> You: ${humanScore} - Computer: ${computerScore}</p>`;

    checkWinner();
}

function checkWinner() {
    if (humanScore === 5) {
        resultsDiv.innerHTML += "<h3>Congratulation! You won the game!</h3>";
        disableButtons(true); 
        resetBtn.style.display = "block";
    } else if (computerScore === 5) {
        resultsDiv.innerHTML += "<h3>Game over! The computer won.";
        disableButtons(true);
        resetBtn.style.display = "block";
    }
}

<<<<<<< HEAD
function disableButtons(isDisabled) {
    rockBtn.disabled = isDisabled;
    paperBtn.disabled = isDisabled;
    scissorsBtn.disabled = isDisabled;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    resultsDiv.innerHTML = "";

    disableButtons(false);

    resetBtn.style.display = "none";
}
=======
playGame();
>>>>>>> 935c24a6a8f5e700b01b0b1ae2ae4b49d2ad9ab6
