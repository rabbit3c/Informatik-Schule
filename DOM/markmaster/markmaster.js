let dropdown = document.getElementById("dropdown")
let add_weight = document.getElementById("weight")
let add_mark = document.getElementById("mark")
let outputAverage = document.getElementById("average")
let outputMark = document.getElementById("required-mark")

let average = 6
let currentAverage = 0
let currentWeight = 0

function calculateMark() {
    let requiredMark = (average - 0.25) * (currentWeight + 1) - currentAverage * currentWeight
    outputMark.innerHTML = requiredMark
}

function changeWantedAverage(newAverage) {
    dropdown.innerHTML = newAverage
    average = newAverage

    calculateMark()
}

function addMark() {
    let mark = parseFloat(add_mark.value)
    let weight = parseFloat(add_weight.value)

    add_mark.value = ""
    add_weight.value = 1

    calculateAverage(mark, weight)
    calculateMark()
}

function calculateAverage(mark, weight) {
   currentAverage = (currentAverage * currentWeight + mark * weight) / (currentWeight + weight)
   currentWeight += weight

    outputAverage.innerHTML = currentAverage
}