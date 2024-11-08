//get button control and store in variables
btnDisplay = document.getElementById('btnDisplay');


//attach event to button
btnDisplay.addEventListener('click', checkDrivingAge);

function checkDrivingAge() { 
    let ageInput = document.getElementById('ageInput').value;
    let message = '';

    // Check if the age input is a valid number
    if (ageInput !== '' && !isNaN(ageInput)) {
        let age = parseInt(ageInput);

        if (age < 17) {
            message = "You are too young to drive.";
        } else {
            message = "You are old enough to drive.";
        }

        if (age === 17) {
            message += "\nYou can apply for your provision license.";
        }

        if (age >= 80) {
            message = "Consider taking the bus.";
        }

    } else {
        message = "Please enter a valid age.";
    }

    // Display the message in the paragraph
    document.getElementById('lblDisplay').textContent = message;
}
