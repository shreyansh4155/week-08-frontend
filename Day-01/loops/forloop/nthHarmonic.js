const n = parseInt(process.argv[2]);

function nthHarmonic(n) {
    let harmonic = 0.0;
    for (let i = 1; i <= n; i++) {
        harmonic += 1.0 / i;
    }
    return harmonic;
}

if (isNaN(n) || n <= 0) {
    console.log("Please provide a positive integer as the argument.");
} else {
    console.log(`The ${n}th harmonic number is: ${nthHarmonic(n)}`);
}
