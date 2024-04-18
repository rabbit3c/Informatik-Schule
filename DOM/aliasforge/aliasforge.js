var button_click = document.getElementById("button-click");
var display = document.getElementById("output");
var dropdown = document.getElementById("dropdown");

let adjectives = [];
let nouns = [];

let interval;

let letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];

loadJson("./nicknames.json");

function loadJson(path) {
    fetch(path)
        .then((response) => response.json())
        .then((json) => {
            adjectives = json.adjectives;
            nouns = json.nouns;
        });
}

function changeLists(number) {
    switch (number) {
        case 0:
            loadJson("./nicknames.json");
            dropdown.innerHTML = "Normal";
            break;
        case 1:
            loadJson("./nicknames_sexual.json");
            dropdown.innerHTML = "Sexy";
            break;
        case 2:
            loadJson("./nicknames_dark.json");
            dropdown.innerHTML = "Dark";
            break;
    }
}

function generateNickname() {
    clearInterval(interval)
    
    let randomAdjective = randomElement(adjectives);
    let randomNoun = randomElement(nouns);

    let nickname = randomAdjective + randomNoun;
    console.log(nickname);

    animationChangingCharacters(nickname);
}

function animationChangingCharacters(nickname) {
    let output = "";
    for (let i = 0; i < nickname.length; i++) {
        output += randomElement(letters);
    }
    display.innerHTML = output;

    let outputArray = output.split("");

    let i = 0
    let j = letters.indexOf(output[i]);
    interval = setInterval(changeCharacter, 20);

    function changeCharacter() {
        if (j == letters.length) {
            j = 0;
            return;
        }

        outputArray[i] = letters[j];

        if (letters[j] == nickname[i].toLowerCase()) {
            outputArray[i] = nickname[i];
            display.innerHTML = outputArray.join("");
            if (i < nickname.length) {
                i++
                j = letters.indexOf(output[i]);
                return;
            }
            clearInterval(interval);
            return;
        }

        display.innerHTML = outputArray.join("");
        j++;
    }
}

function randomElement(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}
