// Password validation function
function password(str) {
    const hasUppercase = /[A-Z]/.test(str);
    const hasLowercase = /[a-z]/.test(str);
    const hasNumber = /[0-9]/.test(str);
    const isLongEnough = str.length >= 8;

    return hasUppercase && hasLowercase && hasNumber && isLongEnough;
}

// Test cases
const testPasswords = [
    { input: "Abcd1234", expected: true },
    { input: "Abcd123", expected: false },
    { input: "abcd1234", expected: false },
    { input: "ABCD1234", expected: false },
    { input: "AbcdefGhijKlmnopQRsTuvwxyZ1234567890", expected: true },
    { input: "Ab1!@#$%^&*()-_+={}[]|\\:;?/>.<,", expected: true },
    { input: "!@#$%^&*()-_+={}[]|\\:;?/>.<,", expected: false }
];

// Run tests
console.log("Password Validation Test Results:\n");

testPasswords.forEach(({ input, expected }, index) => {
    const result = password(input);
    const passFail = result === expected ? "✅ PASS" : "❌ FAIL";
    console.log(`${index + 1}. Input: "${input}" → Result: ${result} → Expected: ${expected} → ${passFail}`);
});
