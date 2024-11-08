document.addEventListener('DOMContentLoaded', function() {
    const lblOutput = document.getElementById('lblOutput');
    const btnCalculate = document.getElementById('btnCalculate');

    lblOutput.textContent = "easyPreston - Lancashire's Favourite Airline";

    btnCalculate.addEventListener('click', function() {
        let destination = document.getElementById('cboDestination').value;
        let luggageType = document.getElementById('cboCase').value;
        let price = 0;
        let output = "Destination: ";

        // Calculate destination price
        if (destination === "Berlin") {
            price = 45;
            output += "Berlin\n";
        } else if (destination === "Madrid") {
            price = 55;
            output += "Madrid\n";
        } else if (destination === "Paris") {
            price = 28;
            output += "Paris\n";
        } else if (destination === "Rome") {
            price = 47;
            output += "Rome\n";
        }

        // Check luggage type
        if (luggageType === "Check-in") {
            price += 20;
            output += "Check-in Luggage\n";
        } else {
            output += "Hand Luggage Only\n";
        }

        // Display total price
        output += "Ticket Price: £" + price.toFixed(2);
        lblOutput.textContent = output;
    });
});
