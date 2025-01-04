
### **Day 1: Operators**

**Q1:** Modify the calculator to subtract two numbers instead of adding them.  
**A:**  
```javascript
function calculate() {
  const a = +document.getElementById('num1').value;
  const b = +document.getElementById('num2').value;
  document.getElementById('result').innerText = `Result: ${a - b}`;
}
```

**Q2:** What happens if you input non-numeric values? How can you handle this case using Ternary Operator?  

**A:**  
```javascript
function calculate() {
  const a = +document.getElementById('num1').value;
  const b = +document.getElementById('num2').value;
  
  // Using ternary operator for validation
  isNaN(a) || isNaN(b) 
    ? document.getElementById('result').innerText = "Error: Enter valid numbers!" 
    : document.getElementById('result').innerText = `Result: ${a + b}`;
}
```

**Q3:** Create a function to multiply two numbers instead of adding them.  
**A:**  
```javascript
function multiply() {
  const a = +document.getElementById('num1').value;
  const b = +document.getElementById('num2').value;
  document.getElementById('result').innerText = `Result: ${a * b}`;
}
```

**Q4:** Create a function to divide two numbers. Handle division by zero.  
**A:**  
```javascript
function divide() {
  const a = +document.getElementById('num1').value;
  const b = +document.getElementById('num2').value;
  const result = b !== 0 ? a / b : "Error: Division by zero!";
  document.getElementById('result').innerText = `Result: ${result}`;
}
```

**Q5:** Add input validation to prevent empty fields using Ternary  Operator.  
**A:**  

```javascript
function calculate() {
  const a = document.getElementById('num1').value;
  const b = document.getElementById('num2').value;

  a === '' || b === '' 
    ? document.getElementById('result').innerText = "Error: Fields cannot be empty!" 
    : document.getElementById('result').innerText = `Result: ${+a + +b}`;
}

```
**Q6:** Modify the calculator to handle negative numbers, ensuring correct calculation for inputs like -5 + 3

**A:**  

````js
function calculate() {
  const a = +document.getElementById('num1').value;
  const b = +document.getElementById('num2').value;
  if (isNaN(a) || isNaN(b)) {
    document.getElementById('result').innerText = "Error: Enter valid numbers!";
    return;
  }
  document.getElementById('result').innerText = `Result: ${a + b}`;
}
````
**Q7:** What is the purpose of the isNaN() function in JavaScript, and when should it be used?

**A:**

The isNaN() function is used to check if a value is NaN (Not-a-Number). It returns true if the value is NaN and false otherwise.

It's commonly used for input validation when working with numeric values, especially in user inputs or operations that may result in invalid numbers (e.g., division by zero or invalid text inputs).

---

### **Day 2: Conditional Enhancements**

**Q1:** Add a button for modulo (`%`) operation in the calculator. Update the `switch` statement to handle it.  

**A:**  
```javascript
case '%':
  result = num1 % num2;
  break;
```

**Q2:** Update the calculator to display a message when division by zero occurs.  
**A:**  
```javascript
case '/':
  result = num2 !== 0 ? num1 / num2 : "Error: Division by zero!";
  break;
```

**Q3:** Create a reset function to clear all input fields and results.  
**A:**  
```javascript
function reset() {
  document.getElementById('num1').value = '';
  document.getElementById('num2').value = '';
  document.getElementById('result').innerText = "Result:";
}
```

**Q4:** Update the calculator to show a different error message for invalid operators.  
**A:**  
```javascript
case 'default':
  result = "Error: Invalid operator!";
  break;
```

**Q5:** Create a function to handle square root calculations for the first number.  
**A:**  
```javascript
function squareRoot() {
  const a = +document.getElementById('num1').value;
  const result = a >= 0 ? Math.sqrt(a) : "Error: Negative number!";
  document.getElementById('result').innerText = `Result: ${result}`;
}
```

---

### **Day 3: Functions**

**Q1:** Refactor the calculator to use separate functions for operations.  
**A:**  
```javascript
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
// Inside calculate:
result = add(num1, num2);
```

**Q2:** Add error handling for invalid mathematical expressions using `try-catch`.  
**A:**  
```javascript
function calculateResult() {
  try {
    const result = eval(currentInput);
    document.getElementById('display').innerText = result;
  } catch {
    document.getElementById('display').innerText = "Error";
  }
}
```

**Q3:** Add a new function to calculate the square of the first number.  
**A:**  
```javascript
function square(a) {
  return a * a;
}
```

**Q4:** Refactor the calculator to use one generic function (`operate`) for all operations.  
**A:**  
```javascript
function operate(a, b, operator) {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : "Error: Division by zero!";
    default: return "Invalid operator!";
  }
}
```
**Q5:** Write a JavaScript function calculateResult
- Evaluates the current mathematical expression inputted by the user and updates the display with the result.

- If the expression is invalid, display the word "Error" on the screen, and clear the current input.
```js
 function calculateResult() {
      try {
        currentInput = eval(currentInput).toString();
        document.getElementById('display').innerText = currentInput;
      } catch (e) {
        document.getElementById('display').innerText = "Error";
        currentInput = '';
      }
    }
```
---

### **Day 4: Events**

**Q1:** Replace all `onclick` attributes in the HTML with `addEventListener` in JavaScript.  
**A:**  
```javascript
document.getElementById('addButton').addEventListener('click', () => calculate('+'));
```

**Q2:** Add keyboard support to the calculator, allowing users to type numbers and operations on their keyboard.  
**A:**  
```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === '+') calculate('+');
});
```

**Q3:** Create an event listener for the "Enter" key to trigger the calculation.  
**A:**  
```javascript
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') calculate('+'); // Replace '+' with current operator
});
```

**Q4:** Highlight the current button being pressed using a temporary CSS class.  
**A:**  
```javascript
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mousedown', () => button.classList.add('active'));
  button.addEventListener('mouseup', () => button.classList.remove('active'));
});
```

---

### **Day 5: Memory Feature with Objects**

**Q1:** Implement a "Clear History" button to remove all saved calculations from the history.  
**A:**  
```javascript
function clearHistory() {
  history = [];
  updateHistory();
}
```

**Q2:** Add a feature that lets users click on a history entry to re-use the result in the calculator.  
**A:**  
```javascript
history.forEach(entry => {
  const p = document.createElement('p');
  p.textContent = `${entry.operation} = ${entry.result}`;
  p.onclick = () => calculate(entry.operator);
  historyDiv.appendChild(p);
});
```

**Q3:** Add a "Redo Last Calculation" button that reuses the last entry in the history.  
**A:**  
```javascript
function redoLast() {
  if (history.length === 0) return;
  const last = history[history.length - 1];
  calculate(last.operator);
}
```

**Q4:** Store the calculation history in `localStorage` and load it when the page is refreshed.  
**A:**  
```javascript
localStorage.setItem('history', JSON.stringify(history));
history = JSON.parse(localStorage.getItem('history') || '[]');
```

---

### **Day 6: Arrow Functions and Destructure**

**Q1:** Rewrite the operations using regular functions.  
**A:**  
```javascript
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
```

**Q2:** Modify `calculate` to accept arguments as an object and destructure.  
**A:**  
```javascript
function calculate({ num1, num2, operator }) {
  const result = operator === '+' ? num1 + num2 : num1 - num2;
  return result;
}
```

**Q3:** Write a function to calculate the factorial of a number using recursion.  
**A:**  
```javascript
const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));
```

**Q4:** Refactor the calculator to use object destructuring for history updates.  
**A:**  
```javascript
function updateHistory({ operation, result }) {
  history.push({ operation, result });
  const p = document.createElement('p');
  p.textContent = `${operation} = ${result}`;
  document.getElementById('history').appendChild(p);
}
```

