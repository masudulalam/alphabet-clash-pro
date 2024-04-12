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


function handledKeyboardButtonPress () {
    console.log('button pressed');
} 
// capture keyboard keypress
document.addEventListener('keyup', handledKeyboardButtonPress);

function continueGame () {
    // step - 1 : Generate a random alphabet.
    const alphabet = getArandomAlphabet();
    console.log('Your random alphabet',alphabet);

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