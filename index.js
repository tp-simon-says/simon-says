/* eslint-disable func-names */
import { startGame, difficulty, numArray, ifLose } from './javascript/gameSetup.js';
import { generateArray, playLoop, setupCPU } from './javascript/gameplayCPU.js';
import { userTurn } from './javascript/gameplay.js';

let pos = 0;

// export let buttonid;
document.getElementById('start-button').addEventListener('click', () => {
  startGame(document.getElementById('start-button'));
});

let buttons = document.querySelectorAll('button.play-button');

  for (const button of buttons) {
    button.addEventListener('click', () => {
      console.log(button.id)
      pos = userTurn(numArray, pos, ifLose, button.id);
    });
  }
