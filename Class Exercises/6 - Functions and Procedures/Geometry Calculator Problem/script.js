// script.js

// Define the function to calculate the area of a circle
function calculateCircleArea(radius) {
    // TODO: Write the formula to calculate the area of a circle
}

// Define the function to calculate the circumference of a circle
function calculateCircleCircumference(radius) {
    // TODO: Write the formula to calculate the circumference of a circle
}

// Define the function to calculate the area of a rectangle
function calculateRectangleArea(width, height) {
    // TODO: Write the formula to calculate the area of a rectangle
}

// Define the function to calculate the perimeter of a rectangle
function calculateRectanglePerimeter(width, height) {
    // TODO: Write the formula to calculate the perimeter of a rectangle
}

// Define the function to calculate the area of a triangle
function calculateTriangleArea(base, height) {
    // TODO: Write the formula to calculate the area of a triangle
}

// Add event listeners for the Circle calculations
document.getElementById("btnCircle").addEventListener("click", () => {
    const radius = parseFloat(document.getElementById("circleRadius").value);
    if (radius > 0) {
        // TODO: Call the functions for Circle area and circumference and display the results
    } else {
        document.getElementById("circleResult").textContent = "Please enter a valid radius.";
    }
});

// Add event listeners for the Rectangle calculations
document.getElementById("btnRectangle").addEventListener("click", () => {
    const width = parseFloat(document.getElementById("rectangleWidth").value);
    const height = parseFloat(document.getElementById("rectangleHeight").value);
    if (width > 0 && height > 0) {
        // TODO: Call the functions for Rectangle area and perimeter and display the results
    } else {
        document.getElementById("rectangleResult").textContent = "Please enter valid dimensions.";
    }
});

// Add event listeners for the Triangle calculations
document.getElementById("btnTriangle").addEventListener("click", () => {
    const base = parseFloat(document.getElementById("triangleBase").value);
    const height = parseFloat(document.getElementById("triangleHeight").value);
    if (base > 0 && height > 0) {
        // TODO: Call the function for Triangle area and display the results
    } else {
        document.getElementById("triangleResult").textContent = "Please enter valid dimensions.";
    }
});
