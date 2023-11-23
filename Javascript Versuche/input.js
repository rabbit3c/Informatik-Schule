/*https://www.youtube.com/watch?v=M6bJUzfhVXA or better  https://www.youtube.com/watch?v=x_2sYpk75Ic
check if nodejs is installed: eingabeaufforderung "node --version"
new Terminal "npm install prompt-sync"
js const prompt=require("prompt-sync")({sigint:true});
oder 
const prompt=require("prompt-sync")();
Ausgabe umleiten ins Terminal:
studio file/preference/settings/ type "run in terminal" / unten code runner run in terminal check box
*/
const prompt=require("prompt-sync")();
let name=prompt("Wie heisst du?");
console.log(name+" ist ein schöner Name.");
