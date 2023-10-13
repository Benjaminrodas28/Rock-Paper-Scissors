function playRound(playerSelection, computerSelection){

    if (
        (playerSelection === computerSelection)
        ){
            return "It's a tie!"
        } else if (
            (playerSelection.toLowerCase() === "Rock" &&
             computerSelection.toLowerCase() === "Scissor")||
            
            (playerSelection.toLowerCase() === "Paper" &&
             computerSelection.toLowerCase() === "Rock") ||

            (playerSelection.toLowerCase() === "Scissor" &&
             computerSelection.toLowerCase() === "Paper")
        ) {
            return `You win! ${playerSelection} beats 
            ${computerSelection}.`
        } else {
            return `You lose! ${computerSelection} beats 
            ${playerSelection}.`
        }
}





































    
    

