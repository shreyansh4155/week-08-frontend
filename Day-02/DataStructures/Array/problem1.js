// Generate 10 random 3-digit numbers and store them in an array
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 900) + 100;
    randomNumbers.push(randomNumber);
}

console.log("Random Numbers: ", randomNumbers);

// Function to find the 2nd largest and 2nd smallest elements
function findSecondLargestAndSmallest(arr) {
    let firstLargest = -Infinity, secondLargest = -Infinity;
    let firstSmallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        } else if (num > secondLargest && num !== firstLargest) {
            secondLargest = num;
        }

        if (num < firstSmallest) {
            secondSmallest = firstSmallest;
            firstSmallest = num;
        } else if (num < secondSmallest && num !== firstSmallest) {
            secondSmallest = num;
        }
    }

    return {
        secondLargest: secondLargest,
        secondSmallest: secondSmallest
    };
}

let result = findSecondLargestAndSmallest(randomNumbers);
console.log("2nd Largest Number: ", result.secondLargest);
console.log("2nd Smallest Number: ", result.secondSmallest);