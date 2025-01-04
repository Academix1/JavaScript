
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
**Q6:** What would be the effect of pressing the Backspace key while entering an expression, and how can you implement this functionality?
**A**
```js
if (key === 'Backspace') {
  currentInput = currentInput.slice(0, -1);
  document.getElementById('display').innerText = currentInput || '0';
}
```
