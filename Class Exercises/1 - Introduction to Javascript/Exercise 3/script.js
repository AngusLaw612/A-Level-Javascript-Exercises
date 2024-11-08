// Get the title box element
let titleBox = document.getElementById('title-box');

// Event listeners for each team button
document.getElementById('chelseaBtn').addEventListener('click', function() {
    titleBox.style.backgroundColor = '#034694'; // Chelsea blue
});

document.getElementById('manUtdBtn').addEventListener('click', function() {
    titleBox.style.backgroundColor = '#DA291C'; // Manchester United red
});

document.getElementById('boltonBtn').addEventListener('click', function() {
    titleBox.style.backgroundColor = '#FFFFFF'; // Bolton white
});