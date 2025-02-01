Certainly! I will provide you with a progression of the **Calculator Application** using HTML, CSS, and JavaScript, showing how the functionality changes as you move through each day, based on the concepts you're learning. Each day's code will build upon the previous day.

### **Day 1: Basic Calculator with HTML, CSS, and JavaScript (Variables, Data Types, Operators)**

**Goal:** Implement basic calculator functionality with number input, operators, and the display.

**HTML (index.html):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Calculator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="calculator">
    <div id="display">0</div>
    <button class="button" onclick="handleNumber('7')">7</button>
    <button class="button" onclick="handleNumber('8')">8</button>
    <button class="button" onclick="handleNumber('9')">9</button>
    <button class="button" onclick="handleOperator('+')">+</button>
    <button class="button" onclick="handleNumber('4')">4</button>
    <button class="button" onclick="handleNumber('5')">5</button>
    <button class="button" onclick="handleNumber('6')">6</button>
    <button class="button" onclick="handleOperator('-')">-</button>
    <button class="button" onclick="handleNumber('1')">1</button>
    <button class="button" onclick="handleNumber('2')">2</button>
    <button class="button" onclick="handleNumber('3')">3</button>
    <button class="button" onclick="handleOperator('*')">*</button>
    <button class="button" onclick="handleNumber('0')">0</button>
    <button class="button" onclick="clearCalculator()">C</button>
    <button class="button" onclick="calculate()">=</button>
    <button class="button" onclick="handleOperator('/')">/</button>
  </div>

  <script src="app.js"></script>
</body>
</html>
```

**CSS (style.css):**
```css
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
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#display {
  width: 100%;
  height: 50px;
  font-size: 2rem;
  text-align: right;
  padding: 10px;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  margin-bottom: 10px;
}

.button {
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  margin: 5px;
  cursor: pointer;
  border: none;
  background-color: #f0f0f0;
}

.button:active {
  background-color: #ddd;
}
```

**JavaScript (app.js):**
```javascript
let currentInput = "";
let previousInput = "";
let operator = "";

function handleNumber(number) {
  currentInput += number;
  updateDisplay();
}

function handleOperator(op) {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
  updateDisplay();
}

function calculate() {
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);
  
  if (operator === "+") result = prev + current;
  if (operator === "-") result = prev - current;
  if (operator === "*") result = prev * current;
  if (operator === "/") result = prev / current;

  currentInput = result.toString();
  operator = "";
  previousInput = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = currentInput || "0";
}

function clearCalculator() {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay();
}
```

### **Day 2: Adding Functions, Loops, and Conditionals**

**Goal:** Add the ability to perform multiple operations, handle conditional checks, and improve user interaction.

- Add conditional checks to prevent calculations without input.
- Handle multiple operators correctly.

**Changes in JavaScript (app.js):**
```javascript
let currentInput = "";
let previousInput = "";
let operator = "";

function handleNumber(number) {
  currentInput += number;
  updateDisplay();
}

function handleOperator(op) {
  if (currentInput === "") return; // Prevent operator entry without a number
  if (previousInput !== "") {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
  updateDisplay();
}

function calculate() {
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);

  if (operator === "+") result = prev + current;
  if (operator === "-") result = prev - current;
  if (operator === "*") result = prev * current;
  if (operator === "/") {
    if (current === 0) {
      alert("Cannot divide by zero");
      return;
    }
    result = prev / current;
  }

  currentInput = result.toString();
  operator = "";
  previousInput = "";
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = currentInput || "0";
}

function clearCalculator() {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay();
}
```

### **Day 3: Arrays, Objects, and ES6 Features**

**Goal:** Use arrays to keep a history of calculations and improve the UI with an extra "History" button.

- Track the history of calculations and display it on the console.
- Use modern ES6 features like template literals and arrow functions.

**Changes in JavaScript (app.js):**
```javascript
let currentInput = "";
let previousInput = "";
let operator = "";
let history = [];

const handleNumber = (number) => {
  currentInput += number;
  updateDisplay();
};

const handleOperator = (op) => {
  if (currentInput === "") return;
  if (previousInput !== "") {
    calculate();
  }
  operator = op;
  previousInput = currentInput;
  currentInput = "";
  updateDisplay();
};

const calculate = () => {
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);

  if (operator === "+") result = prev + current;
  if (operator === "-") result = prev - current;
  if (operator === "*") result = prev * current;
  if (operator === "/") {
    if (current === 0) {
      alert("Cannot divide by zero");
      return;
    }
    result = prev / current;
  }

  history.push(`${previousInput} ${operator} ${currentInput} = ${result}`);
  console.log("History:", history); // Display history in the console

  currentInput = result.toString();
  operator = "";
  previousInput = "";
  updateDisplay();
};

const updateDisplay = () => {
  document.getElementById('display').innerText = currentInput || "0";
};

const clearCalculator = () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay();
};
```

### **Day 4: JavaScript Classes, Prototypes, Async JS**

**Goal:** Refactor the calculator into an object-oriented class-based structure.

**Changes in JavaScript (app.js):**
```javascript
class Calculator {
  constructor() {
    this.currentInput = "";
    this.previousInput = "";
    this.operator = "";
    this.history = [];
  }

  handleNumber(number) {
    this.currentInput += number;
    this.updateDisplay();
  }

  handleOperator(op) {
    if (this.currentInput === "") return;
    if (this.previousInput !== "") {
      this.calculate();
    }
    this.operator = op;
    this.previousInput = this.currentInput;
    this.currentInput = "";
    this.updateDisplay();
  }

  calculate() {
    let result;
    let prev = parseFloat(this.previousInput);
    let current = parseFloat(this.currentInput);

    if (this.operator === "+") result = prev + current;
    if (this.operator === "-") result = prev - current;
    if (this.operator === "*") result = prev * current;
    if (this.operator === "/") {
      if (current === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = prev / current;
    }

    this.history.push(`${this.previousInput} ${this.operator} ${this.currentInput} = ${result}`);
    console.log("History:", this.history); // Display history in the console

    this.currentInput = result.toString();
    this.operator = "";
    this.previousInput = "";
    this.updateDisplay();
  }

  updateDisplay() {
    document.getElementById('display').innerText = this.currentInput || "0";
  }

  clearCalculator() {
    this.currentInput = "";
    this.previousInput = "";
    this.operator = "";
    this.updateDisplay();
  }
}

const calculator = new Calculator();
```

### **Day 5: TypeScript Basics (Type Annotations)**

**Goal:** Convert the calculator to TypeScript and add type annotations.

```typescript
class Calculator {
  currentInput: string = "";
  previousInput: string = "";
  operator: string = "";
  history: string[] = [];

  handleNumber(number: string): void {
    this.currentInput += number;
    this.updateDisplay();
  }

  handleOperator(op: string): void {
    if (this.currentInput === "") return;
    if (this.previousInput !== "") {
      this.calculate();
    }
    this.operator = op;
    this.previousInput = this.currentInput;
    this.currentInput = "";
    this.updateDisplay();
  }

  calculate(): void {
    let result: number;
    let prev: number = parseFloat(this.previousInput);
    let current: number = parseFloat(this.currentInput);

    if (this.operator === "+") result = prev + current;
    if (this.operator === "-") result = prev - current;
    if (this.operator === "*") result = prev * current;
    if (this.operator === "/") {
      if (current === 0) {
        alert("Cannot divide by zero");
        return;
      }
      result = prev / current;
    }

    this.history.push(`${this.previousInput} ${this.operator} ${this.currentInput} = ${result}`);
    console.log("History:", this.history); // Display history in the console

    this.currentInput = result.toString();
    this.operator = "";
    this.previousInput = "";
    this.updateDisplay();
  }

  updateDisplay(): void {
    document.getElementById('display')!.innerText = this.currentInput || "0";
  }

  clearCalculator(): void {
    this.currentInput = "";
    this.previousInput = "";
    this.operator = "";
    this.updateDisplay();
  }
}
```

### **Day 6: TypeScript Interfaces, Enums, and Generics**

**Goal:** Use interfaces and enums to improve structure.

```typescript
interface Calculation {
  previousInput: string;
  operator: string;
  currentInput: string;
}

class Calculator {
  currentInput: string = "";
  previousInput: string = "";
  operator: string = "";
  history: Calculation[] = [];

  // Handle numbers, operators, and

 calculate as before...
}
```

---

This is a basic overview of how the calculator application evolves each day with added functionality and features, following your learning progression. The app starts with basic arithmetic operations and gradually introduces object-oriented design and TypeScript, enhancing both the functionality and maintainability of the code.
