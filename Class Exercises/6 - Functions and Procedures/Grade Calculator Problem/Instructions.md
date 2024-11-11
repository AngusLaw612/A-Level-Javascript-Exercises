# Grade Calculator

__Objective:__

In this exercise, you will create a Grade Calculator. The program will take marks for two components (COMP1 and COMP2) as input, calculate the weighted final grade, and then determine the corresponding letter grade. You will implement a function to calculate the grade and a procedure to display the result.

## Instructions:

__Setup:__
You have been provided with an HTML structure and basic layout.
Your task is to implement the missing function definitions in the JavaScript file.

## Tasks:

* a. Weighted Grade Calculation:
The final grade will be calculated by the following weighted formula:

```
Final Grade = (COMP1 * 0.60) + (COMP2 * 0.40)
```

Where:
COMP1 marks are worth 60% of the final grade.
COMP2 marks are worth 40% of the final grade.

* b. Grade Thresholds:
Once the final grade is calculated, you will convert it into a letter grade using these thresholds:

```
Grade A: 80% and above
Grade B: 70% to 79%
Grade C: 60% to 69%
Grade D: 50% to 59%
Grade F: Below 50%
```

* c. Grade Calculation Function:
You will write a function calculateGrade(comp1, comp2) that:

1. Takes COMP1 and COMP2 marks as input.
2. Calculates the final grade based on the weighted formula.
3. Determines the corresponding letter grade.

* d. Display Grade:
You will write a procedure displayGrade() that:

1. Takes the input values for COMP1 and COMP2.
2. Calls the calculateGrade() function.
3. Displays the calculated final grade and letter grade on the page.

What to do:
1. Write the calculateGrade(comp1, comp2) function:
This function will take the two component marks as parameters and calculate the final grade using the weighted formula. Then, it will determine the letter grade based on the calculated score.

2. Write the displayGrade() procedure:
This procedure will:

Retrieve the marks from the input fields.
Call the calculateGrade() function to calculate the final grade.
Display the calculated grade and corresponding letter grade in the HTML.

__Make sure to test your code:__
Enter different marks for COMP1 and COMP2 and check if the final grade and letter grade are calculated correctly and displayed on the page.

__File Structure:__
Your project folder should contain the following files:

index.html: Contains the HTML layout and input fields.
styles.css: Contains the styling for the page.
gradeCalculator.js: Where you will write the JavaScript functions.

__Hint:__

Make sure to handle invalid inputs (e.g., empty fields or non-numeric values).
Use parseFloat() to convert the input values into numbers for calculations.
Ensure that the grade is displayed as a letter grade and the final score is shown with appropriate formatting.
