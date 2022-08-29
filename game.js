console.log('Running...')

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
function playRound(playerSelection){

    let computerSelection = getComputerChoice();
    console.log(`Computer selects ${computerSelection}`)

    let summary = document.getElementById('summary');
    let summaryMessage = `You played ${playerSelection}. The computer played ${computerSelection}...`;
    summary.innerText = summaryMessage;

    if (playerSelection === computerSelection){
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

//Takes result of playRound(), updates current game score, returns score as array
function updateScore(result, playerScore, computerScore){
    //Regular expression variable that will be used to match a win or loss
    const winex = new RegExp('win!');
    const lossex = new RegExp('lose!');
    
    //Determine result from playRound return value, update score in html
    //If draw, do not count towards number of games played
    if (result == 'Draw!'){
        console.log('check draw');
        return [playerScore, computerScore];
    }
    //tests for string ending in 'win!'
    else if (winex.test(result)) {
        console.log('check win');
        playerScore++;
        return [playerScore, computerScore];
    }
    //tests for string ending in 'lose!'. Cannot assume loss since we initialzed result as an empty string
    else if (lossex.test(result)){
        console.log('check loss')
        computerScore++;
        return [playerScore, computerScore];
    }
}

//Update html with new score
function printScore(playerScore, computerScore){
    let displayPlayerScore = document.getElementById('playerScore');
    let displayComputerScore = document.getElementById('computerScore');

    displayPlayerScore.innerText = `Player: ${playerScore}`;
    displayComputerScore.innerText = `Computer: ${computerScore}`;
}

//Check for endgame condition, update page elements 
function checkEndGame(playerScore, computerScore){    
    const VICTORY = 5; //Game ends when one player reaches this number of wins
    let gameOverScreen = document.getElementById('gameOver');
    let buttons = document.querySelectorAll('button');

    if (playerScore >= 5){
        gameOverScreen.innerText = 'Game Over! You win!';
        buttons.forEach((button) => button.remove());
        playAgain();
    }
    else if (computerScore >= 5){
        gameOverScreen.innerText = 'Game Over! You lose!';
        buttons.forEach((button) => button.remove());
        playAgain();
    }
}

//Unhide a button to reload browser page
function playAgain(){
    let gameOverScreen = document.getElementById('gameOver')
    let restart = document.createElement('button');
    restart.innerText = 'Play Again';
    gameOverScreen.appendChild(restart);
    restart.addEventListener('click', () => location.reload());
}

//Main game function. Takes player input from button clicks, simulates games
//until one player achieves victory condition
function game(){
    //Initialize score, result string, array for return values of updateScore()
    let playerScore = 0;
    let computerScore = 0;
    let result = '';
    let scores = [];
    //Selectors for input buttons and result <div>
    let selectRock = document.getElementById('rock');
    let selectPaper = document.getElementById('paper');
    let selectScissors = document.getElementById('scissors');
    let resultMessage = document.getElementById('result');

    //Play a round based on user input, post result, update score, endcheck
    //Needed nested function in order to keep track of global score
    function shoot(playerSelection){
        console.log(playerSelection);
        result = playRound(playerSelection);
        console.log(result);
        resultMessage.innerText = result;
        scores = updateScore(result, playerScore, computerScore);
        playerScore = scores[0];
        computerScore = scores[1];
        printScore(playerScore, computerScore);
        checkEndGame(playerScore, computerScore);
    }
    //Add functionality to Selection buttons
    selectRock.addEventListener('click', () => shoot('rock'));
    selectPaper.addEventListener('click', () => shoot('paper'));
    selectScissors.addEventListener('click', () => shoot('scissors'));
}    

//Run game
game();