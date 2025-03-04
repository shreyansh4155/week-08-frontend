function getWeekday(number) {
    if (number === 1) {
        return "Sunday";
    } else if (number === 2) {
        return "Monday";
    } else if (number === 3) {
        return "Tuesday";
    } else if (number === 4) {
        return "Wednesday";
    } else if (number === 5) {
        return "Thursday";
    } else if (number === 6) {
        return "Friday";
    } else if (number === 7) {
        return "Saturday";
    } else {
        return "Invalid number! Please enter a number between 1 and 7.";
    }
}

const number = 3; 
console.log(getWeekday(number));
