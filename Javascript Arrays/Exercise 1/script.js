//declare array for values to be stored
let valueArray = [];
let modalDisplay = false;
let output = document.getElementById('output');

let btnAddValue = document.getElementById('btnAddToArray');
let btnRemoveValue = document.getElementById('btnRemoveFromArray');
let btnSortArray = document.getElementById('btnSortArray');
let btnDisplayArray = document.getElementById('btnDisplayArray');
let modalInput = document.getElementById('modalInput');
let overlay = document.getElementById('overlay');

btnDisplayArray.addEventListener('click', displayArray);
btnAddValue.addEventListener('click', displayModal);
overlay.addEventListener('click', hideModal);

function addValueToArray() {
    let valueToAdd = document.getElementById('valueToAdd').value;
    valueArray.push(valueToAdd);
    hideModal();
}


function displayModal() {
    if (!modalDisplay) {
    modalInput.style.display ="block";
    overlay.style.display = "block";
    modalDisplay = true;
    let btnAdd = document.getElementById('btnAddValue');
    btnAdd.addEventListener('click', addValueToArray);
    }
}

function hideModal() {
    if (modalDisplay) {
    modalInput.style.display = "none";
    overlay.style.display = "none";
    modalDisplay = false;
    }
}

function displayArray() {
    output.innerHTML = 'grgegreg'
    for (let i = 0; i < valueArray.length; i++) {
        output.innerHTML = output.innerHTML + '<br>' + valueArray[i];
    }
}