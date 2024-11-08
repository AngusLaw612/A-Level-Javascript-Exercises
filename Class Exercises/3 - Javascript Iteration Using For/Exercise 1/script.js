document.addEventListener("DOMContentLoaded", function() {
    // Event listeners for each button
    document.getElementById("btn3TimesTable").addEventListener("click", function() {
        displayMultiplicationTable(3);
    });

    document.getElementById("btnTotalNumbers").addEventListener("click", function() {
        totalNumbersBetween1To10();
    });

    document.getElementById("btnDisplayAlphabet").addEventListener("click", function() {
        displayAlphabet();
    });

    document.getElementById("btnAverageNumbers").addEventListener("click", function() {
        calculateAverageOfFiveNumbers();
    });

    document.getElementById("btnRandomNumbers").addEventListener("click", function() {
        displayRandomNumbers();
    });

    document.getElementById("btnDisplayCodes").addEventListener("click", function() {
        displayAsciiCodes();
    });
})

    // Function to display multiplication table
    function displayMultiplicationTable(number) {
        let display = "Multiplication Table\n";
        for (let i = 1; i <= 10; i++) {
            let ans = number * i;
            display += `${i} x ${number} = ${ans}\n`;
        }
        document.getElementById("output").innerText = display;
    }

    // Function to total numbers between 1 and 10
    function totalNumbersBetween1To10() {
        let display = "Total - 1 to 10\n";
        let total = 0;
        for (let i = 1; i <= 10; i++) {
            total += i;
            display += `${i} - ${total}\n`;
        }
        document.getElementById("output").innerText = display;
    }

    // Function to display the alphabet
    function displayAlphabet() {
        let display = "The Alphabet\n";
        for (let i = 65; i <= 90; i++) {
            let letter = String.fromCharCode(i);
            display += `${letter}   `;
        }
        document.getElementById("output").innerText = display;
    }

    // Function to calculate average of five numbers
    function calculateAverageOfFiveNumbers() {
        let display = "Average of 5 numbers\n";
        let total = 0;
        for (let i = 1; i <= 5; i++) {
            let num = Math.floor(Math.random() * 100) + 1;
            total += num;
            display += `${num}\n`;
        }
        let average = total / 5;
        display += `${average.toFixed(2)}`;
        document.getElementById("output").innerText = display;
    }

    // Function to display 20 random numbers between 1 and 100
    function displayRandomNumbers() {
        let display = "Random Numbers\n";
        for (let i = 1; i <= 20; i++) {
            let randomNumber = Math.floor(Math.random() * 100) + 1;
            display += `${randomNumber}  `;
        }
        document.getElementById("output").innerText = display;
    }

    // Function to display ASCII codes from A to L
    function displayAsciiCodes() {
        let display = "ASCII Codes\n";
        for (let code = 65; code <= 76; code++) {
            display += `${code} - ${String.fromCharCode(code)}\n`;
        }
        document.getElementById("output").innerText = display;
    }

