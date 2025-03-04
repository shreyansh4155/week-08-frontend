function primeFactors(n) {
    // Print the number of 2s that divide n
    while (n % 2 === 0) {
        console.log(2);
        n = n / 2;
        }
    for (let i = 3; i * i <= n; i += 2) {
        // While i divides n, print i and divide n
        while (n % i === 0) {
            console.log(i);
            n = n / i;
        }
    }

        console.log(n);
    }

// Example usage:
const N = 315;
primeFactors(N);
