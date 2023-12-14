function validateEmail(email) {
    if (!/^\S+@\S+\.\S+$/.test(email)) {
        return "Невірний формат email";
    }
}

function validatePassword(password) {
    if (password.length < 8) {
        return "Пароль повинен містити принаймні 8 символів";
    } else if (!password.match(/[0-9]/)) {
        return "Пароль має містити принаймні одну цифру";
    } else if (!password.match(/[A-Z]/)) {
        return "Пароль має містити принаймні одну заголовну літеру";
    }
}

function validateSurname(surname) {
    if (
        surname.length < 2 ||
        /[0-9]/.test(surname) ||
        surname.indexOf("-") !== surname.lastIndexOf("-")
    ) {
        return  "Невірний формат прізвища";
    }
}

function validateName(name) {
    if (
        name.length < 2 ||
        /[0-9]/.test(name) ||
        name.indexOf("-") !== name.lastIndexOf("-")
    ) {
        return "Невірний формат імені";
    }
}

function validatePhone(phone) {
    const phoneRegex = /^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;

    if (!phoneRegex.test(phone)) {
        return "Невірний формат номера телефону";
    }
}

export {
    validateEmail,
    validatePassword,
    validateSurname,
    validateName,
    validatePhone
}