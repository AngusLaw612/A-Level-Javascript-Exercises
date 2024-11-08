# Geometric Calculations

__Objective:__

In this exercise, you will implement several functions to calculate the area, volume, and surface area of various geometric shapes. You will write functions to handle each calculation and call them within a button-click event.

## Instructions:

__Setup:__

You have been provided with an HTML structure and basic layout.
Your task is to implement the missing function definitions in the geometryCalculator.js file.

__Tasks:__

* a. Area of a Trapezium:

The formula to calculate the area of a trapezium is:

```
Area = ½ × (a + b) × h
```

Where:
a and b are the lengths of the parallel sides.
h is the height between the parallel sides.

* b. Volume of a Cylinder:

The formula to calculate the volume of a cylinder is:
```
Volume = π × r² × h
```
Where:
r is the radius of the base.
h is the height of the cylinder.

* c. Total Surface Area of a Cylinder:

The formula to calculate the total surface area of a cylinder is:
```
Surface Area = 2πr² + 2πrh
```

Where:
r is the radius of the base.
h is the height of the cylinder.

* d. Volume of a Cone:

The formula to calculate the volume of a cone is:
```
Volume = (1/3) × πr² × h
```
Where:
r is the radius of the base.
h is the height of the cone.

* e. Pythagoras’s Theorem:

Use Pythagoras's Theorem to calculate the missing side (a or b) in a right triangle. The formula is:
```
a² + b² = c²
```
Where:
c is the hypotenuse (the longest side).
a and b are the other two sides.

If one side is missing, you can solve for it by rearranging the equation:
```
a = √(c² - b²)
```

* f. Hero’s Formula for the Area of a Triangle:

Hero's formula calculates the area of a triangle from the lengths of the three sides. The formula is:
```
Area = √(s(s - a)(s - b)(s - c))
```
Where:
a, b, and c are the lengths of the sides.
s is the semi-perimeter, calculated as:
```
s = (a + b + c) / 2
```

## What to do:

In the geometryCalculator.js file, write a function for each of the formulas above.
Each function should take the relevant parameters (e.g., radius, height, etc.) and return the calculated result.
Make sure to test each function by calling them in response to the button clicks in the HTML interface.
Additional Instructions:

Make sure the user can enter values for the shape's properties (like radius, height, etc.) using the input fields in the HTML file.
Each result should be displayed on the page when the user clicks the respective button.
File Structure:
Your project folder should contain the following files:

index.html (Contains the HTML layout and user input forms)
styles.css (Contains styling to make the page look better)
geometryCalculator.js (Where you will write the functions)

## Hint:
Make sure to handle edge cases, like negative numbers or non-numeric input.
Use Math.PI for the value of π (Pi) in your formulas.
Use Math.sqrt() for square root calculations.