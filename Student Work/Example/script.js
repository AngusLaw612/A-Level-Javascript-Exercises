/* -----------------------------------------
TEMPLATE CODE
-------------------------------------------*/

//declare array for values to be stored
let valueArray = [];
let modalDisplay = false;
let output = document.getElementById('output');

//assign controls to variables to add
let btnAddValue = document.getElementById('btnAddToArray');
let btnRemoveValue = document.getElementById('btnRemoveFromArray');
let btnSortArray = document.getElementById('btnSortArray');
let btnDisplayArray = document.getElementById('btnDisplayArray');
let modalInput = document.getElementById('modalInput');
let overlay = document.getElementById('overlay');

//add event listeners for form controls
btnDisplayArray.addEventListener('click', displayArray);
btnAddValue.addEventListener('click', displayModal);
overlay.addEventListener('click', hideModal);

//code to display and hide modal
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

/* -----------------------------------------
END TEMPLATE CODE
-------------------------------------------*/

//function to add a value to the array
function addValueToArray() {
    let valueToAdd = document.getElementById('valueToAdd').value;
    //add code to add a value to the array
    hideModal();
}

function displayArray() {
    //add code to display items in array
}

