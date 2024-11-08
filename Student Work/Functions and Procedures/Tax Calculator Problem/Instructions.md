# Tax Calculator

__Objective:__

In this exercise, you will build a simple tax calculator. The program will take an income value as input and calculate the tax based on predefined tax brackets. You will implement both a function to calculate the tax and a procedure to display the result.

## Instructions:

__Setup:_
You have been provided with an HTML structure and basic layout.
Your task is to implement the missing function definitions in the JavaScript file.

## Tasks:

* a. Tax Brackets:
The tax calculation will be based on the following simple tax brackets:

```
Income up to $10,000: 10% tax
Income between $10,001 and $20,000: 15% tax
Income above $20,000: 20% tax
```

* b. Tax Calculation:
You will write a function calculateTax(income) that will calculate the tax based on the provided tax brackets.

* c. Display Tax:
You will write a procedure displayTax() that will:

1. Take the income input from the user.
2. Call the calculateTax() function to calculate the tax.
3. Display the tax result in the HTML.

__What to do:__

1. Write the calculateTax(income) function:
This function will take the income as a parameter and calculate the tax based on the given brackets.

2. Write the displayTax() procedure:
This procedure will get the income from the input field, call the calculateTax() function, and display the tax result in the HTML.

Make sure to test your code:
Enter different income values and check if the tax is calculated correctly and displayed on the page.

__File Structure:__
Your project folder should contain the following files:

index.html: Contains the HTML layout and input fields.
styles.css: Contains the styling for the page.
script.js: Where you will write the JavaScript functions.

__Hint:__
Make sure to handle cases where the user enters non-numeric values.
Use parseFloat() to convert the income input into a number for calculations.
Ensure the result is rounded to two decimal places when displaying the tax.