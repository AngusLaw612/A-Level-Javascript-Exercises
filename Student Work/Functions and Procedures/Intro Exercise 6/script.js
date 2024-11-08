// 1. Write a procedure to display a welcome message
function displayWelcomeMessage() {
    // Fill in here
    scores.innerHTML = "Welcome"
}

// 2. Write a function to add a new student
function addStudent(students, name, score) {
    // Fill in here
    // Example: students.push({ name: "Alice", score: 85 });
}

// 3. Write a function to update a student's score
function updateScore(students, name, newScore) {
    // Fill in here
    // Hint: Use a loop to find the student by name and update their score
}

// 4. Write a function to calculate the average score
function calculateAverageScore(students) {
    // Fill in here
    // Hint: Use a loop or the .reduce() method
}

// 5. Write a procedure to display all scores and the average
function displayScores(students, averageScore) {
    // Fill in here
    // Example output: "Alice: 85, Bob: 90. Average score: 87.5."
}

// Main Program
let students = []; // Start with an empty list
displayWelcomeMessage();
addStudent(students, "Alice", 85);
addStudent(students, "Bob", 90);
updateScore(students, "Alice", 95);
const averageScore = calculateAverageScore(students);
displayScores(students, averageScore);
