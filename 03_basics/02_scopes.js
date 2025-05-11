// global scopes
let a = 10
const b = 20
var c = 30
// console.log('A before bloAk scope', a);
// console.log('B before block scope', b);
// console.log('C before block scope', c);


if (true){
    // a and b (let and const) can't be accessed outside of the scope block IF
    let a = 100  // error 
    // console.log(`INSIDE A`, a);
    const b = 200 // error
    // console.log(`INSIDE B`, b);
    var c = 300 // no error
    // console.log(`INSIDE C`, c);
    // var inside of scope can be accessed globally 
    // it changes value inside block scope if value for variable is already available
}

// console.log(a);
// console.log(b);

// console.log('A after block scope', a)

// nested function 
// handling multiple block scopes

function one(){
    const username = 'aditya'
    function two(){
        const website = 'gitHub'
        // console.log(username);
    }
    // console.log(website); // error. Because website is child variable of parent scope one
    // This error occurs first as the function two is called afterwards

    two()  // function two is called inside function one
}
one()

if (true){
    const username = 'aditya'
    if (username==='aditya'){
        const website = ' gitHub'
        // console.log(username+website);    
    }
    // console.log(website); // error
    // console.log(username);
} 
// console.log(username); // error



// ++++++++++++++++ Interesting Scope UseCase +++++++++++++++

console.log(addOne(5)); // no error

function addOne(num){
    return num + 1
}

// console.log(addOne(5));

// console.log(addTwo(5)); // error
// We are storing function inside a Constant variable 
// That cannot be accessed unlike writing function without spicifically giving it a variable 

const addTwo = function(num){
    return num + 2
}

// We can only access this function here
console.log(addTwo(5));
