function displayUnits(number) {
    switch (number) {
        case 1:
            console.log("Unit");
            break;
        case 10:
            console.log("Ten");
            break;
        case 100:
            console.log("Hundred");
            break;
        case 1000:
            console.log("Thousand");
            break;
        case 10000:
            console.log("Ten Thousand");
            break;
        case 100000:
            console.log("Hundred Thousand");
            break;
        case 1000000:
            console.log("Million");
            break;
        default:
            console.log("Number not recognized");
    }
}

// Example usage:
displayUnits(1);       // Output: Unit
displayUnits(10);      // Output: Ten
displayUnits(100);     // Output: Hundred
