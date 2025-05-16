# JavaScript Series Project 1

## Project HTML Code
### index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../src/output.css">
</head>
<body class="bg-slate-900 text-white">
    <div class="flex flex-wrap flex-col items-center justify-center min-h-screen">
        <h1 class="text-center text-3xl font-bold">Select a color from below to change Background Color</h1>
        <div class="mt-8 flex flex-wrap justify-center items-center gap-4" id="color-boxes">
            <div class="h-[100px] w-[100px] bg-gray-500 px-2 border-2 hover:cursor-pointer" id="gray"></div>    
            <div class="h-[100px] w-[100px] bg-white px-2 border-2 hover:cursor-pointer" id="white"></div>    
            <div class="h-[100px] w-[100px] bg-yellow-500 px-2 border-2 hover:cursor-pointer" id="yellow"></div>    
            <div class="h-[100px] w-[100px] bg-green-500 px-2 border-2 hover:cursor-pointer" id="green"></div>    
            <div class="h-[100px] w-[100px] bg-violet-500 px-2 border-2 hover:cursor-pointer" id="violet"></div>    
        </div>
    </div>
</body>
<script src="./01_project.js"></script>
</html>
```

## JavaScript
### 01_project.js
```javascript
const body = document.querySelector('body')
const myBoxes = document.querySelector('#color-boxes')
// console.log(myBoxes.children);?
const arrBoxes = Array.from(myBoxes.children)
// console.log(arrBoxes);

arrBoxes.forEach( (val) => {
    // console.log(val);
    val.addEventListener('click', (e) => {
        // console.log(e);
        // console.log(e.target);
        // if(e.target.id == 'gray'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id == 'white'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id == 'yellow'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id == 'green'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id == 'violet'){
        //     body.style.backgroundColor = e.target.id
        // }
        switch (e.target.id) {
            case 'gray':
                body.style.backgroundColor = 'gray';
                break;
            case 'white':
                body.style.backgroundColor = 'white';
                break;
            case 'yellow':
                body.style.backgroundColor = 'yellow';
                break;
            case 'green':
                body.style.backgroundColor = 'green';
                break;
            case 'violet':
                body.style.backgroundColor = 'gray';
                break;
            default:
                break;
        }
    })
} )
```