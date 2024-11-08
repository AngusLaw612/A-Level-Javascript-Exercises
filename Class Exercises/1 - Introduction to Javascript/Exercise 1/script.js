// Function to add numbers
function addNumbers() {
    let num1 = parseFloat(document.getElementById('number1').value);
    let num2 = parseFloat(document.getElementById('number2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Please enter valid numbers!";
    } else {
        const sum = num1 + num2;
        document.getElementById('result').textContent = `The sum is: ${sum}`;
    }
}

// Event listener for the button click
document.getElementById('addButton').addEventListener('click', addNumbers);
