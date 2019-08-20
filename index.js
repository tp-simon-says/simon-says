const numArray = [1, 2, 3, 4];

function generateArray(tempArray) {
  tempArray.push(Math.ceil(Math.random() * 4));
  return tempArray;
}

function echoPattern(tempArray) {
  for (let i = 0; i < tempArray.length; i++) {
    sleep(2000);
    switch (tempArray[i]) {
      default:
        console.log('error');
        break;
      case 1:
        pressButton('blue');
        break;
      case 2:
        pressButton('red');
        break;
      case 3:
        pressButton('green');
        break;
      case 4:
        pressButton('yellow');
        break;
    }
  }
}

generateArray(numArray);
console.log(numArray);
echoPattern(numArray);

function unpressButton(buttonId) {
  const temp = document.getElementById(buttonId);
  temp.style.backgroundColor = buttonId;
}

function pressButton(buttonId) {
  const temp = document.getElementById(buttonId);
  temp.style.backgroundColor = 'gray';
}
