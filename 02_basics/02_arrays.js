marvel_heroes = ['Ironman', 'Thor', 'CaptainAmerica', 'SpiderMan']
dc_heroes = ['Superman', 'Batman', 'Joker', 'Flash']

// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);  // pushes entire array of dc_heroes as the 4 element in marvel_heroes array
// console.log(marvel_heroes[4]);
// console.log(marvel_heroes[4][2]);
// console.log(marvel_heroes[2]);

const hollywood_heroes = marvel_heroes.concat(dc_heroes)
// console.log(hollywood_heroes);
// concats two strings together but doesn't add up more simultaneously

const newHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(newHeroes);
// does the same thing as concat but adds more than two arrays together 
// ...array => breaks every element inside an array


const crazy_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// this array has lots of nested arrays 
// to solve this we can use
// console.log(crazy_array);
const oneD_array = crazy_array.flat(Infinity)
// console.log(oneD_array);
// flattens an array into 1D array


// to check if an variable/ data is an array
// console.log(Array.isArray(marvel_heroes));
// console.log(Array.isArray('Aditya'));

// to convert an variable/ data into an array (for iteration)
// console.log(Array.from('Aditya'));
// console.log(Array.from({name: "ADITYA"}));  // can't create an array


// A set of elements to include in the new array object.
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
console.log(Array.of(score1, score2, score3, score1, score1,score1));
