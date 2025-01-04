
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
### Day6

#### Objects

**Q1:** Write a code snippet to create an object called `book` with the following properties:
      
   - `title`: "JavaScript Fundamentals"
   - `author`: "John Doe"
   - `year`: 2022
   - `isAvailable`: true
     
   **A**
   
   ```javascript
         const book = {
           title: "JavaScript Fundamentals",
           author: "John Doe",
           year: 2022,
           isAvailable: true
         };
         console.log(book);
   ````
   
   **Q2:** Add a method getDiscountedPrice to the object product which returns a discounted price (10% off) for a given price. The object has properties:
   
   - name: 'Laptop'
   - price: 1000

     **A**

     ```js
           const product = { name: 'Laptop', price: 1000 };
         product.getDiscountedPrice = function() {
           return this.price - (this.price * 0.10);
         };
         console.log(product.getDiscountedPrice()); // 900

     ```
   
**Q3:** Create an object with a dynamic key color where the value of the key is "Red". Use a variable to store the key name.
   
   **A**
    
   ```js
       const key = 'color';
       const obj = {
         [key]: 'Red'
       };
       console.log(obj.color); // Red
   ```
  
**Q4:** Create an object student with the following properties:
   - name: 'Alice'
   - age: 20
   - address: a nested object with properties: street, city, and zipCode.
   
   **A**
   
   ```js
       const student = {
         name: 'Alice',
         age: 20,
         address: {
           street: '123 Main St',
           city: 'New York',
           zipCode: '10001'
         }
       };
       console.log(student);
   ```

**Q5:** Create a constructor function Person that accepts name, age, and city as parameters and returns an object with those properties.
   
   **A**
     
   ````js
     function Person(name, age, city) {
       this.name = name;
       this.age = age;
       this.city = city;
     }
     const person1 = new Person('John', 28, 'New York');
     console.log(person1);
   
   ````
---

#### Destructure of Objects
----

**Q1** Given the following object, destructure it to extract the make, model, and year properties:

   ```js
   const car = { make: 'Toyota', model: 'Corolla', year: 2020 };
   ```
   **A**
   ```js
   const { make, model, year } = car;
   console.log(make); 
   console.log(model); 
   console.log(year);  
  ```

**Q2** Given the following object, destructure it to extract the name, email, and phone properties from the nested contact object:
   ```js
      const user = { name: 'Alice', contact: { email: 'alice@example.com', phone: '123-456-7890' } };
   ```
  **A**
  ```js
   const { name, contact: { email, phone } } = user;
   console.log(name);  
   console.log(email);  
   console.log(phone);  
  ```

 **Q3** Given the following object, destructure it to extract firstName, lastName, and birthYear properties, and rename them as fname, lname, and birth:
   ```js
      const person = { firstName: 'Michael', lastName: 'Jordan', birthYear: 1963 };
   ```
   **A**
   
   ```js
   const { firstName: fname, lastName: lname, birthYear: birth } = person;
   console.log(fname);  
   console.log(lname);  
   console.log(birth);  
   ```
**Q4** Given the following array, destructure it to extract the first two elements:

   ```js
      const numbers = [10, 20, 30, 40];
   ```
   **A**
   
   ```js
   const [first, second] = numbers;
   console.log(first);  
   console.log(second); 
  ```

**Q5** Given the following object, destructure it to extract the username and email properties. If email does not exist, set it to 'default@example.com' ?
   
   ```js
      const user = { username: 'johndoe' };
   ```
   **A** 
   
   ```js
   const { username, email = 'default@example.com' } = user;
   console.log(username);
   console.log(email);
   ```

**Q6:** Given the following array of users, destructure it to extract the hobbies of the first and second users:

```js
const users = [
  { id: 1, name: 'John', hobbies: ['Reading', 'Cycling'] },
  { id: 2, name: 'Alice', hobbies: ['Painting', 'Running'] }
];
```

**A**

```js
   const [{ hobbies: johnHobbies }, { hobbies: aliceHobbies }] = users;
   console.log(johnHobbies[0]);  
   console.log(aliceHobbies[0]);
```
---
#### Maps
---

**Q1:** Create a Map called carInfo and add the following key-value pairs:
- make: 'Toyota'
- model: 'Corolla'
- year: 2020

```js
   const carInfo = new Map();
   carInfo.set('make', 'Toyota');
   carInfo.set('model', 'Corolla');
   carInfo.set('year', 2020);
   console.log(carInfo);
```
**Q2:** Given the following Map called carInfo, access and log the value for the key make:

```js
const carInfo = new Map([
  ['make', 'Toyota'],
  ['model', 'Corolla'],
  ['year', 2020]
]);
```
**A**
```js
console.log(carInfo.get('make'));
```

**Q3** Given the Map from the previous question, iterate over it and log the keys and values.

```js
const carInfo = new Map([
  ['make', 'Toyota'],
  ['model', 'Corolla'],
  ['year', 2020]
]);
```
**A**

```js
carInfo.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});
```

**Q4** Given the Map called carInfo, convert it to an object.
```js
const carInfo = new Map([
  ['make', 'Toyota'],
  ['model', 'Corolla'],
  ['year', 2020]
]);
```
**A**

```js
const carInfoObject = Object.fromEntries(carInfo);
console.log(carInfoObject);
```

**Q5** You are given an array of products, where each product has a `name` and `price`.  
- Write a function using the `map` method that adds a `discountedPrice` property to each product object. The discounted price should be 20% less than the original price.
```js
const products = [
  { name: 'Product A', price: 100 },
  { name: 'Product B', price: 200 },
  { name: 'Product C', price: 300 }
];
```

**A**

```js
const productsWithDiscount = products.map(product => {
  const discountedPrice = product.price * 0.8;
  return { ...product, discountedPrice };
});

console.log(productsWithDiscount);
```

**Q6:** You have an array of people objects, each containing firstName and lastName.
 - Write a function that extracts only the firstName from each person and returns a new array containing the first names.

```js
   const people = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Alice', lastName: 'Smith' },
  { firstName: 'Bob', lastName: 'Johnson' }
   ];
```

**A**

```js
const firstNames = people.map(person => person.firstName);
console.log(firstNames);
```

**Q7:** You have an array of books, and each book has a title.
- Write a function that uses map to convert the title of each book to uppercase.

 ```js
const books = [
  { title: 'The Great Gatsby' },
  { title: '1984' },
  { title: 'To Kill a Mockingbird' }
];
```
**A**

```js
const uppercaseTitles = books.map(book => {
  return { title: book.title.toUpperCase() };
});

console.log(uppercaseTitles);
```

**Q8:** Write a function that returns a new array where each product's name is appended with the category and price, in the format: "name (category): price"

```js
const products = [
  { name: 'Laptop', category: 'Electronics', price: 1000 },
  { name: 'Shoes', category: 'Footwear', price: 50 },
  { name: 'T-shirt', category: 'Clothing', price: 20 }
];
```
**A**
```js
const formattedProducts = products.map(product => {
  return `${product.name} (${product.category}): $${product.price}`;
});

console.log(formattedProducts);
```

**Q9:** Write a function that adds an ageGroup property to each user object. If their age is less than 18, the ageGroup should be "Minor". If their age is between 18 and 40, it should be "Adult", and if they are above 40, it should be "Senior".

```js
const users = [
  { name: 'John', age: 15 },
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 50 }
];
```
**A**

```js
const usersWithAgeGroup = users.map(user => {
  let ageGroup;
  if (user.age < 18) ageGroup = 'Minor';
  else if (user.age <= 40) ageGroup = 'Adult';
  else ageGroup = 'Senior';
  
  return { ...user, ageGroup };
});

console.log(usersWithAgeGroup);
```

**Q10:** Write a function using map that combines both firstName and lastName to create a new fullName property for each person. Return a new array of people with the fullName added

```js
const people = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Alice', lastName: 'Smith' },
  { firstName: 'Bob', lastName: 'Johnson' }
];
```
**A**

```js
const peopleWithFullName = people.map(person => {
  return { ...person, fullName: `${person.firstName} ${person.lastName}` };
});

console.log(peopleWithFullName);
```
