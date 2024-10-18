// Initialize components into global variables
let numberInput = document.getElementById('number');
let resultMessage = document.getElementById('resultMessage');
let ranNumber = Math.floor(Math.random() * 100) + 1;
let count = 0;
let minRange = 1;
let maxRange = 100;

// Add event listener to the button
document.getElementById('buttonInput').addEventListener('click', function() {
    check(parseInt(numberInput.value), ranNumber);
});

// Add event listener to the restart button
document.getElementById('restartButton').addEventListener('click', function() {
    restartGame();
});

// Main program
function check(userGuess, ranNumber) {
    count++;
    if (userGuess === ranNumber) {
        resultMessage.innerHTML = `Good job, you guessed it in ${count} tries!`;
        document.body.classList.add('success');
    } else if (userGuess > ranNumber) {
        maxRange = userGuess - 1;
        resultMessage.innerHTML = `Your number is bigger than the bomb. Try again! The bomb is between ${minRange} and ${maxRange}.`;
    } else if (userGuess < ranNumber) {
        minRange = userGuess + 1;
        resultMessage.innerHTML = `Your number is smaller than the bomb. Try again! The bomb is between ${minRange} and ${maxRange}.`;
    }
}

// Restart game function
function restartGame() {
    ranNumber = Math.floor(Math.random() * 100) + 1;
    count = 0;
    minRange = 1;
    maxRange = 100;
    numberInput.value = '';
    resultMessage.innerHTML = '';
    document.body.classList.remove('success');
}
