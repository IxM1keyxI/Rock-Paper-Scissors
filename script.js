console.log("Hello World")


// getComputerChoice that will randomly return either "rock" "paper" "scissors"
// chose random number between 0 - 2 then use if statements to assign string value

function getComputerChoice() {
    // get a random number from 0 - 2
    num = Math.floor(Math.random() * 3)
    
    if (num === 0) {
        return "rock"
    } else if (num === 1) {
        return "paper"
    } else {
        return "scissors"
    }    

}

const computerSelection = getComputerChoice()

console.log(computerSelection)

// playerSelection as input from player

function getHumanChoice(){
    choice = prompt("Rock Paper or Scissors ? ")
    return choice
}

const playerSelection = getHumanChoice()

console.log(playerSelection)

// while loop in play game function to play 5 rounds
// have a counter to keep score
//display winner


// play round fucntion will take player and computer choice and check them both and return a winner 
// check if player and computer are tied,
// check if player = paper and computer = rock player

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper" ) {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You Win! Paper beats Rock"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You Win! Scissors beats Paper"
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You Win! Rock beats Scissors"
    }   else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You Lose! Rock beats Scissors"
    }   else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Its a Draw!"
    }   else if (computerSelection === "rock" && computerSelection === "rock") {
        return "Its a Draw!"
    }   else if (computerSelection === "scissors" && computerSelection === "scissors") {
        return "Its a Draw!"
    };
}

let wins = 0
    function playGame() {
        const playerSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log("The computer has chosen " + computerSelection);
        console.log(playRound(playerSelection.toLowerCase(),computerSelection));
        let result = playRound(playerSelection, computerSelection);
        console.log(result.substr(0,8))
        if(result.substr(0,8)==="You Win!"){
            wins++
        }
    }
    for(let i=0; i<5; i++){
        playGame()
    }
    console.log("You won "+ wins + " times")


