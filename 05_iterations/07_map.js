// map unlike filter returns all value in an array

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums1 = myNums.map( (num) => {
    return num+10
} )

// console.log(newNums1);


// using multiple prototypes
// Step1:- to multiply every number by 10
// Step2:- adding every number by 1
// Step3:- selecting numbers, that are multiple of 3
const newNums2 = myNums
                .map( (num) => num*10 )
                .map( (num) => num+1 )
                .filter( (num) => num%3==0 )

console.log(newNums2);
                