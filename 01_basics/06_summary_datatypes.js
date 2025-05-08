// Primitive: String, Number, Boolean, Null, Undefined, BigInt, Symbol

let score = 100
let anotherScore = 100.3

let accountEmail = 'aditya@salian.com'

let isLoggedIn = false

let temperature = null

let accountPass;

let bigNumber = 34567890n

let id = Symbol('123')
let anotherId = Symbol('123')

// console.log(id===anotherId)

// Reference (Non-Primitive): Array, Object, Function

let heroes = ['IronMan', 'Thor', 'CaptainAmerica']

let myObj = {
    name: 'Aditya',
    age: 18,
    isValidForVote: true,
}

let myFunction = function(){
    console.log('Hello, World!')
}

// datatypes
console.log(typeof score)
console.log(typeof accountEmail)
console.log(typeof isLoggedIn)
console.log(typeof temperature) // object
console.log(typeof accountPass)
console.log(typeof bigNumber)
console.table([typeof id, typeof anotherId])

console.log(typeof heroes) // object
console.log(typeof myObj)
console.log(typeof myFunction) // object function