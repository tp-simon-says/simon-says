// Import for Sound
const sound = new Audio();

// Function generates the random number and pushes it to an array
export function generateArray(tempArray, diff) {
	for (let i = 0; i < diff; i++) {
		tempArray.push(Math.ceil(Math.random() * 4));
	}
	return tempArray;
}

// Atomic Functions
function pressButton(buttonId) {
	const temp = document.getElementById(buttonId);
	temp.style.backgroundColor = 'black';
}

function unpressButton(buttonId) {
	const temp = document.getElementById(buttonId);
	temp.style.backgroundColor = buttonId;
}

// Flash Button uses the Atomic Functions
function flashButton(color) {
	pressButton(color);
	setTimeout(function() {
		unpressButton(color);
	}, 500);
}

// Use to correspond sounds to the button pressed
function echoPattern(num) {
	switch (num) {
		default:
			console.log('error');
			break;
		case 1:
			sound.src = "./sounds/1.wav";
			sound.play();
			flashButton('blue');
			break;
		case 2:
			sound.src = "./sounds/2.mp3";
			sound.play();
			flashButton('red');
			break;
		case 3:
			sound.src = "./sounds/6.wav";
			sound.play();
			flashButton('green');
			break;
		case 4:
			sound.src = "./sounds/4.wav";
			sound.play();
			flashButton('yellow');
			break;
	}
}

// playLoop iterates through the array and calls echoPattern
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

// setupCPU is the main function
export function setupCPU(tempArray, diff) {
	let i = 0;
	generateArray(tempArray, diff);
	playLoop(tempArray, i);
}