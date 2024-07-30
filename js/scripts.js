function getComputerChoice(){
    const options = ['rock', 'paper', 'scissors'];
    let weaponSelector = Math.ceil(Math.random() * 3 - 1)
    return options[weaponSelector];
}
