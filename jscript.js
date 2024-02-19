let choice = ['rock', 'paper', 'scissors'];

function getComputerChoice(choice){
  return choice[Math.floor((Math.random()*choice.length))];

}

const computerSelection = getComputerChoice(choice);
const playerSelection = prompt('Choose your weapon', '').toLowerCase();

function playRound(playerSelection, computerSelection){
 if (playerSelection === computerSelection){
    return "It\'s\ a tie";
 } else 
    return "You lose!"; }

     
console.log(playRound(playerSelection, computerSelection))
