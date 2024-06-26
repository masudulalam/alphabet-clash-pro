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

    // stop the game if pressed 'Esc'
    if (playerPressed === 'Escape') {
        gameOver ();
    }

    // get expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(expectedAlphabet, playerPressed);

    // check match or not
    if (expectedAlphabet === playerPressed) {
        console.log('You get a point.');

        // 1. get the current score
        const currentScore = getElementValueById('current-score');
        // console.log(currentScore);

        // 2. increase the score
        const updatedScore = currentScore + 1;
        // console.log(updatedScore);

        // 3. show the updated score
        setElementValueById('current-score', updatedScore);


        // ---------------------------------------
        // update score:
        // 1. get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore); 

        // 2. increase the score
        // const newScore = currentScore + 1;
        // console.log(newScore);

        // 3. show the updated score
        // currentScoreElement.innerText = newScore;


        console.log('you have pressed correctly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You missed. You loss a life.');

        const currentLife = getElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setElementValueById('current-life', updatedLife);

        if (updatedLife === 0) {
            gameOver ();
        }




        // ------------------------------------------------
        // step 1. get the current life number:
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText); 

        // step 2. reduce the life count
        // const newLife = currentLife - 1;

        // step 3. display the updated life count 
        // currentLifeElement.innerText = newLife;
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
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');

    // reset score and life
    setElementValueById ('current-life', 5);
    setElementValueById ('current-score', 0)


    continueGame();
}

function gameOver () {
    hideElementById('play-ground');
    showElementById('final-score');

    // update final score
    // get the last score
    const lastScore = getElementValueById('current-score');
    console.log(lastScore);
    setElementValueById('last-score', lastScore);
    
    // clear the last selected  highlighted alphabet
    const currentAlphabet = getElementTextById ('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);

}