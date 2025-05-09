let name = 'Aditya'
let repoCount = 3

// best way for printing strings in modern times
console.log(`My name is ${name} and my repository count is ${repoCount}`)

// for accessing properties(functions/methods) of a String
// we use the following syntax

let gameName = new String('Elden-Ring')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.length);
// console.log(gameName.charAt(7));
// console.log(gameName.indexOf('i'));

// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());

let nameSubStr = gameName.substring(0,5)
// console.log(nameSubStr);

let firstName = gameName.slice(-10, -5)
// console.log(firstName);

let lastName = gameName.slice(-4, )
// console.log(lastName);

let greetings = '     Hello World     '
// console.log(greetings);
// console.log(greetings.trim());

// console.log(greetings.trimStart());
// console.log(greetings.trimEnd());

let url = 'https://psychic-fiesta-g47x9pjj95x43w5rj.github.dev/'
// console.log(url.replace('/','|'));
// console.log(url.replaceAll('/','|'));

// console.log(url.includes('github'));
// console.log(url.includes('google'));

// console.log(gameName.split('-')); // typeof == object

const mood = 'Happy! '
console.log(`I feel so ${mood.repeat(3)}`);
