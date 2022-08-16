//Selects random number between 0-2 and assigns rock, paper, or scissors
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

//Compares player and computer selections, returns string corresponding to win condition
//Returned strings end in either 'Draw!', 'win!', or 'lose!'
function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return ('Draw!');
    }
    else if (playerSelection === 'rock'){
        if (computerSelection === 'paper'){return ('Paper beats rock! You lose!');}
        else {return ('Rock beats scissors! You win!');}
    }
    else if (playerSelection === 'paper'){
        if (computerSelection === 'rock'){return ('Paper beats rock! You win!');}
        else {return ('Scissors beats paper! You lose!');}
    }
    else {
        if (computerSelection === 'rock'){return ('Rock beats scissors! You lose!');}
        else {return ('Scissors beats paper! You win!');}
    }
    }

//Continously prompts user for input until valid response received. Case insensitive
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

//Simulates a round of games of length seriesLength. Only games that end in 
//win or lose count towards number of games played. Currently prompts user for
//all player selections at start of game
function game(){
    const seriesLength = 5;
    //regular expression variable that will be used to match a winning round
    const winex = new RegExp('win!'); 
    
    let playerScore = 0;
    let computerScore = 0;
    
    //Perform seriesLength number of simulations
    for (let counter = 1; counter <= seriesLength; counter++){
        
        //Allow new input for each game
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();

        console.log(playerSelection);
        console.log(computerSelection);

        //Simulate round
        let result = playRound(playerSelection, computerSelection);
        console.log(result);

        //Determine result from playRound return value
        //If draw, do not count towards number of games played
        if (result === 'Draw!'){
            counter--;
        }
        //tests for string ending in 'win!'
        else if (winex.test(result)) {
            playerScore++;
        }
        //If not draw or win, assume loss
        else {
            computerScore++;
        }
        //Show current score at end of round
        console.log('Player:' + playerScore);
        console.log('Computer: ' + computerScore);

    }
        
}


//Run game
game();