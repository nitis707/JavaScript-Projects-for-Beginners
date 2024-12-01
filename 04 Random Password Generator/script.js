const passwordBox = document.querySelector("#password");
const btn = document.querySelector(".generatePass");
const copyPass = document.querySelector(".copyPass");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]<>/-=";
const allChars = upperCase + lowerCase + number + symbols;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

btn.addEventListener("click", () => {
    createPassword();
});


function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}

copyPass.addEventListener("click", () => {
    copyPassword();
})