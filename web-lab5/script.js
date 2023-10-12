function calculate() {
    const lengthInput = document.getElementById("length");
    const widthInput = document.getElementById("width");
    const perimeterSpan = document.getElementById("perimeter");
    const areaSpan = document.getElementById("area");
    const diagonalSpan = document.getElementById("diagonal");

    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);

    if (!isNaN(length) && !isNaN(width) && length > 0 && width > 0) {
        const perimeter = 2 * (length + width);
        const area = length * width;
        const diagonal = Math.sqrt(Math.pow(length, 2) + Math.pow(width, 2));

        perimeterSpan.textContent = perimeter % 1 === 0 ? perimeter.toFixed(0) : perimeter.toFixed(2);
        areaSpan.textContent = area % 1 === 0 ? area.toFixed(0) : area.toFixed(2);
        diagonalSpan.textContent = diagonal % 1 === 0 ? diagonal.toFixed(0) : diagonal.toFixed(2);
    } else {
        perimeterSpan.textContent = "Помилка";
        areaSpan.textContent = "Помилка";
        diagonalSpan.textContent = "Помилка";
    }
}

function sendMessage() {
    const inputElement = document.getElementById("user1-input");
    const messageText = inputElement.value;
    const messageContainer = document.getElementById("chat");

    if (messageText.trim() !== "") {
        const message = document.createElement("div");
        message.className = "messageUser1";
        message.innerHTML = "User1: " + messageText;
        messageContainer.appendChild(message);

        inputElement.value = "";
    }
}

function sendMessage2() {
    const inputElement = document.getElementById("user2-input");
    const messageText = inputElement.value;
    const messageContainer = document.getElementById("chat");

    if (messageText.trim() !== "") {
        const message = document.createElement("div");
        message.className = "messageUser2";
        message.innerHTML = "User2: " + messageText;
        messageContainer.appendChild(message);

        inputElement.value = "";
    }
}

function transliterateText() {
    const ukrainianText = document.getElementById("ukrainianText").value;
    const transliteratedText = transliterate(ukrainianText);
    document.getElementById("transliteratedText").value = transliteratedText;
}

function transliterate(text) {
    const ukrainianToLatin = {
        а: "a",
        б: "b",
        в: "v",
        г: "h",
        ґ: "g",
        д: "d",
        е: "e",
        є: "ie",
        ж: "zh",
        з: "z",
        и: "y",
        і: "i",
        ї: "yi",
        й: "i",
        к: "k",
        л: "l",
        м: "m",
        н: "n",
        о: "o",
        п: "p",
        р: "r",
        с: "s",
        т: "t",
        у: "u",
        ф: "f",
        х: "kh",
        ц: "ts",
        ч: "ch",
        ш: "sh",
        щ: "shch",
        ь: "'",
        ю: "iu",
        я: "ia",
        А: "A",
        Б: "B",
        В: "V",
        Г: "H",
        Ґ: "G",
        Д: "D",
        Е: "E",
        Є: "Ye",
        Ж: "Zh",
        З: "Z",
        И: "Y",
        І: "I",
        Ї: "Yi",
        Й: "I",
        К: "K",
        Л: "L",
        М: "M",
        Н: "N",
        О: "O",
        П: "P",
        Р: "R",
        С: "S",
        Т: "T",
        У: "U",
        Ф: "F",
        Х: "Kh",
        Ц: "Ts",
        Ч: "Ch",
        Ш: "Sh",
        Щ: "Shch",
        Ь: "'",
        Ю: "Iu",
        Я: "Ia",
    };

    return text.replace(/./g, function (char) {
        return ukrainianToLatin[char] || char;
    });
}

function calculateDayOfWeek() {
    const birthdateInput = document.getElementById("birthdate");
    const dayOfWeekSpan = document.getElementById("dayOfWeek");

    const date = new Date(birthdateInput.value);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const a = Math.floor((14 - month) / 12);
    const y = year - a;
    const m = month + 12 * a - 2;
    const dayOfWeek = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;

    dayOfWeekSpan.textContent = getDayOfWeekName(dayOfWeek);
}

function getDayOfWeekName(dayOfWeek) {
    const daysOfWeek = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    return daysOfWeek[dayOfWeek];
}