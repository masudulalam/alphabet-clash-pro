function hideElementById (elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById (elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColorById (elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

function removeBackgroundColorById (elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getElementValueById (elementId) {
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText); 
    return value;
}

function setElementValueById (elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}


function getArandomAlphabet () {
    // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets =  alphabetString.split('');
    // console.log(alphabets);

    // get a random index between 0 to 25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    // get a random alphabet
    const alphabet = alphabets[index];
    // console.log(index, alphabet);
    return alphabet;
} 