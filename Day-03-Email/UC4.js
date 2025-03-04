function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const optionalPartRegex = /^[a-zA-Z0-9._%+-]+$/;

    if (!emailRegex.test(email)) {
        return false;
    }

    const optionalPart = email.split('@')[0].split('.')[1];
    if (optionalPart && !optionalPartRegex.test(optionalPart)) {
        return false;
    }

    return true;
}

console.log(validateEmail("abc.xyz@bridgelabz.co.in")); 
console.log(validateEmail("abc@bridgelabz.co.in")); 
console.log(validateEmail("abc.x_yz@bridgelabz.co.in")); 
console.log(validateEmail("abc.x+yz@bridgelabz.co.in")); 
console.log(validateEmail("abc.x-yz@bridgelabz.co.in")); 
console.log(validateEmail("abc.x*yz@bridgelabz.co.in")); 