function generateBirthMonths() {
    const birthMonths = {};
    for (let i = 1; i <= 50; i++) {
        const month = Math.floor(Math.random() * 12) + 1;
        if (!birthMonths[month]) {
            birthMonths[month] = [];
        }
        birthMonths[month].push(`Individual ${i}`);
    }
    return birthMonths;
}

function printBirthMonths(birthMonths) {
    for (const month in birthMonths) {
        console.log(`Month ${month}: ${birthMonths[month].join(', ')}`);
    }
}

const birthMonths = generateBirthMonths();
printBirthMonths(birthMonths);
const birthMonthMap = new Map(Object.entries(birthMonths));
birthMonthMap.forEach((individuals, month) => {
    console.log(`Month ${month}: ${individuals.join(', ')}`);
});