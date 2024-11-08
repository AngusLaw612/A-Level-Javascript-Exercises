// Function to calculate the average
function calculateAverage() {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);
    let num3 = parseFloat(document.getElementById('number3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('result').textContent = "Please enter valid numbers!";
    } else {
        const average = (num1 + num2 + num3) / 3;
        document.getElementById('result').textContent = `The average is: ${average.toFixed(2)}`;
    }
}

// Event listener for the button click
document.getElementById('avgButton').addEventListener('click', calculateAverage);
