const prompt = require('prompt-sync')();

console.log("Wähle eine Option:")
console.log("[1]: 23. November, Teiler etc.     [2]: 30. November, Fakultät etc.");

const option = parseInt(prompt('Option: '));

if (option == 1) {
    const number = parseInt(prompt('Number n: '));

    let teiler = [];
    let sum = 0;
    for (i = 1; i <= number; i++) {
        if (number % i == 0) {
            sum += i;
            teiler.push(i);
        }
    }
    console.log("Teiler: " + teiler);

    console.log("Summer aller Teiler: " + sum);

    let vollkommeneZahlen = [];
    for (n = 0; n <= 10000; n++) {
        if (isPerfect(n)) vollkommeneZahlen.push(n);
    }

    console.log("Vollkommene Zahlen: " + vollkommeneZahlen);
}
else if (option == 2) {
    const n = parseInt(prompt('Number n: '));
    console.log(n + "! = " + fak(n));

    const k = parseInt(prompt('Number k: '));
    console.log(binomialKoeffizient(n, k));

    const p = parseInt(prompt('Number p: '));
    console.log(b(n, k, p));

    const k2 = parseInt(prompt('Number k2: '));
    console.log(f(n, k, k2, p));

    const number = parseInt(prompt('Number: '))
    if (isPrime(number)) console.log(number + " is prime");
    else console.log(number + " is not prime");
}


function fak(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) result *= i;
    return result;
}

function binomialKoeffizient(n, k) {
    if (k < n) {
        let result = 1;
        let nMinusK = n - k;
        let start = k > nMinusK ? k : nMinusK;

        for (let i = start + 1; i <= n; i++) result *= i;
        return result / fak(n - start);
    }
    else if (k == n) {
        return 1;
    }
    else {
        return fak(n) / (fak(k) * fak(n - k));
    }
}

function b(n, k, p) {
    return binomialKoeffizient(n, k) * p**n * (1 - p)**(n - k);
}

function f(n, k1, k2, p) {
    let sum = 0;
    for (let k = k1; k <= k2; k++) sum += b(n, k, p);
    return sum;
}

function isPrime(n) {

    if (n == 0) return true;

    if (n == 1) {
        console.log("Fuck you Aylin");
        return false;
    }

    if (n != 2 && n % 2 == 0) return false;

    let limit = Math.sqrt(n)
    for (let i = 3; i <= limit; i+=2) {
        if (n % i == 0) return false;
    }
    return true;
}

function isPerfect(n) {
    let sum = 0;
    let limit = Math.floor(Math.sqrt(n));
    for (i = 0; i < limit; i++) {
        if (n % i != 0) continue;
        sum += i;
        if (i == 1) continue;
        if (Math.sqrt(n) == i) continue;
        sum += n / i;
        if (n - sum < i + 1);
    }
    if (sum == n) return true;
    return false;
}

