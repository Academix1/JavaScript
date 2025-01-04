
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
