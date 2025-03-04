function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+$/;
    const mandatoryPart = "bridgelabz";

    if (emailPattern.test(email)) {
        const domainPart = email.split('@')[1];
        if (domainPart && domainPart.includes(mandatoryPart)) {
            return true;
        }
    }
    return false;
}

const email = "example@bridgelabz.com";
console.log(validateEmail(email)); 