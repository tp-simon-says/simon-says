/* eslint-disable func-names */
import { startGame, difficulty } from './gameSetup.js';
import { generateArray, playLoop, setupCPU } from './gameplayCPU.js';
import { getButton } from '../index.js';

// If statement to see whether player lost
// Iterate by rounds
// Wait for user input
// If statement

let numArray = [];
let ifLose = false;

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

function userTurn(tempArray, x) {
  const userInput = getInput(getButton());
  if (userInput === tempArray[x] && x === tempArray.length - 1) {
    console.log('true');
    return true;
  } else if (userInput === tempArray[x]) {
    x++;
    console.log('single match');
    userTurn(tempArray, x);
  } else {
    console.log('false');
    return false;
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
