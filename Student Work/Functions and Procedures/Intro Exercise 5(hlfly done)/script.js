// 1. Write a procedure to display a welcome message
function displayWelcomeMessage() {
    resultMessage.innerHTML = "Welcome";
}

// 2. Write a function to calculate the total price of items in the cart
function calculateTotal(cart) {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i];
    }
    return totalPrice;
}

// 3. Write a function to apply a discount
function applyDiscount(total) {
    let discount = total;
    if (total > 100) {
        discount = total * 0.9;
    }
    return discount;
}

// 4. Write a function to calculate the final price after tax
function calculateFinalPrice(totalAfterDiscount, taxRate) {
    let final = totalAfterDiscount * (1 + taxRate);
    return final;
}

// 5. Write a procedure to display the receipt
function displayReceipt(total, finalPrice) {
    resultMessage.innerHTML = "The total before tax is $" + total + ". The final price after tax is $" + finalPrice + ".";
}

// Main Program
const shoppingCart = [29.99, 49.99, 19.99, 34.99]; // Example items
const taxRate = 0.08; // 8% tax
displayWelcomeMessage();
const total = calculateTotal(shoppingCart);
const totalAfterDiscount = applyDiscount(total);
const finalPrice = calculateFinalPrice(totalAfterDiscount, taxRate);
displayReceipt(total, finalPrice);

