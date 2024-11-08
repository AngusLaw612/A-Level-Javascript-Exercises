document.getElementById('btnCalculate').addEventListener('click', function() {
    let workerType = document.getElementById('txtType').value.toUpperCase();
    let hoursWorked = parseFloat(document.getElementById('txtHours').value);
    let rate = 0;
    let pay = 0;
    let message = '';

    if (workerType === 'S') {
        rate = 7.5;
        pay = rate * hoursWorked;
        message = "Skilled Worker - " + pay.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    } else if (workerType === 'M') {
        rate = 4.8;
        pay = rate * hoursWorked;
        message = "Manual Worker - " + pay.toLocaleString('en-GB', { style: 'currency', currency: 'GBP' });
    } else {
        message = "Data Input Error - Must be M or S";
    }

    // Display the message
    document.getElementById('lblDisplay').textContent = message;
});
