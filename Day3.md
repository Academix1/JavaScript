### `Functions Refactoring`
```javascript
 <script>
    let currentInput = '';
    
    // Function to append values to the display
    function appendToDisplay(value) {
      currentInput += value;
      document.getElementById('display').innerText = currentInput;
    }

    // Function to clear the display
    function clearDisplay() {
      currentInput = '';
      document.getElementById('display').innerText = '0';
    }

    // Function to calculate the result of the current input expression
    function calculateResult() {
      try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').innerText = currentInput;
      } catch (e) {
        document.getElementById('display').innerText = "Error";
        currentInput = '';
      }
    }
  </script>
```

### `Main Code`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Calculator</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f4f4f4;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
    }
    .calculator {
      background-color: #fff;
      width: 260px;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
    h1 {
      font-size: 24px;
      text-align: center;
    }
    .display {
      background-color: #222;
      color: white;
      font-size: 24px;
      text-align: right;
      padding: 10px;
      border-radius: 4px;
      height: 40px;
      width: 100%;
      margin-bottom: 20px;
    }
    .buttons {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
    }
    .button {
      padding: 15px;
      font-size: 18px;
      background-color: #f0f0f0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .button:hover {
      background-color: #e0e0e0;
    }
    .button:active {
      background-color: #d0d0d0;
    }
    .button-clear {
      background-color: #ff7043;
      color: white;
    }
    .button-equal {
      background-color: #4CAF50;
      color: white;
    }
    .button-operation {
      background-color: #2196F3;
      color: white;
    }
    .button-number {
      background-color: #eeeeee;
    }
  </style>
</head>
<body>
  <div class="calculator">
    <h1>Calculator</h1>
    <div class="display" id="display">0</div>
    <div class="buttons">
      <!-- Row 1 -->
      <button class="button button-clear" onclick="clearDisplay()">C</button>
      <button class="button button-operation" onclick="appendToDisplay('/')">/</button>
      <button class="button button-operation" onclick="appendToDisplay('*')">*</button>
      <button class="button button-operation" onclick="appendToDisplay('-')">-</button>
      
      <!-- Row 2 -->
      <button class="button button-number" onclick="appendToDisplay('7')">7</button>
      <button class="button button-number" onclick="appendToDisplay('8')">8</button>
      <button class="button button-number" onclick="appendToDisplay('9')">9</button>
      <button class="button button-operation" onclick="appendToDisplay('+')">+</button>
      
      <!-- Row 3 -->
      <button class="button button-number" onclick="appendToDisplay('4')">4</button>
      <button class="button button-number" onclick="appendToDisplay('5')">5</button>
      <button class="button button-number" onclick="appendToDisplay('6')">6</button>
      <button class="button button-equal" onclick="calculateResult()">=</button>
      
      <!-- Row 4 -->
      <button class="button button-number" onclick="appendToDisplay('1')">1</button>
      <button class="button button-number" onclick="appendToDisplay('2')">2</button>
      <button class="button button-number" onclick="appendToDisplay('3')">3</button>
      <button class="button button-number" onclick="appendToDisplay('0')">0</button>
      
      <!-- Row 5 -->
      <button class="button button-number" onclick="appendToDisplay('.')">.</button>
    </div>
  </div>

  <script>
    let currentInput = '';
    
    // Function to append values to the display
    function appendToDisplay(value) {
      currentInput += value;
      document.getElementById('display').innerText = currentInput;
    }

    // Function to clear the display
    function clearDisplay() {
      currentInput = '';
      document.getElementById('display').innerText = '0';
    }

    // Function to calculate the result of the current input expression
    function calculateResult() {
      try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').innerText = currentInput;
      } catch (e) {
        document.getElementById('display').innerText = "Error";
        currentInput = '';
      }
    }
  </script>
</body>
</html>
```


### **Step 3: Interactive Exercises**

1. **Exercise 1:** Recreate the Basic Calculator
     - Recreate the Basic Calculator functionality by writing the entire code yourself. Follow the steps below to create a simple calculator that performs addition.
     - **Hint**: Use VsCode Editor and Try to Recreate the same Calculator Logic

---

2. **Exercise 2: Style the Page**
   - Use CSS to style the calculator (e.g., center it, add a background color).
   - **Hint**: Add `<style>` tags inside `<head>`.

---


3. **Exercise 3: Add BackSpace Button** 
   - Modify the code to include Backspace
   - **Hint**: Create additional function like `X`.

---

