// primitive types of data are stored in stack 
// copies are generated and original data is not touched

let carName = 'Toyota'
let japaneseCar = carName

// console.log(carName);
// console.log(japaneseCar);

japaneseCar = 'Honda'

// console.log(carName);
// console.log(japaneseCar);

// For reference (Non-Primitive) data is stored in heap
// Meaning changes are made in original data itself

st1 = {
    name: 'aditya',
    age: 18,
}

st2 = st1

// console.log(st1);
// console.log(st2);

st2.name = 'akila';
st1.age = 22;

console.log(st1);
console.log(st2);