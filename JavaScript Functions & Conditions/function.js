let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
  let random_integer = Math.floor(Math.random()*9);
  return random_integer;

}

function compareGuesses(humanGuessInput, target, computerGuess) {
    if (Math.abs(humanGuessInput - target) <=  Math.abs(computerGuess - target)) {
        return true;
    } if  (Math.abs(humanGuessInput - target) >=  Math.abs(computerGuess - target)){
        return false;
    }
}

const updateScore = (winner) =>{

  if (winner == 'human'){
    humanScore += 1;

  }else{
    computerScore += 1;
  }

}

const advcancedRound = ()=>{

  return currentRoundNumber += 1;

}


updateScore('human');
console.log(humanScore);

updateScore('computer');
console.log(computerScore);

