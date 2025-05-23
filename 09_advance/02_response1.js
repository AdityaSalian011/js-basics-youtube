const promiseOne = new Promise(function(resolve, reject){
    // asynchronous task
    setTimeout(function(){
        // resolve()    // can work as long as inside an asynchronous function
        console.log('Asynchronous task completed');
        resolve()      // better syntax
    }, 1000)
})
promiseOne.then(function(){
    console.log('Task Resolved');  
})

// writing promise object without putting it inside a variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Asynchronous Task 2');
        resolve()
    }, 1000)
}).then(function(){
    console.log('Resolves Task 2');
})


// passing arguments inside resolve
const promiseThree = new Promise(function(resolve, reject){
    // asynchronous task
    setTimeout(function(){
        console.log('Asynchronous task 3');
        // after asynchronous task is completed we give resolve/reject
        resolve({username: 'aditya', email: 'aditya@salian.com'})
    }, 1000)
})

promiseThree.then(function(user){
    // user is the expected parameter derived throught resolve
    console.log(user);
})

// Using resolve and reject parameters
const promiseFour = new Promise( (resolve, reject) => {
    setTimeout( () => {
        console.log('Asynchronous task 4');
        let error = true
        if(!error){
            resolve({username: 'aditya', password: '123'})
        }else{
            reject('Error: Something went wrong!')
        }
    }, 1000)
})

// better syntax
promiseFour
.then(function(user){
    console.log(user);
    return user.username
} )
.then(function(userData){
    console.log(userData);
} )
.catch(function(error){
    console.log(error);
})