let firstCam = document.getElementById("firstCam");
let secCam = document.getElementById("secCam");
let resultMessage = document.getElementById('outputBlock');

function check(number1, number2) {
    if (number1 === "" || number2 === "") {
        resultMessage.innerHTML = "Error: Inputs cannot be empty.";
        return false;
    }
    return true;
}

document.getElementById('buttonInput').addEventListener('click', function() {
    let number1 = parseFloat(firstCam.value); 
    let number2 = parseFloat(secCam.value); 
    speed(number1, number2);
});

function speed(firstTime, secTime) {
    if (check(firstTime, secTime) === false) { 
        return;
    }

    let time = secTime - firstTime; 
    let distance = 1;
    let speed = distance / time;

    resultMessage.innerHTML = "Average Speed: " + speed.toFixed(3) + " mph";
}