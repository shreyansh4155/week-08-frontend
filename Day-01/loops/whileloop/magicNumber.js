function askQuestion() {
    const guess = Math.floor((min + max) / 2);
    rl.question(`Is your number less than, greater than, or equal to ${guess}? (less/greater/equal): `, (answer) => {
        if (answer === 'less') {
            max = guess - 1;
            askQuestion();
        } else if (answer === 'greater') {
            min = guess + 1;
            askQuestion();
        } else if (answer === 'equal') {
            console.log(`Your magic number is ${guess}!`);
            rl.close();
        } else {
            console.log("Please answer with 'less', 'greater', or 'equal'.");
            askQuestion();
        }
    });
}

askQuestion();