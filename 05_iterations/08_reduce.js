// reduce prototype is used to add multiple element of an array
// eg includes calculating total cost for a grocery store


const myNums = [1,2,3,4,5]

const newNums1 = myNums.reduce( function(acc, currVal){
    // console.log(`acc: ${acc} and currVal: ${currVal}`);
    return acc+currVal
},0 )
// console.log(newNums1);

// writing the same above code using inclusive block
const newNums2 = myNums.reduce( (acc, currVal) => (acc + currVal), 0)
// console.log(newNums2);


// using reduce prototype in objects inside an array
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const total = shoppingCart.reduce( (accumulator, courses) => (accumulator+courses.price), 0)

console.log(total);

