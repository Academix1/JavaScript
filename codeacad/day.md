
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
**Q6:** What is the difference between if and switch statements in JavaScript?
**A**
The if statement is used to evaluate expressions and execute code based on conditions that return a Boolean value (true or false). It can handle complex conditions, including comparisons between different values. The switch statement, on the other hand, is used to evaluate a single expression and match it against different possible values or cases. It's useful when you have multiple potential conditions based on the same value, and it avoids the need for multiple if statements.

**Q7:** How do you handle multiple conditions in a single if statement?
**A**
```javascript
if (condition1 && condition2) {
  // Code to execute if both conditions are true
}
```
**Q8:** What does the else if statement allow you to do that a regular if statement cannot?
**A**
The else if statement allows you to evaluate multiple conditions in sequence. If the first if condition is false, the else if condition will be checked. This enables more than one condition to be tested and makes the code more readable when there are multiple related conditions to evaluate.

**Q9:** What will happen if you omit the break statement in a switch block?
**A**
If you omit the break statement in a switch block, the program will continue executing subsequent case blocks even if a match was found. This is known as "fall-through" behavior, where the code will run until it hits a break or the end of the switch statement.

**Q10:** What is the syntax of the ternary operator in conditional statements?

```js
condition ? valueIfTrue : valueIfFalse;
```
**Q11:** Write a code to check if the entered values are valid numbers using isNaN(). If either value is not a valid number, display an error message.

```js
if (isNaN(num1) || isNaN(num2)) {
  document.getElementById('result').innerText = "Error: Please enter valid numbers!";
}
```
**Q12:**Write a code to handle an invalid operator in the calculation and display "Invalid operator!" as the result.

```js
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
**Q6:** What would be the effect of pressing the Backspace key while entering an expression, and how can you implement this functionality?
**A**
```js
if (key === 'Backspace') {
  currentInput = currentInput.slice(0, -1);
  document.getElementById('display').innerText = currentInput || '0';
}
```
---
### **Day 4: Events**
---

 **Q1** How does the calculator update the display when a user clicks a button, and how does it handle appending values to the current input?

```javascript
  function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').innerText = currentInput;
  }
``` 


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

**Q5:** Use querySelector to select an element with a specific class name and change its background color.
**A:**
```js
const box = document.querySelector('.box');
box.style.backgroundColor = 'red';
```
**Q6** Write an event listener that listens for a click event on a button with the ID submitButton and logs "Button clicked!" to the console.
**A**
```js
document.querySelector('#submitButton').addEventListener('click', function() {
  console.log('Button clicked!');
});
```
**Q7:** Create an event listener for a keydown event that detects when the "Enter" key is pressed and displays an alert with the message "Enter key pressed!".
**A**
```js
window.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    alert('Enter key pressed!');
  }
});
```
**Q8:** Write an event listener that triggers on mouseover for an element with the class hoverElement and changes its background color to blue.
**A**
```js
document.querySelector('.hoverElement').addEventListener('mouseover', function() {
  this.style.backgroundColor = 'blue';
});
```
**Q9:** How do you reset the contents of a displayed element and clear a variable in JavaScript?
**A**
```js
currentInput = '';
document.getElementById('display').innerText = '0';
```
**Q10:** How do you evaluate a mathematical expression stored in a string and display the result in JavaScript?
**A**
```js
currentInput = eval(currentInput).toString();
document.getElementById('display').innerText = currentInput;
```
**Q11:**What is event delegation, and how can you use it to handle multiple button clicks with a single event listener?
**A**
```js
document.querySelector('.buttons').addEventListener('click', function(event) {
  const value = event.target.getAttribute('data-value');
  // Handle button click logic
});
```
**Q12:** How can you capture keyboard input and perform actions like appending digits or calculating results based on specific keys?
**A**
```js
    window.addEventListener('keydown', function(event) {
      const key = event.key;
      if ('0123456789'.includes(key)) {
        // Append key to display
      } else if (key === 'Enter') {
        // Calculate result
      }
    });
```
**Q13:** How would you apply BackSpace Logic and delete the last character from the input string in JavaScript?
**A**
```js
currentInput = currentInput.slice(0, -1);
document.getElementById('display').innerText = currentInput || '0';
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
**Q4:** How would you implement a feature that stores the user input before performing the calculation, allowing users to see their original input alongside the result?

**A**
```js
let originalInput = ''; // Store the original user input
function storeAndCalculate() {
  originalInput = currentInput; // Store the current user input
  const result = eval(currentInput); // Perform the calculation
  history.push({ operation: originalInput, result }); // Save the operation and result to history
  updateHistory(); // Update the history UI
  currentInput = ''; // Clear the input after calculation
}
```
**Q5:** How would you implement a "Reset" button that clears both the history and the current input?
**A**

```js
    function resetCalculator() {
      history = []; // Clear the history array
      currentInput = ''; // Clear the current input
      updateHistory(); // Update the history display to reflect the cleared history
      document.getElementById('display').innerText = '0'; // Reset the display to '0'
    }
```
**Q6:** How do you store a calculation history in an array?
**A**

```js
history.unshift({ expression: currentInput, result: result });
```

---
**Q7:** How do you retrieve and display the history of calculations?
**A**
```js
    history.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = `${item.expression} = ${item.result}`;
      historyList.appendChild(li);
    });
```
**Q8:** How would you toggle the visibility of the history section?
**A**
```js
historyContainer.style.display = historyContainer.style.display === 'none' ? 'block' : 'none';
```
**Q9:** How do you handle invalid calculations and display an error message?
**A**
```js
    try {
      const result = eval(currentInput).toString();
      document.getElementById('display').innerText = result;
    } catch (e) {
      document.getElementById('display').innerText = "Error";
      currentInput = '';
    }
```
**Q10:** How do you clear the history of calculations?
**A**
```js
history = [];
updateHistory();
```
---
