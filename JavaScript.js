function playRound(playerSelection, computerSelection){

    if (
        (playerSelection.toLowerCase() === computerSelection.toLowerCase())
        ){
            return "It's a tie!"
        } else if (
            (playerSelection.toLowerCase() === "rock" &&
             computerSelection.toLowerCase() === "scissor")||
            
            (playerSelection.toLowerCase() === "paper" &&
             computerSelection.toLowerCase() === "rock") ||

            (playerSelection.toLowerCase() === "scissor" &&
             computerSelection.toLowerCase() === "paper")
        ) {
            return `You win! ${playerSelection} beats ${computerSelection}.`
        } else {
            return `You lose! ${computerSelection} beats ${playerSelection}.`
        }
}

document.addEventListener("click",function game() {

    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("pick one Rock, Paper, Scissor")
        const computerSelection = 
        ['Rock', 'Paper', 'Scissor']
        [ Math.floor(Math.random() * 3)];
       
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")){
            playerScore++
        } else if(result.includes("lose")){
            computerScore++
        }
    }
    
    if (playerScore > computerScore){
        console.log(
            `You win! Final Score ${playerScore}-${computerScore}.` 
        ) ;
    } else if (computerScore > playerScore){
        console.log(
            `You lose! Final Score ${computerScore}-${playerScore}`
        )
    }
})



