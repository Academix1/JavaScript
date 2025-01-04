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