/* eslint-disable func-names */
import { setupCPU } from './gameplayCPU.js';
const sound = new Audio();

let easterArray = [1, 2, 3, 4, 3, 2, 1];
let currentArray = [];

export function playGame(tempArray, loseStatus) {
  if (loseStatus) {
  } else {
    setupCPU(tempArray);
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
export function userTurn(gameArray, position, didLose, id, diff) {
  console.log(
    `Values: ${gameArray}, ${gameArray.length}, and ${position}, ${didLose}, and id ${id}`
  );
  if (
    gameArray[position] === getInput(id) &&
    position === gameArray.length - 1
  ) {
    setupCPU(gameArray, diff);
    position = 0;
    return position;
  } else if (gameArray[position] === getInput(id)) {
    console.log(`match`);

    position++;
    return position;
  } else if (position === 0) {
    console.log(`Mismatch`);
    lose(gameArray.length);
    currentArray.push(getInput(id));
    console.log(currentArray);
    console.log(easterArray);
    if (JSON.stringify(currentArray) == JSON.stringify(easterArray)) {
      alert('Dark Mode Initiated');
      document.querySelector('body.easter-container').innerHTML = ``;
      document.querySelector(
        'body.easter-container'
      ).style.backgroundImage = `url('../images/help_me.gif')`;
      sound.src = '../sounds/laugh.wav';
      sound.play();
      return -1;
    } else {
      return -1;
    }
  } else {
    console.log(`Mismatch`);
    lose(gameArray.length);
    return -1;
  }
}

function lose(rounds) {
  sound.src = '../sounds/gameover.wav';
  sound.play();
  console.log(`You lose: YOUR HIGH SCORE:\n ${rounds}\n Play again?`);
  // Function index resets everything
  document.getElementById('start-button').innerHTML = `
  <img class="diff" src="../images/lose.png"/>
  \n Score:${rounds} \n Play Again?\n [Click Here]`;
  // play sound
}

export function getInput(id) {
  switch (id) {
    default:
      return error;
    case 'blue':
      sound.src = './sounds/1.wav';
      sound.play();
      return 1;
    case 'red':
      sound.src = './sounds/2.mp3';
      sound.play();
      return 2;
    case 'green':
      sound.src = './sounds/6.wav';
      sound.play();
      return 3;
    case 'yellow':
      sound.src = './sounds/4.wav';
      sound.play();
      return 4;
  }
}

export function testGame() {
  console.log('game start');
}
