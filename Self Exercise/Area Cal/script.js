// 3 Sides Polygon
function calculateArea3(length) {
    let area = 0;
    area = 0.5 * (length ** 2) * Math.sin(Math.PI / 3);
    return area;
}

function calculateArea4(length) {
    let area = 0;
    area = length ** 2;
    return area;
}

function calculateArea5(length) {
    let area = 0;
    area = (5 * (length ** 2)) / ( 4 * (Math.tan(Math.PI / 5)));
    return area;
}

document.getElementById('calculateButton').addEventListener('click', function() {
    const length = parseFloat(document.getElementById('length').value);
    const sides = parseFloat(document.getElementById('sides').value);
    
    // Call the function and display the result
    if (sides === 3) {
        const area = calculateArea3(length);
        document.getElementById('areaResult').textContent = area + " cm ** 2";

    } else if (sides === 4) {
        const area = calculateArea4(length);
        document.getElementById('areaResult').textContent = area + " cm ** 2";

    } else if (sides === 5) {
        const area = calculateArea5(length);
        document.getElementById('areaResult').textContent = area + " cm ** 2";
    }
    
});
