function validatePINCode(pinCode) {
    const pinCodePattern = /^[0-9]{6}$/;
    return pinCodePattern.test(pinCode);
}

const testPIN = "400088B";
if (validatePINCode(testPIN)) {
    console.log("Valid PIN code");
} else {
    console.log("Invalid PIN code");
}