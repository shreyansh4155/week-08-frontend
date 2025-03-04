const n = parseInt(process.argv[2]);

if (isNaN(n) || n < 0) {
    console.log("Please provide a non-negative integer as an argument.");
    process.exit(1);
}

let power = 0;
let value = 1;

while (power <= n && value <= 256) {
    console.log(`2^${power} = ${value}`);
    power++;
    value = Math.pow(2, power);
}