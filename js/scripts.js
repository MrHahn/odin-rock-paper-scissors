const buttons = document.querySelectorAll('button');
const computerWeapon = getComputerChoice();
let humanWeapon;
let humanScore = 0; 
let computerScore = 0;
let winnersMessage = document.querySelector('.winner-message');
function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    let weaponSelector = Math.ceil(Math.random() * 3 - 1)
    return options[weaponSelector];
}



 function getHumanChoice(){
   let humanSelection = this.dataset.item;
   humanWeapon = humanSelection;
    
 }


 function playRound(human, computer){
    switch(human.toLowerCase()){
        case 'rock':
            if(computer == 'rock'){
                winnersMessage.textContent = 'Its a draw, play again';
            }else if (computer == 'paper') {
                winnersMessage.textContent = 'You lose, Paper beats Rock';
            } else {
                winnersMessage.textContent = 'You win, Rock beats Scissors ';
            }
            break;
        case 'paper':
            if(computer == 'rock'){
                winnersMessage.textContent = 'You Win, Paper beats Rock';
            }else if (computer == 'paper') {
                winnersMessage.textContent = 'Its a draw, play again';
            } else {
                winnersMessage.textContent = 'You lose, Scissors beats Paper';
            }
            break;
        case 'scissors':
            if(computer == 'rock'){
                winnersMessage.textContent = 'You lose, Rock Beats Scissors';
            }else if (computer == 'paper') {
                winnersMessage.textContent = 'You win, Scissors beats Paper';
            } else {
                winnersMessage.textContent = 'Its a draw, play again';
            }
            break;
    }
    

 }




buttons.forEach(button => button.addEventListener('click', getHumanChoice));
buttons.forEach(button => button.addEventListener('click', () => { playRound(humanWeapon, computerWeapon) }));