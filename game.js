function getComputerChoice(){
    let computerChoice = '';
    switch(Math.floor(Math.random()*3)){
        case 0:
            computerChoice = 'rock';
            break;
        case 1: 
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';      
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return ('Draw!');
    }
    else if (playerSelection == 'rock'){
        if (computerSelection == 'paper'){return ('Paper beats rock! You lose!');}
        else {return ('Rock beats scissors! You win!');}
    }
    else if (playerSelection == 'paper'){
        if (computerSelection = 'rock'){return ('Paper beats rock! You win!');}
        else {return ('Scissors beats paper! You lose!');}
    }
    else {
        if (computerSelection == 'rock'){return ('Rock beats scissors! You lose!');}
        else {return ('Scissors beats paper! You win!');}
    }
    }

function getPlayerChoice(){
    let validInput = 'False';
    do{
        let input = prompt('Please choose one: Rock | Paper | Scissors :').toLowerCase();
        
        if ((input === 'rock') || (input === 'paper') || (input === 'scissors')){
            validInput = 'True';
            return input;
        }
    }
    while(validInput === 'False');
}

function game(){
    const seriesLength = 5;
    const winex = new RegExp('*win!$');
    
    let playerScore = 0;
    let computerScore = 0;
    
    for (let counter = 1; counter <= seriesLength; counter++){
        
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        console.log(playerSelection);
        console.log(computerSelection);

        let result = playRound(playerSelection, computerSelection);

        console.log(result);
        if (result === 'Draw!'){
            counter--;
        }
        else if (winex.test(result)) {
            playerScore++;
        }
        else {
            computerScore++;
        }
        console.log('Player:' + playerScore);
        console.log('Computer: ' + computerScore);
    }
        
}

game();