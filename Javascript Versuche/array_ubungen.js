let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
let punctuations = [".", ",", ":", "?", "!", ";", "-"]

function showDate(day, month, year) {
    console.log(`${day}. ${months[month - 1]}. ${year}`)
}

showDate(24, 11, 2005);

function makeRandomArray(min, max, amount) {
    let randomArray = [];
    for (let n = 0; n < amount; n++) {
        let randomFloat = Math.random() * (max - min) + min
        randomArray.push(Math.floor(randomFloat));
    }
    return randomArray;
}

function findMin(array) {
    let min = array[0];
    for (let i = 0; i < array.length; i++) {
        if (min > array[i]) min = array[i];
    }
    return min;
}

function exchangeValues(a, b) {
    b = [a, a = b][0];
    return [a, b];
}

function shuffleString(string) {
    let array = string.split("");
    for (let  i = 0; i < 100; i++) {
        let j = Math.floor(Math.random() * array.length);
        let l = Math.floor(Math.random() * array.length);
        let element1 = array[j];
        array[j] = array[l];
        array[l] = element1;
    } //Alternativ auch array = array.sort(() => Math.random() - 0.5)
    return array.join("");
}

function carefulMix(string) {
    let array = string.split("");
    let punctFirst = "";
    let punctLast = "";
    if (punctuations.indexOf(array[-1]) != -1) {
        punctLast = array[-1];
        array.splice(-1, 1);
    }
    if (punctuations.indexOf(array[0]) != -1) {
        punctLast = array[0];
        array.splice(0, 1);
    }

    for (let i = array.length - 2; i > 0; i--) { //Fisher - Yates Shuffle Algorithm
        let n = Math.floor(Math.random() * i) + 1;

        if (i == n) continue;

        [array[n], array[i]] = exchangeValues(array[n], array[i]);
    }

    string = array.join("");
    string = punctFirst + string + punctLast;
    return string;
}

function shuffle(text) {
    let array = text.split(" ");
    for (let i in array) {
        array[i] = carefulMix(array[i]);
    }
    return array.join(" ");
}


let randomArray = makeRandomArray(0, 70, 100);
console.log(randomArray);
console.log(findMin(randomArray));
console.log(shuffleString("Aylin"));
console.log(carefulMix("Aylin"));
console.log(shuffle("Bitte Laptop Deckel schliessen!"));
console.log(shuffle("Haben sie das in Mathe schon gemacht?"));
console.log(shuffle("Der Sinn des Lebens besteht nicht darin, ein erfolgreicher Mensch zu sein, sondern ein wertvoller."));
