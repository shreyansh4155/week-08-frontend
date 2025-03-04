function tempConversion(temp, conversionType) {
    let result;

    switch (conversionType) {
        case 'CtoF':
            if (temp >= 0 && temp <= 100) {
                result = (temp * 9/5) + 32;
            } else {
                return "Temperature out of range for Celsius.";
            }
            break;
        case 'FtoC':
            if (temp >= 32 && temp <= 212) {
                result = (temp - 32) * 5/9;
            } else {
                return "Temperature out of range for Fahrenheit.";
            }
            break;
        default:
            return "Invalid conversion type.";
    }

    return result;
}

// Example usage:
console.log(tempConversion(0, 'CtoF')); // 32
console.log(tempConversion(32, 'FtoC')); // 0
console.log(tempConversion(100, 'CtoF')); // 212
console.log(tempConversion(212, 'FtoC')); // 100