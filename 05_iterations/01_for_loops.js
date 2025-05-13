// printing number from 1 to 10
for (let i = 1; i <= 10; i++) {
    const element = i
    // console.log(element);
}

// conditions in for loop
for(let i=1; i<=10; i++){
    if(i==5){
        // console.log('Number 5 DETECTED');
    }else{
        // console.log(i);
    }

}

// nested for loops
for(let i=1; i<=10; i++){
    // console.log(`OUTER LOOP, ${i}`);
    for(let j=1; j<=10; j++){
        // console.log(`inner loop, ${j} with OUTER LOOP, ${i}`);
    }
}

// tables for no. 1 to 10
for(let i=1; i<=10; i++){
    for(let j=1; j<=10; j++){
        // console.log(`${i} x ${j} = ${i*j}`);
    }
}

// for loops in array
let marvelHeroes = ['IronMan', 'Thor', 'CaptainAmerica', 'Hulk', 'SpiderMan']
// console.log(marvelHeroes.length);


for(let i=0; i<marvelHeroes.length; i++){
    // console.log(`My favorite Marvel hero is, ${marvelHeroes[i]}`);
}

// break and continue in for loop
// eg
// for loop for detecting multiple of 5

// break keyword
// ends a loop as soon when a condition is met

// for(let i=1; i<=20; i++){
//     if(i%5==0){
//         console.log('Multiple of 5');
//         break;
//     }
//     console.log(`Value of i is ${i}`);                    
// }

// continue keyword
// bypasses the condition and continues to print other statements

for(let i=1; i<=20; i++){
    if(i%5==0){
        console.log('Multiple of 5');
        continue;
    }
    console.log(`Value of i is ${i}`);
}