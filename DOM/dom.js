let out1 = document.getElementById("out1");
let button1 = document.getElementById("button1");
let out2 = document.getElementById("out2");
let in1 = document.getElementById("in1");
let out3 = document.getElementById("out3");
let in2 = document.getElementById("in2");
let form = document.getElementById("form");

let months = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
];

let days = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag",
    "Sonntag",
];

button1.addEventListener("click", button1Pressed);
form.addEventListener("submit", button1Pressed);

function button1Pressed(event) {
    event.preventDefault();
    button1.style.color = "red";
    button1.innerHTML = "Autsch!";
    out2.innerHTML = "Ihr Lieblingsfach ist " + in1.value;
    let date = new Date(in2.value);
    let now = new Date().getTime();
    let ageMilliseconds = now - date.getTime();
    let ageDays = Math.floor(ageMilliseconds / 1000 / 60 / 60 / 24);
    out3.innerHTML = `Ihr Geburtstagdatum ist am ${days[date.getDay()]
        } den ${date.getDate()}. ${months[date.getMonth()]
        } ${date.getFullYear()} </br> 
                Sie sind ${ageDays} Tage alt. </br>
                Sie haben ${Math.floor((ageDays * 105) / 60 / 24)} Tage lang gegessen oder getrunken. </br>
                Sie waren für ${Math.floor((ageDays * 6) / 60 / 24)} Tage unter der Dusche. </br>`;
    setTimeout(button1Reset, 5000)
}

function button1Reset() {
    button1.style.color = "black";
    button1.innerHTML = "Drück mich";
}

function button2Pressed() {
    out1.style.color = "black";
    out1.style.fontSize = "16px";
    out1.innerHTML = "Der Schmerz hat nachgelassen";
}