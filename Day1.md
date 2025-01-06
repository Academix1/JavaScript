### `Basic Calculator using Operators`
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Calculator</title>
</head>
<body>
  <h1>Basic Calculator</h1>
  <input id="num1" type="number" placeholder="First number">
  <input id="num2" type="number" placeholder="Second number">
  <button onclick="calculate()">Add</button>
  <h2 id="result">Result: </h2>

  <script>
    function calculate() {
      const a = +document.getElementById('num1').value;
      const b = +document.getElementById('num2').value;
      document.getElementById('result').innerText = `Result: ${a + b}`;
    }
  </script>
</body>
</html>

```




### **Step 1: Explain the Concept**
This code creates a **Basic Calculator** that adds two numbers entered by the user.

#### Key Features:
1. **Input Fields**: Users can type two numbers.
2. **Button**: Triggers the calculation.
3. **Result Display**: Shows the sum of the two numbers.

---

### **Step 2: Break It Down, Line by Line**
#### **HTML Structure**
```html
<!DOCTYPE html>
<html lang="en">
```
- Declares the document type as HTML5.
- **Exercise**: Write `<!DOCTYPE html>` in a file. What happens if you omit it? (Hint: Browser compatibility issues.)

---

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Calculator</title>
</head>
```
- Sets metadata and the document title.
- **Exercise**: Change the `<title>` to something else and reload the page. What changes in the browser tab?

---

#### **Body Content**
```html
<h1>Basic Calculator</h1>
```
- Displays the title on the page.
- **Exercise**: Change `<h1>` to `<h2>`. What happens to the text size?

---

```html
<input id="num1" type="number" placeholder="First number">
```
- Creates a text box for the first number. The `type="number"` ensures only numeric input is allowed.
- **Exercise**: Replace `type="number"` with `type="text"`. Try typing text into the box. What changes?

---

```html
<input id="num2" type="number" placeholder="Second number">
```
- Same as above, but for the second number.
- **Exercise**: Add `required` to this field. What happens if you click the button without entering a value?

---

```html
<button onclick="calculate()">Add</button>
```
- Creates a button. When clicked, it triggers the `calculate()` function.
- **Exercise**: Change the button text to `Calculate Sum`. How does the page change?

---

#### **JavaScript Functionality**
```javascript
function calculate() {
```
- Defines a function named `calculate` that runs when the button is clicked.
- **Exercise**: Rename the function to `addNumbers`. Where else must you update this change?

---

```javascript
const a = +document.getElementById('num1').value;
```
- Grabs the value from the first input field (`num1`) and converts it to a number using the `+` operator.
- **Exercise**: Remove the `+`. What happens if you enter a number?

---

```javascript
const b = +document.getElementById('num2').value;
```
- Does the same as above but for the second input field.
- **Exercise**: Try entering non-numeric values in `num2` (e.g., "abc"). What happens?

---

```javascript
document.getElementById('result').innerText = `Result: ${a + b}`;
```
- Updates the content of the `<h2>` element with the sum of `a` and `b`.
- **Exercise**: Replace `` `Result: ${a + b}` `` with `"The sum is " + (a + b)`. Does it still work?

---

### **Step 3: Interactive Exercises**
1. **Exercise 1: Add More Operations**
   - Modify the code to include subtraction, multiplication, and division buttons.
   - **Hint**: Create additional functions like `subtract()`, `multiply()`, and `divide()`.

---

2. **Exercise 2: Error Handling**
   - If one or both fields are empty, display an error message.
   - **Hint**: Use an `if` condition to check if `a` or `b` is empty.

---

3. **Exercise 3: Style the Page**
   - Use CSS to style the calculator (e.g., center it, add a background color).
   - **Hint**: Add `<style>` tags inside `<head>`.

---

4. **Exercise 4: Display a History**
   - Show the previous calculations below the result.
   - **Hint**: Use an array to store results and a `<div>` to display them.

---

5. **Exercise 5: Add Input Validation**
   - Ensure only numbers are entered. Show an alert for invalid input.
   - **Hint**: Use `isNaN(a)` to check if `a` is not a number.

---



```
