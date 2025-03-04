function findSecondLargestAndSmallest(arr) {
    if (arr.length < 2) {
        return "Array should have at least two elements";
    }

    arr.sort((a, b) => a - b);

    let secondSmallest = arr[1];

    let secondLargest = arr[arr.length - 2];

    return {
        secondSmallest: secondSmallest,
        secondLargest: secondLargest
    };
}

let array = [12, 35, 1, 10, 34, 1];
let result = findSecondLargestAndSmallest(array);
console.log("Second Smallest:", result.secondSmallest);
console.log("Second Largest:", result.secondLargest);