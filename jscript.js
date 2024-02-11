let choice = ['rock', 'paper', 'scissors'];

function getComputerChoice(choice){
    return choice[Math.floor(Math.random() * choice.length)];

}
console.log(getComputerChoice(choice));

function playRound(playerSelection, computerSelection){
if (playerSelection===computerSelection){
    return "It's a tie!";
}
else if (playerSelection==="rock" && computerSelection==="scissors"){
    return "You win! Rock beats scissors.";
}
else if (playerSelection==="paper" && computerSelection==="rock"){
    return "You win! Paper beats rock.";
}
else if (playerSelection==="scissors" && computerSelection==="paper"){
    return "You win! Scissors beat paper.";
}
else {
    return "You lose! Try again"
}

}
const playerSelection =prompt("Pick yours").toLowerCase();
const computerSelection = getComputerChoice(choice)
console.log(playRound(playerSelection,computerSelection))

