function feetToInch(feet) {
    return feet * 12;
}

function inchToFeet(inches) {
    return inches / 12;
}

function feetToMeter(feet) {
    return feet * 0.3048;
}

function meterToFeet(meters) {
    return meters / 0.3048;
}

const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("Usage: node unitConversion.js <choice> <value>");
    console.log("Choices:");
    console.log("1. Feet to Inch");
    console.log("2. Feet to Meter");
    console.log("3. Inch to Feet");
    console.log("4. Meter to Feet");
    process.exit(1);
}

const choice = parseInt(args[0]);
const value = parseFloat(args[1]);

let result;

switch (choice) {
    case 1:
        result = feetToInch(value);
        console.log(`${value} Feet is equal to ${result} Inches`);
        break;
    case 2:
        result = feetToMeter(value);
        console.log(`${value} Feet is equal to ${result} Meters`);
        break;
    case 3:
        result = inchToFeet(value);
        console.log(`${value} Inches is equal to ${result} Feet`);
        break;
    case 4:
        result = meterToFeet(value);
        console.log(`${value} Meters is equal to ${result} Feet`);
        break;
    default:
        console.log("Invalid choice");
}