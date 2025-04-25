function password(str) {
    // Check for minimum length of 8
    if (str.length < 8) return "Invalid password";

    // Regular expressions to check each requirement
    const hasUpperCase = /[A-Z]/.test(str);
    const hasLowerCase = /[a-z]/.test(str);
    const hasNumber = /[0-9]/.test(str);

    // Return message based on validation
    if (hasUpperCase && hasLowerCase && hasNumber ) {
        return "Valid password";
    } else {
        return "Invalid password";
    }
}
console.log(password("Abcd1234")); 
console.log(password("Abcd123"));  
console.log(password("abcd1234")); 
console.log(password("ABCD1234")); 
console.log(password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890")); 
console.log(password("Ab1!@#$%^&*()-_+={}[]|\\:;?/>.<,")); 
console.log(password("!@#$%^&*()-_+={}[]|\\:;?/>.<,")); 

