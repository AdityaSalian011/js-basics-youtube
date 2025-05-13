const myCars = ['lamborgini', 'ferari', 'buggati', 'mercedes', 'bmw']

myCars.forEach( (val) => {
    // console.log(val);
} )

// storing above code in a variable
const newCars = myCars.forEach( (val) => {
    // console.log(val);
    return val  
} )

// console.log(newCars);
// to note:- 
// forEach cannot return a value
// we cannot pick a particular value from an array
// We have better prototype to deal with this issue


// filter
const myNums = [1,2,3,4,5,6,7,8,9,10]

// return a numbers greater or equal to 5
const newNums = myNums.filter( (num) => {
    return num >= 5
} )
// we are using exclusive scope here (i.e includes return keyword)

// console.log(newNums);

// to do the same using forEach
const newArr = []
myNums.forEach( (num) => {
    if(num>4){
        newArr.push(num)
    }
} )
// console.log(newArr);

 
// practicing filter prototype using some objects inside an array
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// objective1:- To find a book with non-fiction genre
const myBook1 = books.filter( (bk) => (bk.genre === 'Non-Fiction') )
// console.log(myBook1);

// objective2:- To find a book with history genre and publish date above 1990
const myBook2 = books.filter( (bk) => 
    (bk.genre==='History' && bk.publish >= 1990) 
)
console.log(myBook2);
