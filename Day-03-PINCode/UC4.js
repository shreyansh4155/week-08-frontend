function isValidPINCode(pinCode) {
    const pinCodePattern = /^400\s?088$/;
    return pinCodePattern.test(pinCode);
}

console.log(isValidPINCode("400088"));  // true
console.log(isValidPINCode("400 088")); // true
console.log(isValidPINCode("400-088")); // false
console.log(isValidPINCode("4000888")); // false