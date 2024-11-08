// Framework: Function to calculate the area of a rectangle
function calculateArea(width, height) {
    // TODO: Fill in the logic to calculate and return the area
    area = width * height
    return area
}

// Event listener for the button
document.getElementById('calculateButton').addEventListener('click', function() {
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    
    // Call the function and display the result
    const area = calculateArea(width, height);
    document.getElementById('areaResult').textContent = area;
});