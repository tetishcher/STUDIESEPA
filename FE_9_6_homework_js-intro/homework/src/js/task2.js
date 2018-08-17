let a = parseFloat(prompt('Input length of side 1'));
let b = parseFloat(prompt('Input length of side 2'));
let angle = parseFloat(prompt('Input the angle'));
const angleSum = 180;
const rad = Math.PI / angleSum * angle;
if (a < 0 || b < 0 || angle < 0) {
    console.log('Invalid data');
} else {
    let c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2) - 2 * a * b * Math.cos(rad));
    let perimetr = a + b + c;
    let p = perimetr / 2;
    let square = Math.sqrt(p * ((p - a) * (p - b) * (p - c)));
    console.log('Length:', parseFloat(c.toFixed(2)), '\nPerimetr:', parseFloat(perimetr.toFixed(2)),
        'Square:', parseFloat(square.toFixed(2)));
}
