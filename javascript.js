let choices = ['rock', 'paper', 'scissors'];

let playerWins = 0
let computerWins = 0
let ties = 0


const results = document.createElement('h2')
results.textContent=`It was a cool summer night. I walked upon the weathered stones that paved a path through this park. Deep in thought, my focus was broken by a stranger dressed in dark clothing. Not unlike what I was wearing. 
"How about a game?" he asked. I obliged, and from beneath the brim of his hat, I saw a smile stretch across his face.
"First to five, wins."`
document.body.appendChild(results)

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

const buttonContainer = document.createElement('div')
buttonContainer.classList.add('buttonContainer')
document.body.appendChild(buttonContainer)

const rockbtn = document.createElement('button')
rockbtn.textContent = "Rock"
rockbtn.classList.add("hover")
buttonContainer.appendChild(rockbtn)
rockbtn.addEventListener('click', function() {
    playRound('rock', computerPlay())
});

const paperbtn = document.createElement('button')
paperbtn.textContent = "Paper"
paperbtn.classList.add("hover")
buttonContainer.appendChild(paperbtn)
paperbtn.addEventListener('click', function() {
    playRound('paper', computerPlay())
});

const scissorsbtn = document.createElement('button')
scissorsbtn.textContent = "Scissors"
scissorsbtn.classList.add("hover")
buttonContainer.appendChild(scissorsbtn)
scissorsbtn.addEventListener('click', function() {
    playRound('scissors', computerPlay())
});

const scoreSection = document.createElement('div')
scoreSection.classList.add("score")
document.body.appendChild(scoreSection)

const scoreNumberSection = document.createElement('div')
scoreNumberSection.classList.add("scoreNumber")
document.body.appendChild(scoreNumberSection)

const yourScore = document.createElement('div')
yourScore.textContent=`Your score`
yourScore.classList.add("score")
scoreSection.appendChild(yourScore)

let yourScoreNumber = document.createElement('p')
yourScoreNumber.textContent=`${playerWins}`
yourScoreNumber.style.fontSize = '100px'
yourScoreNumber.classList.add("scoreNumber")
scoreNumberSection.appendChild(yourScoreNumber)

const tieScore = document.createElement('div')
tieScore.textContent=`Ties`
tieScore.classList.add("score")
scoreSection.appendChild(tieScore)

let tieScoreNumber = document.createElement('p')
tieScoreNumber.textContent=`${ties}`
tieScoreNumber.style.fontSize = '100px'
tieScoreNumber.classList.add("scoreNumber")
scoreNumberSection.appendChild(tieScoreNumber)

const computerScore = document.createElement('div')
computerScore.textContent=`His score`
computerScore.classList.add("score")
scoreSection.appendChild(computerScore)

let computerScoreNumber = document.createElement('p')
computerScoreNumber.textContent=`${computerWins}`
computerScoreNumber.style.fontSize = '100px'
computerScoreNumber.classList.add("scoreNumber")
scoreNumberSection.appendChild(computerScoreNumber)

rockbtn.innerHTML = '<img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_960_720.png" alt="a closed fist, symbolizing a rock">'
paperbtn.innerHTML = '<img src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_960_720.png" alt="a hand stretched out flat, symbolizing paper">'
scissorsbtn.innerHTML = '<img src ="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296853_960_720.png" alt="two fingers pointed outward, symbolizing scissors">'

function playRound(playerSelection, computerSelection) {

   // let winText = `${playerSelection} beats ${computerSelection}. You win!`
   // winText = firstLetterUpper(winText)
   // let loseText = `${computerSelection} beats ${playerSelection}. You lose!`
   // loseText = firstLetterUpper(loseText)
   // let tieText = `Both ${playerSelection}! Tie!`

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock'){
            results.textContent = `He picked rock, and so did I. That makes it a tie.`;
            ties++
            tieScoreNumber.textContent=`${ties}`
        } else if (computerSelection === 'paper'){
            results.textContent = `He picked paper, which beats rock. I lose.`
            computerWins++
            computerScoreNumber.textContent=`${computerWins}`
        } else if (computerSelection === 'scissors'){
            results.textContent = `Rock smashes scissors. I win.`
            playerWins++
            yourScoreNumber.textContent=`${playerWins}`
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'rock'){
            results.textContent = 'Paper covers rock. A win for me.'
            playerWins++
            yourScoreNumber.textContent=`${playerWins}`
        } else if (computerSelection === 'paper'){
            results.textContent = `We both picked paper. Tie.`
            ties++
            tieScoreNumber.textContent=`${ties}`
        } else if (computerSelection === 'scissors'){
            results.textContent = `His scissors cut right through my paper. A loss for me.`
            computerWins++
            computerScoreNumber.textContent=`${computerWins}`
        }   
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'rock'){
            results.textContent = `The brute force of a rock beats the precision of scissors. Loss.`
            computerWins++
            computerScoreNumber.textContent=`${computerWins}`
        } else if (computerSelection === 'paper'){
            results.textContent = `Scissors cutting paper. A tale as old as time.`
            playerWins++
            yourScoreNumber.textContent=`${playerWins}`
        } else if (computerSelection === 'scissors'){
            results.textContent = 'Not cutting anything if we both pick scissors.'
            ties++
            tieScoreNumber.textContent=`${ties}`
        }        
}
    stopGame()
}




function stopGame() {
    if(playerWins === 5){
        results.textContent = `His smile faded when he saw what I had picked. "That's five, I win." I declared proudly. He gave a polite nod, but I could hear his breath become shallow. I continued my walk, eager to return to my previous thoughts. Soon, however, they returned to him. I had shattered his world, and left him all alone to pick up the pieces. But there was nothing I could do about that. I pressed on.`
        buttonDisabler()
    } else if(computerWins === 5){
        results.textContent = `"Heh, better luck next time!" he huffed. I smiled, giving a polite nod while moving on past him. It was just a stupid game of rock paper scissors, what does it matter if I win or lose? But deep down I felt it. I knew that I had lost something far more dear to me than that game. I shuddered at the thought, and continued my aimless drift into the night.`
        buttonDisabler()
    } else if(ties === 5){
        results.textContent = `Five ties. Who keeps track of ties? But I knew. We both did. Nothing needed to be said, what had just happened was clear as day. It didn't matter how close the other might have been. Our hands dropped to our sides, and we parted ways without even a simple nod, or any acknowledgement of what just happened. Our paths would never cross again.`
        buttonDisabler()
    } else {
        return true
    }
};

function buttonDisabler(){
    rockbtn.disabled = true;
    rockbtn.classList.remove("hover")
    paperbtn.disabled = true;
    paperbtn.classList.remove("hover")
    scissorsbtn.disabled = true
    scissorsbtn.classList.remove("hover")
}

function firstLetterUpper(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}
