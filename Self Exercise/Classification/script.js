let animals = [
    "horse", "cow", "sheep", "pig", "dog", "cat", "lion", "tiger", 
    "whale", "dolphin", "seal", "penguin", "ostrich", "sparrow", 
    "spider", "ant", "bee", "wasp", "termite", "octopus", "squid"
];

let questions1 = [
    "Does it live in the sea? (Aquatic Animals)",
    "Does it live on land? (Land Mammals)",
    "Does it live in the air or on land? (Birds and Insects)"
];

let questions2 = [
    "Is it a mammal? (Aquatic Mammals)", // For aquatic animals
    "Is it a mammal? (Land Mammals)", // For land mammals
    "Does it have feathers? (Birds)", // For birds
    "Does it have more than four legs? (Insects and Arachnids)" // For insects and arachnids
];

let questions3 = [
    "Is it larger than a human? (Aquatic Mammals)", // For aquatic mammals
    "Is it domesticated? (Land Mammals)", // For land mammals
    "Can it fly? (Birds)", // For birds
    "Does it build nests? (Insects and Arachnids)" // For insects and arachnids
];



document.getElementById('buttonInputStart').addEventListener('click', function() {
    start();
});