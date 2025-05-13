// syntax of for in 

// for (const key in object) {
//     if (Object.prototype.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }


// looping over object using for in

const myObj = {
    js: 'javascript',
    py: 'python',
    cpp: 'c++',
    java: 'java',
}

for(const key in myObj){
    // console.log(key);  // gives key of myObj
    // console.log(myObj[key]); // gives value of myObj
    // console.log(`Full form of ${key} is ${myObj[key]}`);
}


// Note:- Difference between for of and for in is
// for of returns value and for in returns key 


// looping over array using for in
const myArray = ['javascript', 'python', 'c++', 'java']

for(const key in myArray){
    // console.log(`${myArray[key]} has index ${key}`);
}


// looping over map using for in
let countryCode = new Map()

countryCode.set('IN', 'India')
countryCode.set('USA', 'United States of America')
countryCode.set('UK', 'United Kingdom')
countryCode.set('JP', 'Japan')

for(const key in countryCode){
    console.log(key);
}
for(const [key,val] in countryCode){
    console.log(key,val);
}
// returns nothing
// this means that map can't be looped using for in