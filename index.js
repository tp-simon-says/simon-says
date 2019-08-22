/* eslint-disable func-names */
import { startGame, difficulty } from './javascript/gameSetup.js';
import { generateArray, playLoop, setupCPU } from './javascript/gameplayCPU.js';
import { getInput } from './javascript/gameplay.js';

const numArray = [];

document.getElementById('start-button').addEventListener('click', () => {
  startGame(document.getElementById('start-button'));
});

const buttons = document.querySelectorAll('button.play-button')
for(const button of buttons){
  button.addEventListener('click', () => {
    console.log(button.id);
  });
}

console.log(getInput('blue'));