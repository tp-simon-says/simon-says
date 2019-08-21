export const selectDifficulty = val => {
  console.log(`You have selected ${val}`);
  console.log('IVE BEEN CLICKED');

  // Should pass value back to index.js
};

export const startGame = id => {
  // Change the UI for the Button to have three buttons
  id.innerHTML = `<div id="groupButtons" ><button id="difficulty-buttons1">Classic</button><button id="difficulty-buttons2">Hard</button><button id="difficulty-buttons3">INSANE</button></div>`;
  console.log(id);
  // id.innerHTML = `<h2> TEST</h2>`;
  document.getElementById('difficulty-buttons1').addEventListener(
    'click',
    e => {
      e.stopImmediatePropagation();
      selectDifficulty(1);
    },
    true
  );
  document.getElementById('difficulty-buttons2').addEventListener(
    'click',
    e => {
      e.stopImmediatePropagation();
      selectDifficulty(2);
    },
    true
  );
  document.getElementById('difficulty-buttons3').addEventListener(
    'click',
    e => {
      e.stopImmediatePropagation();
      selectDifficulty(3);
    },
    true
  );
};
