// for of

// ['', '', '']
// [{}, {}, {}]


// looping in array using for of keyword
const myArr = [1,2,3,4,5]

for (const val of myArr) {
    // console.log(val);
}

// looping through a string using for of
let name = 'Aditya Salian'

for(const val of name){
    if(val==' '){
        continue;           // removes space from name
    }
    // console.log(val);
}

// maps in javascript

let countryCode = new Map()
// console.log(typeof countryCode);  // object
// console.log(countryCode);

countryCode.set('IN', 'India')
countryCode.set('USA', 'United States of America')
countryCode.set('UK', 'United Kingdom')
countryCode.set('JP', 'Japan')

// console.log(countryCode);


// looping over map using for of

for(const val of countryCode){
    // console.log(val);
}
// Note:- If you loop over using normally like above
// You will get the entire map value in array
// where first value is key and second is value 
// and uses different array for other key value pairs

for (const [key, val] of countryCode) {
    // console.log(`${key} :- ${val}`);
}
// for accessing key value pairs in map

// loop over object using for of

myObj = {
    game1: 'NFS',
    game2: 'Road Rash',
}

// for (const val of myObj) {  // not iterable
//     // console.log(val);
// }

for (const [key,val] of myObj) {  // not iterable
    console.log(key, ':-', val); 
}

// note:- object cannot be looped using for of