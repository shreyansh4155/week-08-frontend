function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\.[a-zA-Z]{2})?$/;
    return emailRegex.test(email);
}

const email1 = "example@example.com";
const email2 = "example@example.co.uk";

console.log(validateEmail(email1)); 
console.log(validateEmail(email2)); 