/* eslint-disable import/no-mutable-exports */
import { testGame, playGame } from './gameplay.js';
import { setupCPU } from './gameplayCPU.js';

export let difficulty = 0;
export let numArray = [];
export let ifLose = false;
export let pos = 0;

export const selectDifficulty = val => {
  console.log(`You have selected ${val}`);
  console.log('IVE BEEN CLICKED');
  // Should pass value back to index.js
  difficulty = val;
};

export const startGame = id => {
  // Change the UI for the Button to have three buttons
  id.innerHTML = `<div id="groupButtons">
  <img id="difficulty-buttons1" class="diff" src="./images/classic.png" />
  <img id="difficulty-buttons2" class="diff" src="./images/hard.png" />
  <img id="difficulty-buttons3" class="diff" src="./images/insane.png" />
</div>`;
  console.log(id);
  document.getElementById('difficulty-buttons1').addEventListener(
    'click',
    e => {
      e.stopImmediatePropagation();
      selectDifficulty(1);
      id.innerHTML = `<div></div>`;
      setupCPU(numArray, difficulty);
    },
    true
  );
  document.getElementById('difficulty-buttons2').addEventListener(
    'click',
    e => {
      e.stopImmediatePropagation();
      selectDifficulty(2);
      id.innerHTML = `<div></div>`;
      setupCPU(numArray, difficulty);
    },
    true
  );
  document.getElementById('difficulty-buttons3').addEventListener(
    'click',
    e => {
      e.stopImmediatePropagation();
      selectDifficulty(3);
      id.innerHTML = `<div></div>`;
      setupCPU(numArray, difficulty);
    },
    true
  );
};
