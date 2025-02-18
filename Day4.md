### EventDriven-Calculator

```javascript
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

// Event delegation: handle all button clicks
document.querySelector('.buttons').addEventListener('click', function(event) {
  const value = event.target.getAttribute('data-value');
  if (value) {
    appendToDisplay(value);
  } else if (event.target.id === 'clearButton') {
    clearDisplay();
  } else if (event.target.id === 'equalButton') {
    calculateResult();
  }
});

// Function to handle keyboard input
window.addEventListener('keydown', function(event) {
  const key = event.key;
  if ('0123456789'.includes(key)) {
    appendToDisplay(key);
  } else if (key === '+' || key === '-' || key === '*' || key === '/') {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculateResult();
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
    document.getElementById('display').innerText = currentInput || '0';
  } else if (key === 'Escape') {
    clearDisplay();
  }
});


```  

```javascript
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
      <button class="button button-clear" id="clearButton">C</button>
      <button class="button button-operation" data-value="/">/</button>
      <button class="button button-operation" data-value="*">*</button>
      <button class="button button-operation" data-value="-">-</button>
      
      <!-- Row 2 -->
      <button class="button button-number" data-value="7">7</button>
      <button class="button button-number" data-value="8">8</button>
      <button class="button button-number" data-value="9">9</button>
      <button class="button button-operation" data-value="+">+</button>
      
      <!-- Row 3 -->
      <button class="button button-number" data-value="4">4</button>
      <button class="button button-number" data-value="5">5</button>
      <button class="button button-number" data-value="6">6</button>
      <button class="button button-equal" id="equalButton">=</button>
      
      <!-- Row 4 -->
      <button class="button button-number" data-value="1">1</button>
      <button class="button button-number" data-value="2">2</button>
      <button class="button button-number" data-value="3">3</button>
      <button class="button button-number" data-value="0">0</button>
      
      <!-- Row 5 -->
      <button class="button button-number" data-value=".">.</button>
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

    // Event delegation: handle all button clicks
    document.querySelector('.buttons').addEventListener('click', function(event) {
      const value = event.target.getAttribute('data-value');
      if (value) {
        appendToDisplay(value);
      } else if (event.target.id === 'clearButton') {
        clearDisplay();
      } else if (event.target.id === 'equalButton') {
        calculateResult();
      }
    });

    // Function to handle keyboard input
    window.addEventListener('keydown', function(event) {
      const key = event.key;
      if ('0123456789'.includes(key)) {
        appendToDisplay(key);
      } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
      } else if (key === 'Enter') {
        calculateResult();
      } else if (key === 'Backspace') {
        currentInput = currentInput.slice(0, -1);
        document.getElementById('display').innerText = currentInput || '0';
      } else if (key === 'Escape') {
        clearDisplay();
      }
    });
  </script>
</body>
</html>
```

### **Step 3: Interactive Exercises**

1. **Exercise 1:** Recreate the Basic Calculator With EventListeners
     - Recreate the Basic Calculator functionality by writing the entire code yourself. Follow the steps below to create a simple calculator that performs addition.
     - **Hint**: Use VsCode Editor and Try to Recreate the same Calculator Logic

---

2. **Exercise 2: Style the Page**
   - Use CSS to style the calculator (e.g., center it, add a background color).
   - **Hint**: Add `<style>` tags inside `<head>`.

---


3. **Exercise 3: Add Mouseup and Mousedown  EventListeners to Button** 
   - Modify the code to include Mouseup and Change Size on Hover to Buttons

---


