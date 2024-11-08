// Framework: Procedure to display a welcome message
function displayWelcomeMessage(name) {
    // TODO: Display a welcome message like "Hello, [name]!"
    welcomeMessage.innerHTML = ("Hello "+name+" !")
}

// Event listener for the button
document.getElementById('welcomeButton').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    // Call the procedure
    displayWelcomeMessage(name);
});