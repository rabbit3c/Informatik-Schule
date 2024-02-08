let s = "Hallo Welt"
let e = "Es fand sie \"interessant\""
console.log(s);
for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
}
for (let b of s) {
    console.log(b);
}
s = s + "!";
s = "Hoi " + s;
console.log(s);

let s2 = s.slice(4 , 5);
console.log(s2);
console.log(s.slice(4));
console.log(s.slice(-4));

console.log(s.indexOf("a"));
console.log(s.indexOf("x"));

console.log(s.split(""));
console.log(s.split(" "));

let sArr = s.split("");
sArr[0]= "P"
s = sArr.join("")
console.log(s);