### `Day 1 Code (Operators)`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f4f4f4;
    }
    .calculator {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    h2 {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <h1>Basic Calculator</h1>
    <input id="num1" type="number" placeholder="First number">
    <input id="num2" type="number" placeholder="Second number">
    <button onclick="calculate()">Add</button>
    <h2 id="result">Result: </h2>
  </div>

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


### ` Day2 Code (Added Switch Case) `
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
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f4f4f4;
    }
    .calculator {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    input {
      width: 100%;
      padding: 10px;
      margin: 10px 0;
      font-size: 16px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 10px;
      margin-top: 10px;
    }
    button {
      padding: 10px;
      font-size: 16px;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    h2 {
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <h1>Main Calculator</h1>
    <input type="number" id="num1" placeholder="First number">
    <input type="number" id="num2" placeholder="Second number">
    <div class="buttons">
      <button onclick="calculate('+')">Add</button>
      <button onclick="calculate('-')">Subtract</button>
      <button onclick="calculate('*')">Multiply</button>
      <button onclick="calculate('/')">Divide</button>
    </div>
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
---

### ` Day3 Code (Added Buttons) `
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator - Number Buttons</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f4f4f4;
    }
    .calculator {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      width: 300px;
    }
    .display {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      font-size: 24px;
      text-align: right;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
    button {
      padding: 20px;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    button.operator {
      background-color: #ff9500;
    }
    button.operator:hover {
      background-color: #e08900;
    }
    button.clear {
      background-color: #ff3b30;
      grid-column: span 2;
    }
    button.clear:hover {
      background-color: #e03228;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <h1>Calculator</h1>
    <input type="text" class="display" id="display" readonly>
    <div class="buttons">
      <button onclick="appendNumber('7')">7</button>
      <button onclick="appendNumber('8')">8</button>
      <button onclick="appendNumber('9')">9</button>
      <button class="operator" onclick="setOperator('/')">/</button>
      <button onclick="appendNumber('4')">4</button>
      <button onclick="appendNumber('5')">5</button>
      <button onclick="appendNumber('6')">6</button>
      <button class="operator" onclick="setOperator('*')">*</button>
      <button onclick="appendNumber('1')">1</button>
      <button onclick="appendNumber('2')">2</button>
      <button onclick="appendNumber('3')">3</button>
      <button class="operator" onclick="setOperator('-')">-</button>
      <button onclick="appendNumber('0')">0</button>
      <button onclick="appendNumber('.')">.</button>
      <button class="clear" onclick="clearDisplay()">C</button>
      <button class="operator" onclick="setOperator('+')">+</button>
      <button style="grid-column: span 4;" onclick="calculate()">=</button>
    </div>
  </div>

  <script>
    let currentInput = '';
    let firstOperand = null;
    let operator = null;

    function appendNumber(num) {
      currentInput += num;
      updateDisplay();
    }

    function setOperator(op) {
      if (currentInput === '') return;
      firstOperand = parseFloat(currentInput);
      operator = op;
      currentInput = '';
      updateDisplay();
    }

    function calculate() {
      if (firstOperand === null || operator === null || currentInput === '') return;

      const secondOperand = parseFloat(currentInput);
      let result;

      switch (operator) {
        case '+':
          result = firstOperand + secondOperand;
          break;
        case '-':
          result = firstOperand - secondOperand;
          break;
        case '*':
          result = firstOperand * secondOperand;
          break;
        case '/':
          result = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
          break;
        default:
          result = 'Error';
      }

      currentInput = result.toString();
      firstOperand = null;
      operator = null;
      updateDisplay();
    }

    function clearDisplay() {
      currentInput = '';
      firstOperand = null;
      operator = null;
      updateDisplay();
    }

    function updateDisplay() {
      document.getElementById('display').value = currentInput || '0';
    }
  </script>
</body>
</html>
```



### `Day 3 Code (Implemented EventListeners)`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator - Keyboard Support</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f4f4f4;
    }
    .calculator {
      background: #fff;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
      width: 300px;
    }
    .display {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      font-size: 24px;
      text-align: right;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
    button {
      padding: 20px;
      font-size: 18px;
      border: none;
      border-radius: 5px;
      background-color: #007bff;
      color: white;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    button:hover {
      background-color: #0056b3;
    }
    button.operator {
      background-color: #ff9500;
    }
    button.operator:hover {
      background-color: #e08900;
    }
    button.clear {
      background-color: #ff3b30;
      grid-column: span 2;
    }
    button.clear:hover {
      background-color: #e03228;
    }
    button.equals {
      background-color: #4cd964;
      grid-column: span 4;
    }
    button.equals:hover {
      background-color: #3cb850;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <h1>Calculator</h1>
    <input type="text" class="display" id="display" readonly>
    <div class="buttons">
      <button onclick="appendNumber('7')">7</button>
      <button onclick="appendNumber('8')">8</button>
      <button onclick="appendNumber('9')">9</button>
      <button class="operator" onclick="setOperator('/')">/</button>
      <button onclick="appendNumber('4')">4</button>
      <button onclick="appendNumber('5')">5</button>
      <button onclick="appendNumber('6')">6</button>
      <button class="operator" onclick="setOperator('*')">*</button>
      <button onclick="appendNumber('1')">1</button>
      <button onclick="appendNumber('2')">2</button>
      <button onclick="appendNumber('3')">3</button>
      <button class="operator" onclick="setOperator('-')">-</button>
      <button onclick="appendNumber('0')">0</button>
      <button onclick="appendNumber('.')">.</button>
      <button class="clear" onclick="clearDisplay()">C</button>
      <button class="operator" onclick="setOperator('+')">+</button>
      <button class="equals" onclick="calculate()">=</button>
    </div>
  </div>

  <script>
    let currentInput = '';
    let firstOperand = null;
    let operator = null;

    // Append numbers or decimal to the current input
    function appendNumber(num) {
      if (num === '.' && currentInput.includes('.')) return; // Prevent multiple decimals
      currentInput += num;
      updateDisplay();
    }

    // Set the operator
    function setOperator(op) {
      if (currentInput === '') return;
      if (firstOperand !== null) calculate(); // Chain operations
      firstOperand = parseFloat(currentInput);
      operator = op;
      currentInput = '';
      updateDisplay();
    }

    // Perform the calculation
    function calculate() {
      if (firstOperand === null || operator === null || currentInput === '') return;

      const secondOperand = parseFloat(currentInput);
      let result;

      switch (operator) {
        case '+':
          result = firstOperand + secondOperand;
          break;
        case '-':
          result = firstOperand - secondOperand;
          break;
        case '*':
          result = firstOperand * secondOperand;
          break;
        case '/':
          result = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
          break;
        default:
          result = 'Error';
      }

      currentInput = result.toString();
      firstOperand = null;
      operator = null;
      updateDisplay();
    }

    // Clear the display and reset the calculator
    function clearDisplay() {
      currentInput = '';
      firstOperand = null;
      operator = null;
      updateDisplay();
    }

    // Update the display with the current input
    function updateDisplay() {
      document.getElementById('display').value = currentInput || '0';
    }

    // Keyboard support
    document.addEventListener('keydown', (event) => {
      const key = event.key;
      if (/[0-9]/.test(key)) {
        appendNumber(key);
      } else if (key === '.') {
        appendNumber('.');
      } else if (['+', '-', '*', '/'].includes(key)) {
        setOperator(key);
      } else if (key === 'Enter' || key === '=') {
        calculate();
      } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        updateDisplay();
      } else if (key === 'Escape') {
        clearDisplay();
      }
    });
  </script>
</body>
</html>
```
