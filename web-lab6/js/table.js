const form = document.getElementById("registration-form");
const table = document.getElementById("table");
const tbody = table.querySelector("tbody");

function addData() {
    const phoneInput = document.getElementById("phone");
    const genderInput = document.querySelector('input[name="gender"]:checked');

    const fileInput = document.getElementById("fileInput");

    const inputs = [
        emailInput,
        passwordInput,
        surnameInput,
        nameInput,
        middleNameInput,
        dobInput,
        groupInput,
        phoneInput,
        genderInput,
        fileInput
    ];

    if (
        !validateEmail(inputs[0].value) ||
        validatePassword(inputs[1].value) ||
        !validateSurname(inputs[2].value) ||
        !validateName(inputs[3].value) ||
        !validateMiddleName(inputs[4].value) ||
        !validateDob(inputs[5].value) ||
        !validateGroup(inputs[6].value)
    ) {
        alert("Неправильно введені дані");
        return;
    }

    const row = tbody.insertRow();

    const checkboxCell = row.insertCell(0);
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkboxCell.appendChild(checkbox);

    for (let i = 0; i < inputs.length; i++) {
        const cell = row.insertCell(i + 1);
        cell.innerHTML = inputs[i].value;
    }

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "radio") {
            inputs[i].checked = false;
        } else {
            inputs[i].value = "";
        }
    }
}

function performAction(action) {
    const checkboxes = document.querySelectorAll(
        "input[type='checkbox']:checked"
    );
    checkboxes.forEach((checkbox) => {
        const row = checkbox.parentElement.parentElement;
        if (action === "delete") {
            tbody.removeChild(row);
        } else if (action === "duplicate") {
            const newRow = row.cloneNode(true);
            tbody.appendChild(newRow);
        }
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addData();
});