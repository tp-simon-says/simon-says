/* eslint-disable func-names */
import { startGame, difficulty } from './javascript/gameSetup.js';
import { generateArray, playLoop, setupCPU } from './javascript/gameplayCPU.js';
import { getInput } from './javascript/gameplay.js';

const numArray = [];
// export let buttonid;
document.getElementById('start-button').addEventListener('click', () => {
  startGame(document.getElementById('start-button'));
});

let buttons = document.querySelectorAll('button.play-button');

export function getButton() {
  for (const button of buttons) {
    button.addEventListener('click', () => {
      return button.id;
    });
  }
}
