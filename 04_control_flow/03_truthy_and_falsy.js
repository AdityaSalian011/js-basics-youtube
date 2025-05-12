// const username = 'aditya' // true statement
// const username = '' // false statement
// const username = ' ' // true statement
const username = [] // true statement


// if(username){
//     console.log('Got username');
// } else{
//     console.log('Username not found');
// }

// falsy values
// false, 0, -0, 0n, '', null, undefined, NaN 

// all other values are trutsy values
// trusty values (some example)
// true, '0', 'false', ' ', [], {}, function(){} <= empty function

// how to check if an array is empty or not
const myArray = []

// if(myArray.length===0){
//     console.log('Empty array');
// }

// to check if an object is empty or not
const myObj = {}

// if(Object.keys(myObj).length===0){ // Object.keys(myObj) return an array
//     console.log('Empty Object');
// }


// Nullish Coalescing Operator (??): null undefined

// this is used when neglecting use of null and undefined values in a variable
let val1; // undefined
val1 = 5 ?? 10 // gives priority to first non-null or defined value
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

console.log(val1);


// Terniary Operator

// condition ? true: false
// eg

const score = 40
score >= 50 ? console.log('Score greater than 50'): console.log('Score less than 50');
 
