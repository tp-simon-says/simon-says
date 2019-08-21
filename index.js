/* eslint-disable func-names */
const numArray = [1, 2, 3, 4, 3, 2, 1];

function generateArray(tempArray) {
  tempArray.push(Math.ceil(Math.random() * 4));
  return tempArray;
}

function pressButton(buttonId) {
  const temp = document.getElementById(buttonId);
  temp.style.backgroundColor = 'gray';
}

function unpressButton(buttonId) {
  const temp = document.getElementById(buttonId);
  temp.style.backgroundColor = buttonId;
}

function flashButton(color) {
  pressButton(color);
  setTimeout(function() {
    unpressButton(color);
  }, 500);
}

function echoPattern(num) {
  switch (num) {
    default:
      console.log('error');
      break;
    case 1:
      flashButton('blue');
      break;
    case 2:
      flashButton('red');
      break;
    case 3:
      flashButton('green');
      break;
    case 4:
      flashButton('yellow');
      break;
  }
}

let i = 0; //  set your counter to 1

// const numArray = [1, 2, 3, 4];
function myLoop(tempArray) {
  //  create a loop function
  setTimeout(function() {
    //  call a 3s setTimeout when the loop is called
    echoPattern(tempArray[i]); //  your code here
    console.log('press');
    i++; //  increment the counter
    if (i < tempArray.length) {
      //  if the counter < 10, call the loop function
      myLoop(tempArray); //  ..  again which will trigger another
    } //  ..  setTimeout()
  }, 750);
}

generateArray(numArray);
console.log(numArray);
myLoop(numArray);
