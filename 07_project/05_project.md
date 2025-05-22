# Project 5 Keyboard Key Display

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KEY Finder</title>
</head>
<body style="background-color: #212121; color: #fff;">
    <h1>Press any key to see it's keycode and value</h1>
</body>
<script>
    const myDivEle = document.createElement('div')
    window.addEventListener('keydown', (e)=> {
        myDivEle.innerHTML = 
        `<table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Name</th>
        </tr>
        <tr>
            <td>${e.key === ' ' ? 'space': e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>`
    })
    document.body.appendChild(myDivEle)
</script>
</html>
```