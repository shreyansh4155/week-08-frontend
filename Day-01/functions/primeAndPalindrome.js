function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}

function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        const palindrome = getPalindrome(num);
        if (isPrime(palindrome)) {
            console.log(`The number ${num} is prime and its palindrome ${palindrome} is also prime.`);
        } else {
            console.log(`The number ${num} is prime but its palindrome ${palindrome} is not prime.`);
        }
    } else {
        console.log(`The number ${num} is not prime.`);
    }
}

const num = 31;
checkPrimeAndPalindrome(num);