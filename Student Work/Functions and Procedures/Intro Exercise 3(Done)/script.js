// Framework: Function to convert Celsius to Fahrenheit
function convertToFahrenheit(celsius) {
    // TODO: Implement the formula (C * 9/5) + 32
    fahrenheit = (celsius * 9/5) + 32
    return fahrenheit
}

// Framework: Procedure to display the converted temperature
function displayConvertedTemperature() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = convertToFahrenheit(celsius); // Use the function
    document.getElementById('fahrenheitResult').textContent = fahrenheit;
}

// Event listener for the button
document.getElementById('convertButton').addEventListener('click', displayConvertedTemperature);
