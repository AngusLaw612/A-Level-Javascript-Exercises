const display = document.getElementById('display');

const buttonMappings = {
    'buttonInput7': buttonInput7,
    'buttonInput8': buttonInput8,
    'buttonInput9': buttonInput9,
    'buttonInput/': buttonInputdash,
    'buttonInput4': buttonInput4,
    'buttonInput5': buttonInput5,
    'buttonInput6': buttonInput6,
    'buttonInput*': buttonInputstar,
    'buttonInput1': buttonInput1,
    'buttonInput2': buttonInput2,
    'buttonInput3': buttonInput3,
    'buttonInput-': buttonInputminus,
    'buttonInput0': buttonInput0,
    'buttonInputC': buttonInputC,
    'buttonInput=': buttonInputequal,
    'buttonInput+': buttonInputadd
};

Object.keys(buttonMappings).forEach(id => {
    document.getElementById(id).addEventListener('click', buttonMappings[id]);
});

function updateDisplay(value) {
    display.innerText += value;
}


function buttonInput7() {
    updateDisplay(7);
}

function buttonInput8() {
    updateDisplay(8);
}

function buttonInput9() {
    updateDisplay(9);
}

function buttonInputdash() {
    updateDisplay('/');
}

function buttonInput4() {
    updateDisplay(4);
}

function buttonInput5() {
    updateDisplay(5);
}

function buttonInput6() {
    updateDisplay(6);
}

function buttonInputstar() {
    updateDisplay('*');
}

function buttonInput1() {
    updateDisplay(1);
}

function buttonInput2() {
    updateDisplay(2);
}

function buttonInput3() {
    updateDisplay(3);
}

function buttonInputminus() {
    updateDisplay('-');
}

function buttonInput0() {
    updateDisplay(0);
}

function buttonInputC() {
    display.innerText = '';
}

function buttonInputequal() {
    try {
        display.innerText = eval(display.innerText);
    } catch {
        display.innerText = 'Error';
    }
}

function buttonInputadd() {
    updateDisplay('+');
}
