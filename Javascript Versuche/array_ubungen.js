let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

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

function shuffleString(string) {
    let array = string.split("");
    for (let  i = 0; i < 100; i++) {
        let j = Math.floor(Math.random() * array.length);
        let l = Math.floor(Math.random() * array.length);
        let element1 = array[j];
        array[j] = array[l];
        array[l] = element1;
    }
    return array.join("");
}

function carefulMix(string) {
    let array = string.split("");
    for (let i = 0; i < 100; i++) {
        let j = Math.floor(Math.random() * (array.length - 2)) + 1;
        let l = Math.floor(Math.random() * (array.length - 2)) + 1;
        let element1 = array[j];
        array[j] = array[l];
        array[l] = element1;
    }
    return array.join("");
}

function shuffle(text) {
    let array = text.split(" ");
    for (let i = 0; i < array.length; i++) {
        array[i] = carefulMix(array[i]);
    }
    return array.join(" ");
}


let randomArray = makeRandomArray(0, 70, 100);
console.log(randomArray);
console.log(findMin(randomArray));
console.log(shuffleString("Aylin"));
console.log(carefulMix("Aylin"));
console.log(shuffle("Arbeite jetzt Aylin endlich. Ich will Piggytype spielen können"))