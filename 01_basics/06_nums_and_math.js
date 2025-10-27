const score = 400
//console.log(score);

const balance = new Number(100)
//console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(2));

const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3))   //if i will pass 3 then i will maintain in 3 digits only
// console.log(otherNumber.toPrecision(4))  //123.9
// console.log(otherNumber.toPrecision(5))  //123.90
// console.log(otherNumber.toPrecision(2))  //1.2e+2

const hundreds = 1000000
//console.log(hundreds.toLocaleString('en-IN'))


//++++++++++++++++++++++  Maths  ++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));   //- negative will be possitive but possitive will be possitive
// console.log(Math.round(4.6));  // round of value like if 4.4 then 4
// console.log(Math.ceil(4.2));   //like if even 4.1 or 4.9 then also 5
// console.log(Math.floor(4.9));    // floor value like first 4
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,2,8))

console.log(Math.random());
console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)