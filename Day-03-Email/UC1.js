function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@bridgelabz\.co$/;
    return regex.test(email);
}

// Test the function
const email = "abc@bridgelabz.co";
console.log(validateEmail(email)); 