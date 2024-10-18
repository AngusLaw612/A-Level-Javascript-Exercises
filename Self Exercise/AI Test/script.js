document.getElementById('cubicForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const d = parseFloat(document.getElementById('d').value);

    const result = solveCubic(a, b, c, d);
    document.getElementById('result').innerText = `Roots: ${result.join(', ')}`;
});

function solveCubic(a, b, c, d) {
    // Coefficients for the depressed cubic t^3 + pt + q = 0
    const p = (3*a*c - b*b) / (3*a*a);
    const q = (2*b*b*b - 9*a*b*c + 27*a*a*d) / (27*a*a*a);

    // Discriminant
    const discriminant = (q*q) / 4 + (p*p*p) / 27;

    let roots = [];

    if (discriminant > 0) {
        // One real root
        const u = Math.cbrt(-q / 2 + Math.sqrt(discriminant));
        const v = Math.cbrt(-q / 2 - Math.sqrt(discriminant));
        roots.push(u + v - b / (3*a));
    } else if (discriminant === 0) {
        // Triple root or one single and one double root
        const u = Math.cbrt(-q / 2);
        roots.push(2*u - b / (3*a));
        roots.push(-u - b / (3*a));
    } else {
        // Three real roots or one real and two complex roots
        const r = Math.sqrt(-p*p*p / 27);
        const phi = Math.acos(-q / (2*r));
        const t = 2 * Math.cbrt(r);
        roots.push(t * Math.cos(phi / 3) - b / (3*a));
        roots.push(t * Math.cos((phi + 2*Math.PI) / 3) - b / (3*a));
        roots.push(t * Math.cos((phi + 4*Math.PI) / 3) - b / (3*a));
    }

    // Handle complex roots
    if (discriminant < 0) {
        const realPart = -b / (3*a);
        const imaginaryPart = Math.sqrt(Math.abs(discriminant));
        roots = [
            `${realPart} + ${imaginaryPart}i`,
            `${realPart} - ${imaginaryPart}i`,
            `${realPart}`
        ];
    }

    return roots;
}
