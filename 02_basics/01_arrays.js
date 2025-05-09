// Arrays in JavaScript


let cars = ['Toyota', 'Skoda', 'Volkswagen', 'Audi', 'BMW']
let heroes = new Array('Thor', 'Ironman', 'Thanos', 'Hulk', 'CaptainAmerica', 'Hela')

// console.log(cars[2]);

// methods
// console.log(heroes);

heroes.push('Loki')  // adds new element at ending index
// console.log(heroes);

// console.log(cars);  // removes last element from an array

cars.pop()
// console.log(cars);


// console.log(cars);
// not used often as it is computationally expensive
cars.unshift('Mahindra')  // adds new element at the beginning of an array 
// console.log(cars);

cars.shift() // removes first element from an array
// console.log(cars);


// to check if an element exists in an array
// console.log(heroes.includes('Hela'));
// console.log(heroes.includes('SpiderMan'));

// to check index of an element
// console.log(cars.indexOf('Volkswag ;  // => -1 as the element named Mahindra doesn't exists thus returning -1


const newArray = heroes.join() // converts array into string

// console.log(heroes);
// console.log(newArray);


// Difference between slice and splice
console.log('A', cars); // Original array

const arr1 = cars.slice(1,3)

console.log(arr1);
console.log('B', cars); // Array after slice
// No difference in the original data

const arr2 = cars.splice(1,3)

console.log(arr2);
console.log('C', cars); // Array after splice
// Splice includes the ending element unlike slice 
// It also changes the original array