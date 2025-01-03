### EventDriven-Calculator

```javascript
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const operator = button.textContent.trim();
    calculate(operator);
  });
});
```  
