let a = 1;
let b = 2;
let c = 3;

let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

let max = result1;
let min = result1;

if (result2 > max) {
    max = result2;
} else if (result2 < min) {
    min = result2;
}

if (result3 > max) {
    max = result3;
} else if (result3 < min) {
    min = result3;
}

if (result4 > max) {
    max = result4;
} else if (result4 < min) {
    min = result4;
}

console.log(`Results of the operations:
1. a + b * c = ${result1}
2. a % b + c = ${result2}
3. c + a / b = ${result3}
4. a * b + c = ${result4}`);

console.log(`Maximum value: ${max}`);
console.log(`Minimum value: ${min}`);