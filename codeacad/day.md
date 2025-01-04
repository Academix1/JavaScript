
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

