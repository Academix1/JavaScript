### `Conditional Enhancements`

```js
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
```
  
  

