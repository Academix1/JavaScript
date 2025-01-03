### `Basic Calculator using Operators`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Calculator</title>
</head>
<body>
  <h1>Basic Calculator</h1>
  <input id="num1" type="number" placeholder="First number">
  <input id="num2" type="number" placeholder="Second number">
  <button onclick="calculate()">Add</button>
  <h2 id="result">Result: </h2>

  <script>
    function calculate() {
      const a = +document.getElementById('num1').value;
      const b = +document.getElementById('num2').value;
      document.getElementById('result').innerText = `Result: ${a + b}`;
    }
  </script>
</body>
</html>

```
