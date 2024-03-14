let matrix = [];
let vector = [];
const prompt = require('prompt-sync')();

matrix = getMatrix();
console.log(matrix);

vector = getVector();
console.log(vector);

multiply(matrix, vector);

function multiply(matrix, vector) {
    console.log(`Multiplying the matrix with the vector...`);
    let resultVector = [];
    for (let y = 0; y < matrix.length; y++) {
        let number = 0;
        for (let x = 0; x < matrix[0].length; x++) {
            number += matrix[y][x] * vector[x];
        }
        resultVector.push(number);
    }
    console.log("The result is:");
    console.log(resultVector);
    return resultVector;
}

function getMatrix() {
    console.log("Declare Matrix");

    let newMatrix = [];
    for (let i = 0; i < 3; i++) {
        let line = [];
        for (let j = 0; j < 3; j++) {
            let number = parseInt(prompt(`${j}, ${i}: `));
            line.push(number);
        }
        newMatrix.push(line);
    }
    return newMatrix;
}

function getVector() {
    console.log("Declare Vector");

    let newVector = [];
    for (let i = 0; i < 3; i++) {
        let number = parseInt(prompt(`${i}: `));
        newVector.push(number);
    }
    return newVector
}