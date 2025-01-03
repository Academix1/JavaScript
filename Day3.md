### `Functions Refactoring`
```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return b !== 0 ? a / b : "Error: Division by zero!";
}

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
      result = add(num1, num2);
      break;
    case '-':
      result = subtract(num1, num2);
      break;
    case '*':
      result = multiply(num1, num2);
      break;
    case '/':
      result = divide(num1, num2);
      break;
    default:
      result = "Invalid operator!";
  }

  document.getElementById('result').innerText = `Result: ${result}`;
}
```
### `Main Code`
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
  
  <button onclick="calculate('+')">Add</button>
  <button onclick="calculate('-')">Subtract</button>
  <button onclick="calculate('*')">Multiply</button>
  <button onclick="calculate('/')">Divide</button>

  <h2 id="result">Result: </h2>

  <script>
    // Function Definitions
    function add(a, b) {
      return a + b;
    }

    function subtract(a, b) {
      return a - b;
    }

    function multiply(a, b) {
      return a * b;
    }

    function divide(a, b) {
      return b !== 0 ? a / b : "Error: Division by zero!";
    }

    // Main Calculation Function
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
          result = add(num1, num2);
          break;
        case '-':
          result = subtract(num1, num2);
          break;
        case '*':
          result = multiply(num1, num2);
          break;
        case '/':
          result = divide(num1, num2);
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
