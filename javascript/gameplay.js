/* eslint-disable func-names */
import { startGame, difficulty } from './gameSetup.js';
import { generateArray, playLoop, setupCPU } from './gameplayCPU.js';


// If statement to see whether player lost
// Iterate by rounds
// Wait for user input
// If statement

export function playGame(tempArray, loseStatus) {
  if (loseStatus) {
    // TODO: Game Over Function
    console.log('You Lose!');
  } else {
    console.log('Playing...');
    setupCPU(tempArray);
    console.log(tempArray);
    let i = 0;
    const result = userTurn(tempArray, i);
    if (result === false) {
      loseStatus = true;
      playGame(tempArray, loseStatus);
    } else {
      console.log('Play AGAIN');
      playGame(tempArray, loseStatus);
    }
  }
}

export function userTurn(gameArray, position, didLose, id) {
  console.log(`Values: ${gameArray}, ${gameArray.length}, and ${position}, ${didLose}, and id ${id}`);
  if(gameArray[position] === getInput(id) && position === gameArray.length - 1){
    setupCPU(gameArray);
    position = 0;
    return position;
  }
  else if(gameArray[position] === getInput(id)){
    console.log(`match`)
    position++;
    return position;
  }else{
    console.log(`Mismatch`)
  }
  
}

export function getInput(id) {
  switch (id) {
    default:
      return error;
    case 'blue':
      return 1;
    case 'red':
      return 2;
    case 'green':
      return 3;
    case 'yellow':
      return 4;
  }
}

//playGame(numArray, ifLose);

export function testGame() {
  console.log('game start');
}
