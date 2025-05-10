function printCharInName(){
    console.log('A');
    console.log('D');
    console.log('I');
    console.log('T');
    console.log('Y');
    console.log('A');
}

// printCharInName()
// printCharInName()
// printCharInName()
// printCharInName()
// printCharInName()

// function to add two numbers
function addTwoNumbers(num1, num2){  // in parentheses we write parameters
    return (num1 + num2)
}

result = addTwoNumbers(45, 67)  // in parentheses we give arguments
// console.log(`Result, ${result}`);


// to pass a string parameter
function isLoggedIn(username){
    return `${username}, just logged In!`
}

// base cases
// console.log(isLoggedIn('Raju'));
// console.log(isLoggedIn(''));
// console.log(isLoggedIn());


// to avoid this 
function newLoggedIn(username){
    if(!username){
        return 'Please, enter your name'
    }
    return `${username}, just logged In!`
}

// console.log(newLoggedIn('Ramesh'));
// console.log(newLoggedIn(''));
// console.log(newLoggedIn());


// we can also use an alternative method to avoid this
// By giving a default value to parameter
function isLoggedIn(username='User'){
    return `${username}, just logged In!`
}

// console.log(isLoggedIn('Ramesh'));
// console.log(isLoggedIn());


// spreading multiple value in an array
function calculateGroceryPrice(val1, val2, ...num1){
    return num1
}


sl1 = calculateGroceryPrice(23, 34, 45, 66, 78)
// console.log(sl1);


const user = {
    username: 'Aditya',
    email: 'aditya@salian.com'
}

function objFunction(myUser){
    return `Email Id of user ${myUser.username} is ${myUser.email}`
}
// console.log(objFunction(user));
// you can define these objects directly as an argument without explicitely defining a variable for them
// console.log(objFunction(
//     {
//     username: 'bananaMan',
//     email: 'banana@google.com'
//     }
// ));

const cars = ['Toyota', 'Skoda', 'Mercedes', 'BMW']

function myFavoriteCar(carsArr){
    randomNo = Math.floor(Math.random() * (3 - 0 + 1))
    return `My favorite car is ${carsArr[randomNo]}`
}

console.log(myFavoriteCar(cars));

// again you can directly provide an array as an argument just as objects
console.log(myFavoriteCar(['Audi', 'Mahindra', 'Tata', 'Porsche']));
