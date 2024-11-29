let sample = [];
let number = document.getElementById('number');
let resultMessage1 = document.getElementById('resultMessage1');
let resultMessage2 = document.getElementById('resultMessage2');

document.getElementById('buttonInNum').addEventListener('click', function() {
    ArraySample(number);
});

function ArraySample (number) {
    sample.push(number);
    resultMessage1.innerHTML = sample.join(" * ");
};