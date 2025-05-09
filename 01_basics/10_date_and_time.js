// date

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);  // object

// console.log(myDate.getDay());
// console.log(myDate.getDate());
// console.log(myDate.getMonth());
// console.log(myDate.getFullYear());
// console.log(myDate.getHours());
// console.log(myDate.getMinutes());
// console.log(myDate.getSeconds());
// console.log(myDate.getMilliseconds());


let newDate = new Date(2025, 4, 9)
// console.log(newDate.toLocaleString());

newDate = new Date(2025, 4, 9, 18, 43)
// console.log(newDate.toLocaleString());

let myCreatedDate = new Date('09-05-2025')
// console.log(myCreatedDate.toDateString());


let timeStamp = Date.now()
// console.log(timeStamp);
// console.log(myCreatedDate.getTime());

// to see time in seconds rather than milliseconds
// milliseconds recommended for comparision

// console.log(Math.floor(timeStamp/1000));

// to customize locale string 
myDate = new Date()
console.log(myDate.toLocaleString());


console.log(myDate.toLocaleString('default', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
}));

