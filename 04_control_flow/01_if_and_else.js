const isLoggedIn = true
const temperature = 61

// if(isLoggedIn){
//     console.log('User has logged In!');
// }

// if(temperature < 50){
//     console.log('Temperature less than 50');
// } else {
//     console.log('Temperature greater than 50');
// }

// console.log('Executed');

// comparision operators
// <, >, <=, >=, ==, !=, ===, !==
// == is used to compare two values, to see if they are the same
// if (2=='2'){
//     console.log('Both are same');
// } else{
//     console.log('Both are not same');
// }

// === is used to compare two values and checks if both have same datatype, if yes following code is executed
// if(2==='2'){
//     console.log('Both are same');
// }else{
//     console.log('Both are not same');
// }


// scopes in if else
const score = 100

// if (score>=80) {
//     let username = 'aditya'
//     console.log(`${username} has score greater than 80`);
// }

// console.log(score);
// console.log(username); // error


// if, else and else if
// const balance = 1000

// if(balance<500){
//     console.log('Balance less than 500');
// } else if(balance<750){
//     console.log('Balance less than 750');
// } else if(balance < 900){
//     console.log('Balance less than 900');
// } else{
//     console.log('Balance greater than 900');
// }

// multiple conditions
const userLoggedIn = false
const purchasedCourse = false
const logInGoogle = false
const logInEmail = true

// if (!userLoggedIn){
//     console.log("User hasn't logged In");
// } else if(userLoggedIn && purchasedCourse){
//     console.log('User has logged In and have purchased the course');
// } else if(userLoggedIn && !purchasedCourse){
//     // console.log("User has logged In but havn't purchased the course");
//     console.log('User has logged In but havn\'t purchased the course');
// }

if(logInEmail || logInGoogle){
    console.log('User logged In');
}

// checking single condition

if(score >= 80) console.log('Score above 80'), console.log('Score is surely above 80');

// this type of code is not recommended 
