const numArray = [1, 2, 3, 4];

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

function echoPattern(tempArray) {
  for (let i = 0; i < tempArray.length; i++) {
    switch (tempArray[i]) {
      default:
        console.log('error');
        break;
      case 1:
        playButton('blue');
        break;
      case 2:
        playButton('red');
        break;
      case 3:
        playButton('green');
        break;
      case 4:
        playButton('yellow');
        break;
    }
  }
}

function flashButton(color){
  pressButton(color);
  setTimeout(function(){ unpressButton(color); }, 2000);
}

/*var i = 1;                     //  set your counter to 1

function myLoop () {           //  create a loop function
   setTimeout(function () {    //  call a 3s setTimeout when the loop is called
      alert('hello');          //  your code here
      i++;                     //  increment the counter
      if (i < 10) {            //  if the counter < 10, call the loop function
         myLoop();             //  ..  again which will trigger another 
      }                        //  ..  setTimeout()
   }, 3000)
}

myLoop();                      //  start the loop */


generateArray(numArray);
console.log(numArray);

flashButton('blue');

// echoPattern(numArray);

