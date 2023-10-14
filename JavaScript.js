function playRound(playerSelection, computerSelection){

    if (
        (playerSelection.toLowerCase() === computerSelection.toLowerCase())
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
})



