// function play () {
//     // hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList);

//     // show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList);

// }


function handledKeyboardKeyUpEvent () {
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);

    // get expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet, playerPressed);

    // check match or not
    if (expectedAlphabet === playerPressed) {
        console.log('You get a point.');
        console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You missed. You loss a life.');
    }
} 
// capture keyboard keypress
document.addEventListener('keyup', handledKeyboardKeyUpEvent);

function continueGame () {
    // step - 1 : Generate a random alphabet.
    const alphabet = getArandomAlphabet();
    // console.log('Your random alphabet',alphabet);

    // set randomly generated alphabet to the screen for display.
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
}

function play () {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}