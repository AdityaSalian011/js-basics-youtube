// syntax for while loop in JS
// while (condition) {
    
// }


let i = 0
while(i<=10){
    // console.log(`Value of i is ${i}`);
    i = i + 2
}

// console.log(i);

// while loop in array
let superCars = ['BugatiCheron', 'ToyotaSupra', 'McLaren', 'Ferrari', 'Porsche']
let index = 0

while(index<superCars.length){
    // console.log(`My favorite SUPER CAR is, ${superCars[index]}`);
    index = index + 1
}

// do while loop
// does something before checking the condition

// syntax for do while loop
// do {
    
// } while (condition);


// let j = 1
// do{
//     console.log(`Value of j is, ${j}`);
//     j++
// } while(j<=10);

// +++++++++++++++++++++ interesting use case of do while

let j = 15
do{
    console.log(`Value of j is, ${j}`);
    j++
} while(j<=10);
