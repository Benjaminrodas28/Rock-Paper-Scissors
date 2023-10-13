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

function game() {
    
    const playerSelection = prompt("pick one Rock, Paper, Scissor")
    const computerSelection = 
    ["Rock", "Paper", "Scissor"]
    [ Math.floor(Math.random() * 3)];



}



































    
    

