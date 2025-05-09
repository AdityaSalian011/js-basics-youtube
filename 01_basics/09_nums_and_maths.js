const score = 100
// console.log(score);

let balance = new Number(400)
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);

balance = 400.2375
// console.log(balance.toFixed(2));  // rounds up till given integer
 
let otherNumber = 1123.8966
// console.log(otherNumber.toPrecision(3));  // gives priority to numbers before decimal

const hundreds = 1000000
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-IN'))

// ++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4));
// console.log(Math.round(4.2));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.99));
// console.log(Math.min(3,9,8,5,4,1));
// console.log(Math.max(3,9,8,5,4,1));

// console.log(Math.random());
// console.log(Math.random()*10);
// console.log((Math.random()*10)+1);
// console.log(Math.floor((Math.random()*10)+1))

min = 1
max = 6

console.log(Math.floor(Math.random()*(max - min + 1))+min);
