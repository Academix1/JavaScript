### Assignment: Build a Functional Calculator with Keyboard and Mouse Support

**Objective**:  
The goal of this assignment is to build a functional calculator with a unified layout that supports both mouse clicks and keyboard inputs. Students will implement the calculator's logic, including arithmetic operations, keyboard event listeners, and dynamic updates of the display.

---

### **Assignment Details**

#### **Requirements**:
1. Create a calculator with a single container that holds both the display and buttons.
2. The calculator should support:
   - Basic arithmetic operations: addition (`+`), subtraction (`-`), multiplication (`*`), and division (`/`).
   - A decimal point for fractional numbers.
   - A clear button (`C`) to reset the display.
   - A backspace button (`←`) to remove the last character from the display.
   - An equals button (`=`) to calculate and display the result.
   - Keyboard support for number input, operators, backspace, and calculation (Enter or `=`).

3. The calculator should:
   - Update the display dynamically based on mouse clicks or keyboard presses.
   - Allow users to use both mouse interactions (clicking buttons) and keyboard inputs for the same functionality.
   - Use event listeners to capture keyboard events (`keydown`).
   - Handle invalid operations, such as dividing by zero, gracefully.

#### **Functional Requirements**:
1. **Input Handling**:
   - Numbers (`0-9`) should be appended to the display.
   - Operators (`+`, `-`, `*`, `/`) should be added to the display.
   - When the user clicks `=` or presses Enter, the expression should be evaluated and the result shown.
   - The `C` or Escape key should clear the display.
   - The Backspace key should remove the last character from the display.

2. **Display**:
   - The display should show the current input (numbers and operators) and update as input is given.
   - After pressing `=`, the result should appear in the display.

3. **Button Layout**:
   - The calculator should contain buttons for all digits (`0-9`), operators (`+`, `-`, `*`, `/`), decimal (`.`), clear (`C`), backspace (`←`), and equals (`=`).
   
#### **Deliverables**:
- Submit the JavaScript file (`script.js`), CSS file (`style.css`), and HTML file (`index.html`) for the calculator.
- Ensure the calculator is fully functional with both mouse and keyboard support.
- Provide error handling for invalid input and edge cases.

