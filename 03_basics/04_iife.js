// Immediately Invoked Function Expression (IIFE)

// normal function
function greetings(){
    console.log('Hello, world!');
}
greetings();

// IIFE Functions

// named iife
(function newGreeting(){
    console.log('GoodMorning, World!');
})();

// simple iife
// using arrow function
( () => {
    console.log('GoodNight, World!');
} )();

// giving arguments in iife function
( (num1, num2) => {
    // explicit function
    console.log(num1 + num2);
} )(3,5);

( (num1,num2) => console.log((num1-num2)) )(5,3)
// implicit function