# JavaScript Series 
## Project 2

### HTML
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
    <div class="flex flex-wrap items-center justify-center  min-h-screen">
        <div class="flex flex-col">
            <h1 class="text-center text-3xl font-bold">BMI Calculator</h1>
            <form action="">
                <div class="flex flex-wrap flex-col mt-5">
                    <div class="flex">
                        <label class="text-xl font-medium" for="hght">Height: </label><input class="bg-white text-black ml-2 rounded-sm shadow-xl border-[1px] border-black" type="text" name="hght" id="height">
                    </div>
                    <div class="flex mt-4">
                        <label class="text-xl font-medium" for="wght">Weight: </label><input class="bg-white text-black ml-2 rounded-sm shadow-xl border-[1px] border-black" type="text" name="wght" id="weight">
                    </div>
                    <div class="mt-8 px-2 py-4 bg-green-500 mx-auto text-center rounded-lg shadow-2xl hover:bg-green-700">
                        <button type="submit">Calculate BMI</button>
                    </div>
                    <div class="mt-4 text-center text-xl font-bold text-green-400" id="result"></div>
                </div>
            </form>
        </div>
        <div class="text-center bg-blue-700 rounded-lg py-8 px-4 flex flex-col flex-wrap drop-shadow-blue-900">
            <h2 class="text-2xl font-semibold">BMI Scale Index</h2>
            <p class="mt-2 text-lg font-medium">UnderWeight Category:- <span>Less than 18</span></p>
            <p class="text-lg font-medium">Normal Category:- <span>18 to 25</span></p>
            <p class="text-lg font-medium">UnderWeight Category:- <span>More than 25</span></p>
        </div>
    </div>
</body>
<script src="./02_project.js"></script>
</html>
```
```javascript
const form = document.querySelector('form')

// this will give you empty height as a return as it is outside the submit event
// const height = document.querySelector('#height').value

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height<0 || isNaN(height)){
        result.innerHTML = 'Not a valid height'
    }
    else if(weight<0 || isNaN(weight)){
        result.innerHTML = 'Not a valid weight'
    }
    else{
        let heightInMeters = height/100
        let finalResult = weight/(heightInMeters**2)
        finalResult = finalResult.toFixed(2)
        result.innerHTML = `<span>${finalResult}</span>`
    }
})
```