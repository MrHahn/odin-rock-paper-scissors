const buttons = document.querySelectorAll('button');
let computerWeapon = getComputerChoice();
let humanWeapon;
let humanScore = 0; 
let computerScore = 0;
let winnersMessage = document.querySelector('.winner-message');
let humanScoreDisplay = document.querySelector('.player');
let computerScoreDisplay = document.querySelector('.computer');
let roundNumber = 0;
let roundNumberDisplay = document.querySelector('.round-number');

function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    let weaponSelector = Math.ceil(Math.random() * 3 - 1)
    return options[weaponSelector];
}

function updateComputerChoice(){
    computerWeapon = getComputerChoice();
}

function updateRoundNumber(){
    roundNumberDisplay.textContent = roundNumber;
}



 function getHumanChoice(){
   let humanSelection = this.dataset.item;
   humanWeapon = humanSelection;
    
 }

 function updateScore(){
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
 }


 function playRound(human, computer){
    switch(human.toLowerCase()){
        case 'rock':
            if(computer == 'rock'){
                winnersMessage.textContent = 'Its a draw, play again';
                updateComputerChoice();
            }else if (computer == 'paper') {
                winnersMessage.textContent = 'You lose, Paper beats Rock';
                computerScore ++;
                updateScore();
                updateComputerChoice();
            } else {
                winnersMessage.textContent = 'You win, Rock beats Scissors ';
                humanScore ++;
                updateScore();
                updateComputerChoice();
            }
            break;
        case 'paper':
            if(computer == 'rock'){
                winnersMessage.textContent = 'You Win, Paper beats Rock';
                humanScore ++;
                updateScore();
                updateComputerChoice();
            }else if (computer == 'paper') {
                winnersMessage.textContent = 'Its a draw, play again';
            } else {
                winnersMessage.textContent = 'You lose, Scissors beats Paper';
                computerScore ++;
                updateScore();
                updateComputerChoice();
            }
            break;
        case 'scissors':
            if(computer == 'rock'){
                winnersMessage.textContent = 'You lose, Rock Beats Scissors';
                computerScore ++;
                updateScore();
                updateComputerChoice();
            }else if (computer == 'paper') {
                winnersMessage.textContent = 'You win, Scissors beats Paper';
                humanScore ++;
                updateScore();
                updateComputerChoice();
            } else {
                winnersMessage.textContent = 'Its a draw, play again';
                updateComputerChoice();
            }
            break;      
    }
    roundNumber ++;
    updateRoundNumber()
 };




buttons.forEach(button => button.addEventListener('click', getHumanChoice));
buttons.forEach(button => button.addEventListener('click', () => { playRound(humanWeapon, computerWeapon) }));
