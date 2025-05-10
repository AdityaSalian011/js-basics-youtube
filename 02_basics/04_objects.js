// singleton object
// const instaUser = new Object()

// non-singleton object
const instaUser = {}

// console.log(instaUser); // returns an empty object 

// adding values in object instaUser
instaUser.id = '123abc'
instaUser.name = 'Akila'
instaUser.email = 'example@gmail.com'
instaUser.isLoggedIn = false

// console.log(instaUser);

// nested object example
const regularUser = {
    user: {
        firstName: 'Aditya',
        lastName: 'Salian',   
    },
    location:{
        country: 'India',
        state: 'Maharashtra',
        city: 'Thane',
    }
}

// console.log(regularUser);
// console.log(regularUser.user.firstName);
// console.log(regularUser.location);
// console.log(regularUser.location.city);


// adding two or more objects

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}
const obj3 = {5: 'e', 6: 'f'}

// const obj4 = {obj1, obj2, obj3}
// console.log(obj4);


// target and source
// 1st parameter is the target and other are source
// const obj4 = Object.assign(obj1, obj2, obj3) // without empty object
// console.log(obj4);
// console.log(obj1);
// console.log(obj4===obj1);

// const obj4 = Object.assign({} ,obj1, obj2, obj3)
// here obj1, obj2 and obj3 are added into empty object provided at the start
// this empty object acts as the target object and rest are the sources 
// console.log(obj4);
// console.log(obj4);
// console.log(obj1);
// console.log(obj4===obj1);


// another method which is mostly used rather than Object.assign
const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4);


// for accessing multiple objects inside an array
const users = [
    {
        userID: '123abc',
        email: 'aditya@salian.com',
    },
    {
        userID: '456pqr',
        email: 'aditya@google.com',
    },
    {
        userID: '789xyz',
        email: 'aditya@microsoft.com',
    },
]

// console.log(users[0].userID, users[0].email);
// console.log(users[1].userID, users[1].email);
// console.log(users[2].userID, users[2].email);

// console.log(instaUser);

// to obtain every key inside an object we can use Object.keys
// console.log(Object.keys(instaUser));
// to obtain values of every key of an object we can user Object.values
// console.log(Object.values(instaUser));

// Returns an array of key value pairs
// console.log(Object.entries(instaUser));

// to check if an key exists we can use
// console.log(instaUser.hasOwnProperty('isLoggedIn'));
// console.log(instaUser.hasOwnProperty('isLoggedOut'));


// destructuring in JavaScript
const course = {
    courseName: 'JS in 50 days',
    coursePrice: 999,
    courseInstructor: 'hitesh',
}

console.log(course.courseInstructor);
console.log(course.courseName);
console.log(course.coursePrice);


// destructuring course.courseInstructor into courseInstructor
const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: teacher} = course  // giving alternate name for courseInstructor
console.log(teacher);


console.log(course.courseInstructor);  // works fine
console.log(course.teacher);  // undefined

