function rollDie() {
    return Math.floor(Math.random() * 6) + 1;
}

function rollDieUntilLimit(limit) {
    const dieRolls = new Map();
    let maxCount = 0;
    let maxNumber = null;

    while (maxCount < limit) {
        const roll = rollDie();
        const count = (dieRolls.get(roll) || 0) + 1;
        dieRolls.set(roll, count);

        if (count > maxCount) {
            maxCount = count;
            maxNumber = roll;
        }
    }

    return dieRolls;
}

function findMinMax(dieRolls) {
    let minCount = Infinity;
    let maxCount = -Infinity;
    let minNumber = null;
    let maxNumber = null;

    for (const [number, count] of dieRolls.entries()) {
        if (count < minCount) {
            minCount = count;
            minNumber = number;
        }
        if (count > maxCount) {
            maxCount = count;
            maxNumber = number;
        }
    }

    return { minNumber, maxNumber };
}

const limit = 10;
const dieRolls = rollDieUntilLimit(limit);
const { minNumber, maxNumber } = findMinMax(dieRolls);

console.log("Die rolls:", dieRolls);
console.log("Number that reached maximum times:", maxNumber);
console.log("Number that reached minimum times:", minNumber);