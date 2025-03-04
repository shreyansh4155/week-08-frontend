function validateEmail(email) {
    const regex = /^([a-zA-Z0-9._%+-]+)@bridgelabz\.([a-zA-Z0-9.-]+)\.co$/;
    return regex.test(email);
}
const email = "example@bridgelabz.co";
console.log(validateEmail(email)); 