// using thiskeyword in object
const user = {
    username: 'aditya',
    website: 'youtube',
    
    userGreeting: function (){
        // console.log(`${username} , has logged in!`); // error
        // username not defined shown
        console.log(`${this.username}, has logged in!`);
        // this refers to current context
        console.log(this); // gives context about current object
        
    }
}

// user.userGreeting()
// user.username = 'akila'
// user.userGreeting()

// console.log(this);

// using this keyword in function
function chai(){
    let username = 'aditya'
    // console.log(`${this.username} drinks chai`); // output => undefine
    console.log(this);
    
    console.log(`${username} drinks chai`); // output => aditya
}

// chai()

const greeting = function(){
    let username = 'aditya' 
    console.log(this);
    console.log(this.username); // undefine
}
// In normal function, when this keyword is executed (in node)
// it returns global, and other properties
// It is an global object 

// greeting()

// this keyword in arrow function
const newChai = () => {
    username = 'aditya'
    console.log(this);
    console.log(this.aditya); // undefined
}
// In arrow function, when this keyword is executed
// It returns empty object (curly braces)

// newChai()

// Arrow functions
const addTwo = (num1, num2) => {
    return num1 + num2
}
// this is an explicit function where return keyword is mentioned
console.log(addTwo(3,4))

// const newAddTwo = (num1, num2) => num1 + num2
// this is an implicit function where return keyword is not mentioned
// Whatever written after => is by default returned as the result
const newAddTwo = (num1, num2) => (num1 + num2) // usually returning values are enclosed in parenthesis

console.log(newAddTwo(3,4));

// returning objects in arow function
const aboutUser = () => ({
    username: 'aditya',
    website: 'youtube',
})
console.log(aboutUser());

const myArray = [2,3,4,5,1,9]