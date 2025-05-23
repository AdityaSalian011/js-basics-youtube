```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="../../src/output.css">
</head>
<body class="bg-slate-900 text-white">
    <div class="flex flex-col flex-wrap">
        <h1 class="text-center">Lorem ipsum dolor sit amet.</h1>
        <div class="flex flex-col flex-wrap justify-center items-center h-auto w-auto bg-blue-800 rounded-lg">
            <div id="pfp"></div>
            <div id="followers"></div>
            <div id="bio"></div>
        </div>
    </div>
</body>
<script>
    // getting every div element
    const myImg = document.querySelector('#pfp')
    const myFollowers = document.querySelector('#followers')
    const myBio = document.querySelector('#bio')


    const myURL = 'https://api.github.com/users/hiteshchoudhary'
    const xhr = new XMLHttpRequest()
    xhr.open('GET', myURL)
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            const myJSON = JSON.parse(this.responseText)
            myImg.innerHTML = `<image src=${myJSON.avatar_url}></image>`
            myFollowers.innerHTML = `${myJSON.followers}`
            myBio.innerHTML = `${myJSON.bio}`
        }
    }
    xhr.send()
</script>
</html>
```