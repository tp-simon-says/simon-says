export function generateArray(tempArray, diff) {
  for (let i = 0; i < diff; i++) {
    tempArray.push(Math.ceil(Math.random() * 4));
  }
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

export function playLoop(tempArray, i) {
  setTimeout(function() {
    echoPattern(tempArray[i]);
    console.log('press');
    i++;
    if (i < tempArray.length) {
      playLoop(tempArray, i);
    }
  }, 750);
}

export function setupCPU(tempArray, diff) {
  let i = 0;
  generateArray(tempArray, diff);
  playLoop(tempArray, i);
}
