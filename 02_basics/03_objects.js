// singleton
// objects created using constructor

// eg: Object.create

// object literals


// adding symbols in object
const mySymbol = Symbol('key1')

myObj = {
    name: 'Aditya',
    age: 18,
    location: 'Thane',
    email: 'aditya@salian.com',
    isLoggedIn: false,
    loggedInDays: ['Mon', 'Tue', 'Sat'],
    'full name': 'Aditya Salian',
    [mySymbol]: 'myObjKey1',  // a way to describe symbol inside object
}
// keys of object are treated as strings by default


// ways to access object value
// console.log(myObj.name); // first way 
// first way of accessing object's value is not recommended
// console.log(myObj['email']); // second way
// console.log(myObj['full name']); 

myObj['email'] = 'adityasalian@gmail.com' // value changed
// console.log(myObj['email']);

// freezing the object
// Object.freeze(myObj)

// myObj.email = 'adityasalian@google.com'
// console.log(myObj.email);  // no changes being made

// to freeze a particular key/ value in object
// console.log(myObj['location']);  // before freezing
// Object.freeze(myObj['location'])

myObj['location'] = 'delhi'
// console.log(myObj['location']);
// not possible to freeze a single/ particular key in object


// adding function inside object
myObj['greetings'] = function(){
    console.log('Hello World!');
}

myObj.greetings()

myObj.greetingsTwo = function(){
    console.log(`Hello user, ${this['name']} your age is ${this.age} welcome`);
} 
myObj.greetingsTwo()

console.log(myObj.mySymbol); // undefined
console.log(myObj[mySymbol]);
console.log(typeof myObj[mySymbol]);


