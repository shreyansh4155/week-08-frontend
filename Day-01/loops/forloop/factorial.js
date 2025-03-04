function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

const number = 5; 
if (isNaN(number) || number < 0) {
    console.log("Please enter a valid non-negative integer.");
} else {
    console.log(`Factorial of ${number} is ${factorial(number)}`);
}