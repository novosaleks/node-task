const data = require('./node_modules/math');

const { summ, abs, min } = data;

// sum
console.log(summ(1, 5, 6, 2)); // 14
// console.log(summ(1, 5, 'f', 2)); // Error: Only numbers allowed';
console.log(summ(-5)); // -5

// abs
console.log(abs(-5)); // 5
console.log(abs('f')); // NaN

// min
console.log(min([2, 5, -4])); // -4
// console.log(min(2, 4, 5)) // Error: Input value is not iterable
console.log(min(['fs','fs'])) // NaN