// 1. Write a procedure to display a welcome message
function displayWelcomeMessage() {
    // Fill in here
}

// 2. Write a function to calculate the total price of items in the cart
function calculateTotal(cart) {
    // Fill in here
    // Hint: Use a loop or the .reduce() method
}

// 3. Write a function to apply a discount
function applyDiscount(total) {
    // Fill in here
    // Example: Apply a 10% discount if total > $100
}

// 4. Write a function to calculate the final price after tax
function calculateFinalPrice(totalAfterDiscount, taxRate) {
    // Fill in here
}

// 5. Write a procedure to display the receipt
function displayReceipt(total, finalPrice) {
    // Fill in here
    // Example output: "The total before tax is $120. The final price after tax is $130.80."
}

// Main Program
const shoppingCart = [29.99, 49.99, 19.99, 34.99]; // Example items
const taxRate = 0.08; // 8% tax
displayWelcomeMessage();
const total = calculateTotal(shoppingCart);
const totalAfterDiscount = applyDiscount(total);
const finalPrice = calculateFinalPrice(totalAfterDiscount, taxRate);
displayReceipt(total, finalPrice);
