function computerPlay(){
    let guess = Math.floor(Math.random() * 3)
    
    if (guess == 0){
        return "rock"
    } else if (guess == 1){
        return "paper"
    } else if (guess == 2){
        return "scissors"
    }
}

function playerPlay(){
    let playerInput = prompt("Enter your play: ")
    return playerInput.toLowerCase()
}


function playRound(playerSelection, computerSelection){
    if ((playerSelection == "rock")&&(computerSelection == "scissors")){
        console.log("You won. Rock beats Scissors.")
    } else if ((playerSelection == "paper")&&(computerSelection == "rock")) {
        console.log("You won. Paper beats Rock.")
    } else if ((playerSelection == "scissors")&&(computerSelection == "paper")) {
        console.log("You won. Scissors beat Rock.")
    } else if ((computerSelection == "rock")&&(playerSelection == "scissors")){
        console.log("You lose. Rock beats Scissors.")
    } else if ((computerSelection == "paper")&&(playerSelection == "rock")){
        console.log("You lose. Paper beats Rock.")
    } else if ((computerSelection == "scissors")&&(playerSelection == "paper")){
        console.log("You lose. Scissors beat Paper.")
    } else{
        console.log("It's a draw.")
    }
}

function game(){
    
    for (i = 0; i < 5; i++){
        let playerSelection = playerPlay()
        let computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
    }

}

game()

