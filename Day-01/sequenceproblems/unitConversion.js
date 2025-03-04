function inchesToFeet(inches) {
    return inches / 12;
}

let inches = 42;
let feet = inchesToFeet(inches);
console.log(`${inches} inches is equal to ${feet} feet.`);


function feetToMeters(feet) {
    return feet * 0.3048;
}

let lengthFeet = 60;
let widthFeet = 40;
let lengthMeters = feetToMeters(lengthFeet);
let widthMeters = feetToMeters(widthFeet);
console.log(`Rectangular plot of ${lengthFeet} feet x ${widthFeet} feet is equal to ${lengthMeters.toFixed(2)} meters x ${widthMeters.toFixed(2)} meters.`);


function squareFeetToAcres(squareFeet) {
    return squareFeet / 43560;
}

let areaFeet = lengthFeet * widthFeet;
let totalAreaFeet = areaFeet * 25;
let totalAreaAcres = squareFeetToAcres(totalAreaFeet);
console.log(`The area of 25 such plots is equal to ${totalAreaAcres.toFixed(2)} acres.`);