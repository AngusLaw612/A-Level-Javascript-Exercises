# Working with 1D Arrays in JavaScript

## Creating an Array

You can create an array using either array literals or the `Array` constructor.

### Example:

```javascript
// Array literal
let array1 = [1, 2, 3, 4, 5];

// Array constructor
let array2 = new Array(1, 2, 3, 4, 5);
```

## Accessing Elements

You can access elements in an array using their index (starting from 0).

### Example:

```javascript
let array = [10, 20, 30, 40, 50];
console.log(array[0]); // Output: 10
console.log(array[3]); // Output: 40
```

## Adding Elements

### Using `push()`

Add an element to the end of the array.

```javascript
let array = [1, 2, 3];
array.push(4);
console.log(array); // Output: [1, 2, 3, 4]
```

### Using `unshift()`

Add an element to the beginning of the array.

```javascript
let array = [2, 3, 4];
array.unshift(1);
console.log(array); // Output: [1, 2, 3, 4]
```

## Removing Elements

### Using `pop()`

Remove the last element from the array.

```javascript
let array = [1, 2, 3, 4];
array.pop();
console.log(array); // Output: [1, 2, 3]
```

### Using `shift()`

Remove the first element from the array.

```javascript
let array = [1, 2, 3, 4];
array.shift();
console.log(array); // Output: [2, 3, 4]
```

### Using `splice()`

Remove an element at a specific index.

```javascript
let array = [1, 2, 3, 4, 5];
array.splice(2, 1); // Remove 1 element at index 2
console.log(array); // Output: [1, 2, 4, 5]
```

### Using `filter()`

Remove all occurrences of a specific value.

```javascript
let array = [1, 2, 3, 4, 3, 5];
array = array.filter(item => item !== 3);
console.log(array); // Output: [1, 2, 4, 5]
```

## Finding Elements

### Using `indexOf()`

Find the index of a specific value.

```javascript
let array = [10, 20, 30, 40];
let index = array.indexOf(30);
console.log(index); // Output: 2
```

### Using `includes()`

Check if a specific value exists in the array.

```javascript
let array = [1, 2, 3, 4];
console.log(array.includes(3)); // Output: true
console.log(array.includes(5)); // Output: false
```

## Iterating Through an Array

### Using `for` loop

```javascript
let array = [1, 2, 3, 4];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}
```

### Using `forEach()`

```javascript
let array = [1, 2, 3, 4];
array.forEach(item => {
    console.log(item);
});
```

## Modifying Elements

You can modify elements directly by accessing them using their index.

```javascript
let array = [1, 2, 3, 4];
array[1] = 5; // Change second element
console.log(array); // Output: [1, 5, 3, 4]
```

## Example: Complete Operations

```javascript
let students = ["Alice", "Bob", "Charlie"];
students.push("David"); // Add a student
students.splice(1, 1); // Remove Bob
console.log(students); // Output: ["Alice", "Charlie", "David"]
```

## Summary

1D arrays in JavaScript provide a flexible way to store and manipulate lists of data. You can create, access, add, remove, and modify elements easily using the methods and examples outlined above.