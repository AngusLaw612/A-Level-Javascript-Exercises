document.addEventListener("DOMContentLoaded", function () {
    const arrayDisplay = document.getElementById("array-display");
    const generateButton = document.getElementById("generate-btn");
    const searchButton = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
    const searchResult = document.getElementById("search-result");

    let currentArray = [];

    function generateRandomArray() {
        const array = [];
        const size = Math.floor(Math.random() * 5) + 5;
        let currentIndex = 0
        let value = 0;
        while (currentIndex < size) {
            value = (Math.floor(Math.random() * 10)) + 10 + value;
            array.push(value);
            currentIndex++;
        }
        return array;
    }
    function displayArray(array) {
        arrayDisplay.textContent = JSON.stringify(array);
    }

    //Write a binary search with the identifier studentSearch which takes two parameters
    //The array to be searched and the item searched for
    //return the index position of the item if found or -1 if not
    

    generateButton.addEventListener("click", function () {
        currentArray = generateRandomArray();
        displayArray(currentArray);
        searchResult.textContent = "Result will appear here";
        searchInput.value = "";
    });

    searchButton.addEventListener("click", function () {
        const target = parseInt(searchInput.value, 10);
        if (isNaN(target)) {
            searchResult.textContent = "Please enter a valid number.";
            return;
        }

        const index = studentSearch(currentArray, target);

        if (index !== -1) {
            searchResult.textContent = `Item found at index ${index}`;
        } else {
            searchResult.textContent = "Item not found";
        }
    });

    // Initial setup
    currentArray = generateRandomArray();
    displayArray(currentArray);
});
