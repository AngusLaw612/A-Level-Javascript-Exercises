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

// Function to update the display with the given value
function updateDisplay(value) {
    display.innerText += value;
}

// Functions for each button to update the display with the corresponding value
function buttonInput7() { updateDisplay(7); }
function buttonInput8() { updateDisplay(8); }
function buttonInput9() { updateDisplay(9); }
function buttonInputdash() { updateDisplay('/'); }
function buttonInput4() { updateDisplay(4); }
function buttonInput5() { updateDisplay(5); }
function buttonInput6() { updateDisplay(6); }
function buttonInputstar() { updateDisplay('*'); }
function buttonInput1() { updateDisplay(1); }
function buttonInput2() { updateDisplay(2); }
function buttonInput3() { updateDisplay(3); }
function buttonInputminus() { updateDisplay('-'); }
function buttonInput0() { updateDisplay(0); }

// Function to clear the display
function buttonInputC() {
    display.innerText = '';
}

// Function to evaluate the expression and display the result without using eval
function buttonInputequal() {
    try {
        const result = evaluateExpression(display.innerText);
        display.innerText = result;
    } catch {
        display.innerText = 'Error';
    }
}

// Function to update the display with a plus sign
function buttonInputadd() { updateDisplay('+'); }

// Function to evaluate a mathematical expression
function evaluateExpression(expression) {
    const tokens = expression.match(/(\d+|\+|\-|\*|\/)/g);
    if (!tokens) throw new Error('Invalid expression');

    let stack = [];
    let currentNumber = '';
    let currentOperator = null;

    tokens.forEach(token => {
        if (/\d/.test(token)) {
            currentNumber += token;
        } else {
            if (currentNumber) {
                stack.push(parseFloat(currentNumber));
                currentNumber = '';
            }
            if (currentOperator) {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(applyOperator(a, b, currentOperator));
            }
            currentOperator = token;
        }
    });

    if (currentNumber) {
        stack.push(parseFloat(currentNumber));
    }
    if (currentOperator) {
        const b = stack.pop();
        const a = stack.pop();
        stack.push(applyOperator(a, b, currentOperator));
    }

    return stack[0];
}

// Function to apply an operator to two numbers
function applyOperator(a, b, operator) {
    switch (operator) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: throw new Error('Unknown operator');
    }
}