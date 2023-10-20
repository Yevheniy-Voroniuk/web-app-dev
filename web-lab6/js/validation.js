const emailInput = document.getElementById("email")
const emailError = document.getElementById("emailError")
const passwordInput = document.getElementById("password")
const passwordError = document.getElementById("passwordError")
const surnameInput = document.getElementById("surname")
const surnameError = document.getElementById("surnameError")
const nameInput = document.getElementById("name")
const nameError = document.getElementById("nameError")
const middleNameInput = document.getElementById("middleName")
const middleNameError = document.getElementById("middleNameError")
const dobInput = document.getElementById("dob")
const dobError = document.getElementById("dobError")
const groupInput = document.getElementById("group")
const groupError = document.getElementById("groupError")
const phoneInput = document.getElementById("phone")
const phoneError = document.getElementById("phoneError")
const maleRadio = document.getElementById("male");
const femaleRadio = document.getElementById("female");
const genderError = document.getElementById("genderError")

emailInput.addEventListener("input", function() {
    const emailAddress = emailInput.value
    const isValidEmail = validateEmail(emailAddress)

    if (isValidEmail) {
        emailError.style.display = "none"
    } else {
        emailError.innerHTML = "Некоректна адреса"
        emailError.style.display = "block"
    }
})

function validateEmail(email) {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/

    if (email === "") {
        return false;
    }

    return emailRegex.test(email)
}

passwordInput.addEventListener("input", function () {
    const error = validatePassword(passwordInput.value)

    if (error) {
        passwordError.innerHTML = error;
        passwordError.style.display = "block"
    } else {
        passwordError.style.display = "none"
    }
})

function validatePassword(password) {
    if (password.length < 8) {
        return "Пароль має містити не менше 8 символів"
    }

    if (!password.match(/[0-9]/)) {
        return "Пароль має містити принаймні одну цифру"
    }

    if (!password.match(/[A-Z]/)) {
        return "Пароль має містити принаймні одну заголовну літеру"
    }

    return null;
}

surnameInput.addEventListener("input", function() {
    const isValidSurname = validateSurname(surnameInput.value)

    if (!isValidSurname) {
        surnameError.innerHTML = "Некоректно введене прізвище"
        surnameError.style.display = "block"
    } else {
        surnameError.style.display = "none"
    }
})

nameInput.addEventListener("input", function() {
    const isValidName = validateName(nameInput.value)

    if (!isValidName) {
        nameError.innerHTML = "Некоректно введене ім'я"
        nameError.style.display = "block"
    } else {
        nameError.style.display = "none"
    }
})

middleNameInput.addEventListener("input", function() {
    const isValidMiddleName = validateMiddleName(middleNameInput.value)

    if (!isValidMiddleName) {
        middleNameError.innerHTML = "Некоректно введене по-батькові"
        middleNameError.style.display = "block"
    } else {
        middleNameError.style.display = "none"
    }
})

function validateName(name) {
    if (name === "") {
        return false;
    }

    return !/[^a-zA-Zа-яА-ЯіІїЇєЄґҐ]+/.test(name) && name.length >= 2
}

function validateSurname(surname) {
    if (surname === "") {
        return false;
    }

    return !/[^a-zA-Zа-яА-ЯіІїЇєЄґҐ]+/.test(surname) && surname.length >= 2
}

function validateMiddleName(middleName) {
    if (middleName === "") {
        return false;
    }

    return !/[^a-zA-Zа-яА-ЯіІїЇєЄґҐ]+/.test(middleName) && middleName.length >= 2
}

dobInput.addEventListener("input", function() {
    const isValidDob = validateDob(dobInput.value)

    if (!isValidDob) {
        dobError.innerHTML = "Некоректна дата народження"
        dobError.style.display = "block"
    } else {
        dobError.style.display = "none"
    }
})

function validateDob(dob) {
    if (dob === "") {
        return false
    }

    const today = new Date()
    const dobDate = new Date(dob)

    return dobDate <= today
}

groupInput.addEventListener("change", function() {
    const isValidGroup = validateGroup(groupInput.value)

    if (!isValidGroup) {
        groupError.innerHTML = "Будь ласка, оберіть групу"
        groupError.style.display = "block"
    } else {
        groupError.style.display = "none"
    }
})

function validateGroup(group) {
    if (group === "") {
        return false
    }

    const availableGroups = ["IA-21", "IA-22", "IA-23", "IA-24"]
    return availableGroups.includes(group)
}

phoneInput.addEventListener("input", function() {
    const inputValue = phoneInput.value;
    const phonePattern = /^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/

    if (!phonePattern.test(inputValue)) {
        phoneError.innerHTML = "Будь ласка, уведіть номер телефону повністю"
        phoneError.style.display = "block"
    } else {
        phoneError.style.display = "none"
    }
})

function genderChange() {
    if (!maleRadio.checked && !femaleRadio.checked) {
        genderError.innerHTML = "Необходимо выбрать пол";
        genderError.style.display = "block";
    } else {
        genderError.style.display = "none";
    }
}

maleRadio.addEventListener("change", genderChange);
femaleRadio.addEventListener("change", genderChange);


const submitButton = document.getElementById("submitButton")

submitButton.addEventListener("click", function(event) {
    const isEmailValid = validateEmail(emailInput.value)
    const isPasswordValid = !validatePassword(passwordInput.value)
    const isSurnameValid = validateSurname(surnameInput.value)
    const isNameValid = validateName(nameInput.value)
    const isMiddleNameValid = validateMiddleName(middleNameInput.value)
    const isDobValid = validateDob(dobInput.value)
    const isGroupValid = validateGroup(groupInput.value)
    const inputValue = phoneInput.value
    const phonePattern = /^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/
    const isPhoneValid = phonePattern.test(inputValue)
    const isGenderValid = maleRadio.checked || femaleRadio.checked;

    if (
        isEmailValid &&
        isPasswordValid &&
        isSurnameValid &&
        isNameValid &&
        isMiddleNameValid &&
        isDobValid &&
        isGroupValid &&
        isPhoneValid &&
        isGenderValid
    ) {
        return true
    } else {
        event.preventDefault()
        emailError.innerHTML = "Некоректна адреса"
        passwordError.innerHTML = "Некоректний пароль"
        surnameError.innerHTML = "Некоректно введене прізвище"
        nameError.innerHTML = "Некоректно введене ім'я"
        middleNameError.innerHTML = "Некоректно введене по-батькові"
        dobError.innerHTML = "Некоректна дата народження"
        groupError.innerHTML = "Будь ласка, оберіть групу"
        phoneError.innerHTML = "Будь ласка, уведіть номер телефону повністю"
        genderError.innerHTML = "Оберіть стать"
    }
})