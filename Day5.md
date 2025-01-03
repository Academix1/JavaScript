### Memory Feature With Objects

```javascript
  let history = [];

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

function updateHistory() {
  const historyDiv = document.getElementById('history');
  historyDiv.innerHTML = '';
  history.forEach(entry => {
    const p = document.createElement('p');
    p.textContent = `${entry.operation} = ${entry.result}`;
    historyDiv.appendChild(p);
  });
}
```
