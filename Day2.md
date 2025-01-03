### `Conditional Enhancements`

```js
function calculate(operator) {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  
  if (isNaN(num1) || isNaN(num2)) {
    document.getElementById('result').innerText = "Error: Please enter valid numbers!";
    return;
  }
  
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : "Error: Division by zero!";
      break;
    default:
      result = "Invalid operator!";
  }

  document.getElementById('result').innerText = `Result: ${result}`;
}
```
  
  ### `MainCode`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator - Main</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
    }
    .calculator {
      display: inline-block;
      margin-top: 50px;
    }
    input {
      margin: 10px;
      padding: 5px;
      font-size: 16px;
    }
    button {
      padding: 10px;
      font-size: 16px;
      margin: 5px;
    }
    h1 {
      margin-bottom: 20px;
    }
    h2 {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <h1>Main Calculator</h1>
    <input type="number" id="num1" placeholder="Enter first number">
    <input type="number" id="num2" placeholder="Enter second number">
    <br>
    <button onclick="calculate('+')">Add</button>
    <button onclick="calculate('-')">Subtract</button>
    <button onclick="calculate('*')">Multiply</button>
    <button onclick="calculate('/')">Divide</button>
    <h2 id="result">Result: </h2>
  </div>

  <script>
    function calculate(operator) {
      const num1 = parseFloat(document.getElementById('num1').value);
      const num2 = parseFloat(document.getElementById('num2').value);
      
      if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = "Error: Please enter valid numbers!";
        return;
      }
      
      let result;
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num2 !== 0 ? num1 / num2 : "Error: Division by zero!";
          break;
        default:
          result = "Invalid operator!";
      }

      document.getElementById('result').innerText = `Result: ${result}`;
    }
  </script>
</body>
</html>
```
