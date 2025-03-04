function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function areBothPalindromes(num1, num2) {
    return isPalindrome(num1) && isPalindrome(num2);
}

// Example usage:
const num1 = 121;
const num2 = 12321;
console.log(areBothPalindromes(num1, num2)); // Output: true