//Install extension Code runner 

var x = 10;
/*console.log("Die Zahl " + x + " ist eine schöne Zahl.")
x++;
console.log(x);
console.log(Math.sqrt(7));
console.log(Math.floor(7.8)); //abrunden
console.log(Math.ceil(7.1)); //aufrunden
console.log(Math.round(3.5)); //runden
console.log(Math.PI);
console.log(Math.sin(30/180*Math.PI));
console.log(Math.random()) //Zufallszahl zwischen 0 und 1*/

var passwort = "1234";

if (passwort == "1234") {
    console.log("Sie sind drin");
}
else console.log("Falsches Passwort du Idiot!111!!1");

var note = 5;
if (note >= 5.5) console.log("Sehr gut");
else if (note >= 4) console.log("Genügend");
else console.log("Ungenügend")

const prompt = require('prompt-sync')();
const weight = prompt('Your weight: ');
const height = prompt('Your height: ');
  

let bmi = weight / height**2;
console.log(bmi);

if (bmi < 19) console.log("Sie sind untergewichtig");
else if (bmi < 25) console.log("Normalgewicht")
else ("Sie sind übergewichtig");
