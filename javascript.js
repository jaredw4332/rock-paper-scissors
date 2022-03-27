// computer randomly picks rock, paper or scissors
// user inputs their selection
// evaluate choices and reveal winner
// repeat for chosen rounds (ties don't count)

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

let choices = ['rock', 'paper', 'scissors'];

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock'){
            console.log("Both rock! Tie!");
            return "tie"
        } else if (computerSelection === 'paper'){
            console.log("Paper beats rock! You lose!")
            return "loss"
        } else if (computerSelection === 'scissors'){
            console.log("Rock beats scissors! You win!")
            return "win"
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock'){
            console.log("Paper beats rock! You win!")
            return "win"
        } else if (computerSelection === 'paper'){
            console.log("Both paper! Tie!")
            return "tie"
        } else if (computerSelection === 'scissors'){
            console.log("Scissors beats paper! You lose!")
            return "loss"
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock'){
            console.log("Rock beats scissors! You lose!")
            return "loss"
        } else if (computerSelection === 'paper'){
            console.log("Scissors beats paper! You win!")
            return "win"
        } else if (computerSelection === 'scissors'){
            console.log("Both scissors! Tie!")
            return "tie"
        }
    } else {
        console.log("That was not a valid input. Point goes to computer.")
        return "loss"
    }
        
}

function game() {
    let playerWins = 0
    let computerWins = 0
    let ties = 0
        for (let rounds = 0; rounds < 5; rounds++) {
            const playerSelection = prompt("Rock, paper, or scissors?: ");
            const computerSelection = computerPlay()
           result = playRound(playerSelection, computerSelection)
            if (result === "win") {
                playerWins += 1
            } else if (result === "loss") {
                computerWins += 1
            } else if (result === "tie") {
                ties += 1
            }
        }
    if (playerWins > computerWins) {
        console.log(`You win with ${playerWins} victories! The computer won ${computerWins} rounds and there were ${ties} ties.`)
    } else if (computerWins > playerWins) {
        console.log(`The computer wins with ${computerWins} victories! You won ${playerWins} rounds and there were ${ties} ties.`)
    } else if (computerWins == playerWins) {
        console.log(`It's a tie, you and the computer both had ${playerWins} victories and there were ${ties} ties.`)
    }
    
    console.log('Thanks for playing!')
}

game()