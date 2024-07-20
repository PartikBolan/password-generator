const generate = document.getElementById('generate');
const passLength = document.getElementById('length');
const specialChars = document.getElementById('special');
const digit = document.getElementById('number');
const lowerCase = document.getElementById('lowercase');
const upperCase = document.getElementById('uppercase');
const showPassword = document.getElementById('show-password');
const copyPassword = document.getElementById('copy');

const genSpecialChars = () => {
    const options = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '-', '_', '+', '=', ':', ';', '\'', '"', '\\', '|', '<', '>', '?', ',', '.', '/', '?']
    const randIndex = Math.floor(Math.random() * options.length)
    return options[randIndex]
}
const genDigits = () => {
    return Math.floor(Math.random() * 10)
}
const genLowerCase = () => {
    const options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const randIndex = Math.floor(Math.random() * options.length)
    return options[randIndex]
}
const genUpperCase = () => {
    const options = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const randIndex = Math.floor(Math.random() * options.length)
    return options[randIndex]
}
const randomNumber = (length) => {
    return Math.floor(Math.random() * length)
}
const generatePassword = () => {
    if (!(specialChars.checked) && !(digit.checked) && !(lowerCase.checked) && !(upperCase.checked)) {
        alert("Please select at least one choice")
    } else if (passLength.value === null || passLength.value === '' || passLength.value < 0) {
        alert("Please specify the length of the password.")
    }
    else if (isNaN(passLength.value)) {
        alert("Please enter a valid number for the length of the password.")
    }
    else {
        let password = ''
        let passwordOptions = []
        if (specialChars.checked) {
            passwordOptions.push(genSpecialChars)
        }
        if (digit.checked) {
            passwordOptions.push(genDigits)
        }
        if (lowerCase.checked) {
            passwordOptions.push(genLowerCase)
        }
        if (upperCase.checked) {
            passwordOptions.push(genUpperCase)
        }
        for (let i = 0; i < passLength.value; i++) {
            const tempPass = passwordOptions[randomNumber(passwordOptions.length)]
            password += tempPass()
        }
        showPassword.style.opacity = 0;
        setTimeout(() => {
            showPassword.innerText = password
            showPassword.style.opacity = 1;
            copyPassword.classList.remove('hidden');
            copyPassword.classList.add('visible');
        }, 300)
    }
}

const copyPassowrdToClipboard = () => {
    const password = document.getElementById("show-password").innerText;
    navigator.clipboard.writeText(password)
    copyPassword.classList.remove('visible');
    copyPassword.classList.add('hidden');
}

generate.addEventListener('click', generatePassword);
copyPassword.addEventListener('click',copyPassowrdToClipboard);