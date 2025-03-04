function displayUnit(number) {
    if (number === 1) {
        console.log("Unit");
    } else if (number === 10) {
        console.log("Ten");
    } else if (number === 100) {
        console.log("Hundred");
    } else if (number === 1000) {
        console.log("Thousand");
    } else if (number === 10000) {
        console.log("Ten Thousand");
    } else if (number === 100000) {
        console.log("Hundred Thousand");
    } else if (number === 1000000) {
        console.log("Million");
    } else {
        console.log("Invalid number");
    }
}

// Example usage:
displayUnit(1);       // Output: Unit
displayUnit(10);      // Output: Ten
displayUnit(100);     // Output: Hundred
displayUnit(1000);    // Output: Thousand

