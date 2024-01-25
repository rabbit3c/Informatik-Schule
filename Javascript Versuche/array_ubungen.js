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

console.log(makeRandomArray(0, 70, 100));
