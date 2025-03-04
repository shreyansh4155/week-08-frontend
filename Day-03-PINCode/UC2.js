function isValidPin(pin) {
    const pinPattern = /^[^A-Za-z\W]\d*$/;
    return pinPattern.test(pin);
}

console.log(isValidPin("A400088")); // false
console.log(isValidPin("400088"));  // true
console.log(isValidPin("#400088")); // false
console.log(isValidPin("9400088")); // true
