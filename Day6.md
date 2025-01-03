### Arrow Functions and Destructure 
```js
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => b !== 0 ? a / b : "Error: Division by zero!";

function calculate({ num1, num2, operator }) {
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
  }

  history.push({ operation: `${num1} ${operator} ${num2}`, result });
  updateHistory();
  document.getElementById('result').innerText = `Result: ${result}`;
}
```
