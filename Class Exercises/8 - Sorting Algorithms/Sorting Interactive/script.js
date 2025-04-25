document.addEventListener("DOMContentLoaded", function() {
    const arrayDisplay = document.getElementById("array-display");
    const sortedArrayDisplay = document.getElementById("sorted-array");
    const generateButton = document.getElementById("generate-btn");
    const sortButton = document.getElementById("sort-btn");
    const sortingCodeTextarea = document.getElementById("sorting-code");

    // Function to generate a random array
    function generateRandomArray() {
        const array = [];
        const size = Math.floor(Math.random() * 5) + 5; // Generate an array of size between 5 and 10
        for (let i = 0; i < size; i++) {
            array.push(Math.floor(Math.random() * 100) + 1); // Random number between 1 and 100
        }
        return array;
    }

    // Display the generated random array
    function displayArray(array) {
        arrayDisplay.textContent = JSON.stringify(array);
        sortedArrayDisplay.textContent = JSON.stringify(array); // Reset sorted array display
    }

    // Sort the array using the student-defined sorting function
    function sortArray() {
        const array = JSON.parse(arrayDisplay.textContent);

        try {
            // Extract the student's code from the textarea and create a function
            const studentCode = sortingCodeTextarea.value.trim();

            // This ensures the student-defined function is executed properly
            if (studentCode) {
                // Create a new function using the student's code
                const sortingFunction = new Function("arr", studentCode);

                // Call the sorting function on the array
                const sortedArray = sortingFunction(array);

                // Display the sorted array
                sortedArrayDisplay.textContent = JSON.stringify(sortedArray);
            } else {
                alert("Please write your sorting algorithm in the textarea.");
            }
        } catch (error) {
            // Catch errors in the student's code and display a message
            alert("Error in sorting algorithm: " + error.message);
        }
    }

    // Generate a new random array when the button is clicked
    generateButton.addEventListener("click", function() {
        const newArray = generateRandomArray();
        displayArray(newArray);
    });

    // Sort the array when the button is clicked
    sortButton.addEventListener("click", sortArray);

    // Initial setup: generate and display a random array
    const initialArray = generateRandomArray();
    displayArray(initialArray);
});
