const buttons = document.querySelectorAll('button');
let humanScore = 0; 
let computerScore = 0;

function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    let weaponSelector = Math.ceil(Math.random() * 3 - 1)
    return options[weaponSelector];
}

 function getHumanChoice(){
   let humanSelection = this.dataset.item;
   return humanSelection;
    
 }




buttons.forEach(button => button.addEventListener('click', getHumanChoice));