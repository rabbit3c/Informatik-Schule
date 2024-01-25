console.log("Hello World");
let data= [1, 2, 4 ,5];

console.log(data);
console.log(data[0]);

data.push(7);
console.log(data);

data.pop();
console.log(data);

data.shift();
console.log(data);

let a = ["Hand", 7, true, [3, 5]];
console.log(a[0]);
a[1] = "Katze"
console.log(a);

for (let i = 0; i < a.length; i++) console.log(a[i]);

for (i in a) console.log(a[i]);

for (e of a) console.log(e); 

var b = a;
//a ist eigentlich nur eine Refernz auf das Array
//b ist nur eine zweite Referenz auf das gleiche Array a
console.log(b);

a[2] = "Maus";
console.log(b);

var c = a.concat();
console.log(c);

a[2] = "Schwein";
console.log(c);