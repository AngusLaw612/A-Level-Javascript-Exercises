let resultMessage = document.getElementById('outputBlock');

document.getElementById('buttonInput').addEventListener('click', function() {
    let pin = document.getElementById("pinNum").value;
    code(pin);
});

function code(pin) {
    let aryPin = pin.split('');
    let permutations = new Set();

    function permute(arr, start, end) {
        if (start === end) {
            permutations.add(arr.join(''));
        } else {
            for (let i = start; i <= end; i++) {
                [arr[start], arr[i]] = [arr[i], arr[start]]; // Swap
                permute(arr, start + 1, end);
                [arr[start], arr[i]] = [arr[i], arr[start]]; // Backtrack
            }
        }
    }

    permute(aryPin, 0, aryPin.length - 1);
    resultMessage.innerHTML = Array.from(permutations).join(', ');
}