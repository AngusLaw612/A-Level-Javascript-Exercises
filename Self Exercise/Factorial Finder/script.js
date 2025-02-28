let numberInput = document.getElementById('userinput');
let resultMessage = document.getElementById('outputBlock');

document.getElementById('buttonInput').addEventListener('click', function() {
    find(parseInt(numberInput.value));
});

function find(number) {
    let sum = 1;
    if (number < 0) {
        resultMessage.innerHTML = "Error: Please enter a non-negative number.";
    } else {
        for (let i = number; i > 0; i--) {
            sum = sum * i;
        }
        resultMessage.innerHTML = "Ans = " + sum;
    }
}