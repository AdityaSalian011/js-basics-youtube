// for each in JavaScript

// for each in an array
const myCars = ['lamborgini', 'ferari', 'buggati', 'mercedes', 'bmw']

myCars.forEach( function(val){
    // console.log(val);
} )
// to note:-
// functions written inside the forEach prototype is a callbackfunction that doesn't have a name
// the callbak function can take upto three arguments that will be discussed below

// using forEach using arrow function
myCars.forEach( (val) => {
    // console.log(val);
} )

// passing a predefined function inside forEach
function printCarName(item){
    // console.log(item);
}

myCars.forEach(printCarName)
// to note:-
// if you give predefined function in forEach
// gives it's reference only DO NOT CALL IT(i.e printCarName())


// other arguments in forEach
myCars.forEach( (val, idx, arr) => {
    // console.log(val, idx, arr);
} )             // <= SELF EXPLANATORY


// ++++++++++INTERESTING+++++++++++++++++++
// to access objects inside an array 
// using forEach

let newCoding = [
    {
        fileName: 'js',
        programmingName: 'JAVASCRIPT',
    },
    {
        fileName: 'py',
        programmingName: 'PYTHON',
    },
    {
        fileName: 'java',
        programmingName: 'JAVA',
    },
    {
        fileName: 'cpp',
        programmingName: 'C++',
    },
]

newCoding.forEach( (val) => {
    console.log(val.fileName, '=>', val.programmingName);
} )