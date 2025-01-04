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